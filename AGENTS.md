# Repository Guidelines

## Project Structure & Module Organization

This blog uses Next.js 14, React, TypeScript, Tailwind CSS, and NextUI. It exports static HTML for GitHub Pages.

- `src/app/`: routes, layouts, global styles, and shared components in `components/`.
- `src/lib/`: post loading, Markdown conversion, and blog constants.
- `src/interfaces/`: shared types and declarations.
- `_posts/`: Markdown articles with YAML front matter.
- `public/assets/blog/`: article images; `public/favicon/`: site icons.
- `scripts/convert-webp.ps1`: image conversion helper.
- `.github/workflows/nextjs.yml`: build and deployment workflow.

## Build, Test, and Development Commands

Use Node.js 20 to match CI and npm with the committed `package-lock.json`.

- `npm ci`: install the locked dependencies.
- `npm run dev`: start local development at `http://localhost:3000`.
- `npm run build`: build the site and export it to `out/`.
- `npx tsc --noEmit`: check TypeScript types without emitting JavaScript.

The `npm start` script runs `next start`, which does not support this project's `output: "export"` configuration. Preview production output with a static file server serving `out/`.

## Coding Style & Naming Conventions

Use two-space indentation and semicolons. Match the surrounding quote style. Keep TypeScript strict checks enabled. Use PascalCase for components and types, camelCase for functions and variables, and kebab-case for component filenames, such as `post-preview.tsx`. The `@/*` import alias maps to `src/*`.

Use Tailwind utilities and existing NextUI components for layout and styling. Keep Markdown-specific styles in `src/app/posts/[slug]/markdown-styles.module.css`. No ESLint or Prettier configuration is currently included.

## Testing Guidelines

No automated test framework, test script, or coverage threshold is configured. Run the build and type check for code changes. Check the home page, About page, and affected posts locally. For rendering changes, check mobile layouts, navigation, images, and Markdown output.

## Content Guidelines

Name posts `YYYY-MM-DD-descriptive-slug.md`. Include `title`, an ISO date in `date`, and `excerpt` in front matter. Use a `_draft.md` suffix for drafts; production excludes filenames containing `_draft`. Store article images as WebP under `public/assets/blog/<post-slug>/`.

## Commit & Pull Request Guidelines

Recent commits use short action statements, such as `Add new post.` and `Fix rehype type issue.` Follow this style and keep each commit focused.

In pull requests, describe the change and verification results. Link related issues when applicable. Include screenshots for visual changes. Pushes to `master` trigger GitHub Pages deployment.
