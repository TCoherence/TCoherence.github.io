---
title: '[市场·2026-05-11] Paper Layer'
date: '2026-05-11 12:00:00'
permalink: /reports/market/2026-05-11-paper_layer/
hidden: true
secondary: true
---
> ← 返回主报告：[[市场·2026-05-11] Politics](/reports/market/2026-05-11-politics/)

# Paper Layer — 2026-05-11

## 总览

paper-digest 5/11 47 候选三源齐备（arXiv 47 / HF Daily 47 / S2 32）；本节直接消费 8 条 top_picks，无需独立 WebSearch arXiv。主线被 **Agent × Multimodal Search × Inference 加速** 三路撑住，与 5/11 frontier_radar 的 OpenAI EU Cyber Action Plan / DeployCo / DeepMind AI co-mathematician 主线高度同向。

## 直接消费自 paper-digest（Top picks）

- [2605.04808](https://arxiv.org/abs/2605.04808) **DecodingTrust-Agent Platform (DTap)** — DTap 红队平台覆盖 14 领域 50+ 环境压测 AI 代理；Percy Liang 署名 + HF rank 14。与 5/11 Anthropic Mythos / OpenAI GPT-5.5-Cyber × EU 监管谈判直接同向，给代理红队 / agent-safety 评测面提供工业可复现平台基线。
- [2605.08083](https://arxiv.org/abs/2605.08083) **LLMs Improving LLMs: Agentic Discovery for Test-Time Scaling** — 代理自动发现 TTS 策略，胜过人工启发式调度。与 5/11 DeepMind AI co-mathematician '层级多代理工作台' 公开化同一条线，推理预算分配从手工调度走向 self-improving。
- [2605.06716](https://arxiv.org/abs/2605.06716) **From Storage to Experience: A Survey on LLM Agent Memory** — Storage → Reflection → Experience 三阶段框架。对应 5/11 Cat Wu / Claude Code Routines × 'Claude agents dream' 长记忆 / 经验沉淀走向。
- [2512.18181](https://arxiv.org/abs/2512.18181) **MACE-Dance: Motion-Appearance Cascaded Experts** — 级联 MoE 合成音乐驱动舞蹈视频；本周 MoE 主线首条具象化应用，HF rank 12 / 80 upvotes，把 MoE 路由从 NLP 推到多模态条件视频合成。
- [2605.06241](https://arxiv.org/abs/2605.06241) **Rethinking RL for LLM Reasoning: It's Sparse Policy Selection, Not Capability Learning (ReasonMaxxer)** — 熵门控对比损失替代 RL，单卡分钟级训练。对 RLVR 正统范式抛出 RL-free 反命题，可能颠覆 'GPU 集群 × 大规模 RL' 投入产出比叙事。
- [2605.07177](https://arxiv.org/abs/2605.07177) **HyperEyes: Efficiency-Aware RL for Parallel Multimodal Search Agents** — 多模态搜索改并行原子动作 + IMEB 基准 300 实例。与 InterLV-Search 互为补集，与 GPT-5.5 / Grok Imagine 多模态产品节奏同步。
- [2605.07243](https://arxiv.org/abs/2605.07243) **SpecBlock: Block-Iterative Speculative Decoding with Dynamic Tree Drafting** — 比 EAGLE-3 提速 8-13%，cost 44-52%；本日推理加速主线唯一硬 benchmark，对 DeployCo × 企业推理 ROI 谈判带来直接量化弹药。
- [2605.07510](https://arxiv.org/abs/2605.07510) **InterLV-Search: Benchmarking Interleaved Multimodal Agentic Search** — 首个交错多模态代理搜索基准；与 HyperEyes 构成 5/11 多模态代理搜索基准双信号。

## paper-digest 不覆盖的方法面 / 工程面信号

- **GPT-5.5-Cyber 评估页 + AISI 评估** — OpenAI Deployment Safety Hub 同步发表 GPT-5.5-Cyber 卷宗，强调与 GPT-5.5 的 cyber 评测 trade-off 与 AISI 第三方评估；属于 deployment 文档而非 arXiv，paper-digest 不会覆盖。([OpenAI Deployment Safety Hub](https://deploymentsafety.openai.com/gpt-5-5/cybersecurity), [UK AISI Blog](https://www.aisi.gov.uk/blog/our-evaluation-of-openais-gpt-5-5-cyber-capabilities))
- **DeepMind AI co-mathematician 工作台架构** — 配套论文 + 'project coordinator → workstream coordinators → search / coding / Deep Think 子代理' 层级公开；本日尚未进入 paper-digest top_picks（HF Daily cross-list 节奏滞后），但作为 AI for Science × 多代理 LLM 工程范式应单独记录。([DeepMind Deep Think](https://deepmind.google/models/gemini/deep-think/), [Google Blog](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-deep-think/), [The Rundown AI](https://www.therundown.ai/p/google-deepmind-powerful-ai-co-mathematician))
- **Percy Liang 5/11 paper-digest new_authors 段唯一登记** — 已 tracked_author 的活跃信号（DTap 合著），不构成新人物提名，但是 agent-safety / EU AISI 引用链路里要继续关注的研究者。([arXiv 2605.04808](https://arxiv.org/abs/2605.04808))

## 覆盖缺口

- paper-digest 5/11 自评 'S2 相似论文链路全候选未返回，延伸阅读段为空' —— 本节也无法填 extended_reading 维度。
- 所有候选 affiliations 字段空，论文层的机构 / 团队归属仍需 watchlist 后续补齐。
- DeepMind AI co-mathematician 配套论文 arXiv id / 引用链路尚未在 paper-digest 当日 top_picks 中出现（HF Daily 节奏滞后）。
