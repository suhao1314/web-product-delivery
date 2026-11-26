# 调研与取舍

筛选依据是能读到原始方法、能解释适用场景、能用具体任务验证。社区讨论用于发现候选和分歧；涉及实现、性能、可访问性或权限时回到作者仓库和官方说明。以下为原创归纳，没有引入第三方代码或安装包。更新技能时重新核对上游内容。

页面功能与测试工具的作者文档放在对应决策旁边。需要决定是否值得做搜索、草稿或引导时，读[功能选型](feature-tools.md)。需要验证界面、接口或性能时，读[验收工具](verification-tools.md)。其中的咨询下拉框有本地浏览器对照结果，其余条目按用户任务选用，并在项目中单独验证。

| 作者 / 材料 | 吸收的做法 | 采用边界 |
| --- | --- | --- |
| [Anthropic · frontend-design](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md) | 从受众、产品材料、字级和构图形成具体首屏方向 | 客户已认可的识别元素优先，设计偏好不变成跨项目禁令 |
| [Paul Bakaus · Impeccable](https://github.com/pbakaus/impeccable/blob/main/skill/reference/operate.md) | 高频任务采用熟悉控件、紧凑信息结构、稳定状态切换 | 官网可有辨识体验；表格与设置页重视操作连续性 |
| [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/main/src/ui-ux-pro-max/templates/base/skill-content.md) | 按产品、风格、图表、交互问题分别找参考，再落到设计系统 | 字体须检查中文覆盖、许可、字重与首屏体积 |
| [Vercel · Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines/blob/main/command.md) | 将无障碍名称、焦点、表单、触摸和减少动效纳入审查 | 自动检查不能证明用户完成任务，须补浏览器走查 |
| [Anthropic · webapp-testing](https://github.com/anthropics/skills/blob/main/skills/webapp-testing/SKILL.md) 与 [Playwright 实践](https://playwright.dev/docs/best-practices) | 先查看渲染页面，再按用户可见控件操作和断言 | 复用已有测试栈，等待业务就绪信号 |
| [Cloudflare · web-perf](https://github.com/cloudflare/skills/blob/main/skills/web-perf/SKILL.md) 与 [Web Vitals](https://web.dev/articles/vitals) | 用网络、渲染轨迹和输入时间定位慢点 | 同条件实验与真实访问分开；单次本机数字不能代表全部用户 |
| [W3C · Dialog Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) | 把打开、键盘遍历、关闭和返焦写成可操作用例 | 复杂表单须结合打开时阅读顺序决定焦点 |
| [OWASP · Authorization](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html) 与 [Logging](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html) | 角色、对象归属和状态在服务端判断，审计记录最少必要信息 | UI 隐藏入口只改善操作体验，授权逻辑用隔离数据验证 |

## 从作者技能到页面决策

包内已吸收视觉还原、组件复用、浏览器排错和独立请求时序的方法。设计稿按同尺寸的主操作与窄屏顺序对照，控件先用已有变体，验证时操作实际渲染的页面，读取顺序依据数据依赖判断。这些做法可沿用当前工程的技术栈。[shadcn/ui 组件目录](https://ui.shadcn.com/docs/components) · [Playwright 测试实践](https://playwright.dev/docs/best-practices) · [Vercel 的独立请求规则](https://github.com/vercel-labs/agent-skills/blob/main/skills/react-best-practices/rules/async-parallel.md)

- 品牌首屏用真实产品内容选主视觉、字级和主要动作。页面可操作后，再查键盘焦点、表单错误和减少动态效果，并在浏览器复走任务。[Anthropic 设计技能](https://github.com/anthropics/skills/blob/ca45fc496a3436251f191354091d557da31c15b5/skills/frontend-design/SKILL.md) · [Vercel 审查技能](https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines) · [界面规则](https://github.com/vercel-labs/web-interface-guidelines/blob/434b7f91364665f2f733b310ec54809bf8f37937/command.md)
- Emil Kowalski 的方法先识别控件任务、检查项目依赖，再推荐合适的库；动效参考将可打断性、触发频率和运动用途纳入选择。[组件选型](https://github.com/emilkowalski/skills/blob/main/skills/pick-ui-library/SKILL.md) · [动效取舍](https://github.com/emilkowalski/skills/blob/main/skills/find-animation-opportunities/SKILL.md) · [本技能页面决策表](page-components.md)

## 社区线索

- [Reddit · 前端设计技能改写与盲评](https://www.reddit.com/r/ClaudeAI/comments/1q7rnpk/i_rewrote_anthropics_frontenddesign_skill_and/)：可借用相同输入做盲比；模型偏好不能证明访客能成功咨询或员工能正确审核。
- [Hacker News · StyleSeed](https://news.ycombinator.com/item?id=48920888)：设计规则与视觉参考可分别研究。构图反馈用实际素材做代表页；跨页不一致先整理控件与排版规则。

## 按阶段使用的方法

需求梳理与行为回归、权限覆盖与证据记录放在[从需求到回归](feature-workflow.md)。新网页的视觉方向、既有界面评审和三项审美偏好放在[选方向与改版](visual-direction-and-change-control.md)。桌面窗口与视频制作是条件触发的工具，见[配套网页交接与演示](companion-workflow.md)。各节就近列出对应作者原文，设计方法可直接用包内说明实施。

## 补充资料

首站教学将分阶段带做、同数据比较布局、实物验收与恢复进度用于普通浏览器。基础网页结构可继续学习 [MDN 的第一个网站](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website)。部署练习参考 [Cloudflare Pages 直接上传](https://developers.cloudflare.com/pages/get-started/direct-upload/)和[版本回滚](https://developers.cloudflare.com/pages/configuration/rollbacks/)。

[VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) 收录公开网站的第三方设计分析。[UI 参考取舍](ui-reference.md)列出 Stripe、IBM、Linear、Notion 四份分析的 GitHub 固定版本；[便利性研究](convenience.md)收录 draw.io、Gutenberg、React-admin 与 GitHub 的原始例子及适用条件。此处只保留提炼后的设计与决策方法，不包含任何内部工程路径、测试产物或生产记录。

## 动效与任务状态

从原作者的页面和官方文档对照触发、作用范围、滚动节奏及触屏表现。社区分享提供效果名称，包内的 HTML、CSS 和脚本为原创示例。[动效图谱、作者参考与用法](motion-patterns.md) · [16 项离线示例](../assets/motion-lab/index.html)

浏览器验了鼠标、键盘、窄屏触摸模拟、系统减少动效和无脚本时的基本内容。小程序配套网页中还核对了扫光范围、主体位置与弹层关闭后的焦点。设备模拟用于说明测试过的按钮与布局，真实手机和低端显卡表现仍按项目实测。[在成品中验收](motion.md#在成品中验收)

GOV.UK 的展开详情、核对答案与错误摘要用于选择显示内容和修改入口。Carbon 的表格、空状态指南用于结果组织。W3C 的目标尺寸与焦点要求用于检查固定栏和窄屏。Baymard 结账研究提示减少无关字段，迁移到咨询或后台时按当前任务所需信息验证。[任务排版的做法与各原文](ui-design-practice.md#按任务排版和补齐状态) · [Baymard 表单研究](https://baymard.com/research-articles/checkout-flow-average-form-fields)

浏览器标签页的客户确认、制作和发布实测，参考 MDN 的页面标题、图标链接与 Google 搜索标题说明。项目主路径走查增加从首页到一个内页的标签回读。[标签页图标、标题与出处](site-identity.md)

早期分阶段访谈和高保真审图经验已整理进网站流程。当前以[网站开发四步](project-workflow.md#网站开发四步)为准。

## 一手网站案例与版式

从官网产品页和客户案例、公开设计系统、工作台改版复盘和滚动叙事实例里提取内容顺序、清楚的视觉主次、可比较字段和关键状态。直接的观察与给自有项目的桌面、手机建议都列在对应版式。另一项采用依据是 WCAG 对窄宽重排和需要二维布局的说明。[八种版式及原始链接](layout-patterns.md)

2026-11-26 根据用户反馈重审旧版的局部修复、图片交付和方案批准规则。当前任何网站修改都要先取得需求、两端 PNG/JPG 图片和当前方案的明确确认。[开工前核对](project-workflow.md#每次开工前核对三处确认)
