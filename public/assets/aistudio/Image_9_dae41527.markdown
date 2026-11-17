---
name: Lereng Asri Eco-System
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#414844'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#717973'
  outline-variant: '#c1c8c2'
  surface-tint: '#3f6653'
  primary: '#012d1d'
  on-primary: '#ffffff'
  primary-container: '#1b4332'
  on-primary-container: '#86af99'
  inverse-primary: '#a5d0b9'
  secondary: '#994703'
  on-secondary: '#ffffff'
  secondary-container: '#fc934f'
  on-secondary-container: '#6d3000'
  tertiary: '#002d1b'
  on-tertiary: '#ffffff'
  tertiary-container: '#00452c'
  on-tertiary-container: '#53b889'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c1ecd4'
  primary-fixed-dim: '#a5d0b9'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#274e3d'
  secondary-fixed: '#ffdbc9'
  secondary-fixed-dim: '#ffb68c'
  on-secondary-fixed: '#321200'
  on-secondary-fixed-variant: '#753400'
  tertiary-fixed: '#92f7c3'
  tertiary-fixed-dim: '#75daa8'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005235'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
  pine-deep: '#1B4332'
  pine-mid: '#2D6A4F'
  pine-soft: '#52B788'
  terracotta-rich: '#D97736'
  wood-dark: '#B45309'
  cream-wood: '#FDF8F5'
  cream-bg: '#F8FAF6'
  whatsapp-green: '#25D366'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '800'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 28px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.04em
  price-display:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '800'
    lineHeight: 28px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system embodies the serene, invigorating spirit of Indonesian highland eco-tourism (*bernuansa alam asri, ramah, dan segar*). It addresses travelers, eco-tourists, weekenders, and corporate retreat planners seeking refuge in pristine nature without navigational or booking complexity. 

The aesthetic style merges **Minimalist Earth Warmth** with **Modern Tactile Mobile Components**. Crisp card-based compositions, organic rounded geometries, and rich foliage tones reflect natural topography while prioritizing seamless utility. Visual friction is minimized to build immediate trust, guiding users naturally toward high-conversion interactions such as direct WhatsApp booking and transparent itinerary exploration. The atmosphere is quiet, welcoming, and grounded—prioritizing immersive photography, crystal-clear typography, and generous tap ergonomics for outdoor smartphone usage.

## Colors

The palette is rooted in the highland ecosystem of lush mountain pinewoods and warm equatorial earth.

- **Primary (`pine-deep`, #1B4332)**: Represents deep mountain forest cover. Used for top headers, prominent titles, primary container fills, and dominant UI brand anchors.
- **Secondary (`terracotta-rich`, #D97736)**: Captures terracotta tile roofs and volcanic clay. Applied to badges, accent highlights, secondary tags, and contextual callouts.
- **Tertiary (`pine-soft`, #52B788)**: Fresh highland canopy. Employed for positive indicators, selected chip states, iconography, and subtle background badges.
- **Neutral (`#1E293B`)**: Dark slate provides accessible, glare-free readability on smartphone screens outdoors without the starkness of pure black.
- **Canvas (`cream-bg`, #F8FAF6)**: Replaces harsh white with an organic, low-strain cream tint that gives cards soft separation.
- **Special Action (`whatsapp-green`, #25D366)**: Reserved exclusively for WhatsApp inquiry pathways, conversational action triggers, and the persistent mobile floating dock.

## Typography

The design system exclusively leverages **Plus Jakarta Sans** across all typographic tiers. Its contemporary geometry, open counters, and humanist proportions evoke an approachable, welcoming persona suited for Indonesian hospitality and rapid mobile scanning.

- **Display & Headings**: Set tightly with negative letter-spacing for punchy destination overviews and package banners. `display-hero-mobile` guarantees headline balance on narrow displays without awkward line breaks.
- **Body Hierarchy**: `body-md` serves as the baseline for descriptive narratives, facility guides, and FAQ accordions. Generous line-height preserves readability during handheld reading under sunlight.
- **Labels & Numbers**: Numeric package prices, badge metadata, and duration markers use elevated weights (`label-sm` with slight tracking, `price-display` for commercial clarity) to accelerate comparative package decisions.

## Layout & Spacing

A strict **mobile-first fluid container layout** serves as the foundation:

- **Mobile (< 640px)**: 1-column fluid stacking with 16px (`1rem`) outer canvas margins and 16px gutters. Every critical interactive element ensures a minimum vertical hit-target of 44px (recommended 48px–52px for primary conversions).
- **Tablet (640px - 1024px)**: 6-column fluid grid, 24px gutters, and 32px margins. Comparative tour package cards transform from stacked carousels into a structured 2-column comparative layout.
- **Desktop (> 1024px)**: 12-column grid constrained to a maximum content width of 1200px, centered with progressive margin scaling. Tour comparison matrices and facility breakdowns resolve to a 3-column architecture.

Sectional rhythm alternates between compact spacing (`space-md` for grouped specs) and generous breathing pauses (`space-xl` between thematic village highlights) to evoke unhurried rural tranquility.

## Elevation & Depth

Visual hierarchy leverages soft organic ambient shadows tinted with deep mountain greens rather than cold grays, preserving warmth:

- **Level 0 (Flat)**: Background canvas (`#F8FAF6`) and secondary structural borders using subtle organic lines (`rgba(27, 67, 50, 0.08)`).
- **Level 1 (Resting Cards & Surfaces)**: Standard destination and itinerary cards utilize a diffused foliage-tinted shadow: `0 2px 8px -2px rgba(27, 67, 50, 0.06), 0 1px 3px 0 rgba(27, 67, 50, 0.04)`.
- **Level 2 (Hover / Active State)**: Lifted cards and bottom sheets utilize `0 12px 24px -6px rgba(27, 67, 50, 0.12), 0 4px 8px -2px rgba(27, 67, 50, 0.06)`.
- **Level 3 (Floating Conversion Bar & Navigation)**: Floating WhatsApp elements and sticky action docks float with a crisp, high-focus elevation: `0 16px 32px -8px rgba(37, 211, 102, 0.28), 0 4px 12px rgba(0, 0, 0, 0.08)`.

## Shapes

The design system implements a **Rounded (Level 2)** shape standard:

- **Base Elements (`0.5rem` / 8px)**: Inputs, small badge chips, calendar selectors, and facility pills.
- **Standard Containers (`1rem` / 16px)**: Destination image cards, package pricing containers, accordion panels, and interactive map frames.
- **Accent Surfaces & Bottom Sheets (`1.5rem` / 24px)**: Hero visual frames, mobile modal drawers, and modal booking summaries.
- **Specialized Pill Shapes (`9999px`)**: Interactive CTA buttons, badge tags, price stickers, and the persistent floating WhatsApp conversion bar, creating smooth, finger-friendly contours.

## Components

### Buttons
- **Primary CTA (Brand Action)**: Solid `#1B4332` with white text, minimum 48px height, rounded-full geometry. Hover transitions to `#2D6A4F`.
- **WhatsApp Action Button**: Solid `#25D366` with high-contrast `#FFFFFF` typography and integrated WhatsApp icon. Generates a dynamic pre-filled text parameter matching the viewed package.
- **Secondary / Ghost**: Transparent fill with a 1.5px border of `#1B4332`, text in `#1B4332`.
- **Floating Action Bar (Mobile Sticky)**: Fixed bottom bar (`z-index: 50`) pinned 16px above the viewport base on smartphone screens, featuring a full-width or dual-split CTA ("Tanya Paket via WhatsApp").

### Cards & Media
- **Destination & Package Cards**: White (`#FFFFFF`) surface set over `#F8FAF6`, styled with `rounded-2xl` clipping. Top 55% dedicated to high-resolution photography with an overlaid terracotta price badge (`#D97736`). Bottom 45% holds title, duration, brief specs, and an inline direct-booking trigger.
- **Comparative Matrix Cards**: Bordered with `rgba(27, 67, 50, 0.12)` featuring a highlighted "Paling Populer" badge tag for high-margin packages.

### Chips & Badges
- **Facility Tags**: Subtle cream-wood background (`#FDF8F5`) with wood-dark text (`#B45309`), pill-shaped, `padding: 4px 10px`, typography `label-sm`.
- **Status / Eco Badges**: `pine-soft` tint with `pine-deep` text for certifications, halal tourism notes, and conservation practices.

### Input Fields & Selectors
- Background `#FFFFFF`, border 1px solid `rgba(30, 41, 59, 0.16)`, height 48px, `rounded-xl`. Active state shifts border to `pine-mid` (`#2D6A4F`) with an outer ring glow of `rgba(45, 106, 79, 0.15)`.

### Lists & Accordions (FAQ & Itinerary)
- Divided by soft horizontal dividers (`rgba(27, 67, 50, 0.08)`). Day-by-day itineraries feature a vertical timeline bar in `#52B788` with numbered node pills.