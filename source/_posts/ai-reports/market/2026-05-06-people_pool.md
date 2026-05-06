---
title: '[市场·2026-05-06] People Pool'
date: '2026-05-06 12:00:00'
permalink: /reports/market/2026-05-06-people_pool/
hidden: true
secondary: true
---
> ← 返回主报告：[[市场·2026-05-06] Politics](/reports/market/2026-05-06-politics/)

# 关键人物与社区信号 — 2026-05-06

5/5-5/6 关键人物围绕 GPT-5.5 默认化与 Anthropic 金融 + 创意双向放大形成密集发声：Simon Willison 同步 Substack 把 GPT 5.5 / ChatGPT Images 2.0 / Qwen 3.6-27B 列为月度三主线；Andrej Karpathy 5/5 发布 'autoresearch' 单 GPU 单文件版 nanochat 训练核心 + 公开向 Simon Willison 23 年博客致敬；Sebastian Raschka × Nathan Lambert 在 Latent Space SAIL Live #6 跟进 Anthropic Distillation 与 SWE-Bench 失效议题。

## tracked 人物当日信号

- **Andrej Karpathy** — 5/5 把 'autoresearch' 项目打包成单 GPU + 单文件 ~630 行版本（nanochat 训练核心精简）发布；同日转发并向 Simon Willison 致敬其 23 年博客 + 推荐 GitHub 赞助。延续他持续推动 'small + readable + agent-friendly research codebase' 的方向。 ([autoresearch X 帖](https://x.com/karpathy/status/2030371219518931079) / [Simon Willison 致敬帖](https://x.com/karpathy/status/1933582359347278246))
- **Simon Willison** — 5/5-5/6 Substack 月报 [GPT 5.5, ChatGPT Images 2.0, Qwen3.6-27B](https://simonw.substack.com/p/gpt-55-chatgpt-images-20-qwen36-27b)，把月度三大主线对齐 frontier-lab × 多模态 × 中国开源；4/23 已先用 Codex backdoor + 自制 llm-openai-via-codex 插件预跑 GPT-5.5（[pelican 测试](https://simonwillison.net/2026/Apr/23/gpt-5-5/)）。当前覆盖速度最稳定的独立 LLM 评测员。
- **Sebastian Raschka** & **Nathan Lambert** — Latent Space SAIL Live #6（4 月底）展开 Anthropic Distillation 与 SWE-Bench 失效议题深度讨论，是 Lex Fridman #490 'State of AI 2026' 4.5h 长访谈后的延伸场。 ([Latent Space 实录](https://www.latent.space/p/paid-anthropic-distillation-and-how) / [Sebastian Raschka 跟进 blog](https://sebastianraschka.com/blog/2026/state-of-ai-interview.html) / [Nathan Lambert LinkedIn](https://www.linkedin.com/posts/natolambert_state-of-ai-in-2026-llms-coding-scaling-activity-7423503098180202496-nLPr))
- **Sam Altman** — 5/5 GPT-5.5 Instant 默认化作为本月最重要的 OpenAI 产品节点，维持低调发布姿态（产品由 OpenAI 官号发布）；同日庭审 Brockman 反驳 Musk 关于 OpenAI 创业历史叙述。 ([OpenAI 5/5 介绍](https://openai.com/index/gpt-5-5-instant/) / [CNBC 庭审](https://www.cnbc.com/2026/05/05/open-ai-altman-musk-trial-brockman-testimony.html))
- **Greg Brockman** — 5/5 庭审作证反驳 Musk 关于 OpenAI 起源的叙述，公开复盘 OpenAI 早期与 Tesla 的秘密合作项目，是 Musk vs OpenAI 诉讼链条上 OpenAI 侧首次系统性公开发声。 ([CNBC](https://www.cnbc.com/2026/05/05/open-ai-altman-musk-trial-brockman-testimony.html))

## 新候选人（达标 + 可验证 artifact）

1. **来新璐 (Lai Xinlu)** ｜ group: `oss-ai-builders`
   - 5/5 [十字路口播客技术访谈嘉宾](https://www.xiaoyuzhoufm.com/episode/69f2e83fbb3ffa11e59dec82)（"探秘 Claude Code，搞懂 Agent Harness"）；shareAI-lab GitHub 组织发起人，[learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) agent harness 反向工程教程 GitHub 50k+ Stars；一人公司刚完成数百万美金融资。中文 OSS Agent harness 工程化主线的代表声音，建议跟踪。

2. **Logan Kilpatrick** ｜ group: `ai-generalists`
   - Google AI Studio / Gemini API 产品 lead；Google I/O 2026（5/19-5/20）静默期内 Google 一线产品发声主要 spokesperson；多次出现于 4/30 / 5/6 daily 的 Google 产品声音里（Vibe Coding、Maps grounding、AI Studio 系列），但未在现有 seed pool 中。 ([Google blog 作者页](https://blog.google/authors/logan-kilpatrick/) / [X.com](https://x.com/OfficialLoganK) / [Agent Factory recap](https://cloud.google.com/blog/topics/developers-practitioners/agent-factory-recap-build-ai-apps-in-minutes-with-googles-logan-kilpatrick))

3. **Xuanhe Zhou (周煊赫)** ｜ group: `oss-ai-builders`
   - SJTU Assistant Professor + Shanghai AI Lab adjunct + Fourth Paradigm Technical Advisor；5/6 paper-digest Top picks 命中的 [Workspace-Bench 1.0](https://arxiv.org/abs/2605.03596)（arxiv 2605.03596）核心作者之一，benchmark 直接对位 Anthropic Microsoft 365 / OpenAI Workspace Agents / Google Workspace Intelligence 的企业 evaluator 侧。 ([个人主页](https://db.zhouxh.store/))

## 候选池变化总结

本日新增 3 名候选；三人均有 48h 内的可验证 artifact / 公开发声 / 论文落地。建议下一日继续跟踪 Lai Xinlu 是否在 X/Twitter 有英文圈联动，以及 Workspace-Bench 1.0 是否被 Anthropic / OpenAI / Microsoft 任一方采纳为评测面。

## 覆盖缺口

- Anthropic 内部团队（Boris Cherny / Amanda Askell / Alex Albert）5/5 公开 X/Twitter 发声未被检索到；个人帐号信号本日空缺。
- Jerry Liu / Harrison Chase / Ethan Mollick 5/5-5/6 X/Twitter 直接发声未在搜索面里出现。
