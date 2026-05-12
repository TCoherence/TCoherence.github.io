---
title: '[市场·2026-05-10] People Pool'
date: '2026-05-10 12:00:00'
permalink: /reports/market/2026-05-10-people_pool/
hidden: true
secondary: true
---
> ← 返回主报告：[[市场·2026-05-10] Politics](/reports/market/2026-05-10-politics/)

# 关键人物与社区信号｜2026-05-10

5/9-5/10 两日的人物层信号继续围绕 5/6 Anthropic Code w/ Claude 大会的余波展开：Simon Willison 的现场 live blog 仍是 tracked 池里覆盖最完整的产品述评源；Mira Murati / Thinking Machines Lab 借 Nvidia Nemotron Coalition 进入开源前沿模型阵营；Yang Zhilin 推动的 Moonshot Kimi K2.6 GA + Vendor Verifier 持续被列为对标 Opus 4.6 的开源旗舰。资本与渠道侧最大事件是 Anthropic 与 Blackstone / Hellman & Friedman / Goldman Sachs 5/4 共建约 $1.5B 企业 AI 服务合资公司，把 Claude 嵌入中型企业核心业务，由此识别出本日首位候选 Jon Gray。学术与 OSS 前沿则贡献两位新候选——HuggingFace Daily Papers 头名《Beyond Semantic Similarity》一作 Zhuofeng Li，以及登上 GitHub trending 的开源 agent 框架 Craft Agents OSS 作者 lukilabs。

## Tracked 人物当周信号

- **Simon Willison** — 5/6 全程 [live blog Anthropic Code w/ Claude 2026](https://simonwillison.net/2026/May/6/code-w-claude-2026/)，覆盖 Opus 4.7 与 autonomous engineering keynote；同期 [Heavybit 播客](https://www.heavybit.com/library/podcasts/high-leverage/ep-9-the-ai-coding-paradigm-shift-with-simon-willison) 谈 AI coding 范式转变。
- **Mira Murati** — Thinking Machines Lab 作为 [Nvidia Nemotron Coalition](https://nvidianews.nvidia.com/news/nvidia-launches-nemotron-coalition-of-leading-global-ai-labs-to-advance-open-frontier-models) 八家创始实验室之一，与 Mistral 共同主导联盟首个开源前沿基础模型项目（[Tom's Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/nvidias-nemoclaw-coalition-brings-eight-ai-labs-together-to-build-open-frontier-models)）。
- **Alexandr Wang** — Meta 侧持续被引用为'数据基础设施→超大规模厂商'流动样本，本周 Anthropic/Meta 算力对比报道中以其为锚点（[Fortune 5/8](https://fortune.com/2026/05/08/anthropic-80fold-growth-quarter-renting-elon-musk-data-center/)）。
- **Yang Zhilin（杨植麟）** — Moonshot 4/20 GA [Kimi K2.6](https://huggingface.co/moonshotai/Kimi-K2.6) 并配套开源 Kimi Vendor Verifier；本周 [latent.space 综述](https://www.latent.space/p/ainews-moonshot-kimi-k26-the-worlds) 将 K2.6 定位为对标 Opus 4.6 的开源权重旗舰。
- **Dhanji Prasanna** — [Block Goose](https://github.com/block/goose) 与 MCP 生态在 Code w/ Claude 周边持续作为 agent 基础设施样本被引用。
- **Karol Hausman** — Physical Intelligence π0.7 持续被 [O'Reilly Radar Trends May 2026](https://www.oreilly.com/radar/radar-trends-to-watch-may-2026/) 列为机器人基座模型代表条目（[TechCrunch 原报道](https://techcrunch.com/2026/04/16/physical-intelligence-a-hot-robotics-startup-says-its-new-robot-brain-can-figure-out-tasks-it-was-never-taught/)）。
- **Sam Altman** — GPT-5.5 与 GPT Images 2 在 5 月初进入产品节奏，多家月度回顾将 OpenAI 5 月发布与 Anthropic / Moonshot 并列（[llm-stats](https://llm-stats.com/llm-updates)、[Oracle AI 5 月综述](https://blogs.oracle.com/ai-and-datascience/whats-new-in-ai-may-2026)）。

## 候选池新增（discovery sweep）

- **Jon Gray**（group: ai-generalists） — Blackstone 总裁兼 COO，5/4 代表 Blackstone 主导 Anthropic + Hellman & Friedman + Goldman Sachs 约 $1.5B 规模的企业 AI 服务合资公司发起，是把 Claude 嵌入中型企业核心业务的资本与渠道枢纽，标志 AI 部署从云厂商主导向'PE+模型厂商'分销模式扩张。证据：[Blackstone 官方公告](https://www.blackstone.com/news/press/anthropic-partners-with-blackstone-hellman-friedman-and-goldman-sachs-to-launch-enterprise-ai-services-firm/)、[CNBC 5/4](https://www.cnbc.com/2026/05/04/anthropic-goldman-blackstone-ai-venture.html)、[Fortune 5/4](https://fortune.com/2026/05/04/anthropic-claude-consulting-industry-joint-venture-blackstone-goldman-sachs/)。
- **Zhuofeng Li**（group: oss-ai-builders） — TIGER-Lab（University of Waterloo）研究员，本周 HuggingFace Daily Papers 排名第一的《Beyond Semantic Similarity: Rethinking Retrieval for Agentic Search via Direct Corpus Interaction》一作，提出 agent 直接与 corpus 交互替代传统语义相似检索，是 agentic retrieval 范式代表性新工作。证据：[HuggingFace Daily Papers 当前榜单](https://huggingface.co/papers)。
- **Lukilabs (Craft Agents OSS maintainer)**（group: oss-ai-builders） — 5/2 发布 Apache 2.0 许可的开源 agent 框架 Craft Agents OSS，数日内登上 GitHub trending；与 Block Goose、LangChain agent 等同类 OSS 共同丰富了 Anthropic 大会之外的独立 agent 生态信号。证据：[AIToolly 5/2 报道](https://aitoolly.com/ai-news/article/2026-05-02-craft-agents-oss-lukilabs-launches-new-open-source-agent-framework-under-apache-20-license)、[AIToolly 4/19 首发](https://aitoolly.com/ai-news/article/2026-04-19-craft-agents-oss-lukilabs-releases-new-open-source-framework-for-ai-agent-development)。

## 候选池小结

本日新增 3 名候选人——Jon Gray 代表企业 AI 分销资本侧，Zhuofeng Li 代表 agentic retrieval 学术前沿，Lukilabs 代表 OSS agent 框架长尾，三者覆盖'渠道-论文-工具'三个相互正交的信号面。无人达到立即 promote 门槛，下周观察其后续证据再决定。
