# STW Design System

**Stein's Total Wellness** · React 18 + Vite 5 + Tailwind CSS 3

---

## Overview

This document is the single source of truth for the visual language and component system of the STW website. All values reference keys defined in `tailwind.config.js` or utility classes in `src/index.css`.

---

## Design Tokens

### Breakpoints

Four non-overlapping named ranges defined in `tailwind.config.js` under `screens`. All breakpoints use `min`/`max` boundaries so each prefix fires **only** within its range — no bleeding between ranges.


| Name     | Config                            | Fires at     | Usage prefix |
| -------- | --------------------------------- | ------------ | ------------ |
| Phone    | `{ max: '599px' }`                | ≤ 599px      | `max-phone:` |
| Tablet   | `{ min: '600px', max: '899px' }`  | 600 – 899px  | `tablet:`    |
| Expanded | `{ min: '900px', max: '1199px' }` | 900 – 1199px | `expanded:`  |
| Desktop  | `'1200px'` (min-width)            | ≥ 1200px     | `desktop:`   |


**Coding pattern:** base styles = phone values. Override per range with `tablet:`, `expanded:`, `desktop:`. Use `max-phone:` when a value is phone-specific but the base is set to a non-phone default.

**Important:** Because `tablet:`, `expanded:`, and `desktop:` are all bounded ranges (not open-ended min-widths), every breakpoint must be explicitly declared if you want a value to persist across ranges. For example, `tablet:text-16` only fires at 600–899px — you must also add `expanded:text-16 desktop:text-16` to carry the value forward.

---

### Colors

The palette is defined at two layers: raw palette tokens and semantic aliases. Prefer the semantic aliases in component code so intent is clear.

#### Raw Palette


| Token            | Tailwind Key       | Hex       | Notes                       |
| ---------------- | ------------------ | --------- | --------------------------- |
| Cobalt Dark      | `cobalt-dark`      | `#202020` | Near-black                  |
| Cobalt           | `cobalt`           | `#262626` | Mid dark                    |
| Cobalt Light     | `cobalt-light`     | `#2c2c2c` | Dark charcoal               |
| Deep Gray        | `deep-gray`        | `#4B4B4B` | Dark gray for body on light |
| Olive            | `olive`            | `#d6d9c5` | Muted green-grey            |
| Olive Dark       | `olive-dark`       | `#e8ebd5` | Slightly darker cream       |
| Olive Light      | `olive-light`      | `#eff2dd` | Warm off-white              |
| Olive Lighter    | `olive-lighter`    | `#F4F6EA` | Bright off-white            |
| Pink             | `pink`             | `#ffa3a3` | Soft coral                  |
| Purple           | `purple`           | `#5c3551` | Deep plum                   |
| Warm Grey Light  | `warm-grey-light`  | `#65665E` | Warm grey for light bg use  |
| Warm Grey Dark   | `warm-grey-dark`   | `#98998D` | Warm grey for dark bg use   |
| Yellow           | `yellow`           | `#ffe52c` | High-energy yellow          |


#### Semantic Aliases

Use these in components instead of raw palette names wherever possible.


| Semantic Token    | Maps To        | Hex       | Intended Use                       |
| ----------------- | -------------- | --------- | ---------------------------------- |
| `surface-bg`      | `olive-light`  | `#eff2dd` | Page background                    |
| `surface-card`    | `olive-dark`   | `#e8ebd5` | About section, product cards       |
| `surface-dark`    | `cobalt-light` | `#2c2c2c` | (reserved — no longer used)        |
| `surface-darker`  | `cobalt`       | `#262626` | (reserved — no longer used)        |
| `surface-darkest` | `cobalt-dark`  | `#202020` | Hero, nav, products, featured      |
| `text-dark`       | `cobalt-dark`  | `#202020` | Primary text on light/yellow bg    |
| `text-muted`      | `#b0b2a5`      | `#b0b2a5` | Subdued labels, captions           |
| `brand-yellow`    | `yellow`       | `#ffe52c` | Mission, Testimonial bg; CTAs      |
| `brand-purple`    | `purple`       | `#5c3551` | Donate bg; `.text-cta` hover color |
| `brand-pink`      | `pink`         | `#ffa3a3` | Footer SAVE word accent            |


#### Color conventions: light vs. dark background

- **Light backgrounds** (Offerings `olive-light`, About `olive-dark`): use `text-warm-grey-light` for eyebrows and muted labels; `text-deep-gray` for body copy.
- **Dark backgrounds** (Hero, Products, Footer `cobalt-dark`; Donate `purple`; Mission/Testimonial `brand-yellow`): use `text-warm-grey-dark` for eyebrows and muted labels; `text-olive-lighter` for headings.
- The naming convention "light/dark" in token names refers to the **background** the color is used on, not the color value itself.

#### Key Color Pairings


| Background                         | Heading              | Body / Muted            | Context                       |
| ---------------------------------- | -------------------- | ----------------------- | ----------------------------- |
| `surface-bg` / `olive-light`       | `cobalt-dark`        | `deep-gray` / `warm-grey-light` | Offerings                |
| `surface-card` / `olive-dark`      | `cobalt-dark`        | `deep-gray` / `warm-grey-light` | About section            |
| `surface-darkest` / `cobalt-dark`  | `olive-lighter`      | `olive` / `warm-grey-dark`      | Hero, Nav, Products      |
| `brand-yellow`                     | `cobalt-dark`        | `cobalt-dark` / `warm-grey-dark` | Mission, Testimonial    |
| `surface-darkest` / `cobalt-dark`  | `olive-lighter`      | `warm-grey-dark`        | Featured                      |
| `purple`                           | `olive-lighter`      | `olive-lighter` (light) | Donate section                |
| `cobalt-dark`                      | `olive-lighter`      | `pink` (SAVE word)      | Footer hero                   |


---

### Typography

Three typefaces with distinct roles.


| Font    | Tailwind Key | Weights Loaded                      | Role                           |
| ------- | ------------ | ----------------------------------- | ------------------------------ |
| Figtree | `figtree`    | 400, 600, 700, 800, 900, 900 italic | Display headings, buttons, nav |
| Bitter  | `bitter`     | 300                                 | Serif accent, blockquotes      |
| DM Sans | `dmSans`     | 400, 500, 600, 700                  | Body copy, UI labels           |


Fonts are loaded from Google Fonts in `index.html`. The body default is `font-figtree bg-olive-light text-cobalt-dark`.

#### Typographic Utility Classes

Defined in `src/index.css` under `@layer components`. Always use these instead of ad-hoc size utilities. All font sizes use the `text-`* token utilities from the Font Size table (no raw `px` values).


| Class                 | Desktop (≥1200px)                                          | Expanded (900–1199px)                                      | Tablet (600–899px)                                        | Phone (≤599px)                                            | Font                  |
| --------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------- |
| `.eyebrow`            | `text-13` / `leading-1-5` / `tracking-caps` / upper       | `text-13` / `leading-1-5`                                 | `text-13` / `leading-1-5`                                 | `text-11` / `leading-1-5`                                 | Figtree 600           |
| `.footnote`           | `text-14` / `leading-1-5`                                 | `text-14` / `leading-1-5`                                 | `text-14` / `leading-1-5`                                 | `text-12` / `leading-1-5`                                 | DM Sans 400           |
| `.credentials`        | `text-14` / `leading-1-5` / `tracking-sm`                 | `text-14` / `leading-1-5` / `tracking-sm`                 | `text-14` / `leading-1-5` / `tracking-sm`                 | `text-12` / `leading-1-5` / `tracking-sm`                 | Figtree 600           |
| `.body-copy`          | `text-18` / `leading-1-5` / `max-w-[600px]`               | `text-18` / `leading-1-5` / `max-w-[600px]`               | `text-16` / `leading-1-5` / `max-w-[600px]`               | `text-16` / `leading-1-5` / `max-w-[600px]`               | DM Sans 400           |
| `.lead-copy`          | `text-20` / `leading-1-5`                                 | `text-20` / `leading-1-5`                                 | `text-20` / `leading-1-5`                                 | `text-20` / `leading-1-5`                                 | DM Sans 500           |
| `.section-subheading` | `text-20` / `leading-1-2` / `tracking-xs`                 | `text-20` / `leading-1-2` / `tracking-xs`                 | `text-18` / `leading-1-2` / `tracking-xs`                 | `text-16` / `leading-1-2` / `tracking-xs`                 | Figtree 500           |
| `.card-heading`       | `text-36` / `leading-1-1` / `max-w-[600px]`               | `text-32` / `leading-1-1` / `max-w-[600px]`               | `text-32` / `leading-1-1` / `max-w-[600px]`               | `text-24` / `leading-1-1` / `max-w-[600px]`               | Figtree 800           |
| `.section-heading`    | `text-56` / `leading-1` / `tracking-sm` / upper           | `text-56` / `leading-1` / `tracking-sm` / upper           | `text-40` / `leading-1` / `tracking-sm` / upper           | `text-32` / `leading-1` / `tracking-sm` / upper           | Figtree 900 uppercase |
| `.text-cta`           | `text-16` / `leading-1-5` / `tracking-sm` / upper / `py-2` | same                                                      | same                                                      | same                                                      | Figtree 800           |


**Notes:**

- `.card-heading` at Empire h3 overrides to `text-40 / leading-1-1` on desktop via inline `desktop:text-40 desktop:leading-1-1` at the call site.
- `.credentials` used in About; intended for bio attribution and credential strings.
- `.footnote` used below product card body copy; white at 70% opacity on dark cards.
- `.body-copy` font weight: **300 (light)** on dark backgrounds (Hero, Mission, Offerings OfferingRow, Donate) — add `font-light` at call site. Default 400 on light backgrounds (About).
- `.section-subheading` color is **not baked into the class** — always pass `subtitleClassName` at each `<SectionHeader>` call site.

#### `.text-cta` — Text-link CTA

Used for inline text CTAs. Pair with a 14×14 SVG chevron and `inline-flex items-center gap-2`.

```jsx
<a href="#contact" className="text-cta self-start inline-flex items-center gap-2 text-deep-gray">
  Start your seven minutes
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
</a>
```

**Default color:** set via utility class at call site (e.g. `text-deep-gray` on light bg, `text-cobalt-dark` on cream).

**Hover animation:** chevron slides right 4px; text and chevron color shifts to `purple`. Bounce easing in (`--ease-bounce` / `--ease-overshoot`), ease-out on leave. All at `--duration-200`.

**Color variant `.text-cta-olive`:** for use on dark backgrounds (Products). Default `olive`, hover `olive-lighter`. Apply alongside `.text-cta`:
```jsx
<a className="text-cta text-cta-olive self-start inline-flex items-center gap-2">…</a>
```

#### Hero Display Type

The hero uses fluid CSS custom properties set in `:root`:

```css
--hero-fs:  clamp(76px, 13.571vw - 5.43px, 190px)  /* 76px @ 600vp → 190px @ 1440vp */
--hero-lh:  clamp(72px, 12.857vw - 5.14px, 180px)
--hero-ls:  1.52px
```

At phone breakpoint (`max-width: 599px`) these are clamped to their minimums: `76px / 72px`.

Hero tagline: `text-24` phone/tablet · `text-32` expanded · `text-40` desktop · `leading-1-2` · `tracking-sm` · `text-olive-lighter` · Figtree 900.  
Gap between tagline and body copy: `gap-4` (16px) all viewports.

Hero image (`.hero-img`): `294×534px` desktop / `180×328px` expanded / `140×255px` tablet / hidden phone.

Hero word colors: **F\*CK** = white, **SAVE** = `yellow`, **THE WORLD** = white.  
Footer reuse: **F\*CK** = `olive-lighter`, **SAVE** = `pink`, **THE WORLD** = `olive-lighter`.

---

### Spacing

#### Section Vertical Padding Scale

Custom spacing tokens for consistent section rhythm. Apply via `py-`* / `pt-`* / `pb-`*.


| Token           | Value   | Typical Usage                                            |
| --------------- | ------- | -------------------------------------------------------- |
| `section-y-2xs` | `80px`  | Mobile hero pt, mobile About pt                          |
| `section-y-xs`  | `88px`  | Hero pt (all breakpoints)                                |
| `section-y-sm`  | `104px` | Offerings tablet/mobile, Donate mobile pt                |
| `section-y`     | `112px` | About pt                                                 |
| `section-y-lg`  | `120px` | Mission pt, Offerings desktop pt, Products pt, Donate pt |
| `section-y-xl`  | `136px` | Offerings pb (all), Products pb, Donate pb               |
| `section-y-2xl` | `144px` | About pb                                                 |


#### Section Padding Reference

| Section       | pt                        | pb                         | Notes                                    |
| ------------- | ------------------------- | -------------------------- | ---------------------------------------- |
| Hero          | `88px` (all)              | `64px` (all)               | —                                        |
| Featured      | `8px` (all)               | `120px` (all)              | Tight top — sits flush below Hero        |
| Mission       | `104px` phone / `120px`+  | `120px` phone / `136px`+   | —                                        |
| Offerings     | `80px` phone / `120px`+   | `136px` all                | —                                        |
| Testimonial   | `160px` all               | `160px` all                | No negative margins — standalone section |
| Products      | `120px` all               | `48px` phone / `136px`+    | —                                        |
| About         | `80px` phone / `112px`+   | `120px` phone / `144px`+   | —                                        |
| Donate        | `104px` phone / `120px`+  | `120px` phone / `136px`+   | —                                        |

#### Nav Heights


| Token        | Value  | Class | Usage                                      |
| ------------ | ------ | ----- | ------------------------------------------ |
| `nav-mobile` | `80px` | —     | Mobile nav bar height                      |
| `nav`        | `96px` | —     | Desktop / expanded / tablet nav bar height |


#### Gaps


| Token            | Value  | Typical Usage                                                        |
| ---------------- | ------ | -------------------------------------------------------------------- |
| `gap-content`    | `48px` | Between heading and body, between bio and CTA, hero header→secondary |
| `gap-section`    | `64px` | Between cards within a section, between offering rows                |
| `gap-section-lg` | `88px` | Between offering groups                                              |


#### Layout


| Token                    | Value    | Class                 | Usage                                   |
| ------------------------ | -------- | --------------------- | --------------------------------------- |
| `maxWidth.site`          | `1440px` | `max-w-site`          | Applied by `.page-container`            |
| `scrollMargin.nav`       | `80px`   | `scroll-mt-nav`       | Offset for sticky nav on anchor targets |
| `scrollMargin.navMobile` | `80px`   | `scroll-mt-navMobile` | Same, mobile variant                    |


Always wrap section inner content in `.page-container` for centering:

```jsx
<section className="bg-brand-yellow">
  <div className="page-container py-section-y px-6 tablet:px-16 expanded:px-24 desktop:px-24">
    {/* content */}
  </div>
</section>
```

---

### Letter-Spacing

Defined as CSS custom properties in `:root` and exposed as Tailwind `tracking-*` utilities via `letterSpacing` config. `em` is relative to the element's own font size — these scale proportionally with type size.


| CSS Variable | Value     | Tailwind Class  | Usage                                              |
| ------------ | --------- | --------------- | -------------------------------------------------- |
| `--ls-xs`    | `0.02em`  | `tracking-xs`   | Footer tagline, copyright, `.section-subheading`   |
| `--ls-sm`    | `0.04em`  | `tracking-sm`   | `.credentials`, `.section-heading`, `.text-cta`    |
| `--ls-md`    | `0.06em`  | `tracking-md`   | Nav brand, footer brand, buttons                   |
| `--ls-lg`    | `0.09em`  | `tracking-lg`   | Nav links, footer nav links                        |
| `--ls-caps`  | `0.125em` | `tracking-caps` | `.eyebrow`, uppercase labels, marquee ticker       |


---

### Line-Height

Defined as CSS custom properties in `:root` and registered as explicit utilities in `@layer utilities`. Token names use underscores for the decimal (`--lh-1-1`); Tailwind class names mirror this (`leading-1-1`). The `leading-1` token uses no underscore since there's no decimal.


| CSS Variable | Value | Tailwind Class | Usage                                                                                       |
| ------------ | ----- | -------------- | ------------------------------------------------------------------------------------------- |
| `--lh-1`     | `1`   | `leading-1`    | Hero display type, `.section-heading`                                                       |
| `--lh-1-1`   | `1.1` | `leading-1-1`  | `.card-heading`, Empire h3 (desktop), buttons (all sizes)                                   |
| `--lh-1-2`   | `1.2` | `leading-1-2`  | `.section-subheading` (all), Featured heading, Footer tagline/nav                           |
| `--lh-1-3`   | `1.3` | `leading-1-3`  | Hero tagline, Mission quote                                                                 |
| `--lh-1-5`   | `1.5` | `leading-1-5`  | `.body-copy`, `.lead-copy`, `.eyebrow`, `.footnote`, `.credentials`, `.text-cta`, testimonial |


> Hero display type (`--hero-lh`) is excluded from the token system — it uses fluid `clamp()` values defined directly in `:root`.

---

### Font Size

Defined as CSS custom properties in `:root` and exposed as Tailwind `text-*` utilities via `fontSize` config. Numeric keys (`11`, `12`, …) don't conflict with Tailwind's default named scale (`sm`, `base`, `lg`, …).


| CSS Variable | Value  | Tailwind Class | Primary Usage                                                                                                                   |
| ------------ | ------ | -------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `--text-11`  | `11px` | `text-11`      | `.eyebrow` (phone), footer copyright (tablet/expanded/desktop)                                                                  |
| `--text-12`  | `12px` | `text-12`      | `.footnote` (phone), `.credentials` (phone), button (phone), footer copyright (phone), footer tagline (tablet/expanded/desktop) |
| `--text-13`  | `13px` | `text-13`      | `.eyebrow` (expanded/desktop), footer nav links (tablet/expanded/desktop)                                                       |
| `--text-14`  | `14px` | `text-14`      | `.footnote` (tablet+), `.credentials` (tablet+), button (tablet+), footer nav links (phone), footer tagline (phone)             |
| `--text-16`  | `16px` | `text-16`      | `.body-copy` (phone), `.text-cta` (all), nav links (mobile drawer)                                                              |
| `--text-18`  | `18px` | `text-18`      | `.body-copy` (tablet+), `.section-subheading` (tablet)                                                                          |
| `--text-20`  | `20px` | `text-20`      | `.lead-copy` (all), `.section-subheading` (expanded/desktop), footer brand name (all)                                           |
| `--text-24`  | `24px` | `text-24`      | `.card-heading` (phone), Mission quote, Featured heading, hero tagline (tablet/phone)                                           |
| `--text-32`  | `32px` | `text-32`      | `.section-heading` (phone), `.card-heading` (tablet/expanded), Testimonial blockquote (expanded/desktop)                        |
| `--text-36`  | `36px` | `text-36`      | `.card-heading` (desktop)                                                                                                       |
| `--text-40`  | `40px` | `text-40`      | `.section-heading` (tablet), Empire h3 (desktop), hero tagline (expanded/desktop)                                               |
| `--text-56`  | `56px` | `text-56`      | `.section-heading` (expanded/desktop)                                                                                           |


> **TradeMark** uses its own size system with raw `text-[Xpx]` arbitrary values and is intentionally excluded from the token system. All other text sizes in the app use tokens from this table.

---

### Radius


| CSS Variable    | Value    | Tailwind Keys                               | Usage                         |
| --------------- | -------- | ------------------------------------------- | ----------------------------- |
| `--radius-full` | `9999px` | `rounded-btn-desktop`, `rounded-btn-mobile` | Button pill (all breakpoints) |


---

### Animation

#### Duration & Delay Tokens (CSS variables in `:root`)


| Variable         | Value   | Usage                                            |
| ---------------- | ------- | ------------------------------------------------ |
| `--duration-100` | `100ms` | `.reveal-body` follows `.reveal-heading`         |
| `--duration-200` | `200ms` | Button hover, footer link hover, nav item in/out |
| `--duration-300` | `300ms` | Hamburger morph, drawer open                     |
| `--duration-500` | `500ms` | Scroll-reveal fade + slide                       |


#### Easing Curves (CSS variables in `:root`)


| Variable           | Curve                              | Usage                                         |
| ------------------ | ---------------------------------- | --------------------------------------------- |
| `--ease-out`       | `cubic-bezier(0.42, 0, 0.58, 1)`   | Standard deceleration; `.text-cta` leave      |
| `--ease-bounce`    | `cubic-bezier(0.34, 1.2, 0.64, 1)` | Hamburger morph; `.text-cta` color enter      |
| `--ease-spring`    | `cubic-bezier(0.34, 1.4, 0.64, 1)` | Drawer open                                   |
| `--ease-overshoot` | `cubic-bezier(0.42, 2.0, 0.58, 1)` | Nav item bounce-in; `.text-cta` chevron enter |


---

### Z-Index


| Token         | Value | Element                 |
| ------------- | ----- | ----------------------- |
| `z-nav`       | `100` | Sticky navigation bar   |
| `z-navDrawer` | `99`  | Mobile hamburger drawer |


---

## Components

### Btn

**File:** `src/components/Btn.jsx`

Polymorphic CTA button. Renders as `<a>` when `href` is provided, `<button type="button">` otherwise.

#### Sizing


| Breakpoint                  | Height     | Horizontal padding | Border radius                    | Font size | Line height   | Tracking      |
| --------------------------- | ---------- | ------------------ | -------------------------------- | --------- | ------------- | ------------- |
| Desktop / expanded / tablet | `h-[48px]` | `px-8` (32px)      | `rounded-btn-desktop` (`9999px`) | `14px`    | `leading-1-1` | `tracking-md` |
| Phone (`max-phone`)         | `h-[48px]` | `px-8` (32px)      | `rounded-btn-mobile` (`9999px`)  | `12px`    | `leading-1-1` | `tracking-md` |


Font: Figtree Bold, uppercase, no wrap. Border opacity: `0.4`. No vertical padding — height is set explicitly.

#### Color Presets


| Preset        | Default state                                                          | Hover state                             |
| ------------- | ---------------------------------------------------------------------- | --------------------------------------- |
| `dark`        | `border-cobalt-dark/40 text-cobalt-dark` (outline)                     | `bg-cobalt-dark text-olive-light`       |
| `cream`       | `border-white/40 text-olive-lighter` (outline)                         | `bg-olive-light text-cobalt-dark`       |
| `white`       | `border-white/40 text-olive-lighter` (outline)                         | `bg-white text-cobalt-dark`             |
| `productBg`   | `bg-olive-dark border-cobalt-dark/40 text-cobalt-dark` (filled)        | `bg-cobalt-dark text-olive-light`       |
| `muted`       | `border-cobalt-dark/40 text-cobalt-dark` (outline)                     | `bg-cobalt-dark text-olive-light`       |
| `mutedOnDark` | `border-white/40 text-olive-light` (outline)                           | `bg-warm-grey-dark text-cobalt-dark`    |


#### Props


| Prop        | Type                                                                 | Default  | Description                    |
| ----------- | -------------------------------------------------------------------- | -------- | ------------------------------ |
| `color`     | `'dark' | 'cream' | 'white' | 'productBg' | 'muted' | 'mutedOnDark'` | `'dark'` | Color preset                   |
| `href`      | string                                                               | —        | If provided, renders as `<a>`  |
| `hoverText` | `'dark' | 'cream' | 'white' | 'purple'`                              | —        | Override hover text color only |
| `className` | string                                                               | `''`     | Additional Tailwind classes    |
| `children`  | ReactNode                                                            | —        | Button label                   |


#### Usage

```jsx
// Standard CTA on light background
<Btn color="dark" href="#offerings">Explore transformations</Btn>

// CTA on dark/hero section
<Btn color="cream">Start here</Btn>

// Override hover text (e.g. About CTA)
<Btn color="dark" hoverText="purple">Work with Aaron</Btn>
```

---

### TradeMark

**File:** `src/components/TradeMark.jsx`

Renders the `©TM©` superscript mark. All size variants are centralised here — never write `<sup>` inline.

#### Props


| Prop   | Type    | Default | Description                                                                     |
| ------ | ------- | ------- | ------------------------------------------------------------------------------- |
| `size` | string  | `'lg'`  | Size variant (see table below)                                                  |
| `word` | string  | —       | When provided, wraps `{word}{mark}` in `whitespace-nowrap` to prevent orphaning |
| `gap`  | boolean | `false` | Adds `ml-[2px]` between the word and the mark. Use on product/offering titles   |


#### Size Variants


| Size | Desktop ≥1200 | Expanded 900–1199 | Tablet 600–899 | Phone ≤599 | Render style                        | Usage context                                  |
| ---- | ------------- | ----------------- | -------------- | ---------- | ----------------------------------- | ---------------------------------------------- |
| `sm` | 8px           | 8px               | 7px            | 7px        | `inline-block` (cap-height aligned) | Eyebrow-level                                  |
| `md` | 9px           | 9px               | 8px            | 8px        | `inline-block` (cap-height aligned) | Inline in text, nav/footer brand               |
| `lg` | 16px          | 13px              | 12px           | 10px       | `inline-block` (cap-height aligned) | Offering, Empire, product & hero `h3` headings |


```jsx
// No-wrap: keeps "Wellness©TM©" together on a single line
<h3 className="card-heading">Seven Minute <TradeMark word="Wellness" /></h3>

// Inline in body copy
<p className="body-copy">
  Certified Steinberg STW <TradeMark size="md" word="Method" /> Practitioner
</p>
```

---

### ProductCard

**File:** `src/components/ProductCard.jsx`

Two-column row at expanded/desktop (≥900px), stacked vertically at phone/tablet. Built-in scroll reveal via `useReveal`.

#### Layout

Mirrors `OfferingRow` layout exactly — see **Offering Card Layout** pattern for full specs.

- **Row container** — `gap-6 px-8 max-phone:px-4 max-phone:max-w-[664px] max-phone:mx-auto tablet:px-12 tablet:max-w-[696px] tablet:mx-auto`. At expanded/desktop: `flex-row items-center gap-8 px-0 w-full max-w-[1144px] mx-auto`.
- **Mobile/tablet image** — stacks above text (`order-1`). Height `h-[280px]` phone / `h-[340px]` tablet. `items-end justify-center`. Hidden at expanded/desktop.
- **Expanded/desktop image** — `flex-1 max-w-[512px] aspect-[512/440] object-contain`, fills absolute inset. `imageLeft` controls column order via `expanded:order-`*.
- **Text column** — `flex-1 max-w-[600px]`, `gap-6` all viewports, `pb-16` at phone/tablet, `pb-0` at expanded/desktop. CTA: `.text-cta-olive` text-link with chevron, `self-start`.
- Uses `<picture>` element with optional `imageMobile` source at mobile breakpoint. Images are lazy-loaded.

#### Typography in ProductCard

| Element    | Class / Style                      | Color             |
| ---------- | ---------------------------------- | ----------------- |
| Eyebrow    | `.eyebrow`                         | `text-warm-grey-dark` |
| Title      | `.card-heading`                    | `text-olive-lighter`  |
| Body copy  | `.body-copy`                       | `text-olive`          |
| Footnote   | `.footnote opacity-70`             | `text-white`          |
| CTA        | `.text-cta .text-cta-olive` + chevron | olive → olive-lighter on hover |

#### Props


| Prop                      | Type                  | Default      | Description                                                            |
| ------------------------- | --------------------- | ------------ | ---------------------------------------------------------------------- |
| `imageLeft`               | boolean               | `false`      | Image on left (text on right) at expanded+                             |
| `image`                   | string                | —            | Image `src` (from `/public/`)                                          |
| `imageMobile`             | string                | —            | Optional mobile-specific `srcSet` image                                |
| `alt`                     | string                | `''`         | Image alt text                                                         |
| `imageFit`                | `'contain' | 'cover'` | `'contain'`  | Object-fit at expanded+                                                |
| `imageContainerClassName` | string                | `''`         | Override image container height/sizing                                 |
| `imageClassName`          | string                | `''`         | Additional classes on `<img>`                                          |
| `textClassName`           | string                | `''`         | Additional classes on text column                                      |
| `category`                | ReactNode             | —            | Eyebrow label                                                          |
| `title`                   | ReactNode             | —            | Heading                                                                |
| `description`             | ReactNode             | —            | Body copy                                                              |
| `footnote`                | ReactNode             | —            | Optional small print below body copy                                   |
| `cta`                     | string                | —            | CTA label (renders as `.text-cta` link)                                |
| `href`                    | string                | `'#contact'` | CTA link target                                                        |
| `className`               | string                | `''`         | Additional classes on root element                                     |


---

### SectionHeader

**File:** `src/components/SectionHeader.jsx`

Standardised heading + subheading stack used to open most sections.

#### Props


| Prop                | Type      | Default              | Description                          |
| ------------------- | --------- | -------------------- | ------------------------------------ |
| `title`             | ReactNode | —                    | Section heading (`.section-heading`) |
| `subtitle`          | ReactNode | —                    | Subheading (`.section-subheading`)   |
| `titleClassName`    | string    | `'text-cobalt-dark'` | Color override for heading           |
| `subtitleClassName` | string    | `''`                 | Color class for subheading (required — no default color in class) |


```jsx
<SectionHeader
  title={<>Transformational<br />Offerings</>}
  subtitle="Proprietary Frameworks Delivered Through Revolutionary Containers"
  subtitleClassName="text-warm-grey-light"
/>
```

Gap between heading and subtitle: `gap-2` (all viewports).

---

## Page Section Map

These section components are not intended for arbitrary reuse — each maps to a fixed position in the single-page layout defined in `src/App.jsx`.


| Component     | File              | Anchor                  | Background                        | Description                                                          |
| ------------- | ----------------- | ----------------------- | --------------------------------- | -------------------------------------------------------------------- |
| `Nav`         | `Nav.jsx`         | —                       | `cobalt-dark` / `surface-darkest` | Sticky bar (`z-nav: 100`) + mobile drawer (`z-navDrawer: 99`)        |
| `Hero`        | `Hero.jsx`        | —                       | `cobalt-dark` / `surface-darkest` | Fluid display headline, crossout SVG overlay, hero image             |
| `Featured`    | `Featured.jsx`    | —                       | `cobalt-dark` / `surface-darkest` | Marquee ticker strip                                                 |
| `Mission`     | `Mission.jsx`     | —                       | `brand-yellow`                    | Brand mission statement                                              |
| `Offerings`   | `Offerings.jsx`   | `#offerings`, `#empire` | `olive-light`                     | Four alternating offering cards + Empire Builder block               |
| `Testimonial` | `Testimonial.jsx` | —                       | `brand-yellow`                    | Social proof block — standalone section, no overlap                  |
| `Products`    | `Products.jsx`    | `#products`             | `cobalt-dark` / `surface-darkest` | ProductCard grid (transformational products + shop)                  |
| `About`       | `About.jsx`       | `#about`                | `olive-dark`                      | Dr. Aaron Steinberg bio + credentials                                |
| `Donate`      | `Donate.jsx`      | —                       | `purple`                          | Donation CTA with mission copy                                       |
| `Footer`      | `Footer.jsx`      | —                       | `cobalt-dark` / `surface-darkest` | Footer hero headline + links                                         |


Navigation links (`src/data/navLinks.js`): Transformations → `#offerings`, Embodiments → `#empire`, Shop → `#products`, About → `#about`.

---

## Patterns

### Scroll Reveal

**Hook:** `src/hooks/useReveal.js`  
**Trigger:** Intersection Observer fires once at `threshold: 0.12`. After triggering, the observer disconnects (fire-once).

```jsx
import { useReveal } from '../hooks/useReveal'

const [ref, visible] = useReveal()

<section
  ref={ref}
  className={`reveal-heading${visible ? ' in-view' : ''}`}
>
  <p className="reveal-body">…</p>
</section>
```


| Class applied to…                          | Animation                                                            |
| ------------------------------------------ | -------------------------------------------------------------------- |
| `.reveal-heading` on a parent              | Fades in + slides up from `translateY(100px)`, `500ms` ease-in-out   |
| `.reveal-body` inside an `.in-view` parent | Same, with `100ms` delay                                             |
| `.reveal-heading.in-view` on self          | Card observes itself directly (used by `OfferingRow`, `ProductCard`) |


`ProductCard` uses `useReveal` internally — no extra wiring needed at the call site.

---

### Navigation Drawer

The mobile nav drawer animates link items in/out and morphs the hamburger icon.


| Class                    | Behavior                                                                                                                                           | Timing                                |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| `.nav-hamburger.is-open` | Container rotates 180°; top line translates `+7px` and rotates `45°`; mid line fades + collapses; bottom line translates `−7px` and rotates `−45°` | `--duration-300` / `--ease-bounce`    |
| `.nav-item-in`           | Link bounces in from `translateY(−10px)`, opacity 0→1                                                                                              | `--duration-200` / `--ease-overshoot` |
| `.nav-item-out`          | Link fades to `translateY(−10px)`                                                                                                                  | `--duration-200` / `--ease-out`       |


Nav brand text: `text-olive-lighter`. Desktop nav link rollovers: `hover:text-olive-lighter`.

Z-index: nav bar `z-nav` (100), drawer `z-navDrawer` (99) — drawer slides under bar.

---

### Marquee Ticker

Continuous horizontal scroll at `35s` linear infinite. Duplicate content twice in the DOM for seamless looping:

```html
<div class="overflow-hidden">
  <div class="marquee-track flex whitespace-nowrap">
    <!-- content × 2 -->
    <span>…</span><span>…</span>
  </div>
</div>
```

Animation pauses when `prefers-reduced-motion: reduce` is set (see Accessibility).

---

### Offering Card Layout

`OfferingRow` in `Offerings.jsx` (and `ProductCard`) use a shared two-column layout at expanded/desktop, stacked at phone/tablet. `ProductCard` is a direct structural copy — keep them in sync.

#### Row container

| | Phone (≤599) | Tablet (600–899) | Expanded / Desktop (≥900) |
|---|---|---|---|
| Direction | `flex-col` | `flex-col` | `flex-row items-center` |
| Gap | `gap-6` (24px) | `gap-6` | `gap-8` (32px) |
| Padding X | `px-4` (16px) via `max-phone:px-4` overriding base `px-8` | `px-12` (48px) | `px-0` |
| Max-width | `max-w-[664px] mx-auto` | `max-w-[696px] mx-auto` | `max-w-[1144px] mx-auto w-full` |

Between rows (outer container): `gap-8` phone/tablet · `gap-20` expanded/desktop.

#### Image — phone/tablet

Separate element, hidden at expanded/desktop (`expanded:hidden desktop:hidden`). Always `order-1` (stacks on top). Height: `h-[280px]` phone / `h-[340px]` tablet. Layout: `items-end justify-center`. Image: `h-full w-auto max-w-full object-contain`.

#### Image — expanded/desktop

Separate element, hidden at phone/tablet (`hidden expanded:block desktop:block`). `flex-1 max-w-[512px] aspect-[512/440]`. Image fills via `absolute inset-0 w-full h-full object-contain`. `imageLeft` controls column order via `expanded:order-1/2 desktop:order-1/2`.

#### Text block

`flex-1 max-w-[600px]`. Gap: `gap-6` all viewports. Bottom padding: `pb-16` phone/tablet, `0` expanded/desktop.

Inner structure:
- Outer group (eyebrow + title + body): `gap-2`
- Inner group (eyebrow + title): `gap-4`
- Separator before CTA: covered by text block's `gap-6`

#### Typography in row

| Element | Class | Color (OfferingRow) | Color (ProductCard) |
|---|---|---|---|
| Eyebrow | `.eyebrow` | `text-warm-grey-light` | `text-warm-grey-dark` |
| Title | `.card-heading` | `text-cobalt-dark` | `text-olive-lighter` |
| Body | `.body-copy font-light` | `text-deep-gray` | `text-olive` |
| CTA | `.text-cta` + chevron | `text-deep-gray` → purple hover | `.text-cta-olive` → olive-lighter hover |

#### Empire card

Sibling structure — image and text box are separate elements. Image: `800px` centered at expanded/desktop, full-width at phone/tablet. Text container: `border border-olive-dark bg-olive-dark`, `mx-auto`.

| | Phone | Tablet | Expanded | Desktop |
|---|---|---|---|---|
| Margin X | `mx-6` | `mx-auto` | `mx-auto` | `mx-auto` |
| Padding X | `px-10` | `px-14` | `px-[120px]` | `px-[136px]` |
| Max-width | `max-w-[680px]` | `max-w-[712px]` | `max-w-[840px]` | `max-w-[896px]` |
| Padding Y | `pt-12 pb-16` | same | `pt-[64px] pb-[80px]` | `pt-[64px] pb-[100px]` |

---

### Testimonial Layout

`Testimonial.jsx` is a standalone yellow section with no negative margins.

- **Background:** `bg-brand-yellow`
- **Padding:** `py-[160px]` all viewports; `px-12` phone / `px-16` tablet / `px-24` expanded+
- **Text wrapper:** `mx-auto max-w-[680px]` desktop/expanded · `max-w-[540px]` tablet · `w-full`
- **Blockquote:** Bitter 300, `text-20` phone / `text-24` tablet / `text-32` expanded/desktop · `leading-1-5` · `text-cobalt-dark`
- **Hanging punctuation:** `padding-left: 0.45em; text-indent: -0.45em` (em scales with font size). `hanging-punctuation: first` for Safari.
- **Attribution margin-left:** `9px` phone / `11px` tablet / `14px` expanded+  (matches `0.45em` at blockquote's font-size at each breakpoint)
- **Source name:** Figtree Bold, `text-14` phone / `text-16` tablet+ · `text-cobalt-dark`
- **Source credentials:** Figtree Normal/Medium, `text-13` phone / `text-14` tablet+ · `text-cobalt-dark`

---

### Blockquote Hanging Punctuation

```css
.blockquote-hanging {
  hanging-punctuation: first;  /* Safari — handles natively */
  padding-left: 0.45em;        /* scales with font size */
  text-indent: -0.45em;        /* pulls only the " to the left */
}
```

Apply to `<blockquote>` or `<p>` elements that open with `"`. The `em` value scales with the element's font size so the indent matches the `"` width at any size. For the attribution below, use pixel values that match the computed `0.45em` at the blockquote's font-size (not the attribution's own font-size).

---

## Assets

All images live in `/public/` and are referenced via `import.meta.env.BASE_URL` + filename.


| File                                                                        | Usage                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| `hero.png`                                                                  | Hero section background                                           |
| `sevenminutes.png`, `rockhard.png`, `bogeys.png`, `goingdown2.png`          | Offering section card images (528×454 RGBA PNGs, transparent bg)  |
| `empire.png`                                                                | Empire Builder section image                                      |
| `card.png`                                                                  | Quantum Empowerment Black Card product card                       |
| `tarot.png`                                                                 | STW Tarot product card                                            |
| `aaron.png`                                                                 | Dr. Aaron Steinberg image (About section)                         |
| `crossout.svg`                                                              | Hero F\*CK strikethrough overlay (white)                          |
| `crossout-pink.svg`                                                         | Footer F\*CK strikethrough overlay (pink)                         |
| `gradients.svg`                                                             | Decorative background gradients                                   |


For `ProductCard`, pass both `image` (desktop) and `imageMobile` (portrait/mobile) when a mobile-specific crop exists.

---

## Accessibility

### Focus Ring

Defined globally in `@layer base`:

```css
:focus-visible {
  outline: 2px solid theme('colors.yellow');  /* #ffe52c */
  outline-offset: 3px;
  border-radius: 4px;
}
```

All keyboard-focusable elements get the yellow focus ring automatically.

### Reduced Motion

`src/index.css` includes a `prefers-reduced-motion: reduce` block that disables all animations:

- Nav drawer link animations
- Marquee ticker
- Scroll-reveal transitions
- Hamburger morph transition

No additional implementation required — this is already in place.

### Anchor Scroll Offset

Apply `scroll-mt-nav` (80px) to any element that is an `id` anchor target, so the sticky nav doesn't obscure it on jump.

---

## Data & Constants


| File                   | Export     | Description                                            |
| ---------------------- | ---------- | ------------------------------------------------------ |
| `src/data/navLinks.js` | `navLinks` | Array of `{ href, label }` nav items                   |
| `src/constants.js`     | `CREDS`    | Credential abbreviation string for Dr. Steinberg's bio |


---

*Last updated: June 2026 · Derived from `tailwind.config.js`, `src/index.css`, and component source files.*

---

### Changelog (recent)

- **Color tokens** — Added `olive-lighter` (#F4F6EA), `deep-gray` (#4B4B4B). Renamed `warm-grey` → `warm-grey-light` (#65665E), added `warm-grey-dark` (#98998D). Renamed semantic `text-primary` → `text-dark`. Removed `text-light` semantic (use `text-deep-gray` utility directly).
- **Eyebrow colors by background** — `text-warm-grey-light` on light backgrounds (Offerings), `text-warm-grey-dark` on dark backgrounds (Products, Footer, Nav).
- **`olive-lighter` rollout** — Applied to nav brand, nav rollover, Featured heading, Mission heading, Products heading, product card headings, Donate heading/btn, footer hero F\*CK + THE WORLD text. Btn `cream` and `white` presets updated to `text-olive-lighter` default.
- **`deep-gray` rollout** — Applied to body copy on light backgrounds: Offerings OfferingRow, About, Empire block.
- **Body copy weight on dark bg** — `font-light` (300) applied at call sites in Hero, Mission, Offerings (OfferingRow), Donate. Light-bg body copy (About) remains 400.
- **`.section-subheading`** — Font-weight 600 → 500 (medium). Tracking → `tracking-xs`. Color removed from class — pass `subtitleClassName` at every call site.
- **`.card-heading` line-height** — Changed from `leading-1` to `leading-1-1` (1.1).
- **`.text-cta` class** — Updated: `text-16` (was `text-14`), `leading-1-5` (was `leading-1-1`), `py-2` added, `gap-2` chevron gap. Hover color: `purple`. Asymmetric animation: bounce in / ease-out on leave.
- **`.text-cta-olive` variant** — New class for ProductCard CTAs: default `olive`, hover `olive-lighter`. Declared after `.text-cta:hover` in component layer.
- **Btn border opacity** — Changed from `0.7` to `0.4` across all presets.
- **ProductCard CTA** — Changed from `<Btn color="white">` to `.text-cta .text-cta-olive` text-link (matches OfferingRow pattern).
- **Featured section** — Background changed from `surface-darker` to `surface-darkest`. Padding: `pt-[8px] pb-[120px]`.
- **Mission section** — Background changed from `surface-dark` to `brand-yellow`. All text → `cobalt-dark`.
- **Testimonial section** — Background changed from `surface-dark` to `brand-yellow`. Removed negative margin overlap — now a standalone section. Padding `py-[160px]`. Text wrapper `max-w-[680px]` desktop / `max-w-[540px]` tablet. Mobile px: `48px`. Attribution margin uses px values matched to blockquote em-based indent.
- **Hanging punctuation** — Updated from fixed `1rem` to `0.45em` (em-based, scales with font size).
- **Hero padding** — `py-[88px]` → `pt-[88px] pb-[64px]`. Tagline color → `text-olive-lighter`. Gap tagline→body: `gap-4` all viewports.
- **Offerings pb** — Changed from 188/220/280px → `136px` all breakpoints.
- **Products pt** — Changed from 224/280px → `120px` all breakpoints. Header→cards gap and between-cards gap: both `gap-16` (64px) at expanded/desktop.
- **Mission body copy** — Removed individual max-widths; wrapper constrained to `max-w-[640px]`.
- **Footer hero** — F\*CK and THE WORLD: `olive-light` → `olive-lighter`.
- **Donate body copy** — Consolidated two `<p>` tags into one text block with `[&>p+p]:mt-4` paragraph spacing.
