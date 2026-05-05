---
title: '[Podcast·catchup-14d-2026-04-17] Report'
date: '2026-04-17 12:00:00'
permalink: /reports/podcast/catchup-14d-2026-04-17-report/
hidden: true
categories:
  - AI报告
  - Podcast
---
# YouTube Podcast 补看 · 2026-04-03 → 2026-04-17 (14 天)

> 覆盖 11 个订阅频道 · 过去 14 天共 22 条新集 · 字幕覆盖 20/22

## 🤖 AI 访谈 (Dwarkesh / No Priors / Latent Space)

### [Latent Space — Agents of Chaos: When Helpful AI Agents Go Rogue [Paper Review]](https://www.youtube.com/watch?v=qN7Tgt9TnXY)
- 53m · 发布 Apr 16 · 字幕：英文自动
- **TL;DR**：本期论文解读聚焦"Agents of Chaos"实验：20名研究者在两周内对6个拥有真实邮箱、Discord和Shell权限的自主AI Agent（基于Claude Opus和Qwen K2.5）发动攻击。研究归纳四大风险维度——权限越界（RBAC缺失）、判断力不足（Agent无法评估下游影响）、资源失控（陷入死循环耗尽资源）和传染效应（一个Agent失陷波及整个多Agent系统）。关键发现：现代LLM已能防御base64注入和邮件伪造等基础攻击，但间接提示注入和记忆篡改仍是高危漏洞。实操启示：部署自主Agent须设置Guard Model中间层做输入输出审查，但需权衡延迟成本。

### [Dwarkesh Patel — Jensen Huang – Will Nvidia's moat persist?](https://www.youtube.com/watch?v=Hrbq66XqtCo)
- 1h43m · 发布 Apr 15 · 字幕：英文自动
- **TL;DR**：黄仁勋深度阐述Nvidia护城河：核心逻辑是"电子→Token"的转化链条极难被商品化，Nvidia在芯片架构、CUDA生态和每年大幅迭代的节奏上构建了复合壁垒。针对ASIC竞争，黄指出定制芯片利润率实际高达65%（vs Nvidia的70%），省不了多少钱，且多数ASIC项目已被取消——"你得造出比Nvidia更好的东西，这其实不合理"。关于Anthropic同时使用TPU/Trainium/GPU，黄认为这是个案而非趋势。在中美芯片博弈上，黄强调关键窗口期内必须确保全球AI模型构建在美国技术栈上，否则中国靠制造规模可用两倍数量的较弱芯片弥补差距。最后黄指出即使没有AI，加速计算本身（分子动力学、计算光刻等）也让Nvidia极具价值。

### [No Priors — How AI Agents Will Transform the Financial System with Circle Co-Founder and CEO Jeremy Allaire](https://www.youtube.com/watch?v=eyobeqMdbeI)
- 44m · 发布 Apr 9 · 字幕：英文自动
- **TL;DR**：Circle CEO Jeremy Allaire探讨AI Agent如何重塑金融系统。核心论点：稳定币（如USDC）本质上是"互联网上的美元协议"，而AI Agent经济的崛起让可编程货币变得不可或缺——机器需要原生的链上支付通道来自主完成交易。Circle推出的ARC协议正是为"机器经济"时刻设计，智能合约、链上合规和Agent支付已从概念变为有法律和监管基础的现实。Allaire认为Solana和Ethereum等智能合约平台将承载大部分Agent金融活动，Bitcoin因设计哲学限制适应性较弱。展望2030年代，AI驱动的生产力释放有望实现双位数GDP增长。关键洞察：传统银行支付系统（ACH/SWIFT）无法满足Agent实时微交易需求，稳定币+区块链才是Agent原生金融基础设施。

### [Dwarkesh Patel — Michael Nielsen – Why aliens will have a different tech stack than us](https://www.youtube.com/watch?v=myP8UjAM1pk)
- 2h3m · 发布 Apr 7 · 字幕：英文自动
- **TL;DR**：量子计算先驱Michael Nielsen深度探讨科学发现的本质与AI的关系。核心论点：科学进步高度路径依赖——以Michelson-Morley实验为例，爱因斯坦的狭义相对论并非由该实验直接驱动，而是源于完全不同的思维路径，说明"验证循环"远比想象中复杂。对AI科学发现的警示：AlphaFold的成功本质上是数十亿美元蛋白质数据采集的故事，AI只是最后拟合的一小部分。Nielsen提出"甜点桌"比喻反驳收益递减论——新领域不断涌现（如量子计算源于纯数学哲学问题），让年轻人可快速突破。但深度学习前沿已需数百亿美元投入，这是否意味着低垂果实已被摘完值得深思。关于外星人：科学发现的路径依赖性意味着不同文明可能发展出完全不同的技术栈。对AI学习的实操观察：LLM对话的便捷性可能替代深度思考，需警惕"学系统"与"理解本质"的混淆。

## 💰 VC 机构 / 访谈 (a16z / Sequoia / 20VC)

### [a16z — Why Claude Feels Different (And What That Means for AI)](https://www.youtube.com/watch?v=Mjc7vwys1vY)
- 33m · 发布 Apr 16 · 字幕：英文自动
- **TL;DR**：本期节目探讨了Claude与其他AI模型的差异化体验——嘉宾认为Claude在"人格发展"上走在前沿，具备某种"灵魂感"，而非单纯的工具型机器人。讨论涵盖AI个性化设计的技术难题、如何让模型能力真正触达普通用户、以及Agent范式仍处早期但潜力巨大。后半段延伸至AI驱动的通缩效应：通过削减教育领域行政冗余、提升生产力，AI有望让教育等高成本服务逐年降价。核心观点：真正的AGI不仅是能力提升，更关乎模型与人类之间的情感连接与信任建立。

### [Sequoia Capital — What Founders Can Learn About Excellence From MIT President Sally Kornbluth](https://www.youtube.com/watch?v=e_2opghuq88)
- 44m · 发布 Apr 16 · 字幕：英文自动
- **TL;DR**：Sequoia邀请MIT校长Sally Kornbluth分享领导力与卓越文化的经验。她在上任一年内经历国会听证危机，是三位校长中唯一幸存者。核心观点：1）维护精英体制的关键是对每一位教职员工和学生始终坚持卓越标准，"一旦尝到平庸的滋味就会永远沉沦"；2）面对联邦政府施压签署协议，她第一时间拒绝并获得董事会支持，危机中独立决策比集体行动更有效；3）AI将重塑高等教育，传统讲座可能让位于AI导师辅助的牛津式小组讨论模式；4）招聘应优先选择"有棱角的人才"而非弱点最少的候选人，HubSpot的经验证明这一策略的有效性。

### [20VC — SpaceX's Financials Leaked: Is it Worth $2TN | Meta Debuts Muse Spark](https://www.youtube.com/watch?v=UOY8hsBqjJo)
- 1h30m · 发布 Apr 16 · 字幕：英文自动
- **TL;DR**：20VC圆桌讨论三大科技热点：1）Anthropic发布Mythos模型但因黑客能力过强暂不公开，Harry对Dario持怀疑态度，认为其"狼来了"式营销令人疲倦；AI竞争格局为OpenAI（消费者优势）vs Anthropic（专注优势）的双雄对决；2）公共SaaS股票跌至新低，核心判断标准是能否为AI Agent功能收费——若无法收费则无法重新加速增长，Salesforce和ServiceNow等工作流公司正面临Agent化转型的生死考验；3）Meta推出Alex Wang领导的Muse Spark模型，讨论Meta能否追赶AI竞赛；4）SpaceX财务泄露显示估值向2万亿美元迈进，"Elon折扣率为零，失败概率为零"才能支撑此估值。此外讨论了CIO如何实际部署AI的"token maxing"趋势。

### [a16z — Ben Horowitz on AI Anxiety, Big Tech Transitions & The Future of Startups](https://www.youtube.com/watch?v=IZDJ3jcO5UY)
- 29m · 发布 Apr 14 · 字幕：英文自动
- **TL;DR**：Ben Horowitz深度剖析AI时代的基础设施瓶颈：美国在稀土矿产、电力供应、制造产能和存储芯片上全面吃紧，中国在基建投入上大幅领先。他认为AI对创业生态的影响具有双面性——大公司可能因垄断算力和电力而占据优势，但模型小型化和边缘计算也可能催生新一波创业机会。讨论还涉及crypto与AI的交叉：个性化AI使深度伪造和社工攻击风险剧增，crypto的验证机制或成解药。对VC而言，未来的投资逻辑将发生根本转变——纯工具型SaaS可能被AI原生方案替代，创业公司需构建更深护城河。

### [Sequoia Capital — From SEO to Agent-Led Growth: Profound's James Cadwallader](https://www.youtube.com/watch?v=RyTwRCKeDo4)
- 31m · 发布 Apr 14 · 字幕：英文自动
- **TL;DR**：Sequoia访谈Profound联合创始人James Cadwallader，探讨从SEO到"Agent驱动增长"的营销范式转变。Profound服务10%的财富500强，帮助品牌在ChatGPT、Claude等AI搜索中提升可见度。核心洞察：1）AI营销不是简单自动化旧工作，而是实现过去不可能的营销方式，单个营销人员可拥有整个agency的能力；2）ChatGPT正在推出广告，品牌需要理解如何在生成式搜索引擎中排名；3）比较类清单文章（如"十大最佳XX"）目前仍能有效影响AI模型推荐，但未来可能被模型惩罚；4）不使用Agent营销等于不用互联网，企业必须获得AI可见度——无法优化看不见的东西。

### [20VC — The Early Days of Anthropic & How 21 of 22 VCs Rejected It | Anj Midha](https://www.youtube.com/watch?v=a1ymdW-h33E)
- 1h15m · 发布 Apr 14 · 字幕：英文自动
- **TL;DR**：20VC深度访谈AI投资人Anj Midha（Anthropic早期投资者、Andreessen Horowitz前AI投资负责人、AMP创始人）。核心内容：1）Anthropic早期融资时22家VC中有21家拒绝，如今已成为AI领域标杆；2）AI四大瓶颈——算力、数据、人才和安全对齐，其中"人类对齐比AI对齐更难"；3）AMP的商业模式是孵化AI公司并提供算力，类比蒸汽机时代的集中发电厂，让各AI实验室共享算力而非各自半负荷运行；4）推理（inference）领域增长曲线巨大，但50多家推理公司恶性竞争是VC烧钱——市场只需4-5家优质供应商；5）前沿模型推理需要"协调铁穹"式安全防护，否则未来十年无法维持技术前沿地位。对scaling laws持乐观态度，认为收益递减只是暂时现象。

### [a16z — Building Agents at Home: Homeschooling, Parenting and More](https://www.youtube.com/watch?v=yiJOTCRVWjc)
- 54m · 发布 Apr 13 · 字幕：英文自动
- **TL;DR**：一位技术型全职妈妈分享了如何用AI Agent重塑家庭教育和日常生活。她利用Claude（Open Claw）搭建了一整套Agent系统——从课程规划、知识问答到自动生成新Agent，甚至让Agent学会自主构建其他Agent。技术栈以Obsidian为知识库、Open Router选模型，按能力而非成本选型。她坦言前几周体验痛苦，但一旦系统成熟，作为带娃父母的生产力得到质的飞跃。孩子们也在有监督下使用AI回答好奇心问题，但家长始终强调AI的非人类本质。核心启示：AI Agent对非传统用户（如全职父母）的赋能潜力远超预期，但好的交互界面仍是最大短板。

### [20VC — ElevenLabs: Building an AI Sales Machine & Why We Set a 20x Sales Quota](https://www.youtube.com/watch?v=9ereyZiA99o)
- 1h26m · 发布 Apr 11 · 字幕：英文自动
- **TL;DR**：ElevenLabs CRO Carles Raina分享了如何从零搭建营收团队并将ARR做到3.5亿美元以上。核心策略包括：设定20倍销售配额以筛选顶尖人才并激发极致执行力；客户成功团队必须成为利润中心而非成本中心；销售数据全透明，内部排行榜实时公开驱动竞争。国际扩张方面，日本市场虽难但通过亲自开拓、先派单兵再建团队的方式逐步突破。他强调CRO的核心职责是思考"明天的收入"而非守住现有收入，新产品定价需要大量迭代实验，不怕花18个月从零到一。对AI原生公司的销售组织建设具有很强的参考价值。

### [20VC — OpenAI Buys TBPN & Their Management Team Reboot | Mercor Hack & Why Now is the Time for Cyber](https://www.youtube.com/watch?v=cUngseNueP8)
- 1h32m · 发布 Apr 9 · 字幕：英文自动
- **TL;DR**：本期圆桌讨论多个热点话题：OpenAI收购TBPN媒体资产被认为分散注意力且时机不佳，管理层重组信号公司战略动荡；Anthropic收入达300亿美元超越OpenAI，训练成本仅为OpenAI四分之一，投资者获得更优回报；SpaceX秘密提交IPO文件，目标估值2万亿美元，三大巨头（SpaceX+OpenAI+Anthropic）IPO总值或超过去20年所有IPO之和。Mercor被黑客攻击引发网络安全讨论，嘉宾认为当前AI时代进入壁垒低，一旦失误就可能永远出局，VC不应盲目鼓励创业者坚持，而需诚实评估竞争格局。

### [a16z — Box CEO on the AI Adoption Gap](https://www.youtube.com/watch?v=dvt_74kV-RM)
- 58m · 发布 Apr 8 · 字幕：英文自动
- **TL;DR**：Box CEO Aaron Levie与a16z深度对话企业AI落地的现实差距。核心论点：AI能力扩散速度远慢于硅谷预期，"vibe coding取代SAP"是荒谬的——企业软件的领域知识深埋在UI、中间层和数据层中，不可能被简单替代。当Agent数量远超员工数时，软件架构必须为Agent而非人类重新设计，这将引发根本性变革。经济模型方面，token成本占COGS比重极高，正推动行业从订阅制转向按量付费（usage-based），类似当年从永久许可到SaaS的转型阵痛。工程计算预算将成为未来两年企业最激烈的内部博弈，多数公司对AI机会的估算至少差了一个数量级。

### [a16z — Why Balaji Srinivasan Thinks the SaaS Apocalypse Is Overhyped](https://www.youtube.com/watch?v=oheUsh7VtKY)
- 1h6m · 发布 Apr 7 · 字幕：英文自动
- **TL;DR**：Balaji Srinivasan对"SaaS末日论"持反对意见，认为AI不会消灭你的工作而是让你成为CEO——但前提是你必须懂得"走长路"，否则无法debug AI的捷径输出。他提出"人类是传感器、AI是执行器"的框架：品味（taste）属于感知层，短期内AI无法替代。对于LLM能否通向AGI，Balaji明确说不——当前模型在搜索文献和生物医学文本挖掘上表现惊人，但发现全新数学/科学仍需正确的prompt引导。他还警告大型AI公司的多元化战略反而是弱点，去中心化和开源AI可能因无版权约束而更自由、更强大。核心判断：SaaS不会被颠覆，但商业模式和竞争格局将发生深层重构。

### [20VC — Demis Hassabis: Why AGI is Bigger than the Industrial Revolution](https://www.youtube.com/watch?v=SSya123u9Yk)
- 32m · 发布 Apr 7 · 字幕：英文自动
- **TL;DR**：DeepMind创始人Demis Hassabis深度对谈：他指出现代AI产业约90%的核心突破来自Google Brain/Research和DeepMind，算力规模化（scaling）的回报虽仍可观但边际递减，未来拥有原创算法发明能力的实验室将拉开差距。他认为AGI的影响将远超工业革命，AI有望为国家电网提升30-40%效率。在监管方面，Hassabis强调需要国际协调的最低安全标准和针对欺骗性等不良属性的基准测试，但坦言当前地缘碎片化是最大挑战。他希望自己的遗产是推动科学进步、攻克重大疾病，并呼吁需要新一代哲学家帮助人类思考"何为人"这一根本问题。

### [a16z — OpenClaw, Claude Code, and the Future of Software | Peter Yang](https://www.youtube.com/watch?v=UE8jx4dvlSQ)
- 30m · 发布 Apr 6 · 字幕：英文自动
- **TL;DR**：Peter Yang（Roblox PM兼内容创作者）与a16z讨论AI编程工具的未来。他分享了用Claude Code构建OpenClaw开源项目的经验，强调AI正在让编程"吃掉"所有知识工作。核心观点：1）整个Agent技术栈正在兴起，包括身份认证、支付、MCP协议等全新基础设施；2）小团队借助AI Agent可实现过去大团队才能做到的产品开发，2-3人团队替代10人产品组；3）创业者应拥抱AI工具保持精简团队；4）就业市场虽然艰难，但AI降低了个人创业门槛，让更多人能追求自己的项目和梦想。

### [20VC — How Hims & Hers Reached a $4.3BN Market Cap on $2.3BN of Revenue | Andrew Dudum](https://www.youtube.com/watch?v=2LRzttI1kbI)
- 1h4m · 发布 Apr 4 · 字幕：英文自动
- **TL;DR**：Hims & Hers创始人Andrew Dudum深度复盘：公司营收达23亿美元但市值仅43.5亿（P/S不到2倍），股价半年跌66%。Dudum认为颠覆传统医疗行业需要团队习惯不适感和保持韧性，上市公司反而比私有化更有趣。业务核心是将最新健康诊断、设备和药物以平价规模化触达消费者，产品组合需持续迭代进化。国际扩张方面，利用美国业务强劲现金流以极低稀释收购海外业务，已在澳洲、英国、德国成为头部玩家并快速进入日本市场。他特别强调基因检测对心脏病预防的革命性意义——传统体检漏掉的遗传风险标记才是关键，这正是Hims存在的核心价值。

## 📈 公开市场 (Bg2Pod / All-In)

### [All-In — Anthropic's $30B Ramp, Mythos Doomsday, OpenClaw Ankled, Iran War Ceasefire, Israel's Influence](https://www.youtube.com/watch?v=DVBJQQCjgXU)
- 1h29m · 发布 Apr 10 · 字幕：英文自动
- **TL;DR**：Anthropic年收入跑率突破300亿美元，从2023年初开始商业化仅三年实现指数级增长；同时发布新模型Mythos但以网络安全风险为由暂不公开，发现OpenBSD 27年漏洞和FFmpeg 16年漏洞。Sacks认为Anthropic的安全叙事更多是营销策略而非真正威胁，类似GPT-2时代的做法。OpenClaw创始人离职引发开源AI治理讨论。伊朗战争停火两周，美国推动以色列-黎巴嫩直接对话。Brad Gerstner担任客座嘉宾，讨论AI公司估值与地缘政治交叉影响。

### [All-In — Josh Shapiro on Trump, Iran War Chaos, Israel's Failure, the Economy, and 2028 Race](https://www.youtube.com/watch?v=MPAsUZEJHiM)
- 1h2m · 发布 Apr 8 · 字幕：英文自动
- **TL;DR**：宾州州长Josh Shapiro做客All-In，以60%支持率展示温和派民主党人的治理路线：推动许可改革、吸引数据中心投资、打击Medicaid欺诈（全美领先）、降低企业税负。在伊朗战争问题上，Shapiro批评Trump的军事行动缺乏战略清晰度，部分原本支持Trump的选民因此转向反对。以色列政策方面他主张更务实的立场，与民主党内社会主义派拉开距离。关于关税政策，他担忧对宾州制造业的冲击。被问及2028大选时，Shapiro强调民主党应聚焦中期选举而非过早布局，党内需回归务实中间路线才能重新赢得选民信任。

### [All-In — The State of Modern War: Palantir & Anduril Execs on Drones, AI, and the End of Traditional Warfare](https://www.youtube.com/watch?v=mjNP5IOzCbA)
- 1h9m · 发布 Apr 6 · 字幕：英文自动
- **TL;DR**：Palantir的Shyam Sankar与Anduril的Trae Stephens在Hill & Valley Forum对谈现代战争变革。核心论点：美国面临对华无人机产能1万比1的差距、造船能力223倍劣势，2027台海窗口迫近。乌克兰战争证明传统军备储备思维已过时——10年产能在10周战斗中耗尽，真正的威慑力在于制造再生能力而非库存。两人主张软件定义战争时代已到来，自主无人机和AI决策系统正取代传统重型装备。Anduril正建设模块化工厂园区（生产Fury、Roadrunner、Barracuda等无人系统），借鉴合同制造商模式实现规模效应。硅谷与国防的关系正在回归冷战时期的紧密合作，软件能力成为国防竞争力核心。

## 🌏 中文科技 (xiaojunpodcast / 硅谷101)

### [xiaojunpodcast — 136. 全球大模型季报第9集：和广密聊，Coding是AGI第二幕、硅谷御三家真相、模型正成为新一代OS](https://www.youtube.com/watch?v=u1Lzp-7Ybn8)
- 1h23m · 发布 Apr 15 · 字幕：无
- _基于 metadata，无字幕_
- **TL;DR**：本期大模型季报核心判断：Coding正将AI从聊天机器人第一幕推向Agent第二幕，成为AGI加速器。Anthropic创始人亲自抓数据，All in Coding；OpenAI因ChatGPT成功忽视Coding战略；Gemini 3被高估，Google Coding严重落后。模型正演变为新一代OS，社会面临白领通缩与失业冲击。

### [xiaojunpodcast — 135. 和自然选择创始人Tristan聊，Elys、赛博分身、灵魂、Context的获取与流动和AI社交网络](https://www.youtube.com/watch?v=x8qdqWIVVTA)
- 1h53m · 发布 Apr 10 · 字幕：无
- _基于 metadata，无字幕_
- **TL;DR**：访谈自然选择创始人Tristan，探讨AI社交产品Elys的设计理念：通过赛博分身替用户主动社交，再转化为真实连接。核心观点是AI时代最大范式转移在于Context的获取与流动，传统互联网是低维标签化信息，而AI首次实现了高维Context理解。未来社交的北极星指标是真人连接率，构建主体性是AI时代唯一重要的事。

## 🏛️ 公司深潜 (Acquired)

### [Acquired — Ferrari: What happens when you staple a luxury brand to a sports team? (Audio)](https://www.youtube.com/watch?v=JVO8roYiNXM)
- 3h59m · 发布 Apr 14 · 字幕：英文自动
- **TL;DR**：Acquired深度拆解Ferrari商业传奇：从Enzo Ferrari以赛车为执念创立公司，到Fiat入股稳定财务，再到Montezemolo复兴赛道神话、Marchionne接手Fiat-Chrysler并剥离Ferrari独立IPO。核心论点是Ferrari本质上是一个"将奢侈品牌钉在赛车队上"的稀缺性商业模型——刻意限产、超长等待名单、赛道胜利维系品牌神话。Marchionne通过大幅削减Fiat-Chrysler债务并推动Ferrari上市释放了巨大价值。节目还探讨了Ferrari与Hermes等传统奢侈品的异同：车迷文化的"nerdiness"和社区属性使其独树一帜。

## 本期跨集主题观察

- **Anthropic崛起与AI双雄格局**（来源：[20VC多期](https://www.youtube.com/watch?v=cUngseNueP8)、[All-In](https://www.youtube.com/watch?v=DVBJQQCjgXU)、[xiaojunpodcast #136](https://www.youtube.com/watch?v=u1Lzp-7Ybn8)、[20VC/Anj Midha](https://www.youtube.com/watch?v=a1ymdW-h33E)）：多个节目反复讨论Anthropic的惊人增长（$30B ARR）、Mythos模型的安全争议、以及与OpenAI的竞争分野。xiaojunpodcast从中国视角指出Anthropic all-in Coding的战略清晰度远超对手。20VC的Anj Midha回顾了22家VC中21家拒绝Anthropic的早期故事，与当下的市场地位形成鲜明对比。
- **AI Agent的安全与治理挑战**（来源：[Latent Space](https://www.youtube.com/watch?v=qN7Tgt9TnXY)、[a16z/Building Agents](https://www.youtube.com/watch?v=yiJOTCRVWjc)、[a16z/Ben Horowitz](https://www.youtube.com/watch?v=IZDJ3jcO5UY)）：Latent Space的论文解读揭示了自主Agent面临的权限越界、记忆篡改等安全风险；a16z则从家庭场景展示Agent的正面潜力但也暴露了交互界面短板；Ben Horowitz从crypto角度提出AI驱动的深度伪造需要区块链验证机制来对冲。
- **SaaS的生死存亡与Agent化转型**（来源：[a16z/Box CEO](https://www.youtube.com/watch?v=dvt_74kV-RM)、[a16z/Balaji](https://www.youtube.com/watch?v=oheUsh7VtKY)、[20VC圆桌](https://www.youtube.com/watch?v=UOY8hsBqjJo)）：Box CEO认为"vibe coding取代SAP"是荒谬的，企业软件领域知识不可简单替代；Balaji也反对SaaS末日论，认为商业模式重构而非消亡；但20VC圆桌指出SaaS公司若无法为Agent功能收费则无法重新加速增长。三者观点形成了有张力的辩论。
- **AI时代的基础设施瓶颈**（来源：[Dwarkesh/Jensen Huang](https://www.youtube.com/watch?v=Hrbq66XqtCo)、[a16z/Ben Horowitz](https://www.youtube.com/watch?v=IZDJ3jcO5UY)、[20VC/Anj Midha](https://www.youtube.com/watch?v=a1ymdW-h33E)、[20VC/Demis Hassabis](https://www.youtube.com/watch?v=SSya123u9Yk)）：黄仁勋强调Nvidia在"电子→Token"转化链上的不可替代性；Horowitz指出美国在稀土、电力、制造上全面吃紧；Midha提出算力共享发电厂模式；Hassabis则认为算法创新将比单纯扩大算力更重要——这些观点共同描绘了AI基础设施的多维瓶颈图。
- **从SEO到Agent-Led Growth的营销范式转变**（来源：[Sequoia/Profound](https://www.youtube.com/watch?v=RyTwRCKeDo4)、[a16z/Peter Yang](https://www.youtube.com/watch?v=UE8jx4dvlSQ)）：Profound展示了品牌在ChatGPT/Claude等生成式搜索中争夺AI可见度的新战场；Peter Yang从开发者角度描绘了Agent技术栈（MCP协议、身份认证、支付）正在催生全新基础设施层。两者共同指向：Agent不仅改变产品开发，也在颠覆获客方式。

## Coverage Notes

- 本期未发布：Bg2Pod、硅谷101
- 字幕获取失败：xiaojunpodcast #136（无字幕，基于metadata降级）、xiaojunpodcast #135（无字幕，基于metadata降级）

---

## 相关细分报告

- [AI · eyobeqMdbeI](/reports/podcast/catchup-14d-2026-04-17-ep-ai-eyobeqMdbeI/)
- [AI · Hrbq66XqtCo](/reports/podcast/catchup-14d-2026-04-17-ep-ai-Hrbq66XqtCo/)
- [AI · myP8UjAM1pk](/reports/podcast/catchup-14d-2026-04-17-ep-ai-myP8UjAM1pk/)
- [AI · qN7Tgt9TnXY](/reports/podcast/catchup-14d-2026-04-17-ep-ai-qN7Tgt9TnXY/)
- [China Tech · u1Lzp-7Ybn8](/reports/podcast/catchup-14d-2026-04-17-ep-china_tech-u1Lzp-7Ybn8/)
- [China Tech · x8qdqWIVVTA](/reports/podcast/catchup-14d-2026-04-17-ep-china_tech-x8qdqWIVVTA/)
- [Deep Dive · JVO8roYiNXM](/reports/podcast/catchup-14d-2026-04-17-ep-deep_dive-JVO8roYiNXM/)
- [Public Markets · DVBJQQCjgXU](/reports/podcast/catchup-14d-2026-04-17-ep-public_markets-DVBJQQCjgXU/)
- [Public Markets · mjNP5IOzCbA](/reports/podcast/catchup-14d-2026-04-17-ep-public_markets-mjNP5IOzCbA/)
- [Public Markets · MPAsUZEJHiM](/reports/podcast/catchup-14d-2026-04-17-ep-public_markets-MPAsUZEJHiM/)
- [VC · 2LRzttI1kbI](/reports/podcast/catchup-14d-2026-04-17-ep-vc-2LRzttI1kbI/)
- [VC · 9ereyZiA99o](/reports/podcast/catchup-14d-2026-04-17-ep-vc-9ereyZiA99o/)
- [VC · a1ymdW-h33E](/reports/podcast/catchup-14d-2026-04-17-ep-vc-a1ymdW-h33E/)
- [VC · cUngseNueP8](/reports/podcast/catchup-14d-2026-04-17-ep-vc-cUngseNueP8/)
- [VC · dvt_74kV-RM](/reports/podcast/catchup-14d-2026-04-17-ep-vc-dvt_74kV-RM/)
- [VC · e_2opghuq88](/reports/podcast/catchup-14d-2026-04-17-ep-vc-e_2opghuq88/)
- [VC · IZDJ3jcO5UY](/reports/podcast/catchup-14d-2026-04-17-ep-vc-IZDJ3jcO5UY/)
- [VC · Mjc7vwys1vY](/reports/podcast/catchup-14d-2026-04-17-ep-vc-Mjc7vwys1vY/)
- [VC · oheUsh7VtKY](/reports/podcast/catchup-14d-2026-04-17-ep-vc-oheUsh7VtKY/)
- [VC · RyTwRCKeDo4](/reports/podcast/catchup-14d-2026-04-17-ep-vc-RyTwRCKeDo4/)
- [VC · SSya123u9Yk](/reports/podcast/catchup-14d-2026-04-17-ep-vc-SSya123u9Yk/)
- [VC · UE8jx4dvlSQ](/reports/podcast/catchup-14d-2026-04-17-ep-vc-UE8jx4dvlSQ/)
- [VC · UOY8hsBqjJo](/reports/podcast/catchup-14d-2026-04-17-ep-vc-UOY8hsBqjJo/)
- [VC · yiJOTCRVWjc](/reports/podcast/catchup-14d-2026-04-17-ep-vc-yiJOTCRVWjc/)
