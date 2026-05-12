---
title: '[市场·2026-05-09] People Pool'
date: '2026-05-09 12:00:00'
permalink: /reports/market/2026-05-09-people_pool/
hidden: true
secondary: true
---
# People Pool｜2026-05-09

5 月 8-9 两日的人物层余波仍由 5/6 Anthropic Code w/ Claude 大会带动：Boris Cherny、Cat Wu、Ami Vora 持续输出"AI 写代码、人审计交付"的范式，并伴随 SpaceX Colossus 1 300MW 整租与 Claude Code 速率翻倍消化期。OpenAI 侧 Sam Altman / Greg Brockman 5/7-5/8 在 Musk v. Altman 庭审与 GPT-5.5-Cyber 限定预览之间双线作战。Simon Willison 在 5/8、5/9 连发两篇技术述评，分别引用 Anthropic 工程师 Thariq Shihipar 的 HTML over Markdown 主张以及前 Twitch/Discord WebRTC 工程师 Luke Curley 的 OpenAI 语音栈批评——构成本日两位非池内候选的主要发现路径；GitHub Trending 第二位则由独立开发者 Forrest Chang 的 andrej-karpathy-skills 仓库占据，作为补充候选。

## 跟踪人物动态

- **Boris Cherny**：在 Sequoia AI Ascent 2026 与 Lauren Reeder 对谈，自述 2026 年没写过一行代码、每天用手机 ship 数十个 PR，称编码"对他个人已被解决"，与 5/6 Code w/ Claude 上的 Routines 演示形成连续叙事 ([source](https://www.threads.com/@bruceqburke/post/DX7_V_4jGW6/boris-cherny-creator-of-claude-code-at-anthropic-joins-sequoia-partner-lauren))
- **Cat Wu**：5 月 6 日 Code w/ Claude 主舞台演讲 + 同期 Lenny's Newsletter 长文《Anthropic 产品团队为何动得更快》，把 Claude Code 三层 surface (CLI/IDE/Desktop) + Routines + 子代理路线整体交付社区 ([source](https://www.lennysnewsletter.com/p/how-anthropics-product-team-moves))
- **Ami Vora**：作为 Anthropic CPO 于 Code w/ Claude 公开宣布与 SpaceX 签约整租 Colossus 1 全部 300MW 算力，并披露平台 API 用量同比 17 倍；5/8 周转报道继续延伸到"Anthropic 反 Musk 起家、今天却成为他客户"的叙事 ([source](https://www.implicator.ai/anthropic-was-built-to-counter-musk-today-it-became-his-customer/))
- **Simon Willison**：5/8 发文《Using Claude Code: The Unreasonable Effectiveness of HTML》转向以 HTML 替代 Markdown 作为 LLM 输出格式；5/9 发文引用 Luke Curley 关于 WebRTC 不适合语音 AI 的技术评论，串联进 OpenAI Realtime API 讨论 ([source](https://simonwillison.net/2026/May/8/unreasonable-effectiveness-of-html/), [source](https://simonwillison.net/2026/May/9/luke-curley/))
- **Sam Altman**：OpenAI 5/7-5/8 推送 GPT-5.5-Cyber 限定预览给受信任安全团队，与 Anthropic Mythos 形成正面对位；同周还披露"内部目标 2026/9 自动化研究实习生、2028/3 真自动化研究员" ([source](https://www.cnbc.com/2026/05/07/openai-rolls-out-new-gpt-5point5-cyber-to-vetted-cybersecurity-teams.html))
- **Greg Brockman**：在 Musk v. Altman 庭审作证驳斥 Musk 早期叙事，对外披露 OpenAI 2026 年算力支出预计 500 亿美元，同时披露其 OpenAI 子公司股权约 300 亿美元 ([source](https://www.bloomberg.com/news/articles/2026-05-05/openai-to-spend-50-billion-on-computing-in-2026-brockman-says))
- **Logan Kilpatrick**：5/7 宣布 Google AI Studio 在印度组建 DevX 团队招聘工程师，称印度是 AI Studio 最大用户市场，为 5/19-20 Google I/O 蓄势 ([source](https://x.com/OfficialLoganK?lang=en))
- **Pushmeet Kohli**：在 India AI Impact Summit 2026 宣布 DeepMind 与印度高校 / 研究机构合作开放前沿能力，覆盖科学、教育、公共服务方向，并提供工程支持与基础设施 ([source](https://www.linkedin.com/in/pushmeet-kohli-4838994))
- **Andrej Karpathy**：Sequoia AI Ascent 2026 fireside 视频与 bearblog 摘要持续传播，强调"LLM 远不止加速既有流程"，并自陈 menugen 已被 Gemini Nanobanana 直接覆盖，强化 Software 3.0 论 ([source](https://karpathy.bearblog.dev/sequoia-ascent-2026/))
- **Matt Pocock**：mattpocock/skills 当周占据 GitHub Trending AI 类 #1（5.5 万 stars），把个人 .claude 目录开源化为 OSS 工程模板，含 TDD red-green-refactor、issue 拆分、PRD 生成三大 skill ([source](https://github.com/mattpocock/skills))

## 新候选人发现

- **Thariq Shihipar**（Anthropic Claude Code 工程师，X: @trq212）：发布并被 Simon Willison 5/8 专文引用的 HTML over Markdown 主张——让 Claude 输出 HTML 以承载 SVG 图、交互组件、规划文档；本人为 Claude Code "ask user question" 工具与 plan mode 的核心贡献者 ([source](https://simonwillison.net/2026/May/8/unreasonable-effectiveness-of-html/), [source](https://www.thariq.io/))
- **Luke Curley**（前 Twitch / Discord WebRTC 工程师，moq.dev 作者）：在 moq.dev 发文《OpenAI's WebRTC Problem》指出 WebRTC 为低延迟丢包设计与语音 AI 准确性诉求矛盾，建议改用 WebSockets，被 Simon Willison 5/9 博文引用进入主流讨论 ([source](https://moq.dev/blog/webrtc-is-the-problem/), [source](https://simonwillison.net/2026/May/9/luke-curley/))
- **Forrest Chang**（独立开发者，andrej-karpathy-skills 作者）：将 Karpathy 关于 LLM 编程陷阱的观察凝结为单一 CLAUDE.md，5 月持续在 GitHub Trending AI 类第 2 位，星标 117k+，已成为社区"Karpathy 风格 Claude Code 配置"的事实模版 ([source](https://github.com/forrestchang/andrej-karpathy-skills), [source](https://www.star-history.com/forrestchang/andrej-karpathy-skills/))

## 候选池摘要

本日发现 3 名达标候选：Thariq Shihipar（Anthropic Claude Code 工程师，被 Simon Willison 直接引用）、Luke Curley（WebRTC × 语音 AI，被 Simon Willison 直接引用）、Forrest Chang（社区 OSS 模版作者，GitHub Trending #2 持续）；前两位建议优先 promote。
