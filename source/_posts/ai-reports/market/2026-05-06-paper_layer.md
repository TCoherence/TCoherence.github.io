---
title: '[市场·2026-05-06] Paper Layer'
date: '2026-05-06 12:00:00'
permalink: /reports/market/2026-05-06-paper_layer/
hidden: true
secondary: true
---
> ← 返回主报告：[[市场·2026-05-06] Politics](/reports/market/2026-05-06-politics/)

# Paper Layer — 2026-05-06

paper-digest 2026-05-06 daily 已 consumed（132 候选 / Top 8 / 三源全部正常返回；S2 未返回 similar_papers，HF JSON 不附 affiliation，导致延伸阅读与新作者发现两段降级）。今日 8 条主线由中国高校 + 独立小组的 agent benchmark 投稿构成，5 篇为 benchmark / eval 工作（iWorld-Bench / ESARBench / Workspace-Bench / Healthcare AI GYM / WindowsWorld），从交互式世界模型扩展到 UAV 搜救、跨应用 GUI、医院、工作区文件依赖；显示 agent 评测体系正在从 isolated 单任务往过程级、跨应用、长期 skill 演化位移。

## paper-digest 命中 picks

- [2605.03941](http://arxiv.org/abs/2605.03941v1) **A Benchmark for Interactive World Models with a Unified Action Generation Framework** — iWorld-Bench 用统一动作生成框架评测交互式世界模型。**为何进 market-briefing**：与 paper-digest 同主张『世界模型 benchmark 化』收敛，但需在 market-briefing 里挂上 application-layer 的需求侧证据（GUI / Workspace 复杂任务）才形成完整链。
- [2605.01371](https://arxiv.org/abs/2605.01371) **ESARBench: A Benchmark for Agentic UAV Embodied Search and Rescue** — 首个 MLLM 驱动 UAV 搜救场景的 agentic benchmark。**为何进**：embodied agent 从机器人臂 / GUI 跳到 UAV 搜救垂直场景，意味着 agent benchmark 下一阶段把『可观测真实物理风险任务』纳入；对 chips / energy 端推理时延 + 模型蒸馏方向有具象需求拉动。
- [2605.03596](https://arxiv.org/abs/2605.03596) **Workspace-Bench 1.0: Benchmarking AI Agents on Workspace Tasks with Large-Scale File Dependencies** — 工作区大规模文件依赖 agent 基准，附 100-task lite 子集（评估成本降 70%）。**为何进**：今日 Anthropic Microsoft 365 全家桶 / OpenAI Workspace Agents / Google Workspace Intelligence 都把 enterprise 工作区做成主战场；Workspace-Bench 给出 evaluator 侧的对位证据，是 application-layer benchmark 与 frontier-lab 商业化之间的桥梁论文。
- [2604.27776](https://arxiv.org/abs/2604.27776) **WindowsWorld: A Process-Centric Benchmark of Autonomous GUI Agents in Professional Cross-Application Environments** — 跨应用专业工作流 process-centric GUI agent 基准。**为何进**：OSWorld 单应用范式 → 跨应用 profession-specific 流水线位移；与 OpenAI Workspace Agents / Microsoft Agent 365 / Anthropic Claude Cowork 形成评测面对位。
- [2605.02943](https://arxiv.org/abs/2605.02943) **Healthcare AI GYM for Medical Agents** — 多轮临床 RL 训练环境用于通用医疗 agent；附 TT-OPD（Turn-level Truncated On-Policy Distillation）训练算法贡献。**为何进**：vertical agent benchmark 进入医疗领域 + 蒸馏方法学，application-layer 与 model-layer 训练范式的双重信号。
- [2604.27488](https://arxiv.org/abs/2604.27488) **Skills-Coach: A Self-Evolving Skill Optimizer via Training-Free GRPO** — 免训练 GRPO 让 LLM agent 技能自演化覆盖全场景。**为何进**：training-free GRPO 把 RL 后训练成本继续往下压；与 Anthropic Distillation 主线（Latent Space SAIL Live #6 4 月底讨论）形成方法论层 cross-check。

## 技术信号（paper-digest 不覆盖）

- **Claude Code 5 月新版本** — /model picker 支持 Anthropic-compatible gateway /v1/models；ANTHROPIC_BEDROCK_SERVICE_TIER；/resume 支持 PR URL 反查 session；--plugin-dir 接受 .zip 插件包；Windows / PowerShell 修复 + OAuth 强化。Claude Code 1.x 系列首次正式接入企业 gateway 模式，对位 OpenAI Codex backdoor。 ([GitHub releases](https://github.com/anthropics/claude-code/releases) / [Releasebot](https://releasebot.io/updates/anthropic/claude-code))
- **Microsoft Agent 365 GA**（5/1）— $15/seat、agent 注册表 + Bedrock / GCP registry sync 公测、Agent Isolation 机密计算 enclave、Entra 网络控制扩展到 Copilot Studio agent 与端点 agent。tooling-layer 把 agent 治理从应用内对接做成跨云目录服务。 ([Microsoft Security](https://www.microsoft.com/en-us/security/blog/2026/05/01/microsoft-agent-365-now-generally-available-expands-capabilities-and-integrations/))
- **OpenClaw 突破 250k GitHub stars 60 天内超过 React 成为最 starred 软件项目** — 本地 / 私有 infra 路线（连 WhatsApp / Telegram / Slack / Discord 等 50+ 工具，无外部 API 路由）；OSS personal AI OS 概念具象化。 ([NVIDIA blog](https://blogs.nvidia.com/blog/what-openclaw-agents-mean-for-every-organization/))

## 覆盖缺口

- 今日 paper-digest top picks 8 篇里 0 frontier-lab 署名命中，主线由中国高校 + 独立小组 agent benchmark 构成；frontier-lab 训练侧方法论暂无 5/5-5/6 paper 信号。
- Workspace-Bench / iWorld-Bench / WindowsWorld 三篇 affiliation 字段为空，paper-digest 未带回机构信息。
