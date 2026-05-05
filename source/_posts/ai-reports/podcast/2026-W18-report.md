---
title: '[Podcast·2026-W18] Report'
date: '2026-05-03 12:00:00'
permalink: /reports/podcast/2026-W18-report/
hidden: true
categories:
  - AI报告
  - Podcast
---
# YouTube Podcast 周报 · 2026-W18 (Apr 27–May 3)

> 覆盖 11 个订阅频道 · 本周共 16 条新集 · 字幕覆盖 15/16

## 🤖 AI 访谈 (Dwarkesh / No Priors / Latent Space)

### [No Priors — Baseten CEO Tuhin Srivastava on Custom Models, and Building the Inference Cloud](https://www.youtube.com/watch?v=XAbKflCncDo)
- 43m · 发布 May 1 · 字幕：英文自动
- **TL;DR**：Baseten 创始人兼 CEO Tuhin Srivastava 复盘公司过去 12 个月 30× 增速、年收入有望破 10 亿美元的 inference 云生意。他主张推理是 AI 的"最后市场"——应用层不会被基础模型吃掉，因为有专属用户信号的公司能把价值编译进 workflow，并通过 post-training 训练垂类专用模型（举例 Abridge 与客服流）。容量是 #1 焦虑：H100 用了 4.5 年价格还在涨，预计实际寿命接近 9 年；现在能签到 2028 年 1 月的合约容量，但市场迭代太快，长协反而压定价。开源讨论上，他直言中国实验室一年内冒出至少 5 家做开源模型而美国连一家像样的都难，正确做法是"把 DeepSeek 当 Meta 出品来用"，否则就是只见树不见林。多 chip 与多模型未来是必然方向，但当前真正的护城河在系统/runtime 层而非模型本身：KV cache 实现比外界想象的还原始，scale、安全、性能层面仍有大量基础工作。可操作观察：所有 SaaS 想突围必须找到自家产品的"智能插入点"产生终端用户增量价值，套聊天框不再有效。

### [Latent Space — DeepSeek-V4: Towards Highly Efficient Million-Token Context Intelligence](https://www.youtube.com/watch?v=TJxziFGc3HA)
- 47m · 发布 Apr 29 · 字幕：英文自动
- **TL;DR**：Latent Space 直播拆解 DeepSeek-V4 技术报告，核心是 HCA（Heavily Compressed Attention）——在过去半年 MLA、DeepSeek 3.2 等渐进式优化基础上再压一刀，把百万级长 context 的推理成本拽下来。嘉宾观察：中国开源阵营基本统一到 MLA 路线（Qwen 等接连跟进），西方开源模型则普遍走"3/4 sliding window + 1/4 full attention"的混合注意力，节省幅度与 MLA 大致相当；HCA 把这场竞赛又向前拉了一格。工程层面 DeepSeek 把前向/反向 kernel 写在 Triton 衍生的 Talang 上并开源，明显在"碰瓷"Nvidia——他们直白吐槽 cuBLAS 不能稳定做 batch invariant inference（temperature=0 跨硬件结果一致）。AMD 与 Nvidia 的 InfiniBand 互联仍在 kill 训练 run，多家训练团队私下抱怨。论文措辞从"我们确认"退回到"我们相信"，反映 V4 加入了若干尚未严格 ablate 的稳定性 trick。可操作观察：长上下文成本下降并非来自单点突破，而是注意力压缩 + kernel 自主可控 + 稳定性兜底"三件套"叠加；做闭源对手如想跟进 1M context 需同时复刻 HCA 思路与 Triton 级 kernel 自研能力。

### [Dwarkesh Patel — How GPT-5, Claude, and Gemini are actually trained and served – Reiner Pope](https://www.youtube.com/watch?v=xmkSf5IS-zw)
- 2h14m · 发布 Apr 29 · 字幕：英文自动
- **TL;DR**：Reiner Pope（前 Google TPU 架构师、MatX CEO）在 Dwarkesh 新搭的黑板棚里用 roofline 模型拆解前沿 LLM 训练与推理的真实成本。核心结论：Claude / Codex / Cursor 的 Fast Mode 用 6× 价钱换 2.5× 速度，本质是缩小 batch size——内存带宽决定每 token 读权重的时间，batch 越大越摊薄成本但单请求延迟升高，理论上"100× 慢模式"也能成立。MoE 部署上 Blackwell NVL72 的 all-to-all 拓扑恰好匹配 DeepSeek 类 256 专家分到 64 GPU 的稀疏路由；跨 rack 扩展会撞带宽墙，专家并行加 pipeline 微批仍是最优解。Prefill 与 decode 严重不对称：decode 是 memory-bound 单 token 串行，prefill 是 compute-bound 多 token 并行，所以 API 输出价比输入贵 3–5×，还能从中反推 KV head 数与 d-head 维度。结尾介绍 2017 年 RevNets 思路——可逆残差网络在反向传播时即时重算激活，用算力换内存，与 KV cache "用内存换算力"对称相反，在当前硬件上仍属有利交易。可操作观察：通过 API 输入/输出价差与速度档位可外推厂商真实推理 batch 与硬件利用率，是判断是否在补贴定价的硬指标。

## 💰 VC 机构 / 访谈 (a16z / Sequoia / 20VC)

### [20VC — Inside Clay's Sales Playbook | Becca Lindquist](https://www.youtube.com/watch?v=d_nWswprCqk)
- 1h14m · 发布 May 2 · 字幕：英文自动
- **TL;DR**：Clay 销售一号位 Becca Lindquist 拆解他们 100M+ ARR 阶段的 GTM playbook。最反共识的设计是 Quota：OTE 比例固定为 7:12——故意把基线压低，把多数收入挪到超额奖金，意图把组织按"赢家文化"塑形：60% 销售必须超 100% 配额、80% 超过 80% 才算健康。招聘只问一题——这个候选人聊产品 widget，还是聊"如果我把它装进 JPMC 真实工作流会发生什么改变"，后者才录用；早期阶段则只要 "press send" 的人。她自陈与同事 Todd 的良性竞争（Heap 时期）是文化原型：互相帮，但每人都想压对方一头。Clay 把每个销售强制变成 LinkedIn 网红——附 demo 案例：blue check + 粉丝量做 LinkedIn outbound 时，CEO 回复率从普通销售的 1/10 拉到 9/10，这是其漏斗顶端最大乘数。她也分享 AI 销售工具的售卖反模式：少讲"art of possible"，要直接搬出客户公司具体业务影响数字，否则对面买家不为愿景买单。可操作观察：销售组织若想复刻 Clay 增速，必须同时改 OTE 结构、把 ICP 思考力作为 hiring rubric、并把每个 AE 的个人 IP 当成第一渠道，少做 SDR 拉号工厂。

### [Sequoia Capital — Waymo's Dmitri Dolgov: 20 Million Rides and the Road to Full Autonomy](https://www.youtube.com/watch?v=I_0Kuf6Aa2c)
- 27m · 发布 May 1 · 字幕：英文自动
- **TL;DR**：Waymo 联席 CEO Dmitri Dolgov 在 Sequoia AI Ascent 2026 复盘 20 年自动驾驶长征。最关键数字：累计 2000 万次全无人驾驶里程，其中 1000 万发生在过去 7 个月——曲线进入指数段。Waymo 已在 11 城运营，靠的不是"快速试错"而是把安全设为不可让步的地基，扛过了 2016–17 AV hype 周期与之后的全行业溃退。技术路线上 Dolgov 明确反对"纯端到端就是答案"——大模型 vanilla end-to-end 离 superhuman safety 与亿英里规模部署还差很远，Waymo 选择在学习到的表示之上叠一层"结构化的物化中间表示"，既保留 end-to-end 的可扩展性又给安全验证留接口。今年新祭出的 Waymo Foundation Model 是一个多模态 world model，与 driver / simulator / critic 协同构成 evaluation 闭环，这是他们认为通往 full autonomy 的核心动力。可操作观察：自动驾驶不是规模上限被技术决定的市场，而是被安全证据曲线决定的——拿不出多 9 安全数据的玩家无法进城；竞争对手只复刻 end-to-end 而不补结构化中间层，会卡死在最后一英里。

### [Sequoia Capital — OpenAI's Greg Brockman: Why Human Attention Is the New Bottleneck](https://www.youtube.com/watch?v=bBS93A0BeNI)
- 28m · 发布 Apr 30 · 字幕：英文自动
- **TL;DR**：OpenAI 总裁 Greg Brockman 在 Sequoia AI Ascent 给出一组关键判断：到 AGI 还差 20%、ChatGPT 周活已破 10 亿、OpenAI 永远不会有"够用"的算力。他把过去 4 个月内部 Codex 的代码生成占比从 12 月的 20% 抬到现在的 80% 当作主轴指标，并宣布 Codex 已经"出软件工程师圈"——所有用电脑工作的人都在用，本周新发布的 Chronicle 工具进一步把 Codex 嵌入工作流。他认为下一个真正的稀缺资源不是 GPU 而是人类注意力：每秒能审多少 agent 输出、决定多少分支才是放大瓶颈。AI 在科学上的延伸最让他兴奋——已经有个人用户用 GPT-5 Pro 单兵解未解数学题，相当于一个人顶过去整支团队，他举 AlphaGo 第 37 手的先例预言这会让基础科学更有趣而非边缘化人。安全侧他点名要扩大 Trusted Access for Cyber 计划，呼吁更多负责任的研究者加入对抗性测试，承认下一年的能力曲线会"狂野到难以预期"。可操作观察：当 agent 工作量已成为 OpenAI 内部正式 KPI，企业再不重设"决策与审阅工时"为新瓶颈，将无法吸收下一波模型升级。

### [Sequoia Capital — This is AGI: Sequoia AI Ascent 2026 Keynote](https://www.youtube.com/watch?v=LRo33rnv6rQ)
- 32m · 发布 Apr 30 · 字幕：英文自动
- **TL;DR**：Pat Grady、Sonya Huang、Konstantine Buhler 三位 Sequoia 合伙人开场抛出本届会议主论点：AI 不是另一波"通信革命"（互联网、移动），而是"计算革命"——是真正的"汽车而不是更快的马"，因此长周期 agent 将重构每一层工作流，未来十年对认知劳动的冲击会复刻工业革命对体力劳动的改造（今日 99%+ 的物理工作已由机器完成）。他们提出 MAD 框架：Modes（多模态模型变体）、Affordances（工具/接口）、Diffusion（扩散到日常工作）。三人公开反驳"SaaS 已死"——恰恰相反，agent 数量增长意味着十年来为人类构建的 terminal、iMessage、Slack、computer use 等工具全部"二次复用"，工具价值会爆炸；agent 的 capability 来自模型+工具，但 persistence 来自 harness（任务态记忆+反馈循环），这是 2026 年新质变。他们用 Pythagoras "人是万物的尺度"收尾：AI 能做工作，但只有人际连接赋予工作意义。可操作观察：押 agent 应用层应分别投资三件套（agent harness、工具集成、模型供给），低估其中任何一环都会被对手通过 MAD 飞轮反超；卖给"agent 用户"的工具市场是被严重低估的下一个 SaaS 浪。

### [Sequoia Capital — Robotics' End Game: Nvidia's Jim Fan](https://www.youtube.com/watch?v=3Y8aq_ofEVs)
- 20m · 发布 Apr 30 · 字幕：英文自动
- **TL;DR**：Nvidia 具身智能负责人 Jim Fan 抛出"机器人 endgame"框架：机器人将复制 LLM 三段路径——pre-training → reasoning → auto research——但底层替换：用 world model 取代 language model、用 egocentric video 取代遥操作、用 world action model 取代 VLA。他用 V3 视频模型证据说明 world model 已内化重力、浮力、光线折射等物理常识；甚至能在像素空间中前向模拟解迷宫，意味着"视觉规划"作为 emergent ability 已经出现。数据飞轮上他给出三层结构：底层是低成本可穿戴外骨骼采集的 zero teleoperation 数据；中层是 Tesla FSD 类隐式上传——驾驶者每次开车都在贡献最大体量的物理数据流；上层提出"iPhone = 口袋世界扫描器"，用 3D wall-scan + 经典物理模拟器把任意房间转成可交互的 digital cousins，破解"百万环境训练需百万机器人"魔咒（real-to-sim-to-real）。他用 AlexNet 2012 → AI Ascent 2026 这 14 年长度的指数曲线推外，给出 95% 置信度判断：人形机器人技术树将在 2040 年走完。可操作观察：当下押注机器人公司应该看是否同时持有 world-model 数据闭环和 sim-to-real 工具链，而非仅炫硬件 demo。

### [20VC — Anthropic Raises $45B but Falls Short on Compute & Thoma Bravo Hand Back Medallia Keys to Creditors](https://www.youtube.com/watch?v=aXToQKc430c)
- 1h28m · 发布 Apr 30 · 字幕：英文自动
- **TL;DR**：Lemkin 与 Rory O'Driscoll 复盘三件大事：(1) Anthropic 一轮拿到 hyperscaler 注资 450 亿美元仍称算力不够——折射出当下 frontier model 玩家与"两年后才会到"的收入相比，要先押 4× 体量的 capex，软件时代 Microsoft 那种"多卖一份多赚 20 美元、不需要扩产"的资本结构已经永久消失，万一 2028 收入只到 500 亿美元就会留下 1500 亿"搁浅产能"。(2) 中国否决 Meta 20 亿美元收购 Manis，被解读为 AI 时代第一例明确国家级跨境模型并购阻拦，对全球 LP "中国敞口"心照不宣地降权。(3) Thoma Bravo 把 Medallia 钥匙还给债权人：仅 ~20 亿美元债务就能让 200 亿估值的 carve-out 窒息，根因是 8–9× 调整 EBITDA 的进价 + 后期 SaaS 终值打折。两人共识：late-stage PE 模型已破，VC 也在向"前 4 家拿 1B、剩下 96 家归零"的极端 power law 收敛，所以大平台越发拼命扩张。Figma / Duolingo 等 SaaS 名字被点名"agent 暂时还要用，但终局不需要"。可操作观察：LP 选 GP 应反向规避 late-stage growth + carve-out PE 仓位，AI 资本支出风险与 SaaS 终值崩塌共振时，2026 年现金流回流将集中在前 5% 头部基金。

### [Sequoia Capital — Andrej Karpathy: From Vibe Coding to Agentic Engineering](https://www.youtube.com/watch?v=96jN2OCOfLs)
- 30m · 发布 Apr 29 · 字幕：英文自动
- **TL;DR**：Karpathy 在创下"vibe coding"流行语一年后，最大新讯号是：自己作为程序员"从未像现在这么落后过"。他给出新分层——vibe coding 只是入口，真正的工程实践叫 agentic engineering，是构建在大模型之上的严肃学科。他强调 LLM 不应被类比成"动物"——而是"ghost"，jagged、概率性、被召唤出来的实体，工程师必须为它设计与人工不同的协作范式。代码质量是他重点吐槽点：实际拉出 agent 写的代码经常"看了想犯心脏病"——bloated、复制粘贴、abstraction 脆弱，能跑但不优雅，根因是 RL 训练目标里没有 aesthetic reward，因此美学质量不会自动提升。下一阶段值得加入的 RL 环境他点出"有一个领域很有价值但暂不剧透"，并预言绝大多数任务最终都能被 verifiable 化——只是难度差异。最后他给出一个反向 bottleneck：LLM 不擅长 understanding，"导演"还是人类，你必须读懂材料才能下达高质量指令；他自己用 wiki 自动从 article 构建知识体系作为辅助。可操作观察：现在押 agent 工具应去补 RL 训练阶段缺失的"美学/可验证性奖励"和"人类理解辅助"，而不是再做一个"vibe coding 升级版"。

### [Sequoia Capital — Demis Hassabis: We're Three Quarters of the Way to AGI](https://www.youtube.com/watch?v=AFpeWo1GTeg)
- 27m · 发布 Apr 29 · 字幕：英文自动
- **TL;DR**：DeepMind CEO、2024 化学诺奖得主 Demis Hassabis 给出本届 AI Ascent 最直接的进度数：人类现在大约走完通往 AGI 路程的 3/4，2030 年前达到 AGI 是合理目标。最有"可操作含义"的预测是制药——他认为药物发现周期能从 10 年坍缩到天级；新一波科学发现的瓶颈不在工具而在人类的提问与验证速率。哲学层面他用 AlphaFold 反例：蛋白质折叠看似必须考虑水氢键的量子效应，结果一个经典 Turing 机制（神经网络）就能逼近最优——他由此推断"很多被当成需要量子计算的问题或许只需要换思考角度，就能用经典系统建模"，对量子叙事是重要 frame challenge。他把 mech interp 提到"新的工程科学"地位：AI 系统终将复杂到与人脑同级，研究模型本身将是一门正经学科，AI 也会反过来 unlock 新科学。被问玩 Civ 选哪个历史科学家组队，他选 Von Neumann——博弈论原理直接对应他对 AGI 时代决策结构的预期。可操作观察：药物管线现金流、量子计算 thesis、mech interp 工具初创应当被视为同一波 Hassabis-style 押注；他的"3/4"是公开估值锚点。

### [a16z — Box CEO on AI Agents & Why Enterprise Can't Keep Up](https://www.youtube.com/watch?v=dvVbA9OcBqs)
- 58m · 发布 Apr 28 · 字幕：英文自动
- **TL;DR**：a16z 圆桌（Aaron Levie / Steven Sinofsky / Martin Casado）拆解企业级 AI 落地为何普遍失败。Levie 描述典型死循环：董事会喊"要更多 AI"→CEO 找咨询公司做集中项目→运营不对齐→失败；同时"写得越多越不需要工程师"是反直觉的：复杂度上升让升级、停机、安全事件反而更吃懂系统的人。三人共识是企业 AI 真正的瓶颈在 integration——legacy 系统的访问控制建立在"信息会经手不同角色的人"假设上，agent 一旦绕过中间人就直接打穿权限模型，因此每一步必须显式 verification。Casado 进一步论证 "headless SaaS"不成立：openclaw 必须用 Mac Mini 是因为 iMessage 无 headless 版本，且 headless 浏览器会被网站反爬阻断，现实里 agent 必须用真实 Safari 才能跑通。Levie 强调基础技术都在迎合人类协作约束，big company 的繁琐约束正是防系统崩盘的护栏，vibe coder 没在这种环境里待过才敢说"一发即过"。可操作观察：押注企业 AI agent 工具应聚焦 access-control 重设计 + 真实终端访问能力（非 headless），而非 SaaS API 接得更多——这是 Box 自身路线的隐含解释。

### [20VC — AppLovin CEO: Why Founders Shouldn't Angel Invest & Why the Best Don't Need Mentorship](https://www.youtube.com/watch?v=dlPCz8Jwypw)
- 1h20m · 发布 Apr 27 · 字幕：英文自动
- **TL;DR**：Adam Foroughi（AppLovin CEO，1600 亿美元市值、年收 54.8 亿美元、人均 1000 万 EBITDA、80%+ 毛利）抛出一组"不被同行接受"的 CEO 教条。第一，创始人不该做天使投资——精力分散且与自家公司利益冲突；最好的创始人也不需要 mentorship，因为认知能力本身在 mentor 之上。第二，组织建模采用极简：把所有 HR/管理中间层砍光，只留"A 级 individual contributors"——会做事、不需要流程的人；leaner 组织反而把通讯耗损降到最低。第三，激励机制公开偏激进：他自己拿到任何报酬前股价必须先清门槛、再继续涨；fear of blowup 是核心 motivation，他承认在所有亲密关系里几乎从不在场。第四，2022–23 股价低谷期他刻意关闭投资者会议日程，全部精力转回内部，"convinced every day you're going down 时无法说服别人买你的股"——这是 against-textbook 的 IR 决策但奏效。第五，他对 enterprise SaaS 给出非洞悉性预言：底层应用粘性强、不会瓦解，但定价和价值结构会被 AI 重构得"面目全非"。可操作观察：早期创始人若把模仿大佬投资当成捷径，会陷入注意力分裂；正确路径是 1 件事做到统治级 + 极简组织 + 长期心理素质训练，而不是堆 LP 关系。

## 📈 公开市场 (Bg2Pod / All-In)

### [All-In — OpenAI Misses Targets, Codex vs Claude, Elon vs Sam Trial, Big Hyperscaler Beats, Peptide Craze](https://www.youtube.com/watch?v=fpC4sbawSzQ)
- 1h21m · 发布 May 1 · 字幕：英文自动
- **TL;DR**：四 besties 围绕 5 个赛道把本周宏观+科技 narrative 捋直。最重磅是 hyperscaler 资本支出：Amazon、Microsoft、Google、Meta 给出 2026 年合计 7250 亿美元 capex 指引（Amazon 2000 亿、Microsoft / Google 各 1900 亿、Meta 1450 亿），叠加 Grok、OpenAI 等私下出资，明年 AI 基建累计支出大概率破万亿，成为决定股市方向的核心变量；公司业绩 spectacular，但能不能撑住这一轮 capex 还要看 2027 年的真实收入回流。OpenAI 错过既定增长目标但 Codex 正在反超 Claude，团队认为这是产品形态切换（IDE → autonomous agent）的窗口期。Sacks 强调 mythos 等"AI 自动化网络攻击"工具不是末日武器——前沿模型既能自动写代码也能自动渗透，反过来对所有有 cursor/claude/openai 接入的公司都是新的安全收入机会。讨论 Elon vs Sam 信托诉讼时一致认为这是创始团队结构透明化的开端。Friedberg 单独深挖 retatrutide / GLP-1 类肽热潮——65 岁 dadbod 数周变 ripped 让市场重估代谢病估值，并指出脂肪与肌肉同等流失是真正风险。可操作观察：定价万亿 capex 的回流速度需要 2027 年企业 AI 渗透率与 cyber 防御预算同步上行，缺一根支柱整个 SaaS 估值体系会发生多米诺式重估。

### [All-In — CA Governor Candidate Steve Hilton on Why California is Destroying Itself & How a Republican Can Win](https://www.youtube.com/watch?v=9WQu7w1tII0)
- 1h09m · 发布 Apr 29 · 字幕：英文自动
- **TL;DR**：加州州长候选人 Steve Hilton（共和党 / 英国背景）在 All-In 直播自己的"加州破产化"诊断与处方，目前在多人初选中民调领先。财政侧他主张激进减税：年收入 10 万美元以下 0 税率、其上 7.5% 单一税率；他与 Herb Morgan 合著的四份审计报告指控加州 Medicaid 等转移支付存在系统性欺诈，主张创建州级"audit and cut off"机制——任何有重大违规嫌疑的州拨款机构资金即时切断。住房侧他给出可量化承诺：影响费（impact fees）目前已占建房成本 20% 上下，州级硬封顶 3%；并要废掉 CEQA 私人诉讼权，因为 union 等利益方借此把每个项目卡到经济不可行；他先尝试公投未筹够资金，转而走立法路径。教育侧他指出加州人均花费居首但 outcomes 垫底；治安侧 Prop 47 把 950 美元以下盗窃事实合法化的部分已被 overturn，他要继续清理"microlooting" 文化包装。可操作观察：若 Hilton 路线在 2026 中期当选并落地住房松绑（CEQA 私权 + 影响费封顶 + 工会条款改革），加州本土 homebuilder、REIT 与建材股将出现 5–10 年级别的合规成本下行窗口；同时 CA-based 州债与 Medicaid 承包股需注意"审计切断"政治风险。

## 🌏 中文科技 (xiaojunpodcast / 硅谷101)

### [xiaojunpodcast — 139.【Agent的综述】和苏煜聊Agent技术史、OpenClaw Moment、边界的消弭和社会的辐射](https://www.youtube.com/watch?v=Xxz5uh0L1mE)
- 2h18m · 发布 May 1 · 字幕：无字幕
- **TL;DR**：_基于 metadata，无字幕_  OSU 计算机系教授、NeoCognition 创始人苏煜（2025 Sloan 奖）做客小珺，长周期梳理 Agent 技术史：Logical Agent（1960–90s）→ Neural Agent（2000+）→ Semantic Parsing → Language Agent，并把"OpenClaw Moment"对标 ChatGPT Moment。访谈点出中美 Agent 扩散范式差异——中国更全民、应用层快；他披露 NeoCognition 刚完成 4000 万美元 seed，并讨论 continual learning、世界模型、GUI vs CLI 交互与 2026 年 Agent 关键瓶颈。

## 🏛️ 公司深潜 (Acquired)

本周暂无新集。

## 本周跨集主题观察

- **AI capex 与算力短缺成本逻辑全面外化**（来源：https://www.youtube.com/watch?v=bBS93A0BeNI、https://www.youtube.com/watch?v=aXToQKc430c、https://www.youtube.com/watch?v=fpC4sbawSzQ、https://www.youtube.com/watch?v=xmkSf5IS-zw）：Brockman 直言 OpenAI 算力"永远不够"，Anthropic 拿 450 亿美元仍称不足，All-In 揭出 4 大 hyperscaler 2026 合计 7250 亿美元 capex；同时 Reiner Pope 用 roofline 把推理价格还原到 batch size + 内存带宽，给整条 capex 链条一个微观可验证的成本模型。
- **Agent harness + 真实终端访问取代"接更多 SaaS API"**（来源：https://www.youtube.com/watch?v=LRo33rnv6rQ、https://www.youtube.com/watch?v=dvVbA9OcBqs、https://www.youtube.com/watch?v=96jN2OCOfLs、https://www.youtube.com/watch?v=XAbKflCncDo）：Sequoia 主旨发言强调 agent persistence 来自 harness、SaaS 不死反而工具价值爆炸；a16z 圆桌从 openclaw 必须用 Mac Mini 反推 headless agent 假设破产；Karpathy 指出 RL 缺美学/可验证奖励、人类仍是 "导演"；Baseten 把瓶颈点在 system/runtime 而非模型本身——四家共识汇成同一条工程路径。
- **AGI 进度公开计分：3/4–4/5 区间**（来源：https://www.youtube.com/watch?v=AFpeWo1GTeg、https://www.youtube.com/watch?v=bBS93A0BeNI、https://www.youtube.com/watch?v=LRo33rnv6rQ、https://www.youtube.com/watch?v=96jN2OCOfLs）：Hassabis 给出 3/4、Brockman 给出 80%——两位顶尖玩家几乎同期公开把人类离 AGI 的距离量化在同一窄区间；Sequoia 主旨直接称 "this is AGI"；与 Karpathy 谈 "agentic engineering" 形成方法论侧的回响。这是 2030 时间锚正式落入 frontier lab 共识。
- **中国开源/Agent 生态独立成轴**（来源：https://www.youtube.com/watch?v=TJxziFGc3HA、https://www.youtube.com/watch?v=XAbKflCncDo、https://www.youtube.com/watch?v=Xxz5uh0L1mE）：Latent Space 直播指出中国开源阵营基本统一到 MLA 路线、DeepSeek-V4 用 Triton 衍生 kernel 摆脱 cuBLAS 依赖；Baseten 提到中国一年内冒出 5+ 开源模型实验室；xiaojunpodcast 与苏煜从 Agent 角度补全中美扩散模式差异（中国更全民、应用层快）。整体显示中国侧在 attention 压缩、kernel 自主、Agent 应用三条线同步推进。
- **Late-stage SaaS / PE 估值体系面临重估**（来源：https://www.youtube.com/watch?v=aXToQKc430c、https://www.youtube.com/watch?v=dlPCz8Jwypw、https://www.youtube.com/watch?v=dvVbA9OcBqs、https://www.youtube.com/watch?v=fpC4sbawSzQ）：20VC 用 Thoma Bravo 把 Medallia 钥匙还给债权人 + Anthropic 450 亿仍喊缺算力的反差，论证 late-stage PE 模型已破；AppLovin Foroughi 同步预言 enterprise SaaS "粘性不破但定价价值会被 AI 重构"；a16z 与 All-In 各自从产品端补充 SaaS 价值链将向 agent 工具与终端访问能力倾斜。

## Coverage Notes

- 本周未发布：Bg2Pod, 硅谷101, Acquired
- 字幕获取失败：xiaojunpodcast Episode 139（中文播客无 YouTube 自动字幕，已按 metadata_only 模式降级生成 80–120 字摘要）

---

## 相关细分报告

- [AI · 5u7AjPardvo](/reports/podcast/2026-W18-ep-ai-5u7AjPardvo/)
- [AI · TJxziFGc3HA](/reports/podcast/2026-W18-ep-ai-TJxziFGc3HA/)
- [AI · XAbKflCncDo](/reports/podcast/2026-W18-ep-ai-XAbKflCncDo/)
- [AI · xmkSf5IS-zw](/reports/podcast/2026-W18-ep-ai-xmkSf5IS-zw/)
- [China Tech · V9eI-t3TApE](/reports/podcast/2026-W18-ep-china_tech-V9eI-t3TApE/)
- [China Tech · vG1RBqn1sG4](/reports/podcast/2026-W18-ep-china_tech-vG1RBqn1sG4/)
- [China Tech · Xxz5uh0L1mE](/reports/podcast/2026-W18-ep-china_tech-Xxz5uh0L1mE/)
- [Public Markets · 1bCXCxrDsCs](/reports/podcast/2026-W18-ep-public_markets-1bCXCxrDsCs/)
- [Public Markets · 9WQu7w1tII0](/reports/podcast/2026-W18-ep-public_markets-9WQu7w1tII0/)
- [Public Markets · fpC4sbawSzQ](/reports/podcast/2026-W18-ep-public_markets-fpC4sbawSzQ/)
- [VC · 3Y8aq_ofEVs](/reports/podcast/2026-W18-ep-vc-3Y8aq_ofEVs/)
- [VC · 82HsvG1_Nqk](/reports/podcast/2026-W18-ep-vc-82HsvG1_Nqk/)
- [VC · 96jN2OCOfLs](/reports/podcast/2026-W18-ep-vc-96jN2OCOfLs/)
- [VC · AFpeWo1GTeg](/reports/podcast/2026-W18-ep-vc-AFpeWo1GTeg/)
- [VC · aXToQKc430c](/reports/podcast/2026-W18-ep-vc-aXToQKc430c/)
- [VC · bBS93A0BeNI](/reports/podcast/2026-W18-ep-vc-bBS93A0BeNI/)
- [VC · d_nWswprCqk](/reports/podcast/2026-W18-ep-vc-d_nWswprCqk/)
- [VC · dlPCz8Jwypw](/reports/podcast/2026-W18-ep-vc-dlPCz8Jwypw/)
- [VC · dvVbA9OcBqs](/reports/podcast/2026-W18-ep-vc-dvVbA9OcBqs/)
- [VC · I_0Kuf6Aa2c](/reports/podcast/2026-W18-ep-vc-I_0Kuf6Aa2c/)
- [VC · LRo33rnv6rQ](/reports/podcast/2026-W18-ep-vc-LRo33rnv6rQ/)
- [VC · pN-CK54ms2c](/reports/podcast/2026-W18-ep-vc-pN-CK54ms2c/)
- [VC · s61XVZAt5ns](/reports/podcast/2026-W18-ep-vc-s61XVZAt5ns/)
