# OpenClaw Telegram MiniApp

Product skeleton for a Telegram MiniApp SaaS layer around OpenClaw.

## Current goal
Build MVP that lets a Telegram user:
- open MiniApp;
- choose a template;
- pay for access;
- receive a ready workspace / AI assistant;
- start using OpenClaw inside Telegram without manual server setup.

## Structure
- `frontend/` — Telegram MiniApp frontend
- `backend/` — API, billing, tenant/workspace state
- `worker/` — provisioning and async jobs
- `docs/` — product and technical docs
- `infra/` — deployment placeholders
- `schemas/` — shared schemas/contracts

## MVP tracks
1. User flow
2. Billing / entitlements
3. Provisioning
4. Telegram auth / MiniApp context
5. OpenClaw workspace bootstrap

## Source docs
See `docs/` and `/data/.openclaw/workspace/office/` for current product decisions.
