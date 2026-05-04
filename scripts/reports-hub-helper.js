'use strict';

/**
 * Hexo helpers for the AI 报告 landing hub at /reports/.
 *
 * - `reports_topics()`: returns the 5 topic cards with display data merged
 *   with runtime stats (count, latest date) computed from `site.posts`.
 * - `reports_latest()`: returns posts dated on the most-recent date that
 *   has any AI-report posts, used to render a "最新更新" quick-jump strip.
 *
 * Adding/renaming a topic: edit TOPICS below + the matching block in
 * scripts/sync-ai-reports.js. The two share the same `label` field as the
 * join key (`categories: [AI报告, <label>]` on each synced primary post).
 */

const TOPICS = [
  {
    key: 'deals',
    label: '折扣',
    icon: 'fa fa-tags',
    freq: 'daily',
    desc: '每天扫信用卡 / Rakuten / Slickdeals / Dealmoon 等渠道',
  },
  {
    key: 'papers',
    label: '论文',
    icon: 'fa fa-graduation-cap',
    freq: 'daily',
    desc: '每天精选 AI / 工程方向论文摘要',
  },
  {
    key: 'housing',
    label: '房市',
    icon: 'fa fa-home',
    freq: 'weekly',
    desc: '西雅图 metro 周度房市动态',
  },
  {
    key: 'podcast',
    label: 'Podcast',
    icon: 'fa fa-podcast',
    freq: 'weekly',
    desc: '关注的频道周度精选',
  },
  {
    key: 'market',
    label: '市场',
    icon: 'fa fa-chart-line',
    freq: 'daily + weekly',
    desc: 'AI / 财经 / 中美地缘政治',
  },
];

// Frontmatter dates are TZ-naive ("YYYY-MM-DD HH:mm:ss"); Hexo parses them
// in `_config.yml timezone:`. Mirror that TZ here so card "最新" labels and
// the "最新更新" strip's date both align with what the post listing pages
// show. Update both this constant and `_config.yml timezone:` together.
const DISPLAY_TZ = 'America/Los_Angeles';

function fmtDate(d) {
  if (!d) return null;
  if (d.tz) return d.tz(DISPLAY_TZ).format('YYYY-MM-DD');
  if (d.format) return d.format('YYYY-MM-DD');
  return new Date(d).toISOString().slice(0, 10);
}

hexo.extend.helper.register('reports_topics', function () {
  // hexo.model('Post') sees hidden posts; this.site.posts gets filtered by
  // hexo-hide-posts for some generators (which is why we go to the model).
  const Post = hexo.model('Post');
  const allPosts = Post.find({ published: true });
  return TOPICS.map((t) => {
    const matched = allPosts.filter((p) => {
      const cats = p.categories;
      if (!cats) return false;
      return cats.toArray().some((c) => c.name === t.label);
    });
    // Plain JS sort — Warehouse's `sort('-date')` doesn't reliably reorder
    // here, leaving "latest" as whatever was loaded first.
    const arr = matched.toArray();
    arr.sort((a, b) => {
      const ad = a.date ? +a.date : 0;
      const bd = b.date ? +b.date : 0;
      return bd - ad;
    });
    const latest = arr.length ? arr[0] : null;
    return Object.assign({}, t, {
      count: arr.length,
      latest_date: fmtDate(latest && latest.date),
      url: `/categories/AI%E6%8A%A5%E5%91%8A/${encodeURIComponent(t.label)}/`,
    });
  });
});

hexo.extend.helper.register('reports_latest', function () {
  const Post = hexo.model('Post');
  const allPosts = Post.find({ published: true });

  // All AI-report primaries (secondaries have no category).
  const arr = allPosts
    .filter((p) => {
      const cats = p.categories;
      if (!cats) return false;
      return cats.toArray().some((c) => c.name === 'AI报告');
    })
    .toArray();

  if (arr.length === 0) return { date: null, items: [] };

  arr.sort((a, b) => +b.date - +a.date);
  const latestDateStr = fmtDate(arr[0].date);
  const sameDay = arr.filter((p) => fmtDate(p.date) === latestDateStr);

  const topicByLabel = Object.fromEntries(
    TOPICS.map((t) => [t.label, t])
  );
  const topicOrder = Object.fromEntries(
    TOPICS.map((t, i) => [t.key, i])
  );

  const allItems = sameDay.map((p) => {
    const cats = p.categories ? p.categories.toArray() : [];
    const topicCat = cats.find((c) => topicByLabel[c.name]);
    const topic = topicCat ? topicByLabel[topicCat.name] : null;
    return {
      topic_key: topic ? topic.key : '',
      topic_label: topic ? topic.label : '',
      title: p.title,
      url: '/' + (p.path || '').replace(/^\/+/, ''),
    };
  });

  allItems.sort((a, b) => {
    const o =
      (topicOrder[a.topic_key] ?? 99) - (topicOrder[b.topic_key] ?? 99);
    return o !== 0 ? o : a.title.localeCompare(b.title);
  });

  // Show every primary on the latest day. Secondaries are excluded
  // upstream (no `AI报告` category on them), so e.g. market daily yields
  // exactly ai/finance/politics rather than the full 7 parallel files.
  return { date: latestDateStr, items: allItems };
});
