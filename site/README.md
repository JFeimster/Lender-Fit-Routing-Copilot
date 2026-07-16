# Lender Fit Routing Copilot Launch Site

A static, dependency-free launch site for **Lender Fit Routing Copilot**.

## Files

```text
site/
├── index.html
├── styles.css
├── script.js
├── 404.html
├── README.md
├── favicon.svg
├── manifest.webmanifest
├── robots.txt
├── sitemap.xml
├── assets/
│   ├── icons/route-mark.svg
│   └── images/social-preview.svg
├── data/demo-routing-data.json
└── embed/
    ├── index.html
    ├── styles.css
    ├── script.js
    └── README.md
```

## Local preview

The site supports opening `index.html` directly. The JavaScript uses embedded fallback data when running through `file://`.

For the complete local behavior, use a simple server:

### PowerShell

```powershell
Set-Location "PATH\TO\site"
python -m http.server 8080
Start-Process "http://localhost:8080"
```

### Node

```powershell
npx serve .
```

No Node packages are required by the site itself.

## Vercel deployment

1. Place `site/` at the repository root or set the Vercel output directory to `site`.
2. Replace every `YOUR-DOMAIN.vercel.app` placeholder in:
   - `index.html`
   - `robots.txt`
   - `sitemap.xml`
3. Deploy as a static project.
4. Confirm `/embed/` resolves to `site/embed/index.html`.
5. Test the GPT, GitHub, and Google Drive links.

A minimal repository-level `vercel.json` can be:

```json
{
  "framework": null,
  "cleanUrls": true,
  "trailingSlash": false
}
```

## Main links

- GPT: https://chatgpt.com/g/g-6a5858307bb0819193adfe5cd8adccf8-lender-fit-routing-copilot
- GitHub: https://github.com/JFeimster/Lender-Fit-Routing-Copilot
- Google Drive: https://drive.google.com/drive/folders/1PE3milpF0jG9hP3-IbuD7wr5WaORst0m?usp=drive_link

## Production checklist

- Replace canonical and Open Graph domain placeholders.
- Replace the SVG social preview with a PNG if the target social platform requires PNG/JPEG.
- Test keyboard navigation.
- Test reduced-motion mode.
- Test the routing demo using both `file://` and an HTTP server.
- Confirm all disclosures remain visible.
- Confirm no real lender logos, testimonials, approval statistics, or restricted borrower data were added.
- Confirm every external link opens in a new tab.
- Test at 320px, 768px, 1200px, and 1440px.
