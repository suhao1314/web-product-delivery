# Website Builder & Redesign

**One AI skill for website building, UI design, and improving existing websites or dashboards.** Start with an idea, URL, mockup, or codebase. The skill asks focused questions and works from your current stage. The guides and demos are in Chinese.

[Design in practice](#design-in-practice) · [Build your first website](#build-your-first-website) · [Review or redesign a site](#review-or-redesign-a-site) · [Improve an admin app](#improve-an-existing-admin-app) · [Try 16 motion effects](#try-16-motion-effects) · [Download the skill](https://github.com/suhao1314/web-product-delivery/releases/latest/download/web-product-delivery.zip) · [中文](README.md)

## Install this skill

This repository contains one skill. For an assistant that discovers project skills in `.agents/skills/`, run the command from the root of your website project.

```sh
git clone https://github.com/suhao1314/web-product-delivery.git .agents/skills/web-product-delivery
```

The [ZIP download](https://github.com/suhao1314/web-product-delivery/releases/latest/download/web-product-delivery.zip) contains the same skill and its built-in examples. Extract `web-product-delivery` into your assistant's skill directory and reopen the project. A file-aware assistant can also read [SKILL.md](SKILL.md) directly.

## Start with what you have

- **An idea.** “Build a portfolio for my campus photography business and show me how a visitor would ask about a shoot.” Answer one to three questions per round. Confirm the scope, review desktop and phone mockups, then check the development plan.
- **A URL or screenshot.** “Find the step that makes it hard to ask about a product on a phone.” Get the location, impact, proposed change, and a way to check it.
- **An existing site or mockup.** “Keep the approved design and wire up the inquiry button,” or “Fix the admin list so a reviewer returns to the same record.” Get a working result and the steps used to verify it.

An assistant that discovers skills can use these requests directly. To invoke it explicitly, start with `$web-product-delivery`. [Skill entry point](SKILL.md)

## Design in practice

[![The Guixiaodi homepage with a Chinese headline and inquiry button on the dark left and a bright diagonal galaxy on the right](docs/guixiaodi-home.jpg)](docs/guixiaodi-home.jpg)

The team behind the Gui Campus product also builds software and teaches AI. This desktop capture comes from a local build of its Guixiaodi company site. Three decisions show how the skill approaches visual and interaction design.

- **Where should the eye land?** A two-line Chinese serif headline sits against the dark part of the image. One smaller line names the services. A solid button invites a project inquiry, while two quieter links lead to products and classes. Check the crop and headline breaks again at phone width.
- **What should respond to a gesture?** The intended effect is slow dust close to the viewer, a distant moving galaxy and a local disturbance under the pointer. Review a still pointer, a short swipe, release and normal scrolling. A still image can show the composition. Depth and gesture response need a recording. For an admin app, apply the same attention to selection, submission feedback and restored focus. [Motion checks](references/motion.md)
- **Does the next screen remember the choice?** Choosing the inquiry link for AI 共创界 carries that product into the form. The visitor describes the request in one required field, can expand optional timing and budget fields, then generates a brief and can return to revise it. The button names the action precisely. A visitor sends the copied text through WeCom themselves.

> Use $web-product-delivery to review my homepage with the same headline in two layouts. Explain which one you would ship and why. Then follow a product inquiry at phone width and show whether it remembers the selected product.

At a 390-pixel browser width we followed the product detail link, checked both prefilled fields, generated a brief, went back to edit and generated it again. The capture shows the form on entry. [Phone-width inquiry capture](docs/guixiaodi-inquiry.jpg) · [UI design exercises (Chinese)](references/ui-design-practice.md) · [Company website](https://guixiaoyuan.site/)

## Build your first website

> Use $web-product-delivery to help me build my first site. I photograph campus events and want organizers to see my work and ask about a shoot with their date and requirements. Let's try it locally this week. Help me build a portfolio and an inquiry page, edit the headline myself, and complete one inquiry.

1. Discuss who will use the site, what they need to do, and how you will verify the first version. The assistant asks you what is still open.
2. Review desktop and phone UI mockups with real content and key states. Agree on a new favicon before it is made and let the assistant propose page titles. [Browser tab guide](references/site-identity.md)
3. Confirm the development plan or delegate the technical choices within the agreed scope. It explains page connections, how data is handled, and what will be tested.
4. Build and verify the first working path. For practice, open `assets/site-starter/index.html` inside the skill folder. Follow the featured project to the inquiry page and generate an editable brief. Check the preview, public URL, and recovery steps when you are ready to publish. [Four-step workflow](references/project-workflow.md) · [First-site practice](references/build-your-first-site.md) · [First launch](references/first-launch.md)

[![The portfolio home page in the two-page exercise](docs/first-site.png)](assets/site-starter/index.html)

## Review or redesign a site

Start at the original entry point and follow one real task. “I read a course description but have to select the course again when I inquire” calls for a journey from the directory to the form. With a redesign, record the existing links, fields, responses and permissions. Review desktop and phone mockups and a development plan before a major redesign. For a small fix, reuse the existing interface and compare the same entry point, data, role, and viewport before and after. [User journey review](references/journey.md) · [Layout and UI states](references/ui-design-practice.md#按任务排版和补齐状态) · [Redesign checks](references/visual-direction-and-change-control.md)

## Improve an existing admin app

> Use $web-product-delivery on this admin app. On a phone, reviewers select a campus, open a merchant application, and lose their place when they return. Reproduce it locally with test records, fix it in the existing components, and show the same actions before and after.

1. Open the maintained project and identify the usual entry point, reviewer role, and failing step. Repeat the task with a fixed viewport and filters.
2. Restore the selected campus and focus when the reviewer returns. Check that switching campus clears the previous selection. Use separate test records to verify scope. [Admin workflows](references/admin.md) · [Drafts and recovery](references/convenience.md)
3. Open the bundled [offline review demo](examples/review-queue.html) in your local browser. Select 松林校区, open a record, and choose 返回申请列表（取消） to return. Check the active filter and focused record. Reopen a record and confirm a decision to continue reviewing. The demo uses fictional records and resets on refresh. Validate authorization and persistence separately in the actual application's test environment. [Ownership and exceptions](references/admin-ownership.md) · [Journey review](references/journey.md)

[![A phone-sized merchant review queue with campus filters](docs/review-queue.png)](examples/review-queue.html)

## Try 16 motion effects

Open the bundled [motion lab](assets/motion-lab/index.html) in a browser. Try spotlight, border beam, 3D tilt, and scroll-driven storytelling. The catalog covers where to use each effect, how it responds on touch screens, and what to check when shipping it. [Motion catalog](references/motion-patterns.md) · [Implementation and verification](references/motion.md)

## Other tasks

For a WeChat mini program with a companion website, describe the job once. With both first-party skills available, the native registration flow stays with the mini-program skill, and this skill handles browser-based review. Verify both ends with the same fictional application. A database-only request stays in the native project. If staff training is part of delivery, capture the verified steps for the video. [Cross-platform handoff](references/companion-workflow.md)

For a new site, choose a composition with real content. For an existing page, rank issues by their effect on the visitor and tune layout, motion or density independently. Develop unclear business rules through one observable user journey and check sensitive results at the service boundary. [Design decisions](references/visual-direction-and-change-control.md) · [Requirements and verification](references/feature-workflow.md)

- Bring a portfolio, product page, and inquiry form into the same visual system. [Design references](references/ui-reference.md)
- Diagnose slow first visits and touch gestures separately. [Motion](references/motion.md) · [Performance](references/delivery.md)
- Decide whether search, drafts, and onboarding solve an observed problem. [Feature selection](references/feature-tools.md)
- Investigate a control that looks the same but no longer works with a keyboard or accessible name. [Verification tools](references/verification-tools.md)

All three demos run locally without an account or Node.js. When reporting an issue, include the device, steps, and expected result using fictional data. The original skill and offline demos use the MIT License. The company screenshot illustrates the case study. Brand marks and third-party artwork retain their respective rights. [License](LICENSE) · [Research sources](references/sources.md)
