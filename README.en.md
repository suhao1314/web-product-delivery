# Web Product Delivery

**An agent skill for shipping websites and admin tools that hold up on the second click.** It covers interface design, motion, mobile performance, role-aware workflows, and acceptance testing.

[中文](README.md) · [Quick start](#quick-start) · [Download offline demo](https://github.com/suhao1314/web-product-delivery/releases/download/v0.1.0/review-queue.html) · [MIT license](LICENSE)

A visitor opens a product, starts an inquiry, and goes back to check a detail. A reviewer handles the last application on a page and opens the next one. Those transitions reveal problems a screenshot rarely catches. This skill asks the development agent to walk the task, change the interface, and repeat the same journey under comparable conditions.

[![Desktop preview of the included review queue using fictional merchant applications](docs/review-queue.png)](examples/review-queue.html)

*An actual screen from the offline demo. Open `examples/review-queue.html` after cloning. Narrow the window, select a campus, inspect an application with a missing optional item, then cancel or make a decision. Watch the queue count and your return position.*

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

> Use $web-product-delivery to walk the mobile product inquiry flow. Open a product, start an inquiry, and return to compare another product. Find where the visitor loses context, fix it, and show the same journey again.

The skill instructions, field guides, and demo interface are written in Chinese. The demo uses fictional data and runs locally in a browser. Node.js is optional. The included loading probe uses an existing Playwright and Chromium installation for controlled measurements. [Measurement guide](references/delivery.md)

## Field guides

- **Plan a site.** Organize a home page, product catalog, course page, and inquiry around the visitor's next decision. [Pages and brand](references/pages.md)
- **Choose components.** Start with the project's existing UI stack, then try one component with realistic content and touch input. [Component selection](references/page-components.md)
- **Improve an existing flow.** Keep a baseline, fix the most expensive step, and repeat the task with the same fixtures. [Journey review](references/journey.md)
- **Report what ran.** Distinguish browser observations, simulated responses, device checks, and a production readback. [Quality checks](references/quality-gates.md)

For feedback, include the task, device and input method, steps, and expected outcome. Use fictional records in public issues.

The original skill, documentation, scripts, and demo are available under the MIT License. Keep the copyright and permission notice when redistributing copies. External references belong to their respective authors. [License](LICENSE) · [Sources](references/sources.md)
