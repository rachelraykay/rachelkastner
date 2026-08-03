# Rachel Kastner — Portfolio

Single-page static site. Plain HTML/CSS, no build step.

## Run locally

```bash
npm run dev
```

Then open http://localhost:3000. (Or just open `index.html` directly in a browser.)

## Add your photo

Drop your image into `images/` (e.g. `images/hero.jpg`), then in `index.html`
change the hero `<img>` src from `images/hero-placeholder.svg` to your file name.

## Deploy to Vercel

```bash
npx vercel
```

No build settings needed — it's a static site, Vercel will serve it as-is.
For production deploys: `npx vercel --prod`.
