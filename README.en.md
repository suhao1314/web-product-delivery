# Web Product Delivery

**Build your first website with an AI partner, from a rough idea to a published site.** Decide who the site serves, sketch the first screen, edit a working page, test the journey on a phone, and hand the site over to its owner.

[中文](README.md) · [Install the skill](#quick-start) · [Download the starter](https://github.com/suhao1314/web-product-delivery/releases/download/v0.2.0/site-starter.zip) · [MIT license](LICENSE)

## Your first lesson

1. Unzip the starter and open `index.html` in your browser. The two-page studio site runs offline without an account, domain, or build step.
2. Change the headline and button color, refresh, then follow the featured coffee project into the inquiry form. Generate an editable brief.
3. Use your own content to plan a small first release. Learn where a shared backend becomes necessary, how to publish, and how to recover a previous version. [Guided build](references/build-your-first-site.md) · [First-screen workshop](references/first-page-workshop.md) · [First launch](references/first-launch.md)

[![Home page of the included two-page studio starter](docs/first-site.png)](assets/site-starter/index.html)

## Four practical starting points

| Task | Design decision | Acceptance check |
| --- | --- | --- |
| Give a landing page depth on mobile | Keep the title and inquiry action usable while distant clouds and nearby dust move at different speeds. | Record idle motion, a local touch gesture, release, and normal vertical scrolling. Check reduced motion. [Motion](references/motion.md) |
| Recover an interrupted inquiry | Preserve the inputs that cost effort to recreate. Show where the draft lives and what copying an inquiry does. | Leave mid-sentence, return, recover the text, and try the copy-failure path. [Drafts and recovery](references/convenience.md) |
| Review a queue on a phone | Keep the active scope, filters, and reading position. Put the decision and its evidence together. | Cross a page boundary, close the detail view, and locate the last record and its action. [Admin workflows](references/admin.md) |
| Help the only owner resolve an exception | Give the owner a manual decision for missing optional material and a reconciliation path for an unknown payment outcome. | Check cancellation, duplicate submission, and the result after refresh. [Ownership and exceptions](references/admin-ownership.md) |

## Quick start

From your project root, run the following command for assistants that discover skills under `.agents/skills/`. For other hosts, place the same directory in the host's skill folder.

```sh
git clone https://github.com/suhao1314/web-product-delivery.git .agents/skills/web-product-delivery
```

Reopen the project and try this prompt in a host that supports explicit skill invocation.

> Use $web-product-delivery to teach me to build my first website. I photograph campus events and want organizers to see a project and send me a brief. This week I only want to try it on my computer. Help me build the first page and make one edit myself.

The skill instructions, field guides, and demo interface are written in Chinese. The demo uses fictional data and runs locally in a browser. Node.js is optional. The included loading probe uses an existing Playwright and Chromium installation for controlled measurements. [Measurement guide](references/delivery.md)

## Field guides

- **Plan a site.** Organize a home page, product catalog, course page, and inquiry around the visitor's next decision. [Pages and brand](references/pages.md)
- **Choose components.** Start with the project's existing UI stack, then try one component with realistic content and touch input. [Component selection](references/page-components.md)
- **Improve an existing flow.** Keep a baseline, fix the most expensive step, and repeat the task with the same fixtures. [Journey review](references/journey.md)
- **Report what ran.** Distinguish browser observations, simulated responses, device checks, and a production readback. [Quality checks](references/quality-gates.md)

For feedback, include the task, device and input method, steps, and expected outcome. Use fictional records in public issues.

The original skill, documentation, scripts, and demo are available under the MIT License. Keep the copyright and permission notice when redistributing copies. External references belong to their respective authors. [License](LICENSE) · [Sources](references/sources.md)
