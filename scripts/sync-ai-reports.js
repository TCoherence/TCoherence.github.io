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

// Per-topic config. `parse(relpath)` returns {date, slug, title, bucket,
// isPrimary, group} or null if the path doesn't match an expected shape.
//
// `isPrimary` distinguishes summary-style files (shown on listing pages)
// from detail files like deals/<date>/references/* and podcast/<bucket>/
// _episodes/* (hidden from listings, only reachable from the primary's
// auto-injected "相关报告" footer).
//
// `group` is a stable key tying primaries to their secondaries within the
// same date/bucket so the footer-injection pass can find siblings.
const TOPICS = {
  deals: {
    label: '折扣',
    sourceDirs: ['deals-scanner/daily'],
    parse(relpath) {
      // "2026-04-21/summary.md" or "2026-04-21/references/credit-cards.md"
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
      // "2026-05-03.md" — single file/day, always primary.
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
      // "2026-04-19.md" — single file/week, always primary.
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
      // "2026-W18/report.md" or "2026-W18/_episodes/<ep>.md"
      // or "catchup-14d-2026-04-17/..." (date-style bucket).
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
      // daily: "2026-04-07/ai.md" (3 sibling files, all primary, cross-link)
      // weekly: "2026-W18/cross-domain.md" (single, primary)
      const parts = relpath.split('/');
      const bucket = parts[0];
      const date = bucketToDate(bucket);
      if (!date) return null;
      const filename = parts[parts.length - 1].replace(/\.md$/, '');
      const safeBucket = bucket.replace(/[^a-zA-Z0-9-]/g, '-');
      return {
        date,
        slug: `${safeBucket}-${filename}`,
        title: `[市场·${bucket}] ${humanize(filename)}`,
        bucket,
        isPrimary: true,
        group: `market-${bucket}`,
      };
    },
  },
};

// --- helpers --------------------------------------------------------------

function humanize(s) {
  // 'credit-cards' -> 'Credit Cards'; 'ai' -> 'AI'; 'cross-domain' -> 'Cross Domain'
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
  let m = bucket.match(/^(\d{4})-W(\d{2})$/);
  if (m) return isoWeekToMondayDate(parseInt(m[1], 10), parseInt(m[2], 10));
  // catchup-14d-2026-04-17 → use embedded date
  m = bucket.match(/(\d{4}-\d{2}-\d{2})/);
  if (m) return m[1];
  return null;
}

function isoWeekToMondayDate(year, week) {
  // ISO 8601: week 1 contains the year's first Thursday.
  const jan4 = new Date(Date.UTC(year, 0, 4));
  const jan4Day = (jan4.getUTCDay() + 6) % 7; // Mon=0..Sun=6
  const week1Monday = new Date(jan4);
  week1Monday.setUTCDate(jan4.getUTCDate() - jan4Day);
  const target = new Date(week1Monday);
  target.setUTCDate(week1Monday.getUTCDate() + (week - 1) * 7);
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

  let synced = 0;
  let skipped = 0;
  let unparseable = 0;
  let maxMtime = cutoff;

  for (const [topicKey, cfg] of Object.entries(TOPICS)) {
    for (const sub of cfg.sourceDirs) {
      const root = path.join(REPORTS_ROOT, sub);
      if (!(await pathExists(root))) continue;

      for await (const file of walkMd(root)) {
        const stat = await fs.stat(file);
        const mtime = stat.mtimeMs;
        const relpath = path.relative(root, file);
        const meta = cfg.parse(relpath);
        if (!meta) {
          hexo.log.warn(
            `[ai-reports] skip unparseable: ${path.join(sub, relpath)}`
          );
          unparseable++;
          continue;
        }
        if (mtime > maxMtime) maxMtime = mtime;
        if (mtime <= cutoff) {
          skipped++;
          continue;
        }

        const raw = await fs.readFile(file, 'utf8');
        // Strip any pre-existing frontmatter (defensive — agent reports
        // shouldn't have any, but if they grow one we want to overwrite).
        const parsed = matter(raw);

        const fm = {
          title: meta.title,
          date: meta.date,
          permalink: `/reports/${topicKey}/${meta.slug}/`,
          categories: ['AI报告', cfg.label],
          // No `tags`: hide_posts excludes hidden posts from /tags/ pages
          // but not from `site.tags`, so any tag on a hidden post pollutes
          // the tag cloud. Categories navigate fine without them.
          hidden: true,
        };

        const out = matter.stringify(parsed.content, fm);
        const outDir = path.join(OUTPUT_ROOT, topicKey);
        await fs.mkdir(outDir, { recursive: true });
        await fs.writeFile(
          path.join(outDir, `${meta.slug}.md`),
          out,
          'utf8'
        );
        synced++;
      }
    }
  }

  await fs.writeFile(
    PENDING_FILE,
    JSON.stringify({ last_deployed_mtime: maxMtime }, null, 2)
  );

  hexo.log.info(
    `[ai-reports] sync complete: ${synced} written, ${skipped} unchanged, ${unparseable} unparseable; pending watermark = ${new Date(maxMtime).toISOString()}`
  );
}

hexo.extend.filter.register('after_init', syncReports);
