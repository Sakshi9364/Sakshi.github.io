# 26MKM501 — Marketing Management (Course Website)

Static site for the MBA course **Marketing Management (26MKM501)**, built for
Part 2 of the FDP Capstone Project. Plain HTML/CSS/JS — no build step, no
dependencies beyond a Google Fonts link.

## Files

```
index.html    all page content and section structure
styles.css    design tokens + layout + responsive rules
script.js     generates the 53-session schedule from the real semester
              dates, table filtering, mobile nav, scrollspy
```

## Publish with GitHub Pages

1. Create a new GitHub repository (e.g. `marketing-management-26mkm501`).
2. Upload `index.html`, `styles.css` and `script.js` to the **root** of the
   repository (not inside a subfolder).
3. In the repo: **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Under **Branch**, choose `main` and folder `/ (root)`, then **Save**.
6. Wait 1–2 minutes, then your site is live at:
   `https://<your-github-username>.github.io/<repo-name>/`

## Editing content

- **Course facts / hero / units / CO list** — edit the text directly inside
  `index.html`; each section is commented (`<!-- HERO -->`, `<!-- SCHEDULE -->`, etc).
- **Schedule** — edit the `SESSIONS` array at the top of `script.js`. It must
  stay in calendar order and have exactly one entry per Mon/Tue/Wed between
  1 Sep and 30 Dec 2026 (53 entries). The dates themselves are computed
  automatically — you never need to type a date by hand.
- **Assessment weightage** — currently marked *indicative* in both `index.html`
  (`#assessment` section) and needs the official split from the programme
  office before final submission.
- **Contact details** — replace the `[Course Coordinator Name]`,
  `coordinator@dbuu.ac.in` and office-hours placeholders in the `#contact`
  section of `index.html`.
- **Colours / fonts** — all in the `:root` block at the top of `styles.css`.

## Notes for the capstone portfolio

- Take a screenshot of the published GitHub Pages site and the repository's
  **Settings → Pages** screen for your submission PDF.
- Include the live URL and the repository URL in your portfolio's
  "GitHub Website Link" field.
