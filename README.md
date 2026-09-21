# Courage & Ife — Wedding Website

A single-page, frontend-only wedding invitation built with React, Vite, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
```

The output goes to `dist/` — you can deploy that folder to any static host (Netlify, Vercel, GitHub Pages, etc).

## Editing content

Almost everything on the site — names, dates, venues, colours, WhatsApp numbers,
Google Form links, bank details — lives in one file:

```
src/data/weddingData.js
```

Update the values there and the whole site updates automatically. You shouldn't
need to touch any component file for a normal content change.

### Things to replace before going live

- `hero.image` and `gallery.images[].src` — currently placeholder stock photos, swap in the couple's real photos (drop image files in `src/assets` and import them, or use hosted URLs).
- `rsvp.googleFormUrl` and `guestWishes.googleFormUrl` — create these as Google Forms and paste the share links in.
- `rsvp.whatsappNumber`, `material.whatsappNumber`, `contact.whatsappNumber` — real WhatsApp numbers, digits only with country code, no `+` or spaces (e.g. `2348012345678`).
- `support.bankName`, `accountName`, `accountNumber`, `paymentLink` — real gifting details.
- `events[].mapsUrl` — real Google Maps links for each venue.
- `weddingDate` — the ISO date/time the countdown counts down to.

## Structure

```
src/
├── components/     one component per section
├── data/
│   └── weddingData.js   all editable content
├── App.jsx
├── main.jsx
└── index.css        Tailwind + design tokens (colours, fonts)
```

## Tech

- React 19 + Vite
- Tailwind CSS v4 (tokens defined in `src/index.css` via `@theme`)
- lucide-react for icons
- No backend, no database — RSVP and guest wishes use external Google Forms; gifting uses a bank transfer + optional external payment link.
