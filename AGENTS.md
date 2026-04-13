# Agent Notes

This repository is a personal portfolio built with the Next.js App Router. Keep the current layout, dark visual language, and route structure unless the user asks for a redesign.

## Working Rules

- Use Bun when possible for install, run, build, lint, and format commands.
- Do not read `.env` or other secret-bearing files.
- Prefer current official docs when a framework or library behavior might have changed.
- Ask before large or risky changes, and explain the reason for the change.
- Use `apply_patch` for manual file edits.
- Do not revert user changes that you did not make.
- Avoid destructive git commands unless explicitly requested.
- Keep generated artifacts such as `public/sitemap-0.xml` out of manual edits unless the task is specifically about them.

## Project Conventions

- The main public routes are `/`, `/aboutme`, `/projects`, `/projects/moneymind`, `/projects/kupon-v1`, `/resume`, `/cv`, and `/contact`.
- The project list comes from `src/data/projects.ts`.
- If a project slug changes, update the project data and the dynamic project route together.
- KUpon assets are versioned and separated by folder:
  - `public/images/KuponV1/`
  - `public/images/KuponV2/`
- Keep KUpon v1 and v2 content separate, but both are currently shown on the KUpon project page.
- Preserve the existing animation and glassy dark theme unless the user explicitly asks for a new direction.

## Editing Guidance

- Keep changes focused and minimal.
- Use semantic HTML and accessible interactive elements.
- Prefer existing shared components before adding new ones.
- When touching TSX components, check for formatting, routing, and accessibility regressions.
- When changing project pages or route files, run the relevant checks after editing.

## Useful Commands

- `bun run dev`
- `bun run build`
- `bun run lint`
- `bun run format`
- `bun run format:check`

## Extra Context

- The home page is a visual landing screen, not a content-heavy article.
- The About Me page is intentionally concise because the Resume and CV pages hold the detailed information.
- The KUpon case study includes live usage notes for both versions, so keep those facts accurate if you edit the content.
