---
title: '[市场·2026-05-10] Frontier Radar'
date: '2026-05-10 12:00:00'
permalink: /reports/market/2026-05-10-frontier_radar/
hidden: true
secondary: true
---
> ← 返回主报告：[[市场·2026-05-10] Politics](/reports/market/2026-05-10-politics/)

# Frontier Radar｜2026-05-10

5/9–5/10 的 frontier 信号集中在两条主线：一是 Anthropic 抛出 Claude Mythos Preview + Project Glasswing，把"自动化高严重度漏洞挖掘"作为下一代旗舰模型的核心卖点，并附带未授权访问的安全风波；二是 OpenAI 在 5/7–5/9 持续推送 ChatGPT 个性化（Memory）+ Trusted Contact 安全功能落地。Google DeepMind 这两天延续 Workspace Intelligence/Deep Research Max 的渐进推送，xAI 处于 Grok 4.3 发布后的余波，Meta、Mistral、Qwen、DeepSeek 在 48 小时窗口内未见新一线发布，主要保持在前周期模型（Llama 4、Mistral Medium 3.5、Qwen3.6、DeepSeek-V4 Preview）的扩散与生态推进。

## OpenAI
- ChatGPT 推出 Trusted Contact 安全功能：对成年人开放，开启后当系统检测到"严重自伤倾向"会通知用户预设的可信联系人；不向 Business/Enterprise/Edu 工作区开放（[TechCrunch](https://techcrunch.com/2026/05/07/openai-introduces-new-trusted-contact-safeguard-for-cases-of-possible-self-harm/)、[gHacks](https://www.ghacks.net/2026/05/08/openai-adds-trusted-contact-safety-feature-to-chatgpt-for-self-harm-risk-notifications/)）。
- 同步推送 ChatGPT Memory 升级：Plus/Pro 用户的回答开始跨历史对话、saved memories、文件、连接的 Gmail 拉上下文，并在消费者计划新增 "memory sources" 让用户看到/编辑哪些记忆参与了本次回答（[Releasebot Changelog](https://releasebot.io/updates/openai/chatgpt)、[Philstar Tech](https://philstartech.com/news/2026/05/08/18240/openai-chatgpt-trusted-contact-feature-emotional-support/)）。

## Anthropic
- Anthropic 公布 Project Glasswing 与 Claude Mythos Preview：将这一未发布的 frontier 模型在受控环境下交给 40+ 关键软件组织和启动伙伴，承诺最高 1 亿美元 usage credits + 400 万美元开源安全捐赠；官方报告 Mythos 自主发现并利用了 FreeBSD NFS 服务器 17 年历史的 RCE 漏洞 CVE-2026-4747（[red.anthropic.com Mythos Preview](https://red.anthropic.com/2026/mythos-preview/)、[Let's Data Science 综述](https://letsdatascience.com/news/anthropic-limits-access-to-claude-mythos-model-d63cc2e0)）。
- 与发布同步出现安全风波：BBC、Bloomberg 报道有第三方承包商账户在私密论坛分享 Mythos 访问；Anthropic 正调查未授权访问，部分研究员对漏洞挖掘能力的"独占性"持保留意见（[Releasebot Anthropic](https://releasebot.io/updates/anthropic)、[Let's Data Science](https://letsdatascience.com/news/anthropic-limits-access-to-claude-mythos-model-d63cc2e0)）。
- Claude Opus 4.7 进入 GA，并把 Pro/Max/Team/Enterprise 的 Claude Code + API 速率上限翻倍、移除 Pro/Max 的高峰削减（[Releasebot Anthropic](https://releasebot.io/updates/anthropic)、[Releasebot Claude](https://releasebot.io/updates/anthropic/claude)）。

## Google DeepMind
- Gemini 在 5 月初继续推 Workspace Intelligence：Gmail/Chat/Calendar/Drive 的实时上下文打通进入工作区 AI 流程，配合"Daily brief"和 imported chats 让 Gemini 从对话工具进一步靠拢"日常工作底座"（[blog.mean.ceo Gemini](https://blog.mean.ceo/google-gemini-news-may-2026/)、[Releasebot Gemini](https://releasebot.io/updates/google/gemini)）。
- DeepMind 推出 Deep Research Max，作为下一代 Gemini 自主研究 agent 的台阶式升级，把多步检索 + 长文综合往"自治研究 agent"方向再推一格（[Google Blog: Deep Research Max](https://blog.google/innovation-and-ai/models-and-research/gemini-models/next-generation-gemini-deep-research/)）。

## Meta
- 5/9–5/10 未见新一线模型发布；主线仍是 4 月发布的 Llama 4 Scout / Maverick（17B active MoE，原生多模态，Scout 主打 10M 上下文、Maverick 对标 GPT-4o），以及 LlamaCon 中给出的 Behemoth (288B active) 预览路线（[Meta AI Llama 4 blog](https://ai.meta.com/blog/llama-4-multimodal-intelligence/)、[Meta AI LlamaCon recap](https://ai.meta.com/blog/llamacon-llama-news/)）。

## xAI
- 紧邻 5/4 发布的 Grok 4.3 余波：1M 上下文 + 原生视频输入 + 内建推理，定价 1.25 美元/M 输入 token，Intelligence Index 53、CaseLaw v2 / CorpFin 第一，GDPval-AA 较 Grok 4.20 +300 Elo（[Medium NLPlanet 周报](https://medium.com/nlplanet/xai-releases-grok-4-3-weekly-ai-newsletter-may-4th-2026-4b7e8fea0f10)、[xAI News](https://x.ai/news)）。
- xAI 独立发布 Grok Speech-to-Text + Text-to-Speech API，复用为 Grok Voice / Tesla / Starlink 客服打底的语音栈（[xAI News](https://x.ai/news)、[Releasebot xAI](https://releasebot.io/updates/xai)）。

## Mistral
- 5/9–5/10 未见 Mistral 新发布；主线仍是 4/29 发布的 Mistral Medium 3.5（合并 Medium 3.1 通用、Magistral 推理、Devstral 2 agentic coding 三条线），以及 5 月对欧洲数据中心扩张的延续（[codersera 开源 LLM 横评](https://codersera.com/blog/best-open-source-llm-2026-llama-4-qwen-3-5-deepseek-v4-gemma-4-mistral/)、[Mistral News](https://mistral.ai/news)）。

## Qwen
- 5/9–5/10 阿里 Qwen 团队未见新模型上线；最近一线发布仍是 4/17 的 Qwen3.6-35B-A3B（35B/3B active MoE，agentic coding 取向）和 4/24 的 Qwen3.6-27B 稠密多模态版本（[codersera 横评](https://codersera.com/blog/best-open-source-llm-2026-llama-4-qwen-3-5-deepseek-v4-gemma-4-mistral/)、[fazm.ai 开源发布合辑](https://fazm.ai/blog/open-source-llm-releases-2026)）。

## DeepSeek
- 5/9–5/10 无新模型发布。最近的旗舰节点仍是 4/24 的 DeepSeek-V4 Preview（V4-Pro 1.6T total / 49B active、V4-Flash 284B / 13B active、1M token 上下文，Pro 在数学/代码超过所有开源模型，仅在世界知识上落后 Gemini 3.1 Pro）；社区在追踪 V4.1 释出节奏与 7B 美元融资带来的开源权重加速（[TechCrunch DeepSeek V4 Preview](https://techcrunch.com/2026/04/24/deepseek-previews-new-ai-model-that-closes-the-gap-with-frontier-models/)、[MIT Technology Review](https://www.technologyreview.com/2026/04/24/1136422/why-deepseeks-v4-matters/)、[dasroot.net V4.1 watch](https://dasroot.net/posts/2026/05/deepseek-v4-1-release-watch-7b-funding-open-weights-models/)）。

## 未验证 Frontier 信号
- 关于 Mythos Preview 通过第三方承包商账户外泄、私密论坛二次访问的报道：BBC/Bloomberg/CNBC 的报道处于 Anthropic 调查中，结论未定，且 Tom's Hardware 等媒体对 Anthropic 漏洞挖掘"独占性"主张持质疑——作为 rumour 分类，进一步动作以官方调查结果为准（[Let's Data Science 转载综述](https://letsdatascience.com/news/anthropic-limits-access-to-claude-mythos-model-d63cc2e0)）。
