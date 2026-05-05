---
title: '[市场·2026-05-04] Paper Layer'
date: '2026-05-04 12:00:00'
permalink: /reports/market/2026-05-04-paper_layer/
hidden: true
secondary: true
---
> ← 返回主报告：[[市场·2026-05-04] Politics](/reports/market/2026-05-04-politics/)

# Paper Layer — 2026-05-04

来源：paper-digest 2026-05-04 日报（位于 `~/.oh-my-agent/reports/paper-digest/daily/2026-05-04.json`）。今日 19 篇候选被 Agent / Multi-Agent 主线压制，4 篇 watchlist agent 命中全部进入 Top picks；机器人 fleet RL（LWD）与模拟电路检索（AnalogRetriever）形成横向呼应；Trees-to-Flows 给出方法论侧统一框架。HF Daily metadata 未携带 arXiv categories 与 affiliations，分类命中与新作者发现段被降级；S2 similar_papers 全部为空，延伸阅读段空缺。

## 今日 paper-digest 直接消化

- [2604.24026](https://arxiv.org/abs/2604.24026) From Skill Text to Skill Structure: The Scheduling-Structural-Logical Representation for Agent Skills — 结构化技能表征让 Agent 技能可检索可复用。市场含义：把 Agent skill 从黑盒 prompt 变成可索引的 SSL 结构，是通向 agent 市场化复用的方法论先决条件，与 Microsoft Agent Framework 1.0 / Anthropic Skills 主线呼应。
- [2604.27221](https://arxiv.org/abs/2604.27221) Web2BigTable: A Bi-Level Multi-Agent LLM System for Internet-Scale Information Search and Extraction — 双层多智能体框架做互联网级搜索抽取，WideSearch Avg@4 SR 38.50 / XBench-DeepSearch 73.0 SOTA。市场含义：对标 Google Deep Research Max 与 OpenAI Deep Research 的开源/学术回应，给 deep-research agent 设了第一条公开 SOTA 基线。
- [2605.00323](https://arxiv.org/abs/2605.00323) Online Self-Calibration Against Hallucination in Vision-Language Models — MCTS+DPO 在线校准 VLM 幻觉。市场含义：把 MCTS 树搜索接入 DPO 数据构造，是 RLAIF 路径上少见的 in-loop 校准范式，对 multimodal 部署的可信度评估栈是一个新的方法学样本。
- [2605.00691](https://arxiv.org/abs/2605.00691) Learning to Act and Cooperate for Distributed Black-Box Consensus Optimization — LLM 引导的去中心化协同优化框架。市场含义：把 LLM 当作稀疏 high-level guidance 注入 swarm dynamics，与 Web2BigTable 在 LLM 调度多 agent 上构成不同风格对照。
- [2604.23195](https://arxiv.org/abs/2604.23195) AnalogRetriever: Learning Cross-Modal Representations for Analog Circuit Retrieval — 三模态检索框架提升模拟电路搜索通过率。市场含义：把 LLM-style 跨模态检索拓到 EDA 模拟电路，是 chips 层「设计自动化 + AI」继续渗透的样本。
- [2605.00416](https://arxiv.org/abs/2605.00416) Learning while Deploying: Fleet-Scale Reinforcement Learning for Generalist Robot Policies — 集群部署边训练通用机器人策略 95% 成功。市场含义：fleet-scale RL 给「机器人版 RLHF」提供了「边部署边训练」的范式，是 application 层 robotics 路线本周最强方法学样本。
- [2605.00414](https://arxiv.org/abs/2605.00414) Trees to Flows and Back: Unifying Decision Trees and Diffusion Models — 建立决策树与扩散模型的数学统一。市场含义：方法论侧统一两类长期分立模型族，对 generative-discriminative 双轨融合（与 OSCAR 的 MCTS+DPO 呼应）提供数学基底。
- [2605.00553](https://arxiv.org/abs/2605.00553) Stable-GFlowNet: Toward Diverse and Robust LLM Red-Teaming via Contrastive Trajectory Balance — 去 Z 估计的稳定 GFlowNet 红队训练。市场含义：在 Anthropic Mythos / OpenAI Cybersecurity Action Plan 主线下，给 LLM red-teaming 训练栈提供了新的稳定性基线。

## 不在 paper-digest 内的技术信号

- **Lukilabs Craft Agents 5/2 在 Apache-2.0 下发布**：定位「open-source agent framework」，与 Microsoft Agent Framework 1.0 / LangGraph 形成 OSS 第三方生态对照，是本周 application 层 agent 框架侧唯一 OSS 新增。([AIToolly](https://aitoolly.com/ai-news/article/2026-05-02-craft-agents-oss-lukilabs-launches-new-open-source-agent-framework-under-apache-20-license))
- **Andrej Karpathy nanochat 沙箱逃逸 CVE 4/16 公开（CVSS 9.8）**：影响 nanochat 全部当前版本的 `execution.py`，是「教学级 OSS 训练栈」首次进入主流安全披露视野。([nanoGPT issue 717](https://github.com/karpathy/nanoGPT/issues/717))
