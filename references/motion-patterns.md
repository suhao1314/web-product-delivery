# 网页动效图谱

先用[开发流程](motion.md#开发时默认走这几步)决定要帮助访客看到什么，再到[离线动效样例](../assets/motion-lab/index.html)试触发、读源码。样例为原创原生 HTML、CSS 和浏览器脚本。取用时保留点击区域、内容和输入回退，使用项目的素材、配色和排版。

## 十六种可操作动效

| 效果 | 适用场景与触发 | 实现起点与验收 |
| --- | --- | --- |
| [鼠标聚光灯 Spotlight](../assets/motion-lab/index.html#spotlight) | 指针进入产品预览或深色展示卡时，用柔光指向局部区域 | 指针坐标换算成卡片局部坐标，由 CSS 渐变读坐标。光画在内容后面，移出后恢复。触屏保留静态底色。 |
| [滚动显现 Scroll Reveal](../assets/motion-lab/index.html#scroll-reveal) | 首次读到次屏的案例、图表或功能图，短淡入或轻移入 | 用 IntersectionObserver 触发一次，正文和主链接默认可读。测试直接进锚点、向回滚和无脚本。 |
| [边缘流光 Border Beam](../assets/motion-lab/index.html#border-beam) | 重点卡片、设备框或某个被选中的方案，跟随进入、聚焦或选中扫过指定边 | 渐变限制在边框层，圆角和边厚沿轮廓走，控制时长和结束态。前后比对主体位置，独立保留键盘焦点轮廓。 |
| [磁吸按钮 Magnetic Button](../assets/motion-lab/index.html#magnetic-button) | 展示型按钮在精细指针附近轻微响应，可用小箭头或按钮内层产生吸附感 | 移动内层图形，外层按钮和焦点边界固定。核对指针到了按键边缘仍能点，触屏和键盘可正常触发。 |
| [滚动叙事 Scrollytelling](../assets/motion-lab/index.html#scrollytelling) | 有明确起承转合的产品演示、数据报道与教程，每段文字带出一个画面 | 用原生滚动、粘性舞台和步骤进入侦测。小屏把说明与画面顺序排开或降低粘性高度，直接到章节和向上滚时也能对应。 |
| [3D 倾斜 3D Tilt](../assets/motion-lab/index.html#tilt) | 产品卡片或设备展示用小角度改变视角，结合倒角、前后面和阴影提供厚度 | 固定外层，内层使用 perspective 与局部旋转。只算单张卡，移开后复位。文字、输入和键盘焦点保持好读。 |
| [文字解码 Text Scramble](../assets/motion-lab/index.html#text-scramble) | 品牌标语的短装饰片段、技术展项的状态演示，可随点击或首次进入播放 | 预留最终文字宽度，随机字符放在读屏忽略的层，语义层和最终文字完整。减少动效时立即显示最终态。 |
| [流光扫过 Shimmer](../assets/motion-lab/index.html#shimmer) | 真实加载有等待时给骨架一次或有限次扫光，也可给材料表面短反光 | 只移动一层渐变。预留内容尺寸，加载标签、错误或就绪按真实结果更新。等待很长时用静态状态继续传达进度。 |
| [视差滚动 Parallax Scrolling](../assets/motion-lab/index.html#parallax) | 有近景和远景的图片、产品舞台或品牌场景，滚动时层间位移不同 | 背景幅度有限，读正文、导航和原生滚动不受影响。目标浏览器支持时用 CSS 滚动时间轴，其他设备保留静态构图。 |
| [数字递增 Count Up](../assets/motion-lab/index.html#count-up) | 已核对的统计值放到成果或数据亮点上，可在首次可见或用户切换时短过渡 | 渲染真实最终值，装饰数字按时间增长，固定数字宽度与单位。核对数值、单位和读屏内容，缺数据时显示实际状态。 |
| [悬停浮起 Hover Lift](../assets/motion-lab/index.html#hover-lift) | 确实可点的卡片或入口在悬停和聚焦时增加轻微层次 | 用几像素内的位移和阴影，不推开其他内容。触屏用按下或选中反馈，卡片整体可点的语义保留。 |
| [打字效果 Typewriter](../assets/motion-lab/index.html#typewriter) | 命令提示、对话示意或短句展示，由进入或操作触发一次 | 先保留完整台词和容器尺寸，只逐步揭示装饰层。读屏一次读整句，触屏和减少动效时可立即看全。 |
| [错峰动画 Stagger Animation](../assets/motion-lab/index.html#stagger) | 成组内容进入、搜索结果替换或操作后的有限项反馈，按阅读方向依次出现 | 用短延时差进入，长列表只处理首批可见项。隐藏不应先于焦点可达。快速再次更换列表时回到最新结果。 |
| [跑马灯 Marquee](../assets/motion-lab/index.html#marquee) | 可选的标识、作品或短语展示，有静态读取路径时可用有限次运动 | 以静态列表为基础，按指令播放一次或随原生横向滚动，重要内容完整可见。克隆装饰项从读屏和焦点顺序移除。 |
| [弹性动画 Spring Animation](../assets/motion-lab/index.html#spring) | 明确操作后的小对象复位、组件展开或局部成功反馈 | 小幅过冲后短时间收住，频繁操作和表单错误用更稳定的反馈。验证再次输入时当前状态优先。 |
| [缓动效果 Easing](../assets/motion-lab/index.html#easing) | 页面内移动、按钮反馈和弹层退出搭配用途选择节奏 | 比较同距离同时间的不同曲线，响应优先的点击先给反馈。装饰可即刻结束时去掉缓动仍能理解状态。 |

## 继续补充的做法

| 动效 | 当什么问题出现时加 | 实现与验证 |
| --- | --- | --- |
| 阅读进度 Scroll Progress | 长文、报告和教程需要知道读到哪里 | 按内容段的实际滚动范围计算，更新进度条比例。以可跳转的章节为基础，减少动效时可用离散步骤。支持的浏览器可用 CSS 滚动时间轴。[Chrome 开发者文档与示例](https://developer.chrome.com/docs/css-ui/scroll-driven-animations) |
| 共享元素或版式过渡 | 列表卡进详情、结果重新排序，用户需要认出还是同一个对象 | 用同一对象的稳定键，以及项目已有布局动画或 View Transition API。基础更新独立可用，测试返回、焦点与重复切换。全局转场会影响主流程时只做局部。[MDN View Transition API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API) · [Motion Layout 动画](https://motion.dev/docs/layout-animations) |
| 前后对比拖动 | 改版前后、图片处理、修复或配置差异需要证据 | 同尺寸内容叠合，用有名称的原生范围输入控制遮罩，再给文本说明或两图静态路径。用箭头键和触屏各走一次。[Aceternity Compare Slider](https://ui.aceternity.com/interactions/compare-slider) |
| 材质擦光 Glare Hover | 有曲面、玻璃或金属展示且需要说明材质 | 局部遮罩内扫过反光，控制亮度与面积，文字对比在亮处也清楚。用同一构图检查指针前后。[Magic UI 组件目录](https://github.com/magicuidesign/magicui/blob/main/registry.json) |
| 选中指示与展开 | 切功能标签、筛选或展开详情时易丢当前状态 | 把选中位置、文字和焦点一起设计，可短移动指示条或轻淡入。实际选择与 ARIA 状态同步，展开后阅读顺序和焦点连续。 |
| 操作结果过渡 | 提交、失败、重试、撤销需要给操作者确定回执 | 等真实状态再更新文本和图形。保存中留原内容，失败给下一步，成功后可短染色或淡入。验证断网、重复点击和读屏播报。 |
| 局部粒子或流体反馈 | 品牌首屏的沉浸式画面确有传播价值 | 背景低速独立运动，指针只扰动小半径内的层。复用纹理并测实际帧间隔，静态图与原生滚动始终可用。先看[桂小递星海实测取舍](motion.md#大画面和局部跟随排查)。 |

## 找什么参考怎么借鉴

先定要解决的任务，再打开同类网站和可操作的原作者样例。缺少直接同类时，可以从独立互动作品借一个动作。记录原页位置、触发、作用范围、移动版和可迁移的规律。只有实际操作过的效果写成“已观察”。用自有内容、版式、图标和素材重新编排。

| 到哪看 | 看什么 | 怎么用到自己的网站 |
| --- | --- | --- |
| [Stripe Connect 产品页](https://stripe.com/connect) | 支付、结算等示意场景如何紧邻对应功能说明和行动入口 | 借信息先后关系。用自己的真实产品或脱敏业务画面演示，先把解释与结果对上。 |
| [The Pudding 的 Scrollama 实例](https://pudding.cool/process/introducing-scrollama/) 与 [作者的响应式实践](https://pudding.cool/process/responsive-scrollytelling/) | 步骤进入时图表如何对应，窄屏文字和图形怎么摆 | 教程或项目案例先写分段，再按真实滚动切画面。手机可以降低粘性区域高度。 |
| [Linear 团队设计复盘](https://linear.app/now/how-we-redesigned-the-linear-ui) | 侧栏、标签、页头的层级和状态如何统一 | 用于工作台和后台。先看当前操作与选中状态，再给切换和返回加短反馈。 |
| [Codrops 的磁吸按钮](https://tympanus.net/codrops/2020/08/05/magnetic-buttons/) 与 [CSS 悬停按钮实例](https://tympanus.net/Development/ButtonHoverStyles/) | 指针经过时，哪些地方提供反馈，运动多久结束 | 学位置、重心和节奏。保留项目原有可点击区域、按钮语义与键盘焦点。 |
| [Magic UI Border Beam](https://magicui.design/docs/components/border-beam) 与 [Aceternity 3D Card](https://ui.aceternity.com/components/3d-card-effect) | 边框层与内容层、倾斜方向和反馈范围 | 比较物体在静态、边角触发和窄屏的表现。先试包内原生样例。复制上游代码前核对授权、依赖及版本。 |
| [Motion 文档](https://motion.dev/docs) 与 [GSAP ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) | 弹性动画、错峰、共享元素或多段滚动时间轴怎么组织 | 项目已有 Motion 时复用它的状态动画。确实需要多场景滚动同步时再评估 ScrollTrigger，并先设计手机回退。 |

现有站遇到具体视觉问题时，从项目组件和上表开始比对。找不到适合的实例，再按“页面类型＋用户动作＋效果”查网页和开源项目。以能迁移进本项目、能在页面上验证为取舍依据。
