---
title: '[Podcast·2026-W16] Report'
date: '2026-04-19 12:00:00'
permalink: /reports/podcast/2026-W16-report/
hidden: true
categories:
  - AI报告
  - Podcast
---
# YouTube Podcast 周报 · 2026-W16 (Apr 13–19)

> 覆盖 11 个订阅频道 · 本周共 8 条新集 · 字幕覆盖 8/8

## 🤖 AI 访谈 (Dwarkesh / No Priors / Latent Space)

### [No Priors — Scaling Global Organizations in the Age of AI with ServiceNow CEO Bill McDermott](https://www.youtube.com/watch?v=tNNFJa5pUEg)
- 57m28s · 发布 Apr 17 · 字幕：英文自动
- **TL;DR**：ServiceNow CEO Bill McDermott认为"SaaS末日论"被严重夸大：用语言模型替代企业平台的成本高达10倍，且模型缺乏确定性和企业数据上下文，而企业用户可以容忍人犯错，却绝不容忍软件出错。ServiceNow的战略定位是成为"AI业务重塑的控制塔"，整合约800个系统、超过850亿工作流和7万亿笔交易，同时通过收购Moveworks和Armis分别布局智能代理入口和安全领域，且仅用20天完成集成。目前全球仅11%的企业走出AI实验阶段，金融业最激进，公共部门和医疗仍在基础整合期。McDermott预测未来几年将有22亿AI代理进入职场，企业新增人力将大幅缩减，90%客服案例已由代理处理。对从业者的启示：单一功能且非CEO优先级的SaaS产品最易被AI替代，跨部门、深度嵌入工作流的平台型产品则具备强大护城河。

### [Latent Space — Agents of Chaos: When Helpful AI Agents Go Rogue](https://www.youtube.com/watch?v=qN7Tgt9TnXY)
- 53m06s · 发布 Apr 16 · 字幕：英文自动
- **TL;DR**：本期回顾论文"Agents of Chaos"：20名研究员在两周实验中对6个自主AI智能体（基于Claude和Gemini K2.5）进行红队攻击，发现10余个严重安全漏洞。核心问题在于智能体缺乏"判断力"——拥有工具和权限却无法评估行为后果。四类关键风险：一、权限失控，基于提示词的身份验证易被绕过，攻击者通过更换Discord频道伪造用户名即可冒充管理员删除全部记忆；二、行为失当，间接提问可绕过安全对齐，泄露SSN等敏感信息；三、资源耗尽，邮件轰炸导致拒绝服务；四、传染效应，通过篡改外部GitHub Gist注入恶意宪法，一个被攻陷的智能体可操纵其余所有智能体。值得注意的是，直接攻击往往被模型拒绝，说明对齐训练有效但不充分。实践建议：身份验证和访问控制必须在架构层面实现而非依赖提示词，多智能体系统需设置跨代理防护层和利益相关者模型，并在安全性与延迟之间做好权衡取舍。

### [Dwarkesh Patel — Jensen Huang – Will Nvidia's moat persist?](https://www.youtube.com/watch?v=Hrbq66XqtCo)
- 1h43m12s · 发布 Apr 15 · 字幕：英文自动
- **TL;DR**：黄仁勋认为Nvidia的护城河不会被商品化，核心论点：一、Nvidia将"电子转化为token"的全栈能力（CUDA生态、数亿GPU装机量、每年10-50倍架构跃升）难以复制，ASIC毛利率65%与Nvidia的70%差距极小，替代意义有限；二、供应链护城河方面，Nvidia已有近千亿美元上游采购承诺，通过说服TSMC、美光等CEO提前投资来预判瓶颈，CoWoS等瓶颈可在2-3年内解决，真正制约在于能源政策；三、关于竞争，Anthropic选用TPU/Trainium属个例而非趋势，Nvidia工程团队常帮AI实验室将性能优化2-3倍；四、中国出口管制问题上，黄仁勋强调中国有充足7nm产能和能源，限制出口反而加速其自主芯片生态，美国应保持领先但不应放弃全球第二大市场。值得关注：Nvidia正投资OpenAI（300亿）和Anthropic（100亿），同时扶持CoreWeave等新兴云厂商，但坚持不自建云——"做必要之事，尽量少做"的战略值得任何平台型企业借鉴。

## 💰 VC 机构 / 访谈 (a16z / Sequoia / 20VC)

### [20VC — Jake Paul: Traditional VC is Toast & Attention is More Valuable than Cash](https://www.youtube.com/watch?v=rWn3KgO9Dvk)
- 1h03m25s · 发布 Apr 18 · 字幕：英文自动
- **TL;DR**：Jake Paul与合伙人Jeffrey Woo创立的Antifund基金核心理念是"注意力比资本更有价值"。Paul凭借内容创作者的文化直觉和海量分发能力，投资了Ramp（个人天使轮，估值5000万美元入场，约300倍回报）、Cognition、Polymarket等项目，并孵化了体育博彩平台Better。他们认为AI正在将编码和财务分析等"聪明人的工作"商品化，而品味、文化嗅觉和注意力资源将成为投资核心竞争力。策略上倾向后期狙击式投资，集中押注各赛道头部公司，并计划拓展至公开市场。Paul强调传统VC正被拥有原生受众的创作者型投资人颠覆——创始人更需要能带来真实分发和高管人脉的合作伙伴，而非西装革履的传统基金经理。对创业者的启示：在注意力经济时代，融资时应优先选择能提供分发渠道和文化洞察的投资人，而非仅看品牌背书。

### [20VC — SpaceX's Financials Leaked: Is it Worth $2TN | Meta Debuts Muse Spark: Are They Back in the AI Race?](https://www.youtube.com/watch?v=UOY8hsBqjJo)
- 1h30m31s · 发布 Apr 16 · 字幕：英文自动
- **TL;DR**：本期围绕三大主题展开：一、Anthropic发布Mythos模型，因黑客能力过强而暂缓公开。嘉宾认为AI将使所有安全漏洞被发现，网络安全支出将大幅增加而非减少，安全股下跌逻辑不成立。二、SpaceX财报泄露，185亿美元营收、50亿美元亏损（含XAI收购），2万亿美元估值对应108倍营收，为史上最贵大规模IPO。要达到该估值需对所有未来业务赋予100%成功概率且不做时间折现。三、公共SaaS股面临严峻考验：能否推出客户愿意付费的AI Agent是生死分水岭，无法重新加速增长的公司将沦为"下一个IBM"。Meta虽推出Muse Spark入局AI竞赛，但消费端AI收入难以支撑千亿级资本开支，企业端可能占AI市场三分之二。投资者应重点关注SaaS公司能否通过Agent实现付费增长，这是当前最可靠的估值筛选标准。

### [Sequoia Capital — What Founders Can Learn About Excellence From MIT President Sally Kornbluth](https://www.youtube.com/watch?v=e_2opghuq88)
- 44m29s · 发布 Apr 16 · 字幕：英文自动
- **TL;DR**：MIT校长Sally Kornbluth分享了维持卓越与精英主义的核心原则。她强调"一旦尝了平庸的棒棒糖，你就永远摆脱不了"，每一次招聘都必须坚持高标准，绝不能因规模扩大而降低门槛。在危机管理方面，她总结了国会听证风波的教训：领导者必须对外保持冷静、犯错后迅速澄清而非反复解释，并确保董事会的坚定支持。面对联邦政府的"学术卓越契约"，MIT率先礼貌拒绝，坚守科学评审以能力为本的底线。关于AI对教育的影响，她认为学生仍需掌握基础编程和批判性思维，才能判断AI输出的正确性。对创始人的实操建议：在150人之前亲自把关每一位候选人，建立可信赖的核心团队逐层传递标准，用价值观评分体系将文化制度化，并敢于招聘有棱角的"尖刺型"人才而非最没短板的平庸之选。

### [Sequoia Capital — From SEO to Agent-Led Growth: Profound's James Cadwallader](https://www.youtube.com/watch?v=RyTwRCKeDo4)
- 31m26s · 发布 Apr 14 · 字幕：英文自动
- **TL;DR**：Profound创始人James Cadwallader指出，营销正经历从传统SEO到"代理驱动增长"（ALG）的根本转变。核心观点：互联网使用者已从人类变为AI代理，品牌内容的消费者不再是人，而是替人做购买决策的智能体。ChatGPT回答一个购物问题会参考65个网页，远超人类耐心；约50%的网页内容已由AI生成。各平台差异显著：Gemini偏好YouTube，ChatGPT倾向引用Reddit和LinkedIn，Claude更依赖实时网页检索。他警告"死亡互联网"可能三年内出现——当人类不再点击网页，广告模式崩塌，原创内容激励归零，AI实验室将被迫整合社交媒体获取人类数据。实操建议：必须用监测工具了解品牌在各AI平台的呈现和引用来源，不能凭直觉；要为代理而非人类创建内容，提供AI尚不掌握的原创洞见；全面拥抱代理化营销，否则如同拒绝上网。

## 📈 公开市场 (Bg2Pod / All-In)

### [All-In — OpenAI's Identity Crisis, Datacenter Wars, Market Up on Iran News, Mamdani's First Tax, Swalwell Out](https://www.youtube.com/watch?v=SFdqX7IY7RY)
- 1h30m57s · 发布 Apr 17 · 字幕：英文自动
- **TL;DR**：纽约市长提议对500万美元以上第二住宅征收约3.9%年税，嘉宾警告此举将重蹈伦敦覆辙，打压高端房产需求并抑制新建开发。AI竞争方面，Anthropic营收增速达10倍/年远超OpenAI的3-4倍，二级市场估值已超越OpenAI；关键驱动力在于企业编程代码Token的按量付费模式，消费端20美元订阅难以匹配该增速。但Anthropic面临算力瓶颈，可能被迫自建数据中心，而其此前支持的反数据中心运动或将反噬自身。数据中心审批遭遇民众反对浪潮，全美约100个项目受阻、40%被取消，涉及1620亿美元投资。市场方面，席勒PE和巴菲特指标均处历史高位，但伊朗局势趋于缓和推动股市创新高。投资者应关注：蓝州房产税风险加剧资本外流，AI企业需尽快解决算力自主问题，当前高估值环境下宜适度降低风险敞口。

## 🌏 中文科技 (xiaojunpodcast / 硅谷101)

本周暂无新集。

## 🏛️ 公司深潜 (Acquired)

本周暂无新集。

## 本周跨集主题观察

- **AI Agent 是 SaaS 生死分水岭**（来源：[No Priors](https://www.youtube.com/watch?v=tNNFJa5pUEg)、[20VC SpaceX期](https://www.youtube.com/watch?v=UOY8hsBqjJo)、[Sequoia Profound](https://www.youtube.com/watch?v=RyTwRCKeDo4)）：ServiceNow CEO 认为 22 亿 AI Agent 将进入职场，90% 客服已由代理处理；20VC 嘉宾指出能否推出客户愿付费的 Agent 是 SaaS 公司的存亡标准；Profound 则从营销端论证 Agent 正替代人类成为互联网主要使用者。三集共同指向一个判断：Agent 不是功能升级，而是商业模式重构。

- **AI 安全与对齐的紧迫性**（来源：[Latent Space](https://www.youtube.com/watch?v=qN7Tgt9TnXY)、[20VC SpaceX期](https://www.youtube.com/watch?v=UOY8hsBqjJo)）：Latent Space 详解的红队实验表明自主 Agent 可被身份伪造、宪法注入等方式攻破，对齐训练有效但不充分；同期 20VC 讨论了 Anthropic 因 Mythos 模型黑客能力过强而暂缓发布。两集交叉印证：随着 Agent 部署加速，架构层安全（而非提示词层）成为刚需。

- **算力基础设施的政治化与瓶颈**（来源：[Dwarkesh](https://www.youtube.com/watch?v=Hrbq66XqtCo)、[All-In](https://www.youtube.com/watch?v=SFdqX7IY7RY)）：黄仁勋指出能源政策而非 CoWoS 才是真正制约，并警告出口管制反而加速中国自主芯片；All-In 嘉宾披露全美 40% 数据中心项目被取消，1620 亿美元投资受阻。两集共同揭示：AI 基础设施正从技术问题演变为政治博弈。

- **注意力与分发取代资本成为核心竞争力**（来源：[20VC Jake Paul](https://www.youtube.com/watch?v=rWn3KgO9Dvk)、[Sequoia Profound](https://www.youtube.com/watch?v=RyTwRCKeDo4)）：Antifund 认为 AI 商品化"聪明人的工作"后，品味和分发能力成为投资核心壁垒；Profound 论证 AI 代理替代人类浏览后，营销的本质从"吸引眼球"变为"被代理选中"。两集从投资和营销两个维度确认：注意力经济的游戏规则正在被 AI 重写。

## Coverage Notes

- 本周未发布：a16z、Bg2Pod、xiaojunpodcast、硅谷101、Acquired
- 字幕获取失败：无

---

## 相关细分报告

- [AI · Hrbq66XqtCo](/reports/podcast/2026-W16-ep-ai-Hrbq66XqtCo/)
- [AI · qN7Tgt9TnXY](/reports/podcast/2026-W16-ep-ai-qN7Tgt9TnXY/)
- [AI · tNNFJa5pUEg](/reports/podcast/2026-W16-ep-ai-tNNFJa5pUEg/)
- [China Tech · u1Lzp-7Ybn8](/reports/podcast/2026-W16-ep-china_tech-u1Lzp-7Ybn8/)
- [Deep Dive · 3lLyWGtt-38](/reports/podcast/2026-W16-ep-deep_dive-3lLyWGtt-38/)
- [Deep Dive · D9xisiU4_Xo](/reports/podcast/2026-W16-ep-deep_dive-D9xisiU4_Xo/)
- [Deep Dive · JVO8roYiNXM](/reports/podcast/2026-W16-ep-deep_dive-JVO8roYiNXM/)
- [Deep Dive · XKWeYYdc7rc](/reports/podcast/2026-W16-ep-deep_dive-XKWeYYdc7rc/)
- [Public Markets · 4FIDVjbcBL8](/reports/podcast/2026-W16-ep-public_markets-4FIDVjbcBL8/)
- [Public Markets · CyLml3Whg9c](/reports/podcast/2026-W16-ep-public_markets-CyLml3Whg9c/)
- [Public Markets · DVBJQQCjgXU](/reports/podcast/2026-W16-ep-public_markets-DVBJQQCjgXU/)
- [Public Markets · SFdqX7IY7RY](/reports/podcast/2026-W16-ep-public_markets-SFdqX7IY7RY/)
- [Public Markets · UsJfL4bJc08](/reports/podcast/2026-W16-ep-public_markets-UsJfL4bJc08/)
- [Public Markets · xMRcAocdHtY](/reports/podcast/2026-W16-ep-public_markets-xMRcAocdHtY/)
- [VC · e_2opghuq88](/reports/podcast/2026-W16-ep-vc-e_2opghuq88/)
- [VC · IZDJ3jcO5UY](/reports/podcast/2026-W16-ep-vc-IZDJ3jcO5UY/)
- [VC · Mjc7vwys1vY](/reports/podcast/2026-W16-ep-vc-Mjc7vwys1vY/)
- [VC · rWn3KgO9Dvk](/reports/podcast/2026-W16-ep-vc-rWn3KgO9Dvk/)
- [VC · RyTwRCKeDo4](/reports/podcast/2026-W16-ep-vc-RyTwRCKeDo4/)
- [VC · UOY8hsBqjJo](/reports/podcast/2026-W16-ep-vc-UOY8hsBqjJo/)
