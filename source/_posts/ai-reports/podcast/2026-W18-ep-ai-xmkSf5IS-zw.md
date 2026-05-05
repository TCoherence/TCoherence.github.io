---
title: '[Podcast·2026-W18] AI · xmkSf5IS-zw'
date: '2026-05-03 12:00:00'
permalink: /reports/podcast/2026-W18-ep-ai-xmkSf5IS-zw/
hidden: true
secondary: true
---
> ← 返回主报告：[[Podcast·2026-W18] Report](/reports/podcast/2026-W18-report/)

# [Dwarkesh Patel — How GPT-5, Claude, and Gemini are actually trained and served – Reiner Pope](https://www.youtube.com/watch?v=xmkSf5IS-zw)

- Group: ai
- Channel: @DwarkeshPatel
- Published: 2026-04-29
- Duration: 2h14m
- Language: en (auto)
- Evidence: youtube_subtitles

## TL;DR

Reiner Pope（前 Google TPU 架构师、MatX CEO）在 Dwarkesh 新搭的黑板棚里用 roofline 模型拆解前沿 LLM 训练与推理的真实成本。核心结论：Claude / Codex / Cursor 的 Fast Mode 用 6× 价钱换 2.5× 速度，本质是缩小 batch size——内存带宽决定每 token 读权重的时间，batch 越大越摊薄成本但单请求延迟升高，理论上"100× 慢模式"也能成立。MoE 部署上 Blackwell NVL72 的 all-to-all 拓扑恰好匹配 DeepSeek 类 256 专家分到 64 GPU 的稀疏路由；跨 rack 扩展会撞带宽墙，专家并行加 pipeline 微批仍是最优解。Prefill 与 decode 严重不对称：decode 是 memory-bound 单 token 串行，prefill 是 compute-bound 多 token 并行，所以 API 输出价比输入贵 3–5×，还能从中反推 KV head 数与 d-head 维度。结尾介绍 2017 年 RevNets 思路——可逆残差网络在反向传播时即时重算激活，用算力换内存，与 KV cache "用内存换算力"对称相反，在当前硬件上仍属有利交易。可操作观察：通过 API 输入/输出价差与速度档位可外推厂商真实推理 batch 与硬件利用率，是判断是否在补贴定价的硬指标。
