---
title: '[Podcast·2026-W19] Report'
date: '2026-05-10 12:00:00'
permalink: /reports/podcast/2026-W19-report/
hidden: true
categories:
  - AI报告
  - Podcast
---
# YouTube Podcast 周报 · 2026-W19 (May 04–May 10)

> 覆盖 11 个订阅频道 · 本周共 18 条新集 · 字幕覆盖 18/18

## 🤖 AI 访谈 (Dwarkesh / No Priors / Latent Space)

### [Dwarkesh Patel — David Reich – Bronze Age shock, the Neanderthal puzzle, & the sudden spread of farming](https://www.youtube.com/watch?v=sRKBGVFVYAw)
- 2h13m · 发布 May 08 · 字幕：en (auto) (youtube_subtitles)
- **TL;DR**：Dwarkesh 第二次访问 Harvard 古 DNA 教授 David Reich，话题是他与 Ali Akbari 刚发布的预印本——颠覆"农业革命之后人类进化基本停滞"的主流共识。方法上 Reich 实验室把古 DNA 测序工业化：每实验室每年 5,000+ 个体级数据，全球今年通过该 in-solution enrichment 方法已积累 20,000 多条古基因组（2010 年仅约 10 条），统计能力够大才把"频率漂移"中那 2% 的真正定向选择信号挑出来。结论一：过去 10,000 年里，500 多个表型中约 100 个出现统计显著、单方向的选择运动，强度远高于此前预期；其中青铜时代（约 3,000–5,000 年前）选择最剧烈，强过新石器农业起源期，意味着把人从狩猎采集"扯进青铜时代生活"的环境冲击在生物层面更深。结论二：在该 10,000 年里，认知表现的多基因预测器整体上升约 1 个标准差，多数集中在 4,000–2,000 年前。结论三：100,000–50,000 年前的"行为现代性"突跃 (representational art、串珠) 在基因组里找不到任何全人类共享的近期 selective sweep——modern human 的潜能在小群体内已经潜伏，演化是高度多基因的累计偏移而非"开关基因"。彩蛋：Reich 在白板上提出 Neanderthal 异端模型——他们其实是 30 万年前从高加索向欧洲扩张的现代人 + 当地古人类杂交后被基因淹没的群体，挑战"独立分支说"。可操作观察：把"历史是文化主导还是生物主导"的二元命题改写为"文化施加的环境改变会快速诱发多基因选择"，这对教育、营养、疾病的世代政策都有结果。

### [Latent Space — Building the Discord Gateway: Manuel — AI in Action May 1 2026](https://www.youtube.com/watch?v=P9bsDAdW6fo)
- 1h2m · 发布 May 05 · 字幕：en (auto) (youtube_subtitles)
- **TL;DR**：Latent Space "AI in Action" 5 月 1 日直播：Manuel 公开演示自研的 Discord Gateway——一套对 Discord Bot 开发做激进收敛的 JavaScript 框架，开发者只需登 Discord 拿到一次性 token、克隆模板仓库、用 LLM "vibe code"就能跑通带会话/用户/LLM 调用的多人 bot。直播本身就是测试，Kevin 当场用 ChatGPT GPT-5.5 与 Anthropic Claude Code 对比 vibe coding：他提出最近 Codex CLI 对 GPT-5 表现像"退步"，对照同一模型在 PI（codename Pi/Claude Code 系）harness 下"飞起来"，原因是 Codex 调小了模型自我审计与计划环节，把 prompt 改成"边走边学"——可通过修改 model_cache.json 抹平。讨论扩展到 Cursor 与 IDE 内集成：Manuel 把 Pi 形容为"agent kernel"，可插入任意上下文，远超单一 IDE plug-in。可操作观察：Manuel 的目标是用 7B 级开源模型在 ≤2,000 tokens 内自动生成一整套知识库 bot——只需 3 条 SQL select + 2 段 UI DSL，让消费级 Intel CPU 5 分钟即可推理出有用 bot；这指向"小模型 + 强约束 harness + 单元可测的 bot DSL"的工程路径，和"AI 不是工具是同事"那类廉价口号形成鲜明对照（嘉宾普遍认为后者既错也有害）。

## 💰 VC 机构 / 访谈 (a16z / Sequoia / 20VC)

### [20VC — Cliff Weitzman: What I Learned from 100 of the World’s Top CEOs & Why Tokens Will Outspend Salaries](https://www.youtube.com/watch?v=HLmo450GSPA)
- 1h57m · 发布 May 09 · 字幕：en (auto) (youtube_subtitles)
- **TL;DR**：20VC 与 Speechify 创始 CEO Cliff Weitzman 长聊 117 分钟，给出年营收两位数千万美金、6,000 万用户、200 工程师、苹果设计奖得主公司的当代运营手册。增长策略：他主张"$100K/月之前不要在 Meta 之外烧钱"，Speechify 每天测试约 1,000 条 AI 自动生成广告创意，并明确"我们很快会在 token 上花得比工资还多"。组织：他过去一年实际飞遍全球见 100 位消费订阅 CEO，归纳出"公司像运动员一样有 bulking 与 cutting 周期"，AI 时代必须接受工具更替成本变成日常——Speechify 上月刚把内部 IDE/agent 从 Cursor 切到 Claude Code。他强调 60 秒响应时间是工程师未来生产力的最强预测指标，AI 时代 QA 与 evals 才是最值钱技能；同时承诺给"真正可以信任的人"远超市场的薪酬来换专注度。AI 应用：他用 ChatGPT + 论文搜索快速定位父亲早期癌症的可能病因和外科建议，把"AI 助医"从概念落到家庭层面。投资观点：2022 年用 3x 杠杆 NVDA 期权押注算力周期、然后转身重仓 OpenAI 广告产品（认为 OpenAI Ads 会在两年内做成 Meta 级生意），并直言"今天他会买 Meta"——Llama 与 advertising flywheel 仍未被市场计价；能源端要押电网现代化与小型核电。可操作观察：1) Speechify 内部"每人每天 1,000 credits 起步、否则 manager 会失望"已经把"AI usage"从奖励变成 KPI；2) 把 Meta 营销试探作为消费订阅公司的默认起点而非分散投放；3) "tokens > salaries"的拐点正在 2026 真实出现，CFO 的支出结构需要相应改写。

### [a16z — Ben Horowitz on American Dynamism and the Future of AI | The a16z Show](https://www.youtube.com/watch?v=X9k53P-2SOg)
- 29m · 发布 May 08 · 字幕：en (auto) (youtube_subtitles)
- **TL;DR**：a16z 联合创始人 Ben Horowitz 在自家美国动态主义峰会与 David Ulevitch 对谈，公布完成 a16z 史上最大单期 150 亿美元募资，并把它框架化为"押注美国赢下下一个技术世纪"。Andy Grove 当年那句"行业第一名要为整个行业的伦理负责"被他直接搬用：成为全球最大 VC 的责任就是帮助美国在 AI 革命中复刻工业革命的胜利，并把这种"给个人机会"的体制扩散到盟友（Sweden / Israel 已天然，墨西哥、加拿大、拉美需要被赋能）。他披露与 Anthropic 的关键交易细节：a16z 主导了 SpaceX 与 Anthropic 的合作设想，并强调"AI with a Western soul"的竞争既是国安议题也是软实力议题。对 VC 行业本身：他直言风投在分化为少数能 scale 的大平台与大量难以为继的"vibe firm"；对媒体则提出"vibe geopolitics"——大平台的所谓伦理立场常常是廉价道德。他真正的"夜不能寐"：盖洛普显示中国 70% 民众对 AI 乐观，美国不到 30%。可操作观察：要扭转对 AI 的负面叙事，必须把"AI 终结交通死亡、攻克癌症、消灭极贫"这类正面收益提到与风险同等的话语高度，否则美国会输给本国悲观主义而非中国。

### [20VC — Anthropic's Raise & What It Means for Potential IPO? Mag7: Google & Amazon Up, Meta & Microsoft Down](https://www.youtube.com/watch?v=i98P2wodb10)
- 1h36m · 发布 May 07 · 字幕：en (auto) (youtube_subtitles)
- **TL;DR**：20VC SaaStr 节目，Harry Stebbings 与 SaaS 投资人 Jason Lemkin、Scale 的 Rory O'Driscoll 拆解 Mag7 财报和私募市场。整体框架——援引 Evan Armstrong "the most aggressive quarter in capitalism"：六家公司合计 5,400 亿美元营收 + 7,000 亿美元 AI capex，自由现金流大量被算力建设吃掉。Alphabet 是绝对赢家：Google Cloud backlog 接近翻倍至 4,620 亿美元（已超 2025 全年总营收），搜索广告和 SEO 完全没被 LLM 蚕食，反而集体加速；Amazon 同样转正。Microsoft 与 Meta 被惩罚：MSFT 不算 AI 收入则是平的，Meta 1,500 亿未来投资被华尔街要求回到"可对账的 spreadsheet 叙事"。Palantir 大爆发反映大企业 AI 预算正流向能落地业务流的供应商。SaaS Apocalypse 提前结束论：Atlassian +29%、Twilio +20%、Five9 +23%——AI agent 时代 API/通信基础设施重新成为关键，被 Replit、Lovable 等默认调用，证明"agent 时代企业 SaaS 重新加速"。Anthropic 巨额融资：Jason 与 Rory 算 token 单价 vs 工资替代率——若知识工作里 token 支出真的开始超过人工薪资，Anthropic 至少 50B+ 估值合理；Sierra 在客服赛道 15B 估值则是要替代 4,000 亿美元客服劳动力市场。可操作观察：1) Brian Armstrong / Coinbase "经理终结、ICs 当道"——AI 时代组织扁平化已被验证；2) 投资框架从"看 ARR 增长"切到"AI 是否在带来新客户而非只是给老客户加 SKU"；3) Musk vs Altman 庭审第一周开始，OpenAI 治理结构若动荡反而利好 Anthropic 在企业市场抢份额。

### [Sequoia Capital — Twitter Ex-CEO Dick Costolo: The Operator's Case Against Founder Mode](https://www.youtube.com/watch?v=Kw5hhIsw-wQ)
- 1h6m · 发布 May 07 · 字幕：en (auto) (youtube_subtitles)
- **TL;DR**：20VC（注：实际为 Sequoia Training Data 节目）邀请前 Twitter CEO Dick Costolo 复盘 2010–2015 年从 COO 接管再升任 CEO 的"超级戏剧女王"时期，给出 scaling 阶段 CEO 的反"founder mode"操盘手册。决策速度：他终结所有事情都靠 group consensus，把"yes 的权力下放"——只有你的直属经理可以说不，避免 7 个利益相关方互相否决，决策速度立刻翻倍，这就是他的"bias to yes"。流程 vs 单点责任：发现 launch checklist 已增至 17 页时，他放弃用流程治理增长，改用 DRI（每件事一个直接负责人）+ operator's control，靠制度化跟踪而非检查表。MBWA：每晚 9:30 在工程层踱步，绕开汇报链直接看真实在做什么；偷师 Pixar/Steve Jobs 的"在团队 standup 里旁听"找出真问题。沟通密度：当公司过 1,500 人时他亲自每周给全员讲战略，把"为什么"灌到每个新员工。反馈与解雇：直率不等于刻薄，年轻 CEO 必须练习"有 empathy 的 forthright"；他承认自己仍然 fire 太慢，但 Brad Smith 的口径"never gets easier"是真的。最大遗憾——Twitter 曾在 Facebook 之前接近以 ~7 亿美元收购 Instagram 但放弃了；以及对内容审核的早期低估。可操作观察：AI 时代代码产出加速，焦点 (focus) 与"管森林而非扑火"反而更关键；CEO 真正的 leverage 来自更密集的当面沟通和更短的反馈环。

### [Sequoia Capital — AI That Designs Its Own Chips: Ricursive's Anna Goldie and Azalia Mirhoseini](https://www.youtube.com/watch?v=K05Dh-QjM8c)
- 10m · 发布 May 06 · 字幕：en (auto) (youtube_subtitles)
- **TL;DR**：Anna Goldie 与 Azalia Mirhoseini（AlphaChip 共同作者）正式介绍新公司 Recursive Intelligence，主张"用 AI 设计训练 AI 的芯片"，关闭 AI 与其物理基底之间的递归自我改进闭环。三阶段路线图：第一阶段把现有商业 EDA 工具加速 10 万倍，攻克物理设计与设计验证两个长流程——一次迭代要数天，Nvidia Blackwell 延期一天损失约 2.25 亿美元；第二阶段做"designless 平台"，以工作负载为输入直接产出可送到 fab 的 GDS2 版图，把芯片定制能力交给所有有规模负载的公司，复刻 TSMC 让 fabless 时代成立的逻辑；第三阶段垂直整合，自家芯片配自家模型协同进化。技术亮点：自研静态时序分析 (STA) 引擎与商业工具高度相关却快 1000x，足以支撑外层 RL 优化；AI 排布出的版图呈现有机弯曲、缩短走线，引擎师初见震惊。可操作观察：哪怕给前沿模型芯片带来 1% 性能提升，规模化收益就极可观，因此自动化 + 计算就是新的可扭曲的杠杆。

### [Sequoia Capital — Inside the Rise of Autonomous AI Hackers: XBOW's Oege de Moor](https://www.youtube.com/watch?v=eHsr1Fl2jNA)
- 9m · 发布 May 06 · 字幕：en (auto) (youtube_subtitles)
- **TL;DR**：Oege de Moor 在 AI Ascent 2026 用 1575 年长篠之战类比当下网络安全：装备 AI 的一方将通吃。XBOW 仅靠黑盒访问，半年内冲到 HackerOne 全球第一，3,000 美元成本就拿下 Bing Image Search 的 RCE 漏洞，输入只有一个 URL。他披露关键技巧"模型合金"——每一步在 Sonnet 4 与 Gemini 2.5 之间随机切换，效果显著优于任一单模型；外推 GPT-5 还能再提升 3x。对比读源码的白盒工具，XBOW 直接给出真实可利用性与影响半径，而 CVE 公开到野外利用的间隔已经"转负"，多数漏洞在 CVE 发布前就被利用。结论与可操作观察：前沿实验室必须放下顾虑、把网络安全能力拉满；防御方应主动用 AI 攻击自家系统抢先发现漏洞；6–9 个月窗口后，开权重模型会追平闭源，所有人——包括恶意行为者——都会拿到同等武器，必须现在动手修。

### [Sequoia Capital — Why the Brain Computes 1,000,000x More Efficiently Than A GPU: Unconventional AI's Naveen Rao](https://www.youtube.com/watch?v=Zw1J5pJJMGw)
- 14m · 发布 May 06 · 字幕：en (auto) (youtube_subtitles)
- **TL;DR**：Naveen Rao（前 Mosaic ML / Databricks AI 负责人）以神经科学家身份创立 Unconventional AI，主张 80 年前为通用计算而设的数字抽象不再适合"智能"这个目标。算账：全球 80 亿人脑共耗 160 GW；目前世界总电力约 9,000 GW，未来 2–4 年 AI 训练/推理就会撞上电力墙——卫星、聚变都能补，但物理极限不会让步。GPU 这十年更便宜更密集，但每 FLOP 实际能耗几乎没改进，根因是 von Neumann 架构在内存与算单元间反复搬数据。生物给出的"存在性证明"：哺乳动物、昆虫都用毫瓦完成复杂行为，今日最先进 GPU 距热力学智能/瓦极限仍差约 3 个数量级。Unconventional AI 的方案：放弃矩阵乘法主导，把状态与计算融合在非线性动力系统里——状态在时域演化即等价计算，无 von Neumann 取数瓶颈。展示了"图像类别在状态空间中聚类、自然演化中相互过渡"的雏形 demo，并仅用 6 个月就完成 tape-out，因为 AI 自己加速了芯片设计。可操作观察：能耗效率已是新主战场，不仅是堆 GW，而是要换计算物理基底。

### [Sequoia Capital — Starcloud's Philip Johnston: Why the Cheapest Compute Will Be in Space](https://www.youtube.com/watch?v=94b6i5jI1nE)
- 11m · 发布 May 06 · 字幕：en (auto) (youtube_subtitles)
- **TL;DR**：Starcloud 创始人 Philip Johnston 在 AI Ascent 2026 论证：未来 AI 算力的最廉价处是太空。Starcloud-1 卫星已搭载五块 NVIDIA GPU（含 H100），首次在轨训练 nanoGPT、运行 Gemini 与 SAR 推理，破除"前沿数据中心 GPU 在空间会因热耗散与辐射 bit-flip 失效"的旧共识。能源经济学上：地面太阳能项目三大成本分别是许可土地、电池储能、电池板；在轨这三项成本几乎归零——无土地、24/7 太阳照射、单平方米发电是地面 8 倍——只剩发射成本，盈亏平衡点为约 500 美元/公斤，相比当下还需 10x 下降，但 Starship 设计目标 10–20 美元/公斤。已向 SEC 申报 88,000 颗卫星星座，每颗 200 千瓦，合计 20 GW 推理产能；散热靠 Stefan-Boltzmann 定律，温度提到 80°C 即可让辐射器面积近乎减半，与 Nvidia 合作的"Space Ruben"芯片就是为高温运行设计。可操作观察：5 GW、4 km×4 km 在轨数据中心 15 年内不现实，但中短期定位在推理工作负载，是 AI 基础设施竞赛的实质新前线。

### [Sequoia Capital — Why Data Is the Real AI Bottleneck: Flapping Airplanes' Ben and Asher Spector](https://www.youtube.com/watch?v=ZBpY7MEra9w)
- 9m · 发布 May 06 · 字幕：en (auto) (youtube_subtitles)
- **TL;DR**：Spector 兄弟在 AI Ascent 2026 推出新 AI 实验室 Flapping Airplanes，论点是 AI 下一阶段的胜负在"数据效率"。当前 LLM 真正万亿美元级用武之地——搜索与编码——恰好是数据最丰富的两类任务，互联网即语料、合成数据无限；而经济中的"长尾"——机器人、量化交易、科学发现以及成千上万的中小垂直工作流——本质上都是数据稀缺。为什么计算比数据更易扩展：Hyperscaler 几年内能堆几个数量级算力，但数据要"逐家公司谈许可、扫垒货书店"，新进入者很难复制。把模型做到数据效率提升 1000x，意味着部署难度也降 1000x，并打破"数据壕沟=只有少数公司能训前沿模型"的格局，决定 AI 经济的参与者范围。可操作观察：Flappy 自研 GPU 原语，绕过 PyTorch 抽象去做小批量、深度流水线的 hogwild 训练循环，这些算法在现有框架里跑起来是 asymptotically inefficient，但与数据效率算法天然耦合——系统创新与算法创新需共同推进。

### [Sequoia Capital — ElevenLabs' Mati Staniszewski: How Voice Becomes the Interface for AI](https://www.youtube.com/watch?v=ZNzYN2jyVTU)
- 26m · 发布 May 06 · 字幕：en (auto) (youtube_subtitles)
- **TL;DR**：ElevenLabs CEO Mati Staniszewski 在 AI Ascent 2026 复盘：4 年公司、约 400 人、年收入超 4 亿美元，是少数没走"先募几亿美元再谈商业化"路线的前沿模型公司。起点是波兰从小到大用单声道男声配所有外语电影的别扭体验，他与儿时挚友 Piotr 押注音频领域——2022 年彼时 AI 圈还在追文本与视觉，音频被视为小众，研究者不多反成机会。技术路径：音频模型更小，所需算力远低于 LLM；数据真正瓶颈在转录与标注，他们靠自建数据飞轮+架构创新解决。商业打法：从第一天开始收费、远程团队保持效率，让公司能在没有持续巨额募资的情况下成为前沿实验室。Voice Agent 现已超越客服场景：替乌克兰政府做战时公民信息热线（前线、教育、防空）、帮 Masterclass 把 Gordon Ramsay/Chris Voss 这类静态课程升级为可对话互动版。可操作观察：Mati 把"情商"——能识别对方情绪并相应改变语调——视为下一个前沿；声音比文本更容易跨进 robotics 与端侧设备；垂直化（医疗 vs. 金融 vs. 教育）比通用模型层更出 moat，专注研究 + 用户偏好回流的飞轮才是真正壁垒。

### [a16z — NASA, SpaceX, Blue Origin, and The Race to The Moon | Jared Isaacman on The a16z Show](https://www.youtube.com/watch?v=6cCWrrQp1v4)
- 28m · 发布 May 06 · 字幕：en (auto) (youtube_subtitles)
- **TL;DR**：NASA 局长 Jared Isaacman 在 a16z 美国动态主义峰会上做主题发言并答 Morgan Brennan 提问，把"重返月球"重新框架成国家安全议题：若中国先在月球高价值地点建基地，美国不可能一直"仰望"。资源端透露：《Working Families Tax Credit Act》给 NASA 注入约 100 亿美元，明确为重返月球与月面基地服务。诊断旧 NASA 病灶：长期外包核心能力、产业整合、向选区利益妥协导致 SLS 三年半才发一次、helium 与 hydrogen 漏气反复出现、51 个核推进项目从未上天，孩子也不再 cosplay 宇航员。改革路径：把 SLS 标准化降本，把 Artemis 程序回到 Mercury / Gemini / Apollo 那种迭代式打法——在 2027 插入额外任务保持发射 muscle memory，并先在 LEO 与登月舱供应商对接验证、再下到月面，让风险事件离地球"几小时而非几天"。引入两家登月舱供应商保留竞争压力。可操作观察：他给行业的 demand signal 极清晰——商业月面运输、月面通信、核推进与 Mars 样本返回；2028 年 Titan octacopter 与 Europa Clipper 正在搜索生命，一旦带回火星微生物样本就会把"宇宙是否有生命"从信仰命题变成可证伪的科学结论；Mars 真正使命是确认人类不再是地球这一个篮子里的鸡蛋。

### [a16z — Building Blackstone, Backing Costco, and Working with Munger | Tony James on The a16z Show](https://www.youtube.com/watch?v=Z4i1adGvD2A)
- 1h23m · 发布 May 05 · 字幕：en (auto) (youtube_subtitles)
- **TL;DR**：a16z 节目 David Haber 与前 Blackstone 总裁兼 COO Tony James 长聊 50 年华尔街生涯。1975 年加入 DLJ 时只有 5 人投行团队、两年没做过一单生意；他赌"早期阶段进场+ground floor"复合效应，在 25 年里把 DLJ 做到全美第五大证券公司、年增超 15%。1980 年 KKR 对 Houdaille 的 LBO 让他意识到："DLJ 任何资源都比不过 majors，但 LBO 是新赛道"，于是用自有资本从 merchant banking 切进私募，成为 DLJ 的第二曲线。Costco Series A：他主导投资 Jim Sinegal，并与 Charlie Munger 一起在 Costco 董事会共事 30+ 年，得到的是"focus, focus, focus；细节零失误；为长期建造"——Munger 教他如何在常识与逆向思维之间切换。1996 年加入 Blackstone，与 Steve Schwarzman 形成主导/补位互补搭档，把 AUM 从 140 亿美元做到接近 1 万亿。投资委员会文化：他坚持每个决策都靠 robust debate 而不是 consensus 兜底，团队 leader 必须能在初级人面前接住所有挑战。规模 moat：上市后 Blackstone 把 retail distribution（财富管理渠道、永续基金）作为新护城河，从机构 LP 拓展到全球零售资金，而非只靠 IRR。可操作观察：他给年轻人的建议——挑成长曲线最陡的、文化最对齐的早期组织进场，承担超出资历的责任，胜负由复利说了算；接班一定要早做、要让位，能不能放手是 founder 与 CEO 的最难考题。

### [Sequoia Capital — Anthropic's Boris Cherny: Why Coding Is Solved, and What Comes Next](https://www.youtube.com/watch?v=SlGRN8jh2RI)
- 24m · 发布 May 04 · 字幕：en (auto) (youtube_subtitles)
- **TL;DR**：Claude Code 创造者 Boris Cherny 在 AI Ascent 2026 自述：作为写过 TypeScript 教科书的"工程师中的工程师"，他在 2026 年至今没有手写过一行代码，每天从 iOS 上发出几十个 PR——多数已经在 CLI、Co-work（computer use）、IDE 之间穿梭运行。Claude Code 起源于 2024 年底 Anthropic Labs 内部判断的"product overhang"：当时业界主流还停留在 IDE Tab 自动补全（type-ahead），但 Sonnet 3.5 已能闭环完成多步工作，Boris 团队赌"loop（让模型迭代到目标达成）才是未来"，于是搭原型 6 个月没有 PMF 也撑住。他直言"对我写的代码而言，编程已被解决"，并预测一年后 Claude Code 自身可能只剩 100 行代码。对创业者的可操作观察：AI 让"流程驱动型 moat"和"知识复杂度 moat"贬值——Claude 4.7 给定目标就能 hill-climb 任何工作流；而真正还在的护城河是网络效应、规模经济、被锁定的资源。结论：未来 10 年颠覆型创业公司数量会再多 10x，因为大公司被既有流程和员工再培训拖累，"AI-native from day one"的小团队反而可与之正面对刚；MCP / 计算机操作把组件层抹平，关键是把模型放进 loop。

### [a16z — Digital Freedom, AI Regulation, and the Fight for the Western Internet | The a16z Show](https://www.youtube.com/watch?v=fUI0CNg1hCc)
- 22m · 发布 May 04 · 字幕：en (auto) (youtube_subtitles)
- **TL;DR**：a16z American Dynamism Summit 上 Katherine Boyle 与美国国务院公共外交副国务卿 Sarah Rogers 对谈，把"言论自由"与"AI 监管"绑在同一战略议题。Rogers 把过去 GEC 等向 Twitter / Meta 私下递删除清单的机制（Murthy 案争议）改组为"数字自由办公室"，转向透明、和解与表达自由作为公共外交主轴。她指出欧盟数字服务法、英国对"侮辱政客 / 亵渎宗教"的检控、以及全球营收 6% 罚款条款，是把欧式审查通过跨境互联网外溢到美国平台，还成了美国本土游说团体的"试管"。她引用 Tyler Cowen 的"AI with a Western soul"概念：未来 AI 是最强软实力工具，必须在全球扩散基于自由开放价值的西方 AI 栈，否则就让威权模型先占信息环境。可操作观察：政府不应直接规定平台立场，但应在法律激励上偏向"viewpoint neutrality"（容许针对垃圾、色情、外国 provenance 的非观点性过滤），并对外国官员胁迫美国公司（援引 Thierry Breton 信件）施加制裁；对欧盟 AI Act 等"安全"法规，国务院在 Rubio 主导下转为强力施压而非追随。

### [20VC — Shopify CEO on How AI is a Scapegoat for Mass Layoffs & Trump Derangement Syndrome in Canada](https://www.youtube.com/watch?v=e4pUgXxCwI0)
- 1h20m · 发布 May 04 · 字幕：en (auto) (youtube_subtitles)
- **TL;DR**：20VC 与 Shopify 创始 CEO Tobi Lütke 长聊，市值 1,600 亿美元、年收入 70+ 亿美元、AI 已贡献 50%+ Shopify 代码这家公司怎么把 AI 内嵌到日常。Tobi 自承是"怕输型"创业者，主张做公司的人是 fundamentally crazy 的人，CEO 必须像放热反应一样向组织持续放出能量与方向；他不看股价，也不允许指标短视绑架公司——上市的真正好处是给长期主义提供"奢侈品"。对宏观与政治少见地直白：Canada 拥有未来 20 年所需所有矿产却选择不挖，是把社会"niceness"过拟合到不愿建任何东西的程度；他批评 Carney 演讲虽好但脱离地面真相，并直言加拿大版"Trump derangement syndrome"在挤掉理性辩论。对欧洲：建议把私有产权与建造权放回中心，否则会陷入 irrelevance。对中国威胁：他认为真正可怕的不是产能而是中国制造业 + AI 的复合速度，西方需要靠"council of models（中、德、法、美各国模型互相辩论）"来对抗信息战与诈骗。AI 与组织：Shopify 取消 AI 概念股式炒作，强调"AI 是大量裁员的替罪羊"——真正发生的是岗位形态变化；Shopify 内部最资深工程师今年几乎不再写代码，新的主导岗位是"会指挥 swarm of agents"的工程经理；他们有一个自己取名为 River 的 AI 工程师；自 2025 年 12 月 Opus 发布起"一切都变了"。可操作观察：建议自己孩子是否上大学要问"那个学位是入场券还是求知"，前者已经几乎被 AI 抹平。

## 📈 公开市场 (Bg2Pod / All-In)

### [All-In — Elon’s Anthropic Deal, The Next AI Monopoly?, “FDA for AI” Panic, Trading the AI Boom](https://www.youtube.com/watch?v=10MdOvK-aG4)
- 1h22m · 发布 May 08 · 字幕：en (auto) (youtube_subtitles)
- **TL;DR**：All-In besties（Chamath / Sacks / Brad Gerstner，Friedberg 缺席）以本周 SpaceX–Anthropic 算力合作（"Elon Web Services"）和 a16z 主导的 Anthropic 巨额 round 切入：Anthropic 营收增长曲线被几位反复称为"史上最快的企业 SaaS 之一"，2026 年起跳呈类垄断速率。是否会变成下一个标准石油？Sacks 与 Brad 倾向"早期信号但赢家会有 2-3 个并存"，Chamath 持更谨慎的"现在欢呼太早"，并指出 Magnificent 7 内部 Google / Amazon 受益、Meta / Microsoft 短期被抛盘，反映市场怀疑 Anthropic-OpenAI 双寡头的资本开支吃法是否能覆盖收入。SpaceX IPO 估值在私下被讨论为远超 1 万亿美元，Starlink 与算力合同在重塑估值锚。AI 监管：白宫内部"FDA for AI"派系据称由 OSTP 圈和部分 Hill 共和党人推动，企图模仿药品审批流程；几人一致反对，认为模型能力不能被预先许可证锁，正确路径是事后追责 + viewpoint neutrality。但他们承认科技领袖在传播 AI 正面收益（教育、医疗、慈善）方面不及格，导致民众转向 70% 反 AI 立场，舆论真空被监管派填满。市场与经济：Brad 给当前美股环境打 A，主张坚持当前关税与减税框架；Trump 14 个月内重塑了美国相对于中国的竞争位置，"现在不要换马"。可操作观察：1) AI 巨头若不主动建设普惠叙事（healthcare、education、giving），监管化是必然；2) "几个赢家通吃"的预期已经在改变 hyperscale 资本开支配置（Google / Amazon vs Meta / Microsoft）；3) SpaceX-Anthropic 是云计算第三轨被打开的信号。

## 🌏 中文科技 (xiaojunpodcast / 硅谷101)

本周暂无新集。

## 🏛️ 公司深潜 (Acquired)

本周暂无新集。

## 本周跨集主题观察

- **Sequoia AI Ascent 2026 集中放出 6 家硬核基础设施新公司，方向高度一致——挣脱 von Neumann 与单一 GPU 抽象**：本周 AI Ascent 2026 同一天发布的 Recursive Intelligence（AI 设计芯片）、Unconventional AI（非线性动力学计算）、Starcloud（在轨数据中心）、Flapping Airplanes（数据效率）、XBOW（自主黑客）、ElevenLabs（音频前沿）共同指向：算力的下一阶段不是单纯堆 GW，而是同时在物理基底、数据效率、空间能源与多模态前沿上分头突破。（来源：https://www.youtube.com/watch?v=K05Dh-QjM8c、https://www.youtube.com/watch?v=Zw1J5pJJMGw、https://www.youtube.com/watch?v=94b6i5jI1nE、https://www.youtube.com/watch?v=ZBpY7MEra9w、https://www.youtube.com/watch?v=eHsr1Fl2jNA、https://www.youtube.com/watch?v=ZNzYN2jyVTU）
- **“tokens 即将超过 salaries” 从口号变成本周财报现实**：Cliff Weitzman 在 20VC 直言 Speechify 很快月度 token 支出超过工资支出；20VC SaaStr 拆 Mag7 财报指出 7,000 亿美元 AI capex 已吞掉 hyperscaler 自由现金流；Boris Cherny 自述 2026 不再手写代码、Tobi Lütke 披露 Shopify 50%+ 代码由 AI 生成、最资深工程师今年没写过代码——支出结构与岗位结构同时在重写。（来源：https://www.youtube.com/watch?v=HLmo450GSPA、https://www.youtube.com/watch?v=i98P2wodb10、https://www.youtube.com/watch?v=SlGRN8jh2RI、https://www.youtube.com/watch?v=e4pUgXxCwI0）
- **“AI with a Western soul” 与 AI 公众舆论之争，被三条不同立场的播客同时挑明**：a16z 平台同时上线两段对谈：Ben Horowitz 引盖洛普数据“中国 70% 民众乐观、美国不到 30%”定性为最大威胁；公共外交副国务卿 Sarah Rogers 把欧盟数字服务法、6% 全球营收罚款定性为对美 AI 出口的实际审查；All-In besties 复盘白宫“FDA for AI”派系并承认科技领袖在传播 AI 正面收益（医疗、教育、慈善）方面 D 减——三家不同语境一致认为：监管与叙事是 AI 西方阵营的真正风险，而不是模型能力。（来源：https://www.youtube.com/watch?v=X9k53P-2SOg、https://www.youtube.com/watch?v=fUI0CNg1hCc、https://www.youtube.com/watch?v=10MdOvK-aG4）
- **经典 scaling 与 AI-native 组织设计在两端被同时复盘——“Founder mode”降温、IC 时代回归**：Sequoia 节目里前 Twitter CEO Dick Costolo 直接给出反 founder-mode 的 scale-up 操盘手册（DRI、bias to yes、fire fast 但不刻薄、9:30 PM 工程层踱步）；Tony James 在 a16z Show 复盘 50 年 DLJ → Blackstone 的渐进式建造；同时 Boris Cherny 与 Tobi Lütke 把 AI 时代的组织新范式具像化为“agent kernel 加 IC 集体替代中间管理层”，与 SaaStr 节目讨论 Brian Armstrong“经理终结论”互相印证。（来源：https://www.youtube.com/watch?v=Kw5hhIsw-wQ、https://www.youtube.com/watch?v=Z4i1adGvD2A、https://www.youtube.com/watch?v=SlGRN8jh2RI、https://www.youtube.com/watch?v=e4pUgXxCwI0、https://www.youtube.com/watch?v=i98P2wodb10）
- **国家级硬资产竞赛（月球、太空数据中心、芯片自主）成为新一轮投资母题**：NASA 局长 Jared Isaacman 用 100 亿美元月球预算与 Artemis 节奏改造把月面定义为国家安全前线；Starcloud 把 88,000 颗在轨卫星 + 20 GW 推理产能交付 SEC 申报；Recursive Intelligence 把芯片设计自主能力描述成 TSMC 时代的下一代杠杆——基础设施竞争从超大规模 GPU 集群延伸到月面、低轨、芯片设计这三条新供应曲线。（来源：https://www.youtube.com/watch?v=6cCWrrQp1v4、https://www.youtube.com/watch?v=94b6i5jI1nE、https://www.youtube.com/watch?v=K05Dh-QjM8c）

## Coverage Notes

- 本周未发布：No Priors、Bg2Pod、xiaojunpodcast、硅谷101、Acquired
- 字幕获取：本周 18 条新集全部成功拿到自动英文转写，无失败记录。
- 硅谷101 (UCYS_TvKWQbN7a5mhagWFEjg) 频道 RSS 本周返回空（channel_fetch.py 已记录 stderr），频道本周未发布新集，与失败无关；其余 4 家频道确实本周静默。

---

## 相关细分报告

- [AI · P9bsDAdW6fo](/reports/podcast/2026-W19-ep-ai-P9bsDAdW6fo/)
- [AI · sRKBGVFVYAw](/reports/podcast/2026-W19-ep-ai-sRKBGVFVYAw/)
- [Public Markets · 10MdOvK-aG4](/reports/podcast/2026-W19-ep-public_markets-10MdOvK-aG4/)
- [VC · 6cCWrrQp1v4](/reports/podcast/2026-W19-ep-vc-6cCWrrQp1v4/)
- [VC · 94b6i5jI1nE](/reports/podcast/2026-W19-ep-vc-94b6i5jI1nE/)
- [VC · e4pUgXxCwI0](/reports/podcast/2026-W19-ep-vc-e4pUgXxCwI0/)
- [VC · eHsr1Fl2jNA](/reports/podcast/2026-W19-ep-vc-eHsr1Fl2jNA/)
- [VC · fUI0CNg1hCc](/reports/podcast/2026-W19-ep-vc-fUI0CNg1hCc/)
- [VC · HLmo450GSPA](/reports/podcast/2026-W19-ep-vc-HLmo450GSPA/)
- [VC · i98P2wodb10](/reports/podcast/2026-W19-ep-vc-i98P2wodb10/)
- [VC · K05Dh-QjM8c](/reports/podcast/2026-W19-ep-vc-K05Dh-QjM8c/)
- [VC · Kw5hhIsw-wQ](/reports/podcast/2026-W19-ep-vc-Kw5hhIsw-wQ/)
- [VC · SlGRN8jh2RI](/reports/podcast/2026-W19-ep-vc-SlGRN8jh2RI/)
- [VC · X9k53P-2SOg](/reports/podcast/2026-W19-ep-vc-X9k53P-2SOg/)
- [VC · Z4i1adGvD2A](/reports/podcast/2026-W19-ep-vc-Z4i1adGvD2A/)
- [VC · ZBpY7MEra9w](/reports/podcast/2026-W19-ep-vc-ZBpY7MEra9w/)
- [VC · ZNzYN2jyVTU](/reports/podcast/2026-W19-ep-vc-ZNzYN2jyVTU/)
- [VC · Zw1J5pJJMGw](/reports/podcast/2026-W19-ep-vc-Zw1J5pJJMGw/)
