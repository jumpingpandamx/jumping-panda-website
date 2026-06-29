# Jumping Panda — Marketing site (Conversión)

Landing page for **Jumping Panda**, a Mexican digital-marketing studio. This is the
"Conversión" direction: a conversion-optimized, single-page site in Spanish whose job
is to turn visitors into booked free consultations.

The page is **high-fidelity** — final colors, typography, spacing, copy, and
interactions. It is built as a single self-contained HTML page that renders through a
tiny client-side runtime (`support.js`), so it runs as-is on any static host.

---

## Run it locally

The page needs to be served over HTTP (not opened as a `file://` URL), because the
runtime loads React from a CDN and the browser blocks some of that over `file://`.

```bash
# from this folder
python3 -m http.server 8000
# then open http://localhost:8000
```

Any static server works (`npx serve`, `php -S localhost:8000`, VS Code Live Server, …).

## Deploy to GitHub Pages

1. Push this folder to a GitHub repo (see below).
2. Repo → **Settings → Pages** → Source: **Deploy from a branch** → `main` / `/root`.
3. Your site goes live at `https://<user>.github.io/<repo>/`.

`index.html` is the entry point, so no build step is required.

---

## What's in here

| File | Purpose |
|------|---------|
| `index.html` | The whole page — markup + logic. |
| `support.js` | ~50 KB client runtime that renders the page. Loads React 18 + Babel from unpkg at runtime. **Do not edit.** |
| `image-slot.js` | Web component used for the 6 review screenshots (drag-and-drop, persists in `localStorage`). |
| `logo-ink.svg` | Dark logo — used in the header (light background). |
| `logo-white.svg` | White logo — used in the footer (dark background). |

> **How `index.html` is structured.** It is a "Design Component": the markup lives
> inside `<x-dc>…</x-dc>` and the behavior lives in a `class Component extends DCLogic`
> block at the bottom. `support.js` reads both and renders them with React. Template
> holes look like `{{ name }}`; control flow uses `<sc-for>` (loops) and `<sc-if>`
> (conditionals). All styling is inline. See **Recreating in a framework** below if you
> want conventional source instead.

---

## Design system / tokens

**Type**
- Display / headings: **Bricolage Grotesque** (600–800), tight tracking (≈ -0.03em).
- Body / UI: **Hanken Grotesk** (400–800).
- Both loaded from Google Fonts in `index.html`.

**Color**
| Token | Hex | Use |
|-------|-----|-----|
| Cream | `#FBF6EE` | Page background, text on dark |
| Ink | `#141414` | Headlines, dark sections, hard shadows |
| Surface (dark) | `#1d1d1d` | Cards on dark sections |
| Image well | `#2a2a2a` | Image placeholders on dark |
| Pink (accent) | `#e45b8f` | Primary CTAs, highlights, brand pop |
| Pink tint | `#F8E3EC` | Team avatar bg, role chips |
| Pink glow | `#F6DCE7` | Hero radial glow |
| Gold | `#FFC83D` | Star ratings |
| Muted on dark | `#b9b5ae` `#c9c5be` `#cfccc6` `#7e7b76` | Secondary text |
| Muted on light | `#3c3a37` `#666` `#555` `#777` | Secondary text |

**Shape & depth**
- Pills: `border-radius: 999px` (buttons, chips, nav items).
- Cards: 16–28px radius. Section tops use `clamp(28px,4vw,52px)`.
- Signature button: solid fill + **hard 0-blur shadow** `box-shadow: 0 5px 0 #141414`
  that grows to `0 8px 0` and lifts (`translateY(-3px)`) on hover.
- Soft elevation: `0 24px 50px rgba(20,20,20,.18)`.
- Selection highlight: pink background, white text.

**Layout**
- Content container max-width **1200px** (narrower sections 1080px), `padding: 0 22px`.
- Section rhythm: `padding: clamp(48px,7vw,96px) 22px`.
- Responsive breakpoint at **900px** (`isMobile`): below it the nav collapses to a
  hamburger menu.

---

## Sections (top → bottom)

1. **Trust strip** — thin dark bar: 5-star rating, "+21 marcas", "respuesta en 24 h", "asesoría gratis".
2. **Header** — sticky, blurred cream bar. Logo (`logo-ink.svg`) + nav + pink "Agendar gratis" CTA. Collapses to a hamburger + slide-down menu under 900px.
3. **Hero** — two-column: badge, H1 (with pink phrase), subhead, two CTAs, 4 risk badges, rating row; right column is a bordered hero image with two floating cards ("Asesoría GRATIS 30 min" + "Te encuentran cuando te buscan").
4. **Logo wall** — two opposed infinite marquees of 21 client logos.
5. **Outcome chain** — dark section, 4 numbered cards (Te encuentran → Te eligen → Vendes más → Creces).
6. **Problem** — full-bleed pink section, big question headline + CTA.
7. **Services** — dark, rounded top; grid of 8 service cards (image + title + desc + link), hover lift + pink border.
8. **How it works** — dark, 4 numbered steps + CTA row.
9. **Wall of love** — 6 review screenshot slots (`<image-slot>`), 3:4 aspect.
10. **Risk reversal** — dark rounded card, "empezar no cuesta nada" + 4 badges.
11. **Team** — 3 member cards (photo, name, role).
12. **Final CTA + form** — pink, two-column: pitch + contact form (name, email, phone, message).
13. **Footer** — dark, 4 columns (brand + socials, menu, policies, contact) over `logo-white.svg`.
14. **Floating WhatsApp button** — fixed bottom-right.

---

## Interactions & behavior

- **Scroll reveal**: sections rise in via CSS `animation-timeline: view()` (`@keyframes jpReveal`).
- **Marquees**: `@keyframes jpMarq` / `jpMarqR` scroll the two logo rows in opposite directions (42s / 48s loops).
- **Floating accents**: `jpFloat` / `jpBob` gently bob the hero badges.
- **Hover**: buttons lift + deepen their hard shadow; service cards lift and gain a pink border; nav items invert to ink/cream.
- **Smooth scroll** on in-page anchor links (`#servicios`, `#como`, `#clientes`, `#contacto`).
- **Mobile menu**: hamburger toggles `menuOpen`; links close it on tap.
- **Contact form**: controlled inputs; on submit it shows an inline success state ("¡Listo! 🐼"). **There is no backend** — submission is local only (see below).
- **WhatsApp FAB**: deep-links to `https://wa.me/527229313202`. Can be hidden via the `showWhatsApp` prop.

## State

Held in the `Component` logic class:
- `menuOpen` — mobile nav open/closed
- `isMobile` — set from a resize listener at the 900px breakpoint
- `sent` — form success toggle
- `nombre` / `correo` / `tel` / `comentario` — controlled form fields
- prop `showWhatsApp` (boolean, default `true`) — show/hide the floating WhatsApp button

---

## Assets

- **Local & version-controlled**: `logo-ink.svg`, `logo-white.svg`.
- **External (Shopify CDN)**: the hero image, 8 service images, 3 team photos, and 21
  client logos are hot-linked from `https://cdn.shopify.com/s/files/1/0528/5543/9528/files/…`.
  They load over the network; the exact URLs are in the logic block at the bottom of
  `index.html`. For a production repo, consider downloading them into an `assets/` folder
  and updating the references.
- **Review screenshots (TODO)**: the "Wall of love" uses 6 empty `<image-slot>`
  placeholders. Drop real review screenshots onto them in the browser (they persist in
  `localStorage`), **or** replace each `<image-slot>` with a plain `<img>` pointing at a
  committed image for a real deployment.
- **Fonts**: Google Fonts (Bricolage Grotesque, Hanken Grotesk).
- **React 18 + Babel**: fetched at runtime from unpkg by `support.js`.

---

## Recreating in a framework (optional)

This page is a faithful **design reference**. If you'd rather ship it in a real codebase
(Next.js, Astro, plain Vite, etc.), recreate the markup as components using the tokens
and section breakdown above — the existing inline styles map 1:1 to your styling
approach. The logic class documents every piece of state and every handler you'll need.
Two things to wire up for production:

1. **Contact form** → POST to your CRM / email / WhatsApp Business API. Today it only
   flips a local success flag.
2. **Images** → move the Shopify-hosted images and real review screenshots into the repo.

If no framework is set up yet, the simplest path is to keep this static page as-is and
deploy it to GitHub Pages.

---

© 2026 Jumping Panda. Copy and brand assets belong to Jumping Panda.
