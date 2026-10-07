# DMly

Instagram comment-to-DM and story-reply automation for Indian creators and sellers, built on official Meta APIs.

**Status: Phase 0 foundation in progress. No live Instagram or billing integration yet.**

## Local development

Use Node.js 22 LTS and pnpm 10.28.2.

```sh
pnpm install --frozen-lockfile
docker compose up -d
pnpm dev
```

Open http://localhost:3000. `/api/health` checks the web process only, not service readiness.

```sh
pnpm check
pnpm build
```

The preview requires no external credentials. Future integration entry points must call the shared environment validator before starting; it is not yet wired to a sender because no sender exists. Copy `.env.example` to an ignored `.env` before configuring integrations. Never paste or commit secrets.

## Layout

- `apps/web`: Next.js web application and API routes.
- `apps/worker`: reserved for the separate BullMQ process.
- `packages/core`: shared configuration and, in later steps, messaging logic.
- `packages/db`: reserved for Drizzle schema and migrations.
- `docs`: decisions, setup, research, behavior and acceptance evidence.

See [documentation](docs/README.md) and [decisions](docs/decisions.md). Phase 1 completion requires a real Instagram test event to deliver one DM within 10 seconds. A mocked test alone is not M1 acceptance.
