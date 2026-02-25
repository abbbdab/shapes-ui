# Contributing to Shapes UI

Thanks for your interest in contributing.

## Development setup

- Use Node.js 24+
- Use pnpm 9+

Install dependencies:

```bash
pnpm install
```

Run locally:

```bash
pnpm dev
```

## Common commands

- `pnpm dev` — start local dev server
- `pnpm test` — run tests
- `pnpm lint` — run lint checks
- `pnpm build` — build app
- `pnpm build:cli` — build CLI
- `pnpm gen:examples` — generate examples
- `pnpm gen:registry` — generate registry artifacts

## Pull requests

Before opening a PR:

1. Keep changes focused and scoped.
2. Run `pnpm test` and `pnpm lint`.
3. Update docs/examples when behaviour changes.
4. Add a changeset when a publishable package change is intended.

PRs get a preview deployment automatically.

## Release process

Releases are handled through Changesets:

- A release PR is created from changesets.
- Production deployment runs when the release is published.

## Reporting issues

Use the issue templates for bug reports and feature requests so maintainers can triage quickly.
