# Vinay Kulkarni — Professional Portfolio

A senior-engineer portfolio built with **Next.js + TypeScript + Tailwind CSS** and designed for static deployment on GitHub Pages.

## What this portfolio contains

- Professional hero / positioning
- About section
- Technical expertise
- 12-year professional experience timeline
- Project history
- Cloud / AI current-focus section
- Portfolio project placeholders
- Resume download
- GitHub / LinkedIn links
- Responsive design

## Important: update your personal links

Open:

`data/profile.ts`

Replace:

```ts
github: "https://github.com/REPLACE_WITH_YOUR_GITHUB",
linkedin: "https://www.linkedin.com/in/REPLACE_WITH_YOUR_LINKEDIN"
```

with your actual profiles.

## Resume

The portfolio expects:

`public/resume/Vinay_Kulkarni_Updated_CV_Rajeev_Format.pdf`

A copy of the updated CV is included in this project package.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
```

Because `next.config.ts` uses:

```ts
output: "export"
```

the production output is generated in:

`out/`

## GitHub Pages deployment

1. Create a GitHub repository named:

`YOUR-GITHUB-USERNAME.github.io`

2. Push this project.

3. Enable GitHub Pages for the repository.

4. For automated deployment, add a GitHub Actions workflow that publishes the `out/` directory.

The project is intentionally static-export compatible, so it can be hosted from GitHub Pages without a Node.js server.

## Content rule

Professional experience is kept separate from the three portfolio projects. The portfolio projects are explicitly marked as planned/current portfolio builds so they are not represented as prior employment experience.
