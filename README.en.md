# Web Product Delivery

**Build a first website or improve an existing admin app with one AI skill.** Describe who uses the product, on which device, and what they are trying to do. Invoke `$web-product-delivery` and the assistant picks methods from this package and works with your existing stack. The guides and demo interfaces are in Chinese.

[Build your first website](#build-your-first-website) · [Improve an existing admin app](#improve-an-existing-admin-app) · [Download the skill](https://github.com/suhao1314/web-product-delivery/releases/download/v0.3.0/web-product-delivery.zip) · [中文](README.md)

## Install in your project

For an assistant that discovers project skills in `.agents/skills/`, run this once from the project's root:

```sh
git clone https://github.com/suhao1314/web-product-delivery.git .agents/skills/web-product-delivery
```

You can also unzip the [complete skill](https://github.com/suhao1314/web-product-delivery/releases/download/v0.3.0/web-product-delivery.zip) and place its `web-product-delivery` folder in your assistant's skill directory. Keep `SKILL.md`, `references/`, and `assets/` together, then reopen the project. A file-aware assistant can also read [SKILL.md](SKILL.md) directly.

## Build your first website

> Use $web-product-delivery to help me build my first site. I photograph campus events and want organizers to see my work and ask about a shoot with their date and requirements. Let's try it locally this week. Help me build a portfolio and an inquiry page, edit the headline myself, and complete one inquiry.

1. Pick one representative project and decide how an interested visitor will reach you. Build that path before expanding the site.
2. For a working example, unzip the [two-page starter](https://github.com/suhao1314/web-product-delivery/releases/download/v0.3.0/site-starter.zip) and open `index.html`. Edit the headline and refresh. Follow the featured coffee project to the inquiry page, enter a request, and generate an editable brief. The brief stays on the page until you copy it.
3. Replace the sample work and contact details, test at phone width, and connect a real delivery channel if the studio needs to receive inquiries. When ready, check the preview, public URL, and recovery steps. [First-site guide](references/build-your-first-site.md) · [Starter design decisions](assets/site-starter/DESIGN.md) · [First launch](references/first-launch.md)

[![The portfolio home page in the two-page exercise](docs/first-site.png)](https://github.com/suhao1314/web-product-delivery/releases/download/v0.3.0/site-starter.zip)

## Improve an existing admin app

> Use $web-product-delivery on this admin app. On a phone, reviewers select a campus, open a merchant application, and lose their place when they return. Reproduce it locally with test records, fix it in the existing components, and show the same actions before and after.

1. Open the maintained project and identify the usual entry point, reviewer role, and failing step. Repeat the task with a fixed viewport and filters.
2. Restore the selected campus and focus when the reviewer returns. Check that switching campus clears the previous selection. Use separate test records to verify scope. [Admin workflows](references/admin.md) · [Drafts and recovery](references/convenience.md)
3. Try the [offline review demo](https://github.com/suhao1314/web-product-delivery/releases/download/v0.3.0/review-queue.html). Select 松林校区, open a record, and choose 返回申请列表（取消） to return. Check the active filter and focused record. Reopen a record and confirm a decision to continue reviewing. The demo uses fictional records and resets on refresh. Validate authorization and persistence separately in the actual application's test environment. [Ownership and exceptions](references/admin-ownership.md) · [Journey review](references/journey.md)

[![A phone-sized merchant review queue with campus filters](docs/review-queue.png)](https://github.com/suhao1314/web-product-delivery/releases/download/v0.3.0/review-queue.html)

## Other tasks

- Bring a portfolio, product page, and inquiry form into the same visual system. [Design references](references/ui-reference.md)
- Diagnose slow first visits and touch gestures separately. [Motion](references/motion.md) · [Performance](references/delivery.md)
- Decide whether search, drafts, and onboarding solve an observed problem. [Feature selection](references/feature-tools.md)
- Investigate a control that looks the same but no longer works with a keyboard or accessible name. [Verification tools](references/verification-tools.md)

Both demos run locally without an account or Node.js. When reporting an issue, include the device, steps, and expected result using fictional data. The original skill and examples are distributed under the MIT License. [License](LICENSE) · [Research sources](references/sources.md)
