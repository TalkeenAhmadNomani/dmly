# DMly documentation

## Source documents reviewed

All four PDFs in the parent workspace were read on 2026-10-07:

1. `1_Product_Requirements_Document.pdf` — product behavior, FR/NFR identifiers, prices and limits (6 pages).
2. `2_Product_Design_Document.pdf` — flows, screens, templates and visual requirements (6 pages).
3. `3_Technical_Requirements_Document.pdf` — architecture, integration, persistence and security (7 pages).
4. `4_Implementation_Plan.pdf` — phased acceptance criteria and section 10 build sequence (5 pages).

## Current status

GitHub authentication is complete and the existing public repository is being reused. Build step 1 is implemented; see `milestones.md` for verified check results and unresolved exit criteria. Provider verification remains outstanding and must precede integration implementation.

## Documentation plan

| Document          | Purpose                                                     |
| ----------------- | ----------------------------------------------------------- |
| decisions.md      | What was decided, when, why and requirement references      |
| requirements.md   | Requirement-to-code, test and commit traceability           |
| setup.md          | Local installation, environment variables and service setup |
| architecture.md   | Web, database, queue and worker responsibilities            |
| features.md       | How each implemented feature works and its limitations      |
| meta-notes.md     | Official documentation evidence for every Meta VERIFY item  |
| razorpay-notes.md | Official documentation evidence for Razorpay VERIFY items   |
| data-lifecycle.md | Storage, encryption, retention and deletion behavior        |
| runbook.md        | Deployments, migrations, rollback and incident handling     |
| milestones.md     | Local test results, live evidence and remaining blockers    |

This index, decisions, setup, requirements, provider research notes and milestones exist. Add architecture, feature, data lifecycle and runbook documentation with their corresponding implementations. Record actual behavior rather than presenting planned capabilities as completed work.
