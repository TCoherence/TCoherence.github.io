---
title: '[市场·2026-05-05] Paper Layer'
date: '2026-05-05 12:00:00'
permalink: /reports/market/2026-05-05-paper_layer/
hidden: true
secondary: true
---
> ← 返回主报告：[[市场·2026-05-05] Politics](/reports/market/2026-05-05-politics/)

# Paper Layer — 2026-05-05

## paper-digest 输入概览

paper-digest 当日 124 条候选三源齐备（arXiv 100 / HF Daily 27 / S2 全量补全），主线被 **VLA × Embodied Reasoning** 吃满；Agentic RL 持续高热，MoE / Inference 主线本周轮空。([paper-digest 2026-05-05](/home/.oh-my-agent/reports/paper-digest/daily/2026-05-05.json))

## 从 paper-digest 选入 market-briefing 的候选

- [2605.02881](https://arxiv.org/abs/2605.02881) **MolmoAct2: Action Reasoning Models for Real-world Deployment** — 开源 VLA 全面跑赢 Pi-05，MolmoER 反超 GPT-5 / Gemini Robotics ER-1.5。AI2 / UW 团队，HF 单篇 105 upvotes，跨 7 个仿真 + 真实基准的 SOTA 实证。
- [2605.00347](https://arxiv.org/abs/2605.00347) **Odysseus: Scaling VLMs to 100+ Turn Decision-Making in Games via Reinforcement Learning** — 预训练 VLM 作动作先验，长回合 RL 显著省样本。Princeton（Danqi Chen / Karthik Narasimhan / Chi Jin）署名，与本周 Microsoft Agent 365 / Bedrock Managed Agents / Le Chat Work mode 路线吻合。
- [2605.00932](https://arxiv.org/abs/2605.00932) **Code World Model Preparedness Report** — Meta 对 CWM 做风险评估，未见额外 frontier 风险。今日唯一可识别 frontier-lab（Meta）署名的责任披露文档。
- [2605.02178](https://arxiv.org/abs/2605.02178) **T²PO** — Token + Turn 双层不确定性控制多回合 agentic RL，是当下'真正可执行 agent'瓶颈的方法面修补。
- [2605.02240](https://arxiv.org/abs/2605.02240) **PhysicianBench** — 首个真实 EHR 环境 LLM 医生 agent 评测集，execution-grounded 而非静态 QA。
- [2604.27818](https://arxiv.org/abs/2604.27818) **MASCing** — 免重训的 MoE 安全行为掩码重配框架，对 Qwen 3.6 / DeepSeek V4 / Llama 4 这些 MoE 旗舰意义直接。
- [2604.27660](https://arxiv.org/abs/2604.27660) **Ctx2Skill** — 自演化发现并选择上下文专属技能 + Cross-time Replay，与 GitHub trending 'skills' / 'jcode skill distillation' 工程实践层互文。
- [2605.02222](https://arxiv.org/abs/2605.02222) **OGPP** — 粒子原生流匹配 + 置换对称降负担，model 层底层方法 watchlist。

## paper-digest 未覆盖的 technical signals

- **Mistral Vibe + Workflows 4/29 → 5/4-5/5**：[Vibe remote agents](https://mistral.ai/news/vibe-remote-agents-mistral-medium-3-5) async coding cloud session + 本地下传，配合 Le Chat Work mode + Mistral Workflows 编排引擎。**开权重 + agent harness 上下游 ship 是 paper-digest 不覆盖的工程层信号**。
- **5/4 UniVidX**：统一多模态视频扩散框架代码释出，在 <1000 段视频上训练通用视频生成，是开源 video-gen 的低数据样本信号。([Mean.CEO AI News 5月](https://blog.mean.ceo/ai-news-may-2026/))
- **GitHub trending 'agent harness + skill DSL' 双热点**：[jcode](https://github.com/1jehuang/jcode)（1jehuang，Coding Agent Harness，~3-4K stars）+ [Matt Pocock skills](https://github.com/mattpocock/skills)（55K stars，21 个 .claude 工程化 skill）共同构成开源 application 层从'agent runtime'到'agent skill 生态'的范式扩散。

## Coverage gaps

- S2 相似论文链路本日全候选未返回，paper-digest 自身延伸阅读段为空，跨论文引用图层信号缺失。
- paper-digest 当日综述提到 MoE / Inference 主线本周轮空（MoE 仅 3 篇、DPO 2 篇、speculative 1 篇），属于真实空窗——本节没有为'凑数'去 backfill arxiv，按规则。
