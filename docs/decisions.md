# DMly decisions

Recorded: 2026-10-07 (Asia/Kolkata).

## DEC-001 — Product name

Use DMly, as explicitly requested by the owner. DMDost in the four source documents is a working name. No domain purchase or trademark claim is implied.

## DEC-002 — Delivery boundary and order

Follow Implementation Plan section 10 in order, stopping after Phase 1. Steps 1–5 and the minimal automation CRUD/test-send portion of step 6 cover Phase 1. The full builder, live preview, templates UI, dashboard and onboarding belong to Phase 2 and are not included in this delivery. References: Implementation Plan sections 3, 4 and 10; FR-044.

## DEC-003 — Preserve commercial and privacy requirements

Keep PRD section 8 prices, quotas and feature entitlements unchanged. Story automation remains Starter+, including in the worker; testing it must use an explicitly seeded test entitlement rather than changing the Free plan. Preserve TRD section 5 retention periods. Never commit credentials or customer payloads.

## DEC-004 — Repository visibility

If a repository must be created, default to private because all four source documents are marked Confidential. Preserve an existing repository's visibility. Do not upload source PDFs to a public repository without resolving the privacy implication with the owner.

## DEC-005 — Honest milestone evidence

Unit and mocked integration tests cannot certify M1. M1 requires a real test Instagram account, a measured comment-to-DM time within 10 seconds, and a replay test showing no duplicate send. Report unavailable external acceptance checks separately from passing local tests.

## DEC-006 — Credential blocker

Resolved: the owner authenticated GitHub CLI. Repository discovery confirmed an empty public repository at https://github.com/TalkeenAhmadNomani/dmly. Reuse it and preserve visibility. GitHub names are case-insensitive; no duplicate DMly repository is needed. Source PDFs stay outside Git. Network-restricted sandbox calls can misleadingly report invalid authentication; authenticated repository lookup succeeded outside that sandbox.

## DEC-007 — Documentation and commit discipline

Maintain docs for setup, architecture, requirement traceability, feature behavior, security/data lifecycle, provider verification, operations, decisions and milestone evidence. Each implementation step must have tests and a commit citing applicable FR/NFR IDs and TRD/Implementation Plan sections. Push at each completed milestone. This preparation is not completion of Phase 0.

## DEC-008 — Phase 0 credential prerequisites

No Meta, Google OAuth, Resend, database, Redis or Razorpay credential variables were present in the task environment (only variable names were checked, never values). Obtain the owner's provider account access through local environment files/provider dashboards before live setup. Do not invent deployed URLs, acquire paid infrastructure, choose a legal entity or publish legal commitments. The owner explicitly permits stopping for missing credentials.

## DEC-009 — Foundation tooling

Use Next.js 16 (satisfies TRD's 15+), React 19, strict TypeScript, Zod 4 and pnpm workspaces. Lock exact installed versions in pnpm-lock.yaml. Use a minimal honest development preview until product UI work is in scope. Local services bind only to loopback. Meta policy configuration has no guessed defaults and sending defaults to disabled. Environment validation is a reusable tested boundary; integrations must wire it in when implemented.
