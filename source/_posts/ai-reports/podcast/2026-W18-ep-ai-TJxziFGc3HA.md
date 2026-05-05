---
title: '[Podcast·2026-W18] AI · TJxziFGc3HA'
date: '2026-05-03 12:00:00'
permalink: /reports/podcast/2026-W18-ep-ai-TJxziFGc3HA/
hidden: true
secondary: true
---
> ← 返回主报告：[[Podcast·2026-W18] Report](/reports/podcast/2026-W18-report/)

# [Latent Space — DeepSeek-V4: Towards Highly Efficient Million-Token Context Intelligence](https://www.youtube.com/watch?v=TJxziFGc3HA)

- Group: ai
- Channel: @LatentSpaceTV
- Published: 2026-04-29
- Duration: 47m
- Language: en (auto)
- Evidence: youtube_subtitles

## TL;DR

Latent Space 直播拆解 DeepSeek-V4 技术报告，核心是 HCA（Heavily Compressed Attention）——在过去半年 MLA、DeepSeek 3.2 等渐进式优化基础上再压一刀，把百万级长 context 的推理成本拽下来。嘉宾观察：中国开源阵营基本统一到 MLA 路线（Qwen 等接连跟进），西方开源模型则普遍走"3/4 sliding window + 1/4 full attention"的混合注意力，节省幅度与 MLA 大致相当；HCA 把这场竞赛又向前拉了一格。工程层面 DeepSeek 把前向/反向 kernel 写在 Triton 衍生的 Talang 上并开源，明显在"碰瓷"Nvidia——他们直白吐槽 cuBLAS 不能稳定做 batch invariant inference（temperature=0 跨硬件结果一致）。AMD 与 Nvidia 的 InfiniBand 互联仍在 kill 训练 run，多家训练团队私下抱怨。论文措辞从"我们确认"退回到"我们相信"，反映 V4 加入了若干尚未严格 ablate 的稳定性 trick。可操作观察：长上下文成本下降并非来自单点突破，而是注意力压缩 + kernel 自主可控 + 稳定性兜底"三件套"叠加；做闭源对手如想跟进 1M context 需同时复刻 HCA 思路与 Triton 级 kernel 自研能力。
