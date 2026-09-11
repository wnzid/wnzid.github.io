# Md Nahidul Islam | Portfolio

A recruiter-focused portfolio for [wnzid.github.io](https://wnzid.github.io/), built with Next.js, TypeScript, and hand-authored CSS.

The site presents six projects selected for engineering range, practical value, and credible evidence:

- **Currency Pulse**: visually led live exchange-rate product with scheduled data collection
- **Robot Cell Optimizer**: ROS 2 and MoveIt 2 industrial-cell analysis platform
- **RAQI**: production-oriented commerce architecture
- **Skin Disease Classification**: University of Graz applied-AI study with its complete report
- **MediEase**: role-aware healthcare HCI prototype
- **JTrack**: Flask analytics dashboard and Excel-to-SQLite data pipeline

## Local development

Use Node.js 20 or newer.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run check
```

This runs linting, TypeScript validation, and the production build. The build exports a static site to `out/` for GitHub Pages.

## Design and accessibility

- The original compact, typography-led design with fluid scaling for large and 4K displays
- High-contrast light and dark themes with saved user preference
- Responsive layouts tested from phone to wide desktop
- Semantic sections, visible keyboard focus, skip navigation, and reduced-motion support
- One real-product feature panel, a compact supporting project grid, restrained institutional logos, and subtle logo motion
- Repository-backed language mix refreshed automatically on the 1st, 8th, 15th, and 22nd of each month
- Lazy in-page report reader that avoids browser download-manager interception, with a direct PDF-file fallback
- No geolocation or IP-based location requests

## Project structure

- `app/page.tsx`: content and page structure
- `app/globals.css`: design system, themes, and responsive behavior
- `components/`: theme, contact, report-viewer, and inline-icon interactions
- `public/documents/`: the downloadable CV and skin-disease study report
- `public/logos/`: employer and university identity assets
- `app/robots.ts` and `app/sitemap.ts`: search-engine discovery

## Deployment

Pushes to `main` run the GitHub Actions workflow in `.github/workflows/deploy.yml`. The workflow validates the site, creates the static export, and deploys it to GitHub Pages.
