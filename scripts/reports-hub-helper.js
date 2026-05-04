'use strict';

/**
 * Hexo helper for the AI 报告 landing hub at /reports/.
 *
 * Returns an array of topic descriptors with statically-configured display
 * data (label/icon/freq/desc) merged with runtime stats (post count, latest
 * date) computed from `site.posts`. The reports.swig layout iterates this.
 *
 * Adding/renaming a topic: edit TOPICS below + the matching block in
 * scripts/sync-ai-reports.js. The two share the same `label` field as a
 * join key with `categories: [AI报告, <label>]` on each synced post.
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
    icon: 'fa fa-line-chart',
    freq: 'daily + weekly',
    desc: 'AI / 财经 / 中美地缘政治',
  },
];

hexo.extend.helper.register('reports_topics', function () {
  // hexo.model('Post') sees hidden posts; this.site.posts may have been
  // filtered by hexo-hide-posts already (depends on which generator is rendering).
  const Post = hexo.model('Post');
  const allPosts = Post.find({ published: true });
  return TOPICS.map((t) => {
    const posts = allPosts.filter((p) => {
      const cats = p.categories;
      if (!cats) return false;
      // categories on a post is an array of category IDs; resolve via Category model.
      const catNames = cats.toArray().map((c) => c.name);
      return catNames.includes(t.label);
    });
    const sorted = posts.sort('-date');
    const latest = sorted.length ? sorted.toArray()[0] : null;
    return Object.assign({}, t, {
      count: posts.length,
      latest_date: latest ? latest.date.format('YYYY-MM-DD') : null,
      url: `/categories/AI%E6%8A%A5%E5%91%8A/${encodeURIComponent(t.label)}/`,
    });
  });
});
