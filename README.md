# NY Childcare Assistance Program (CCAP) — Informational Website

A clean, editorial informational website for New York State's Childcare Assistance Program (CCAP). Built to help eligible families understand benefits, check eligibility, and navigate the application process with confidence.

---

## About

This site provides a friendly, accessible guide to CCAP — a New York State program that helps cover childcare costs for working and studying families. The design prioritizes clarity, warmth, and ease of use, inspired by editorial design principles with generous whitespace and thoughtful typography.

---

## Tech Stack

- **React 19** — component-based UI
- **Vite 8** — fast dev server and build tool
- **Plain CSS** — custom design system with CSS custom properties (no Tailwind or CSS-in-JS)
- **Google Fonts** — Manrope (headings) + DM Sans (body)

No external component libraries or CSS frameworks. All styles are hand-written.

---

## Features

| Section | Description |
|---|---|
| **Hero** | Animated headline reveal, gradient orbs, pop-out photo frame |
| **Ticker** | Scrolling stats strip with program highlights |
| **Benefits** | 3-card glassmorphism grid with key program benefits |
| **Photo Strip** | Full-bleed editorial photo grid |
| **Eligibility** | Checklist with sticky photo aside |
| **Income Table** | Family size vs. income limit reference table |
| **How To Apply** | Tabbed guide — Online and Mail paths |
| **Required Documents** | 2-column checklist of application materials |
| **FAQ** | Accordion with 6 common questions |
| **CTA** | Contact section with MyBenefits NY link |

---

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
---

## Project Structure

```
src/
├── components/
│   ├── Hero.jsx             # Hero section with animated heading + photo
│   ├── Ticker.jsx           # Scrolling stats marquee
│   ├── Benefits.jsx         # 3-card benefits grid
│   ├── PhotoStrip.jsx       # Editorial full-bleed photo grid
│   ├── Eligibility.jsx      # Eligibility checklist
│   ├── IncomeTable.jsx      # Income limits by family size
│   ├── HowToApply.jsx       # Tabbed application guide
│   ├── RequiredDocuments.jsx# Documents checklist
│   ├── FAQ.jsx              # Accordion FAQ
│   ├── CTA.jsx              # Call-to-action / contact section
│   ├── Header.jsx           # Sticky navigation
│   └── Footer.jsx           # Footer
├── hooks/
│   └── useInView.js         # Intersection Observer hook for scroll animations
├── App.jsx                  # Root component
├── App.css                  # (minimal)
└── index.css                # Full design system + all component styles
```

---

## Design System

All design tokens live in `:root` inside `index.css`:

| Token | Value | Use |
|---|---|---|
| `--bg` | `#F8F7F4` | Page background (warm off-white) |
| `--ink` | `#111110` | Primary text |
| `--accent` | `#E8631A` | Orange — buttons, highlights |
| `--lime` | `#CAEF51` | Lime green — tags, accents |
| `--font-head` | Manrope | All headings |
| `--font` | DM Sans | Body copy, UI |

---

## Replacing Placeholder Images

The site uses Unsplash CDN images as placeholders. Before going live, replace each `src` URL in the component files with actual project photography:

- `Hero.jsx` — vertical portrait (3:4), warm tones, parent/child
- `Benefits.jsx` — 3 images (childcare setting, learning activity, community)
- `PhotoStrip.jsx` — 3 editorial photos
- `Eligibility.jsx` — aside background photo

---

## Accessibility

- Semantic HTML (`section`, `nav`, `aside`, `h1`–`h3`)
- `aria-hidden="true"` on decorative elements
- `aria-label` on landmark sections
- Keyboard-navigable accordion and tabs
- Focus-visible styles on interactive elements
- Sufficient color contrast on all text

---

## Notes

- All content is for informational purposes. For official program details, refer to [New York State Office of Children and Family Services](https://ocfs.ny.gov).
- Income limits and eligibility rules are subject to change — verify against current state guidelines before publishing.
