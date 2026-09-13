<div align="center">

# Md Nahidul Islam — Portfolio

**A compact, evidence-led software engineering portfolio.**

[View the live site](https://wnzid.github.io/) · `Next.js` · `TypeScript` · `Static export`

</div>

The site presents selected work across product engineering, data systems, applied machine learning, robotics, and human–computer interaction. It is built for quick recruiter scanning while keeping reports, repositories, and technical context close at hand.

## Featured work

- **Currency Pulse** — scheduled exchange-rate collection and visualization
- **Robot Cell Optimizer** — ROS 2 and MoveIt 2 workcell analysis
- **RAQI** — production-oriented commerce architecture
- **Skin Disease Classification** — applied-AI study with the complete report
- **MediEase** — role-aware healthcare HCI prototype
- **JTrack** — student-operations reporting and Excel-to-SQLite ETL

## Experience principles

- Typography-led responsive layout from phone to wide desktop
- High-contrast light and dark themes with saved preference
- Semantic sections, skip navigation, visible focus, and reduced motion
- Evidence-first project presentation with a lazy in-page report reader
- Repository-backed technology mix refreshed on a schedule
- No geolocation or IP-based location requests

## Local development

Node.js 20 or newer is required.

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run check
```

The combined check runs ESLint, TypeScript validation, and a production build. The final static site is written to `out/`.

## Project map

```text
app/page.tsx          Portfolio content and page structure
app/globals.css       Design system, themes, and responsive behavior
components/           Theme, contact, report, and icon interactions
data/                 Project and stack content
public/documents/     CV and project report
public/logos/         Institutional and project identity assets
scripts/              GitHub language-profile refresh
```

## Deployment

Pushes to `main` validate and deploy the static export through GitHub Actions. A scheduled run on the 1st, 8th, 15th, and 22nd refreshes the repository-backed language profile before publishing.

## License

No license is currently declared. All rights are reserved by default.
