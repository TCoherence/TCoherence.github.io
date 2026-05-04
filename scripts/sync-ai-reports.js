'use strict';

/**
 * Pull oh-my-agent's daily/weekly reports into source/_posts/ai-reports/.
 *
 * Triggered as Hexo `after_init` filter so the synced files exist on disk
 * before Hexo's source loader scans source/_posts/. Per-file mtime is
 * compared against a watermark; only newer files are written. The watermark
 * is "since last successful deploy" — the sync writes a *pending* watermark,
 * and autoDeployAndGit.sh promotes it after `hexo deploy` succeeds.
 *
 * Each report belongs to a `group` (e.g. one date for deals, one ISO week
 * for podcast). Within a group, exactly one file is the `primary` (summary
 * / report / digest), and the rest are `secondaries` (per-source references
 * or per-episode breakdowns). Primaries get an "相关细分报告" footer; each
 * secondary gets a "返回主报告" header. Listing pages and the hub count
 * only see primaries — secondaries are reachable only by following these
 * internal links or by direct URL.
 *
 * Output is gitignored — source of truth stays in oh-my-agent dir.
 */

const fs = require('fs').promises;
const path = require('path');
const matter = require('gray-matter');

const REPORTS_ROOT = path.join(
  process.env.HOME || '',
  'oh-my-agent-docker-mount/.oh-my-agent/reports'
);
const STATE_DIR = path.join(hexo.base_dir, '.cache');
const WATERMARK_FILE = path.join(STATE_DIR, 'ai-reports-watermark.json');
const PENDING_FILE = path.join(STATE_DIR, 'ai-reports-pending.json');
const OUTPUT_ROOT = path.join(hexo.source_dir, '_posts/ai-reports');

// Hexo's preferred frontmatter format is `YYYY-MM-DD HH:mm:ss` — parsed
// with whatever `_config.yml timezone:` says, no offset suffix. Anchoring
// at noon avoids any DST/edge-of-day shift in display. ISO-with-offset
// like `2026-04-27T12:00:00+08:00` round-trips through Hexo's pipeline as
// the same instant in system-local time and renders one *day* off in the
// HTML <time> tag, so we deliberately stay TZ-naive here.
const DATE_TIME_SUFFIX = ' 12:00:00';

// Per-topic config. `parse(relpath)` returns {date, slug, title, bucket,
// isPrimary, group} or null if the path doesn't match an expected shape.
const TOPICS = {
  deals: {
    label: '折扣',
    sourceDirs: ['deals-scanner/daily'],
    parse(relpath) {
      const parts = relpath.split('/');
      const date = parts[0];
      if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return null;
      const filename = parts[parts.length - 1].replace(/\.md$/, '');
      const isReference = parts[1] === 'references';
      const slug = isReference
        ? `${date}-source-${filename}`
        : `${date}-${filename}`;
      const labelSuffix = isReference
        ? `Sources · ${humanize(filename)}`
        : humanize(filename);
      return {
        date,
        slug,
        title: `[折扣·${date}] ${labelSuffix}`,
        bucket: date,
        isPrimary: !isReference,
        group: `deals-${date}`,
      };
    },
  },

  papers: {
    label: '论文',
    sourceDirs: ['paper-digest/daily'],
    parse(relpath) {
      const m = relpath.match(/^(\d{4}-\d{2}-\d{2})\.md$/);
      if (!m) return null;
      const date = m[1];
      return {
        date,
        slug: date,
        title: `[论文·${date}]`,
        bucket: date,
        isPrimary: true,
        group: `papers-${date}`,
      };
    },
  },

  housing: {
    label: '房市',
    sourceDirs: ['seattle-metro-housing-watch/weekly'],
    parse(relpath) {
      const m = relpath.match(/^(\d{4}-\d{2}-\d{2})\.md$/);
      if (!m) return null;
      const date = m[1];
      return {
        date,
        slug: date,
        title: `[房市·${date}]`,
        bucket: date,
        isPrimary: true,
        group: `housing-${date}`,
      };
    },
  },

  podcast: {
    label: 'Podcast',
    sourceDirs: ['youtube-podcast-digest/weekly'],
    parse(relpath) {
      const parts = relpath.split('/');
      const bucket = parts[0];
      const date = bucketToDate(bucket);
      if (!date) return null;
      const isEpisode = parts[1] === '_episodes';
      const filename = parts[parts.length - 1].replace(/\.md$/, '');
      let labelSuffix;
      let slugBase;
      if (isEpisode) {
        const m = filename.match(/^(.+?)__([A-Za-z0-9_-]{6,})$/);
        if (m) {
          labelSuffix = `${humanize(m[1])} · ${m[2]}`;
          slugBase = `ep-${m[1]}-${m[2]}`;
        } else {
          labelSuffix = humanize(filename);
          slugBase = `ep-${filename}`;
        }
      } else {
        labelSuffix = humanize(filename);
        slugBase = filename;
      }
      const safeBucket = bucket.replace(/[^a-zA-Z0-9-]/g, '-');
      return {
        date,
        slug: `${safeBucket}-${slugBase}`,
        title: `[Podcast·${bucket}] ${labelSuffix}`,
        bucket,
        isPrimary: !isEpisode,
        group: `podcast-${bucket}`,
      };
    },
  },

  market: {
    label: '市场',
    sourceDirs: ['market-briefing/daily', 'market-briefing/weekly'],
    parse(relpath) {
      // daily bucket: "2026-04-07/<slot>.md".
      //   Primary slots = exec summaries (ai / finance / politics).
      //   Secondary slots = sub-domain detail (frontier_radar, macro_news,
      //   paper_layer, people_pool) — surfaced via the primaries' "相关
      //   细分报告" footer instead of cluttering the category listing.
      // weekly bucket: "2026-W18/cross-domain.md" — single, primary.
      const parts = relpath.split('/');
      const bucket = parts[0];
      const date = bucketToDate(bucket);
      if (!date) return null;
      const filename = parts[parts.length - 1].replace(/\.md$/, '');
      const safeBucket = bucket.replace(/[^a-zA-Z0-9-]/g, '-');
      const isDailyBucket = /^\d{4}-\d{2}-\d{2}$/.test(bucket);
      const DAILY_PRIMARY = new Set(['ai', 'finance', 'politics']);
      const isPrimary = isDailyBucket ? DAILY_PRIMARY.has(filename) : true;
      return {
        date,
        slug: `${safeBucket}-${filename}`,
        title: `[市场·${bucket}] ${humanize(filename)}`,
        bucket,
        isPrimary,
        group: `market-${bucket}`,
      };
    },
  },
};

// --- helpers --------------------------------------------------------------

function humanize(s) {
  return s
    .split(/[-_]+/)
    .filter(Boolean)
    .map((w) => {
      if (w.length <= 3 && w === w.toLowerCase()) return w.toUpperCase();
      return w.charAt(0).toUpperCase() + w.slice(1);
    })
    .join(' ');
}

function bucketToDate(bucket) {
  if (/^\d{4}-\d{2}-\d{2}$/.test(bucket)) return bucket;
  // ISO week format `YYYY-WNN`: anchor to Sunday (end of week) so the
  // post's "date" reflects when the report covers *through*, not when
  // the period started. e.g. 2026-W18 covers Apr 27–May 3 → date = May 3.
  let m = bucket.match(/^(\d{4})-W(\d{2})$/);
  if (m) return isoWeekToSundayDate(parseInt(m[1], 10), parseInt(m[2], 10));
  m = bucket.match(/(\d{4}-\d{2}-\d{2})/);
  if (m) return m[1];
  return null;
}

function isoWeekToSundayDate(year, week) {
  // ISO 8601: week 1 contains Jan 4. Compute the Monday of `week`, then
  // add 6 days to reach Sunday.
  const jan4 = new Date(Date.UTC(year, 0, 4));
  const jan4Day = (jan4.getUTCDay() + 6) % 7; // Mon=0..Sun=6
  const week1Monday = new Date(jan4);
  week1Monday.setUTCDate(jan4.getUTCDate() - jan4Day);
  const target = new Date(week1Monday);
  target.setUTCDate(week1Monday.getUTCDate() + (week - 1) * 7 + 6);
  return target.toISOString().slice(0, 10);
}

async function pathExists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function loadJSON(p, fallback) {
  try {
    return JSON.parse(await fs.readFile(p, 'utf8'));
  } catch {
    return fallback;
  }
}

async function* walkMd(dir) {
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walkMd(full);
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      yield full;
    }
  }
}

function permalinkFor(fi) {
  return `/reports/${fi.topicKey}/${fi.meta.slug}/`;
}

// Strip "[折扣·2026-04-21] " prefix when used as inline link text.
function shortTitle(fullTitle) {
  return fullTitle.replace(/^\[[^\]]+\]\s*/, '').trim();
}

// --- main sync ------------------------------------------------------------

async function syncReports() {
  if (!(await pathExists(REPORTS_ROOT))) {
    hexo.log.warn(
      `[ai-reports] reports dir not found: ${REPORTS_ROOT} (skipping sync)`
    );
    return;
  }

  await fs.mkdir(STATE_DIR, { recursive: true });
  await fs.mkdir(OUTPUT_ROOT, { recursive: true });

  const wm = await loadJSON(WATERMARK_FILE, { last_deployed_mtime: 0 });
  const cutoff = wm.last_deployed_mtime || 0;

  // Pass 1: walk all files, collect file infos (don't read content yet).
  const fileInfos = [];
  let unparseable = 0;
  for (const [topicKey, cfg] of Object.entries(TOPICS)) {
    for (const sub of cfg.sourceDirs) {
      const root = path.join(REPORTS_ROOT, sub);
      if (!(await pathExists(root))) continue;
      for await (const file of walkMd(root)) {
        const stat = await fs.stat(file);
        const relpath = path.relative(root, file);
        const meta = cfg.parse(relpath);
        if (!meta) {
          hexo.log.warn(
            `[ai-reports] skip unparseable: ${path.join(sub, relpath)}`
          );
          unparseable++;
          continue;
        }
        fileInfos.push({
          topicKey,
          cfg,
          sourceFile: file,
          relpath,
          mtime: stat.mtimeMs,
          meta,
        });
      }
    }
  }

  // Pass 2: build group index { groupKey -> { primary, secondaries[] } }.
  const groups = {};
  for (const fi of fileInfos) {
    const g = fi.meta.group;
    if (!groups[g]) groups[g] = { primary: null, secondaries: [] };
    if (fi.meta.isPrimary) {
      groups[g].primary = fi;
    } else {
      groups[g].secondaries.push(fi);
    }
  }

  // Pass 3: figure out which groups need (re)writing — any member changed.
  // We rewrite the whole group together to keep cross-links consistent.
  const groupsToWrite = new Set();
  let maxMtime = cutoff;
  for (const fi of fileInfos) {
    if (fi.mtime > maxMtime) maxMtime = fi.mtime;
    if (fi.mtime > cutoff) groupsToWrite.add(fi.meta.group);
  }

  // Pass 4: write files for marked groups, with cross-links injected.
  let synced = 0;
  let skipped = 0;
  for (const fi of fileInfos) {
    if (!groupsToWrite.has(fi.meta.group)) {
      skipped++;
      continue;
    }

    const raw = await fs.readFile(fi.sourceFile, 'utf8');
    const parsed = matter(raw);
    let content = parsed.content;

    const group = groups[fi.meta.group];

    // Inject "返回主报告" header on secondaries.
    if (!fi.meta.isPrimary && group.primary) {
      const link = `[${group.primary.meta.title}](${permalinkFor(group.primary)})`;
      content = `> ← 返回主报告：${link}\n\n${content}`;
    }

    // Inject "相关细分报告" footer on primaries with secondaries.
    if (fi.meta.isPrimary && group.secondaries.length > 0) {
      const links = group.secondaries
        .slice()
        .sort((a, b) => a.meta.slug.localeCompare(b.meta.slug))
        .map(
          (s) => `- [${shortTitle(s.meta.title)}](${permalinkFor(s)})`
        )
        .join('\n');
      content = `${content.replace(/\s+$/, '')}\n\n---\n\n## 相关细分报告\n\n${links}\n`;
    }

    const fm = {
      title: fi.meta.title,
      date: `${fi.meta.date}${DATE_TIME_SUFFIX}`,
      permalink: permalinkFor(fi),
      hidden: true,
    };
    if (fi.meta.isPrimary) {
      // Categories drive the hub count + category page listing. Secondaries
      // intentionally have NO categories so they vanish from those views.
      fm.categories = ['AI报告', fi.cfg.label];
    } else {
      fm.secondary = true;
    }

    const out = matter.stringify(content, fm);
    const outDir = path.join(OUTPUT_ROOT, fi.topicKey);
    await fs.mkdir(outDir, { recursive: true });
    await fs.writeFile(
      path.join(outDir, `${fi.meta.slug}.md`),
      out,
      'utf8'
    );
    synced++;
  }

  await fs.writeFile(
    PENDING_FILE,
    JSON.stringify({ last_deployed_mtime: maxMtime }, null, 2)
  );

  const groupCount = Object.keys(groups).length;
  hexo.log.info(
    `[ai-reports] sync: ${synced} written / ${skipped} unchanged / ${unparseable} unparseable; ` +
      `${groupCount} groups; pending watermark = ${new Date(maxMtime).toISOString()}`
  );
}

hexo.extend.filter.register('after_init', syncReports);
