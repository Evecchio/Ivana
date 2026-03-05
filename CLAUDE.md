# CLAUDE.md — Ivana Design Theme

## Project Overview

**Ivana Design** is a premium e-commerce theme for [Tiendanube](https://www.tiendanube.com/) (Latin American e-commerce platform). It is a fully server-side rendered, template-driven theme using the **Twig** templating engine. There is no Node.js, Python, or traditional build pipeline — all compilation is handled by Tiendanube's platform.

---

## Repository Structure

```
/
├── layouts/              # HTML shell templates
│   ├── layout.tpl        # Main layout (head, critical CSS, JS)
│   └── layout_remote.tpl # Remote rendering variant
├── templates/            # Page-level templates (home, product, cart, etc.)
├── home/                 # Home page section components (~19 sections)
├── header/               # Header + utility components (cart, account, menu)
├── navigation/           # Nav bar, megamenu, hamburger, language switcher
├── product/              # Product detail components (gallery, variants, form)
├── cart/                 # Cart panel, totals, fulfillment
├── footer/               # Footer navigation and legal
├── grid/                 # Category grid, filters, pagination, quick-shop
├── forms/                # Input, select, newsletter form components
├── shipping/             # Shipping calculator and branches
├── social/               # Social share and links
├── svg/                  # Inline SVG icons
├── defaults/             # Help/fallback templates for empty states
├── placeholders/         # Skeleton loading placeholders
├── static/
│   ├── css/              # SCSS stylesheets (compiled by Tiendanube)
│   │   ├── style-critical.scss    # Inlined in <head>
│   │   ├── style-async.scss       # Loaded async
│   │   └── style-utilities.scss   # Utility classes
│   └── js/
│       ├── store.js.tpl           # Main app JS (Twig-templated)
│       ├── external.js.tpl        # Third-party JS bundle
│       └── external-no-dependencies.js.tpl
└── config/
    └── data.json         # Declares compiled assets for preview
```

---

## Templating System

- **Engine:** Twig (via Tiendanube's server-side renderer)
- **Extension:** `.tpl` for all template files
- **Includes:** Use `{% include "path/to/file.tpl" %}` or `{% snipplet "file.tpl" %}`
- **Components:** Use `{{ component('component-name') }}` for platform-provided components
- **Settings:** All theme settings come from `settings.*` variables injected by Tiendanube admin
- **JavaScript:** `.js.tpl` files are Twig templates that output JavaScript — they can use `{{ }}`, `{% if %}`, etc.

---

## Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| Template files | kebab-case + `.tpl` | `home-slider.tpl`, `product-item.tpl` |
| CSS classes | kebab-case | `product-item-image-container` |
| JS-targeted classes | `js-` prefix | `js-product-detail`, `js-cart-widget-amount` |
| Theme-specific classes | `ivana-` prefix | `ivana-promo-bar` |
| SCSS variables | kebab-case CSS vars | `--brand-color`, `--font-heading` |

---

## CSS Architecture

- **Critical CSS** (`style-critical.scss`) is inlined in `<head>` via `{{ 'css/style-critical.scss' | static_url | static_inline }}`
- **Async CSS** is loaded with the `media="print"` trick to avoid render blocking
- **CSS Variables** defined at `:root` for theming (colors, spacing, fonts)
- **Responsive breakpoints:** mobile-first, main breakpoints at `768px` and `1400px`
- **Color scheme:**
  - Brand: Deep pink `#FF1493`
  - Text: `#111111`
  - Accent: orange for alerts, green for discounts

---

## JavaScript

- Plain vanilla JS — no framework (React, Vue, etc.)
- jQuery available as `jQueryNuvem` (Tiendanube's alias) when needed
- Libraries: **Lazysizes** (lazy images), **Swiper** (sliders)
- Data attributes (`data-store`, `data-component`) are used for JS targeting — do not remove them
- The `store.js.tpl` file is the main app JS and uses Twig conditionals to include feature blocks based on settings

---

## Theme Settings

All customizable options come from `settings.*` (injected by Tiendanube). Key settings:

- `settings.font_headings`, `settings.font_rest` — Google Fonts
- `settings.inactive_tab_message`, `settings.inactive_tab_message_01/02` — Tab title animation (currently removed)
- `settings.logo` — Store logo image
- Feature toggles for each home section (e.g., `settings.show_slider`, `settings.show_featured_products`)

Settings are configured through the Tiendanube admin panel, not in code files.

---

## Page Templates

| Template | URL |
|----------|-----|
| `templates/home.tpl` | Homepage |
| `templates/product.tpl` | Product detail page |
| `templates/category.tpl` | Category / collection listing |
| `templates/cart.tpl` | Shopping cart |
| `templates/search.tpl` | Search results |
| `templates/contact.tpl` | Contact page |
| `templates/blog.tpl` | Blog listing |
| `templates/login.tpl` | Account login |

---

## External Integrations

- **Google Fonts** — Manrope (primary font family)
- **Instagram** — Instafeed widget (`home/home-instafeed.tpl`)
- **WhatsApp** — Chat widget (`whatsapp-chat.tpl`)
- **Google Analytics** — Injected via Tiendanube
- **Payment gateways** — Mercado Pago, Stripe, etc. (platform-handled)

---

## Performance Patterns

- Critical CSS inlined in `<head>`
- Non-critical CSS loaded async with `media="print"` swap trick
- Images use `lazysizes` with `data-src` / `data-srcset`
- Preload hints for LCP elements at top of `layout.tpl`
- Minimal JS dependencies

---

## Development Workflow

There is no local dev server or build step. Development workflow:

1. Edit `.tpl` and `.scss` files directly
2. Push changes to the repository
3. Preview through Tiendanube's admin theme editor
4. Tiendanube compiles SCSS and processes Twig server-side

**Do not introduce:**
- `npm`, `yarn`, `package.json` — not used
- Build tools (webpack, vite, gulp) — not needed
- Frontend frameworks (React, Vue) — not compatible

---

## Key Conventions for AI Assistants

1. **Always use `.tpl` extension** for template files
2. **Twig syntax** for conditionals, loops, and variable output — not PHP or JavaScript templating
3. **Do not touch `config/data.json`** unless changing compiled asset declarations
4. **CSS changes** go in the appropriate `static/css/*.scss` file — critical styles in `style-critical.scss`, rest in `style-async.scss`
5. **JS changes** go in `static/js/store.js.tpl` — use Twig `{% if settings.* %}` guards for feature-toggled code
6. **Preserve `js-*` and `data-*` attributes** — they are used by JavaScript for DOM targeting
7. **Mobile-first CSS** — write base styles for mobile, then use `@media (min-width: 768px)` for larger screens
8. **The `page_title` variable** is provided by Tiendanube and should not be hardcoded

---

## Git

- Remote: `http://127.0.0.1:52805/git/Evecchio/Ivana`
- Default branch for AI work: `claude/*` branches
- No CI/CD pipelines — deployment is manual via Tiendanube admin
