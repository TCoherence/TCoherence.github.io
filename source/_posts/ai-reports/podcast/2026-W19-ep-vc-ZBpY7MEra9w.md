---
title: '[Podcast·2026-W19] VC · ZBpY7MEra9w'
date: '2026-05-10 12:00:00'
permalink: /reports/podcast/2026-W19-ep-vc-ZBpY7MEra9w/
hidden: true
secondary: true
---
> ← 返回主报告：[[Podcast·2026-W19] Report](/reports/podcast/2026-W19-report/)

# [Sequoia Capital — Why Data Is the Real AI Bottleneck: Flapping Airplanes' Ben and Asher Spector](https://www.youtube.com/watch?v=ZBpY7MEra9w)

- Group: vc
- Channel: @sequoiacapital
- Published: 2026-05-06
- Duration: 9m
- Language: en (auto)
- Evidence: youtube_subtitles

## TL;DR

Spector 兄弟在 AI Ascent 2026 推出新 AI 实验室 Flapping Airplanes，论点是 AI 下一阶段的胜负在"数据效率"。当前 LLM 真正万亿美元级用武之地——搜索与编码——恰好是数据最丰富的两类任务，互联网即语料、合成数据无限；而经济中的"长尾"——机器人、量化交易、科学发现以及成千上万的中小垂直工作流——本质上都是数据稀缺。为什么计算比数据更易扩展：Hyperscaler 几年内能堆几个数量级算力，但数据要"逐家公司谈许可、扫垒货书店"，新进入者很难复制。把模型做到数据效率提升 1000x，意味着部署难度也降 1000x，并打破"数据壕沟=只有少数公司能训前沿模型"的格局，决定 AI 经济的参与者范围。可操作观察：Flappy 自研 GPU 原语，绕过 PyTorch 抽象去做小批量、深度流水线的 hogwild 训练循环，这些算法在现有框架里跑起来是 asymptotically inefficient，但与数据效率算法天然耦合——系统创新与算法创新需共同推进。
