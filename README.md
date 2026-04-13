# My Portfolio

Personal portfolio website built with the Next.js App Router. It presents my background, selected projects, resume/CV pages, and contact links in one place.

## Overview

The site is organized around a few clear sections:

- Home page with the main profile and an interactive visual
- About Me summary with resume and project shortcuts
- Project pages for featured case studies
- Resume and CV pages in Thai and English
- Contact page with email and social links

## Tech Stack

- Next.js 16
- React 19
- TypeScript 6
- Tailwind CSS v4
- Framer Motion
- React Icons
- Vercel Analytics
- Vercel Speed Insights
- next-sitemap

## Pages

| Route                 | Purpose                                                    |
| --------------------- | ---------------------------------------------------------- |
| `/`                   | Main landing page                                          |
| `/aboutme`            | Short profile summary and quick links                      |
| `/projects`           | Project index that redirects to the first featured project |
| `/projects/moneymind` | MoneyMind case study                                       |
| `/projects/kupon-v1`  | KUpon case study with v1 and v2 sections                   |
| `/resume`             | Resume page                                                |
| `/cv`                 | CV page                                                    |
| `/contact`            | Contact page with mailto form and social links             |

## Project Structure

- `src/app/` App Router pages, layouts, loading states, and metadata
- `src/components/` shared UI and page sections
- `src/components/projects/` project-specific sections, galleries, and image helpers
- `src/components/resume/` resume content in English and Thai
- `src/components/cv/` CV content in English and Thai
- `src/components/contact/` contact page content
- `src/data/projects.ts` project registry used by the project slider and dynamic routes
- `public/images/` profile photos and project assets
- `next.config.ts` image and dev-origin configuration

## Getting Started

1. Install Bun if it is not already installed.
2. Install dependencies:

```bash
bun install
```

3. Start the development server:

```bash
bun run dev
```

4. Open the app at `http://localhost:3000`.

## Scripts

- `bun run dev` - start the local development server
- `bun run build` - create a production build and generate the sitemap
- `bun run start` - run the production build locally
- `bun run lint` - run ESLint
- `bun run format` - format the repo with Prettier
- `bun run format:check` - verify formatting without writing files

## Notes

- `/projects` redirects to the first project listed in `src/data/projects.ts`.
- KUpon assets are split by version in `public/images/KuponV1/` and `public/images/KuponV2/`.
- `bun run build` also runs `next-sitemap` through the `postbuild` script.
- Keep generated artifacts such as `public/sitemap-0.xml` out of manual edits unless they are intentionally being updated.
