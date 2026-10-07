# Setup and credentials

## Foundation

Install Node.js 22 LTS, pnpm 10.28.2 and Docker with Compose. Run `pnpm install --frozen-lockfile`, then `docker compose up -d`, and `pnpm dev` from the repository root. Run `pnpm check` and `pnpm build` before committing.

The web preview is available without credentials. PostgreSQL/Redis use loopback-only ports and a named volume each. The sample database password is strictly for local development. Never use it on hosted infrastructure. Docker is not currently available on the implementation host; service startup has not been verified there.

## Integration prerequisites

Provide credentials through an ignored local environment file or the chosen host's secrets settings, never through Git or chat.

1. Meta developer app using Instagram Login, with owner access and a professional Instagram account added as a tester. Needed: app ID, app secret and a usable HTTPS callback origin. Verify current scopes/policy first using `meta-notes.md`.
2. Google OAuth client credentials and an authorized redirect origin for Auth.js.
3. Resend account/API key and verified sender domain for magic-link mail.
4. Staging PostgreSQL and Redis connection URLs, plus access to the chosen Vercel/Railway projects for deployment. Confirm region and spending with the owner before provisioning.
5. Razorpay account/test-mode credentials and KYC access for Phase 0 setup; billing code is Phase 3.

Generate AUTH_SECRET, TOKEN_ENC_KEY and META_VERIFY_TOKEN locally when setting up the environment. Do not reuse sample values or share TOKEN_ENC_KEY with the browser. Never send an API key in a URL or print it in logs.

The shared `readEnv` validator accepts an explicit environment object, validates types/protocols and prints only invalid field names. It does not load `.env` itself. Framework/worker entry points must load configuration and invoke it before external operations.
