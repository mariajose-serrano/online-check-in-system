# ✦ Palacio Velarde — Luxury Boutique Hotel Website

A fully static, single-file luxury hotel landing page built with HTML, CSS, and JavaScript. No frameworks, no build tools — just open and run.

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## Preview

A fictional 5-star boutique hotel set in Marbella, Andalusia. The design follows a refined editorial aesthetic — warm gold tones, serif typography, and subtle animations — inspired by real luxury hospitality brands.

---

## Getting Started

### Option A — Single file (quickest)
1. Download `index.html`
2. Open it directly in any browser

### Option B — Full project in VS Code
1. Clone or download the repository
2. Open the folder in VS Code
3. Install the **Live Server** extension (if you don't have it)
4. Right-click `index.html` → **Open with Live Server**

That's it. No `npm install`, no build step.

---

## Project Structure

```
hotel-boutique/
├── index.html        ← everything in one file (self-contained)
├── css/
│   └── style.css     ← styles extracted (for the multi-file version)
├── js/
│   └── main.js       ← scripts extracted (for the multi-file version)
└── README.md
```

> The `index.html` is fully self-contained — the CSS and JS are embedded inside `<style>` and `<script>` tags, so you only need that one file to run the whole site.

---

## Sections

| Section | Description |
|---------|-------------|
| **Navigation** | Fixed top bar, darkens on scroll, hamburger menu on mobile |
| **Hero** | Full-viewport with animated geometric pattern and parallax effect |
| **Stats** | Hotel stats with animated counters triggered on scroll |
| **Suites** | Room cards with hover effects and pricing |
| **Experiences** | Grid of curated guest experiences |
| **Restaurant** | Dark section with opening hours and Michelin star callout |
| **Testimonial** | Press quote in editorial serif layout |
| **Booking form** | Date validation, suite selector, toast feedback |
| **Footer** | Contact info, site links, newsletter signup |

---

## Features

- **Zero dependencies** — pure HTML, CSS, and JavaScript
- **Single file** — everything embedded, no external files needed
- **Fully responsive** — works on mobile, tablet, and desktop
- **Scroll animations** — elements reveal on scroll via `IntersectionObserver`
- **Parallax hero** — subtle depth effect on scroll
- **Animated counters** — numbers count up when they enter the viewport
- **Form validation** — date logic with user-friendly toast notifications
- **Smooth scrolling** — nav links scroll to sections with offset for fixed header
- **Mobile menu** — slide-in overlay with animated hamburger → X transition

---

## Typography

| Role | Font | Source |
|------|------|--------|
| Display / Headings | Cormorant Garamond | Google Fonts |
| Body / UI | Jost | Google Fonts |

Both fonts load via a single `<link>` tag with `display=swap` for performance.

---

## Color Palette

| CSS Variable | Hex | Usage |
|---|---|---|
| `--gold` | `#b8974a` | Primary accent — buttons, highlights, borders |
| `--gold-light` | `#d4b06a` | Hover states, secondary gold |
| `--dark` | `#1a1610` | Dark backgrounds, primary text |
| `--stone` | `#f0ebe1` | Alternate section backgrounds |
| `--white` | `#fdfcf9` | Main background (warm white) |
| `--text-muted` | `#7a6f62` | Secondary text, descriptions |

All colors are defined as CSS custom properties at the `:root` level for easy theming.

---



## License

Free to use for personal and educational projects.
