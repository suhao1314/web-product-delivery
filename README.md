# Web Product Delivery

**用一个 AI 技能从零做网站、设计界面和交互，也能优化已有后台。** 告诉它谁会来、打开网站要做什么，或哪一步总让人重来。调用 `$web-product-delivery`，它会用你的真实内容排页面、解释取舍，再沿用户的操作路径验证。

[官网 UI 设计实例](#桂小递官网设计实例) · [从零做网站](#从零做网站) · [优化已有后台](#优化已有后台) · [下载完整技能](https://github.com/suhao1314/web-product-delivery/releases/download/v0.3.1/web-product-delivery.zip) · [English](README.en.md)

## 安装到项目

在支持项目级 `.agents/skills/` 的 AI 开发助手中，打开目标项目，从项目根目录运行一次：

```sh
git clone https://github.com/suhao1314/web-product-delivery.git .agents/skills/web-product-delivery
```

不用 Git 也可以。解压[完整技能 ZIP](https://github.com/suhao1314/web-product-delivery/releases/download/v0.3.1/web-product-delivery.zip)，把里面的 `web-product-delivery` 文件夹放进助手的技能目录。确认文件夹中有 `SKILL.md`、`references/` 和 `assets/`，然后重新打开项目。支持读取本机文件的其他助手，也可以直接从包内的 [SKILL.md](SKILL.md) 开始。按你的目标挑下面一段示例发给 AI 即可。

## 桂小递官网设计实例

[![桂小递科技官网桌面首屏，标题和定制入口在左侧暗部，银河亮带斜穿画面右侧](docs/guixiaodi-home.jpg)](docs/guixiaodi-home.jpg)

桂校园是团队的校园产品，桂小递科技官网还面向软件定制客户和来学技术的人。上图是官网维护版的本地浏览器实拍。看这张图，可以用三个问题拆开讨论“高级感”。

- **视线先落在哪里？** “把 AI 想法，做成可用的产品。”放在暗部，用两行有衬线的大字做主张，下一行小字交代具体业务。银河最亮的部分留在右侧。浅色实心按钮“定制我的项目”承接明确需求，旁边的“看产品”“学技术”给想先了解的人。手机上重新检查亮带裁切和中文换行。
- **手指划过，什么该动？** 这个项目想要近处星尘掠过眼前、远处银河缓动。评审时先静置，再划过一小片，最后松手向下滚，观察拨动范围和文字是否稳定。静态图能看排版，判断纵深与手感要看连续画面。换到审核后台，同样的交互判断用于选中反馈、提交状态和返回焦点。[动效验收方法](references/motion.md)
- **下一页记得我刚选了什么吗？** 在产品页点“AI 共创界”的“咨询合作”，表单带出产品名。访客只需写一句需求，可以展开时间和预算，生成摘要后仍能返回修改。这里的主按钮叫“生成需求摘要”，准确说明这一步的结果；访客复制后自行发给企业微信。

> 用 $web-product-delivery 帮我评首页。保留品牌图，用同一句中文比较两种排法，说明你选哪种、为什么。再从手机产品页点到咨询，看看刚才的选择和输入还能不能接上。

我在 390 像素宽的本地浏览器里，从产品详情点进咨询，核对了两个预填字段，再试了生成、返回修改和重新生成。手机实拍保留了表单的标签、边界和主按钮位置，方便逐项对照。[查看手机表单实拍](docs/guixiaodi-inquiry.jpg) · [完整 UI 设计练习](references/ui-design-practice.md) · [官网入口](https://guixiaoyuan.site/)

## 从零做网站

> 用 $web-product-delivery 带我做第一个网站。我给校园社团拍活动，希望负责人看完作品，带着活动时间和拍摄需求来找我。这周先在自己电脑上试。帮我做出作品页和咨询页，让我亲手改一次标题，再走通一次咨询。

1. **定首版。** AI 和你确认谁来、看什么、最后怎么联系。先放一个真实作品和一个咨询入口，就能试出访客看完之后知不知道下一步。
2. **看到页面。** 想先练手，可以解压[两页练习站](https://github.com/suhao1314/web-product-delivery/releases/download/v0.3.1/site-starter.zip)，双击 `index.html`。改标题后保存刷新，找到“山野咖啡”，点“带着这个方向去咨询”。填一句需求，生成摘要，再手改或复制。练习页离线可用，摘要保留在当前页面。
3. **换成自己的站并发布。** AI 帮你替换作品、联系渠道和页面样式，在手机宽度走完这条路径。需要工作室真正收到咨询时，再接入实际收件渠道。准备上线后，按项目选托管、预览、核对正式网址，并留下恢复上一版的方法。[从空文件开始](references/build-your-first-site.md) · [样站的设计约定](assets/site-starter/DESIGN.md) · [首次发布与接手](references/first-launch.md)

[![教学样站首页，访客可以从作品进入咨询](docs/first-site.png)](https://github.com/suhao1314/web-product-delivery/releases/download/v0.3.1/site-starter.zip)

## 优化已有后台

> 用 $web-product-delivery 优化这个后台。值班员用手机选校区、看商家申请，返回后总要从头找。请在本地用测试数据复现，沿用现有组件直接改，再让我看到同一条操作改前、改后的差别。

1. **交给 AI 正在维护的项目。** 告诉它正常入口、操作者和卡住的步骤。AI 从同一角色、筛选条件和手机宽度复走一次，找出丢的是校区、列表位置，还是刚才查看的申请。
2. **改最费劲的一步。** 例如从详情返回时保留本校筛选，把焦点还给刚才那条申请。切换校区时清除上一校区的选择，用两份隔离测试数据核对记录归属。[审核队列与数据范围](references/admin.md) · [草稿与恢复](references/convenience.md)
3. **亲手验效果。** 打开[手机审核演示](https://github.com/suhao1314/web-product-delivery/releases/download/v0.3.1/review-queue.html)，选“松林校区”，打开一条申请再点“返回申请列表（取消）”，看筛选和焦点落在哪里。再次打开、作出决定，观察下一条待办。这个示例使用虚构数据，刷新即可重试。真实项目的权限和写入结果在对应测试环境单独验证。[首管与人工处置](references/admin-ownership.md) · [按用户任务走查](references/journey.md)

[![离线审核队列，展示校区筛选、申请详情和返回位置](docs/review-queue.png)](https://github.com/suhao1314/web-product-delivery/releases/download/v0.3.1/review-queue.html)

## 遇到其他问题

| 你看到的现象 | 这个技能会检查什么 |
| --- | --- |
| 产品页和首页看起来不像一家 | 拿同一份中文内容比较字级、主按钮和留白，将选定规则用到两页。[从参考提取设计规则](references/ui-reference.md) |
| 海报或星河好看，但手机要等很久才能点 | 分别检查冷启动、画面绘制和手势响应，用同条件前后对照验证。[动效](references/motion.md) · [性能](references/delivery.md) |
| 想加搜索、草稿或新手引导 | 先让目标用户找一门课或恢复一次输入，再决定是否值得增加依赖。[功能取舍](references/feature-tools.md) |
| 两版截图一样，表单却用不了 | 按控件名称、键盘焦点与真实点击检查失败步骤。[按现象选验收方法](references/verification-tools.md) |

两份演示均可在本机浏览器运行，无需账号或安装 Node.js。贡献反馈时，请写出设备、步骤和期望结果，示例数据请用虚构记录。原创技能和离线演示采用 MIT 许可。官网截图用于案例讲解，其中的品牌标识与第三方素材保留各自权利。[许可证](LICENSE) · [研究来源](references/sources.md)
