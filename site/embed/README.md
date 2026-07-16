# Lender Fit Routing Copilot Embed

Compact interactive product experience designed for a maximum frame of **1200×940**.

## Recommended iframe

```html
<iframe
  src="https://YOUR-DOMAIN.vercel.app/embed/"
  width="100%"
  height="940"
  style="max-width:1200px;border:0;border-radius:24px;overflow:hidden;"
  loading="lazy"
  title="Lender Fit Routing Copilot"
></iframe>
```

## Recommended dimensions

- Ideal: `1200 × 940`
- Good desktop minimum: `900 × 820`
- Mobile: `100%` width with content-driven height or a minimum height of `1100px`

At 1200px width, the content is designed to remain inside the 940px frame.

## Behavior

- No global navigation
- No popups or modal
- No third-party scripts
- No fixed elements extending outside the frame
- External links open in a new tab
- Reduced-motion support
- Keyboard-accessible button and disclosure panel

## Local preview

Open `index.html` directly or serve the parent `site/` directory:

```powershell
Set-Location "PATH\TO\site"
python -m http.server 8080
Start-Process "http://localhost:8080/embed/"
```

## Primary CTA

https://chatgpt.com/g/g-6a5858307bb0819193adfe5cd8adccf8-lender-fit-routing-copilot
