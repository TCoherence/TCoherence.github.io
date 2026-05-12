---
title: '[市场·2026-05-08] Paper Layer'
date: '2026-05-08 12:00:00'
permalink: /reports/market/2026-05-08-paper_layer/
hidden: true
secondary: true
---
> ← 返回主报告：[[市场·2026-05-08] Politics](/reports/market/2026-05-08-politics/)

# Paper Layer — 2026-05-08

来源：[paper-digest 2026-05-08](file:///home/.oh-my-agent/reports/paper-digest/daily/2026-05-08.json) — top picks 全量消化，外加 2 项 paper-digest 之外的技术信号。

## 来自 paper-digest 的关键论文

- [`2605.05242`](https://arxiv.org/abs/2605.05242) **Beyond Semantic Similarity: Rethinking Retrieval for Agentic Search via Direct Corpus Interaction** — Agent 用终端工具直查原语料，绕过 embedding 检索；HF trending #3。对 RAG/agentic search 工程栈是范式级冲击。
- [`2605.02910`](https://arxiv.org/abs/2605.02910) **CreativityBench: Evaluating Agent Creative Reasoning via Affordance-Based Tool Repurposing** — 工具创造性重用基准，揭示当前模型短板；HF 单篇最高赞 18。可作为 agent planning 标准评测候选。
- [`2605.04451`](https://arxiv.org/abs/2605.04451) **RemoteZero: Geospatial Reasoning with Zero Human Annotations** — 无标注地理推理 + 语义自验证驱动 GRPO 自进化；把 RL 后训练扩展到 Earth observation。
- [`2605.04956`](https://arxiv.org/abs/2605.04956) **KernelBench-X: A Comprehensive Benchmark for Evaluating LLM-Generated GPU Kernels** — Triton 内核生成基准，15 类 176 任务；对 chips 层量化主线建立。
- [`2605.05758`](https://arxiv.org/abs/2605.05758) **BioTool: A Comprehensive Tool-Calling Dataset for Enhancing Biomedical Capabilities of LLMs** — tool-calling 数据集把 LLM 从问答拉到闭环 workflow；与 Anthropic financial agents / Mistral Vibe 主线同向。
- [`2605.05922`](https://arxiv.org/abs/2605.05922) **Think, then Score: Decoupled Reasoning and Scoring for Video Reward Modeling** — 视频奖励模型解耦推理与打分；CoT 质量直接转化为奖励精度。

## 技术信号（paper-digest 不覆盖的部分）

- AlphaEvolve 5/7 公开 [GitHub repository_of_problems](https://github.com/google-deepmind/alphaevolve_repository_of_problems)：整理 AI 在 Erdős / TSP / Ramsey 数等开放问题上的可验证记录与代码，[DeepMind impact 复盘](https://deepmind.google/blog/alphaevolve-impact/) 同步把 AI for math discovery 推到 reproducible artifact 层。
- Mistral 5/2 同步把 Medium 3.5（128B / 256K / 77.6 SWE-Bench）权重以 [modified-MIT 释出](https://docs.mistral.ai/models/model-cards/mistral-medium-3-5-26-04)，并进入 [NVIDIA NGC NIM Catalog](https://catalog.ngc.nvidia.com/orgs/nim/teams/mistralai/containers/mistral-medium-3.5-128b)——当周开源主权重落地最直接的信号。
