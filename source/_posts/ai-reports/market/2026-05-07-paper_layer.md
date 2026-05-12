---
title: '[市场·2026-05-07] Paper Layer'
date: '2026-05-07 12:00:00'
permalink: /reports/market/2026-05-07-paper_layer/
hidden: true
secondary: true
---
> ← 返回主报告：[[市场·2026-05-07] Politics](/reports/market/2026-05-07-politics/)

# Paper Layer — 2026-05-07

paper-digest 2026-05-07 daily 已 consumed（134 候选 / Top 8 / arXiv + HuggingFace + Semantic Scholar 三源命中；S2 similar_papers 与 affiliations 当日为空）。今日 paper-digest 命中两条主线：reasoning + agent（Top picks 各命中 15 次），叠加 VLA / world-model / OOD 检测。reasoning 侧 disclosure-policy / residual-RL / first-token confidence 三篇围绕"如何更便宜、更快地维持推理质量"；agent / robotics 侧 OpenSearch-VL（开源多模态搜索 agent）、SWE-WebDevBench（vibe coding 平台 benchmark）、ConsisVLA-4D（机器人 4D 时空一致性）共同把"如何评测 + 如何执行长序列 agent"推进到了下一个梯度。

## paper-digest 命中 picks

- [2605.03314](https://arxiv.org/abs/2605.03314) **When to Think, When to Speak: Learning Disclosure Policies for LLM Reasoning** — 并行推理决定何时输出，平衡延迟与正确率。**为何进 market-briefing**：直接对位 GPT-5.5 Instant 5/5 默认化的"low-latency + factual accuracy"双轴目标，是 OpenAI 5/5 默认重置背后的同方向研究信号。
- [2605.05185](https://arxiv.org/abs/2605.05185) **OpenSearch-VL: An Open Recipe for Frontier Multimodal Search Agents** — 开源多模态搜索智能体，引入容错 GRPO（fatal-aware multi-turn）训练算法。**为何进**：今天 paper-digest HF #10 / 77 votes，与 Anthropic Claude Cowork / Mistral Vibe Remote Agents / OpenAI Codex 同向把 "agent + 工具失败重试" 标准化；GRPO + masking 的工程模板可被 frontier 厂商直接借鉴。
- [2605.00380](https://arxiv.org/abs/2605.00380) **ResRL: Boosting LLM Reasoning via Negative Sample Projection Residual Reinforcement Learning** — 残差 RL 同时提升推理与生成多样性，在数学/代码/Agent/Function Calling 12 个 benchmark 平均超越强基线。**为何进**：在 GRPO/DPO 之外给出"保留多样性"这一行业明确痛点的方法学增量；与 Anthropic Outcomes（goal-driven iteration）研究方向一致。
- [2605.05126](https://arxiv.org/abs/2605.05126) **ConsisVLA-4D: Spatiotemporal Consistency in 3D-Perception and 4D-Reasoning for Robotic Manipulation** — 面向机器人操作的 4D 时空一致 VLA 框架，提出 CS-Thinker 跨场景一致性。**为何进**：VLA 时间一致性问题正成为 humanoid / 仓储机器人最大瓶颈；与 Reflection AI（5/1 Pentagon DoD）军用 frontier 路线在长时序 agent 训练上同向。
- [2605.03269](https://arxiv.org/abs/2605.03269) **RLDX-1 Technical Report** — 多流动作 Transformer 统一灵巧操作策略，三源（arXiv+HF+S2）交集论文。**为何进**：dexterity 多 stream action token 的工程化，给 application-layer humanoid 演示提供新基准点。
- [2605.04128](https://arxiv.org/abs/2605.04128) **Awaking Spatial Intelligence in Unified Multimodal Understanding and Generation** — 统一理解、生成、编辑的空间智能模型。**为何进**：与 Gemini 3.2 Flash 多模态对位，是开源侧"统一空间智能"主线最新工作。
- [2605.04637](https://arxiv.org/abs/2605.04637) **SWE-WebDevBench: Evaluating Coding Agent Application Platforms as Virtual Software Agencies** — 面向 vibe coding 平台的端到端 agent 基准。**为何进**：与 Mistral Vibe Remote Agents（5/2）+ Claude Code Web/Desktop（5/6）形成"评测面 ↔ 商业化"对位；agent platform benchmark 进入"虚拟软件 agency"层。
- [2605.05166](https://arxiv.org/abs/2605.05166) **The First Token Knows: Single-Decode Confidence for Hallucination Detection** — 首 token 熵即可媲美 self-consistency 的幻觉检测。**为何进**：与 GPT-5.5 Instant 52.5% 幻觉降幅（5/5）、Anthropic Code Review GA（5/6）的"低成本 verifier"方向一致，是部署侧最实用的方法学增量。

## 技术信号（paper-digest 不覆盖）

- **Anthropic Code Review GA + Multi-agent / Outcomes / Dreaming Managed Agents（5/6）** — 不是 arXiv 论文，但作为"agent 自我反思 + multi-agent orchestration"工程化首发，需挂在 paper layer 与 macro_news.application 间作为 cross-check。Dreaming research preview 由 Anthropic 内部 demo 展示；外部基准与 paper 暂未发布。([Simon Willison live blog](https://simonwillison.net/2026/May/6/code-w-claude-2026/) / [Anthropic Code Review](https://claude.com/blog/code-review))
- **OpenSearch-VL "fatal-aware GRPO"** 配套开源代码与训练 recipe（HuggingFace papers 头部）：把 multi-turn agent training 中"工具失败导致级联失败"的问题做成可被复现的 RL 训练算法（[HF papers](https://huggingface.co/papers/2605.05185)）。

## 覆盖缺口

- paper-digest 当日 affiliations 字段为空（Top picks 8 篇均未带回作者所属机构），延伸阅读与新作者发现段降级。
- Top picks 8 篇内 0 frontier-lab 署名命中；当日 frontier-lab 训练侧方法论无 5/6 直接论文信号，更多以产品发布形式承载（Anthropic Dreaming / OpenAI GPT-5.5 Instant System Card 待补）。
- S2 similar_papers 当日为空，扩展引用关系建图缺位。
