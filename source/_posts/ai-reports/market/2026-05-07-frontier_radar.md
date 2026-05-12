---
title: '[市场·2026-05-07] Frontier Radar'
date: '2026-05-07 12:00:00'
permalink: /reports/market/2026-05-07-frontier_radar/
hidden: true
secondary: true
---
> ← 返回主报告：[[市场·2026-05-07] Politics](/reports/market/2026-05-07-politics/)

# Frontier Labs / Frontier Model Radar — 2026-05-07

## 总览

5/6 是当周前沿信号最密的一天：Anthropic 在旧金山 Code w/ Claude SF 同时发布 Claude Opus 4.7 GA、Code Review、Claude Code Web/Desktop、Routines 与 Managed Agents 三件升级（multi-agent orchestration / Outcomes / Dreaming），并宣布与 SpaceX 接管 Colossus 1（300MW+ / 220K NVIDIA GPU）的算力大单，整套堆栈一次性升级；OpenAI 5/5 把 GPT-5.5 Instant 推为 ChatGPT 默认，5/6 配套发布"B2B Signals"企业用量报告，并把 GPT-5.5 / Codex / Bedrock Managed Agents 上线 AWS Bedrock；DeepSeek 5/6 据 FT/Bloomberg 进入由"中国大基金"领投、Tencent + Alibaba 跟投的 $45B 估值首轮融资谈判；Meta 5/5 同步被 Elsevier 等五家出版巨头集体起诉 Llama 训练版权；Google Gemini 3.2 Flash 5/5 在 iOS App / AI Studio 漏出（$0.25/$2.00 per 1M tokens），剑指 I/O 2026；Mistral Medium 3.5 + Vibe Remote Agents 继续作为开源旗舰存量主线；xAI 通过 Colossus 1 间接出现在 Anthropic 这一交易里；Qwen 5 月暂未释放新的旗舰增量。

## OpenAI

- **GPT-5.5 Instant 5/5 上线为 ChatGPT 默认模型**：替换 GPT-5.3 Instant，在医、法、金融高敏感场景内部评测幻觉率下降 52.5%，旧用户标记错误对话上幻觉再降 37.3%；Plus / Pro 用户开启跨历史对话、上传文件与 Gmail 的"记忆源"上下文，老 GPT-5.3 Instant 保留三个月过渡（[TechCrunch](https://techcrunch.com/2026/05/05/openai-releases-gpt-5-5-instant-a-new-default-model-for-chatgpt/) / [OpenAI](https://openai.com/index/gpt-5-5-instant/)）。
- **B2B Signals 5/6 发布**：用 OpenAI 用量数据定义"前沿企业"——95 分位企业每员工 intelligence 用量是普通企业的 3.5 倍（一年前 2 倍），其中 Codex agentic 用量差距高达 16 倍，message volume 只能解释 36% 的差距，其余来自"深度 + 委托"工作流（[OpenAI](https://openai.com/index/introducing-b2b-signals/)）。
- **OpenAI 模型登陆 AWS Bedrock（Limited preview，5/4）**：GPT-5.5 / GPT-5.4 + Codex on AWS + Bedrock Managed Agents Powered by OpenAI 同步上架（[AWS Blog](https://aws.amazon.com/blogs/aws/aws-weekly-roundup-whats-next-with-aws-2026-amazon-quick-openai-partnership-and-more-may-4-2026/)）。
- **Musk vs OpenAI Day 6（5/6）**：Greg Brockman 二度作证，回应 Musk 关于 Tesla 秘密项目、$30B 控股结构的盘问；前 CTO Mira Murati 同日作证称 Altman "sowed chaos" 与高管层互信流失——OpenAI 治理叙事压力继续放大（[CNBC](https://www.cnbc.com/2026/05/05/open-ai-altman-musk-trial-brockman-testimony.html) / [US News](https://www.usnews.com/news/top-news/articles/2026-05-06/in-openai-trial-former-technology-chief-says-altman-sowed-chaos-distrust-among-top-executives) / [TechCrunch](https://techcrunch.com/2026/05/04/elon-musk-sent-ominous-texts-to-greg-brockman-sam-altman-after-asking-for-a-settlement-openai-claims/)）。

## Anthropic

- **Code w/ Claude SF 5/6 主旨发布堆栈**：Claude Opus 4.7 GA（视觉与软件工程显著增强）、Code Review GA（Anthropic 内部全员使用，PR 多 agent 并行评审）、Claude Code Web 与 Claude Code Desktop GA、Routines（高阶 schedule / GitHub event / API 触发 async agent）、Managed Agents 三件套（multi-agent orchestration、Outcomes 目标驱动迭代、Dreaming 自我反思 research preview）；API 用量 YoY 17×，Claude Code 5 小时配额翻倍，Pro/Max 取消峰时降级，Opus API limits 上调（[Simon Willison live blog](https://simonwillison.net/2026/May/6/code-w-claude-2026/) / [Anthropic news](https://www.anthropic.com/news/higher-limits-spacex) / [Claude Code Review](https://claude.com/blog/code-review)）。
- **SpaceX Colossus 1 算力大单（5/6）**：Anthropic 接管 Memphis Colossus 1 全部 300MW+ 容量（220K+ NVIDIA H100/H200/GB200 GPU），新增容量"在月内"上线，并表态愿与 SpaceX 共同开发数 GW 级"轨道 AI 算力"（[Anthropic](https://www.anthropic.com/news/higher-limits-spacex) / [CNBC](https://www.cnbc.com/2026/05/06/anthropic-spacex-data-center-capacity.html) / [SiliconANGLE](https://siliconangle.com/2026/05/06/anthropic-use-spacexs-colossus-1-supercomputer-inference/) / [DCD](https://www.datacenterdynamics.com/en/news/anthropic-to-use-all-of-spacex-xais-colossus-1-data-center-compute/)）。
- **Wall Street 全栈进攻（5/5）**：Jamie Dimon 站台，Anthropic 推 10 个 Claude Cowork / Code 财服 agent 模板（pitchbook、KYC、月结），Microsoft 365 全家桶 GA（Excel/PPT/Word + Outlook beta），Moody's 把 600M+ 公司信用 / 风险数据库内嵌为 Claude 原生 app；与 Pentagon 5/1 把 Anthropic 排除形成 B2B 主战场切换（[Anthropic](https://www.anthropic.com/news/finance-agents) / [Fortune](https://fortune.com/2026/05/05/anthropic-wall-street-financial-services-agents-jamie-dimon/) / [Axios](https://www.axios.com/2026/05/05/anthropic-wall-street-dimon-amodei)）。

## Google DeepMind

- **Gemini 3.2 Flash 5/5 在 iOS app + AI Studio 漏出**：定价 $0.25 / $2.00 per 1M tokens，性能逼近 3.1 Pro，路线指向 I/O 2026 正式发布（[pasqualepillitteri](https://pasqualepillitteri.it/en/news/2013/gemini-3-2-flash-leak-ios-ai-studio-2026-en)）。
- **Gemini in Google Sheets 5/6 起全量推送**：Workspace Updates 公告，SpreadsheetBench 自主率 70.48%（[Workspace Updates](https://workspaceupdates.googleblog.com/2026/04/build-and-edit-complex-spreadsheets-with-Gemini-in-Google-Sheets.html)）。

## Meta

- **5/5 五家出版巨头集体起诉 Llama 版权**：Elsevier、Cengage、Hachette、Macmillan、McGraw Hill + 作家 Scott Turow 在曼哈顿联邦法院发起拟集体诉讼，指控 Meta 通过盗版站点抓取数百万本书与论文训练 Llama，"Zuckerberg 亲自批准"——这是 2025/6 Chhabria 法官驳回 Kadrey 案后第一次以"市场损害"为核心论点的 second-wave 诉讼（[TheNextWeb](https://thenextweb.com/news/publishers-meta-llama-copyright-class-action-2026) / [Resultsense](https://www.resultsense.com/news/2026-05-06-publishers-sue-meta-llama-copyright/)）。
- 当日无 Llama 模型增量发布。

## xAI

- 通过 SpaceX 与 Anthropic 的 Colossus 1 算力交易间接出现：xAI 与 Anthropic 同样签订配套算力合作公告（[xAI 公告](https://x.ai/news/anthropic-compute-partnership)）。
- 当日无产品端独立增量发布；前期 grok-voice-think-fast-1.0、SuperGrok Heavy、Grok Speech APIs 已落地（4 月底至 5 月初公告，参考 [xAI Release Notes](https://docs.x.ai/developers/release-notes)）。

## Mistral

- **5/2 Mistral Medium 3.5 公测 + Vibe Remote Agents（存量主线）**：Medium 3.5 是首个 dense 128B 旗舰，256K 上下文，SWE-Bench Verified 77.6%（高于 Devstral 2 / Qwen3.5 397B 自身报告），同时作为 Le Chat 与 Vibe 的默认模型；Vibe Remote Agents 把异步、并行的云端编码会话带到 GitHub / Jira / Slack / Microsoft Teams 工作流，Le Chat 的 Work Mode 同步运行多步骤 agent（[Mistral](https://mistral.ai/news/vibe-remote-agents-mistral-medium-3-5) / [MarkTechPost](https://www.marktechpost.com/2026/05/02/mistral-ai-launches-remote-agents-in-vibe-and-mistral-medium-3-5-with-77-6-swe-bench-verified-score/)）。今日无新增官方信号。

## Qwen

- 5 月暂无新旗舰发布。当周仍处于 4 月 Qwen3.6-27B（4/22）、Qwen3.6-35B-A3B（4/16）、Qwen3.6-Max-Preview（4/17）、Qwen3.5-Omni / Qwen3.6-Plus（4 月）的存量复盘窗口（[MarkTechPost / Qwen Studio](https://qwen.ai/blog?id=qwen3.6-max-preview)）。`no high-confidence incremental signal`，今日仅作为存量比较基线。

## DeepSeek

- **5/6 据 FT 报道首轮 VC 谈判，估值由 $20B 跃升 $45B**：领投方为"国家集成电路产业投资基金"（中国大基金），Tencent / Alibaba 在协商加入；融资动机是"防止研究员被对手挖角"，主要付薪资 + 员工股份；DeepSeek 已被优化适配 Huawei / Cambricon（[Bloomberg](https://www.bloomberg.com/news/articles/2026-05-06/china-chip-fund-in-talks-to-lead-mega-deepseek-funding-ft-says) / [TechCrunch](https://techcrunch.com/2026/05/06/deepseek-could-hit-45b-valuation-from-its-first-investment-round/) / [TechNode](https://technode.com/2026/05/07/deepseek-reportedly-seeks-first-funding-round-at-45-billion-valuation/)）。
- 模型侧无新发布，V4 仍为当前主线。

## 未确认 / Watchlist

- **Anthropic "orbital AI compute"**：与 SpaceX 多 GW 级在轨数据中心讨论——5/6 Anthropic 公告与 Inc. 报道明确"interest in partnering"，尚无具体合同与时间表（[Anthropic](https://www.anthropic.com/news/higher-limits-spacex) / [Inc.](https://www.inc.com/ben-sherry/anthropic-and-spacex-just-announced-a-colossal-deal-to-supercharge-claude-ai/91341165)）。
- **DeepSeek $45B 估值** 仍属 FT/Bloomberg 单线 + Reuters 转引，三方未官宣。
- **Gemini 3.2 Flash 漏出价格 / I/O 上线时点** 未有 Google 官方确认，处于 leak 层。
- **Anthropic Dreaming 自我反思 research preview** 仅限主题演讲展示，未见独立基准或公开 paper。
