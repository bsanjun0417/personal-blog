# Repository Guidelines

## Project Structure & Module Organization

This repository is an Astro static blog. Application code lives under `src/`.
Pages are in `src/pages`, shared layouts in `src/layouts`, reusable UI in
`src/components`, and shared helpers in `src/lib`. Blog posts are Markdown
content in `src/content/posts`; post-specific images should sit beside the
post, for example `src/content/posts/my-post/cover.png`. Site-wide static
assets belong in `public/`. Build helper scripts are in `scripts/`, and GitHub
Pages deployment is configured in `.github/workflows/deploy.yml`.

## Build, Test, and Development Commands

Use the commands from the repository root:

- `npm.cmd install`: install dependencies from `package-lock.json`.
- `npm.cmd run dev`: start the local Astro development server.
- `npm.cmd run build`: build the site and generate the Pagefind index in
  `dist/pagefind`.
- `npm.cmd run preview`: preview the production build locally.

On Windows PowerShell, prefer `npm.cmd` to avoid script execution policy issues.

## Coding Style & Naming Conventions

Follow the existing Astro, TypeScript, and CSS style. Use two-space indentation
in `.astro`, `.ts`, `.js`, and CSS files. Keep component filenames in PascalCase
such as `PostCard.astro`, and route/page filenames lowercase or Astro dynamic
route style such as `posts/[slug].astro`. Use clear frontmatter fields for posts:
`title`, `description`, `date`, `category`, `tags`, and `draft`. Add short
comments only when the logic is not immediately obvious.

## Testing Guidelines

There is no dedicated test framework configured yet. Treat `npm.cmd run build`
as the required validation step before committing. For content changes, also
preview affected pages and confirm links, images, tags, categories, RSS, and
search behavior still work.

## Commit & Pull Request Guidelines

The current Git history is minimal, so keep commits short, imperative, and
focused, for example `Add search page` or `Update post metadata`. Pull requests
should include a concise summary, list changed pages or content paths, mention
the validation command used, and include screenshots for visual UI changes.

## Security & Configuration Tips

Do not commit secrets, API keys, or private tokens. Keep generated output such as
`dist/`, `.astro/`, and `node_modules/` out of review unless explicitly needed.
When adding Markdown or HTML, avoid unsafe inline scripts and prefer Astro's
default escaping behavior.
