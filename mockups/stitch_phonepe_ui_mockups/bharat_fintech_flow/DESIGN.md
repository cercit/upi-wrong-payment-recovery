---
name: Bharat Fintech Flow
colors:
  surface: '#f8f9ff'
  surface-dim: '#d0dbed'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dee9fc'
  surface-container-highest: '#d9e3f6'
  on-surface: '#121c2a'
  on-surface-variant: '#4b4452'
  inverse-surface: '#27313f'
  inverse-on-surface: '#eaf1ff'
  outline: '#7c7483'
  outline-variant: '#cdc3d4'
  surface-tint: '#7841b9'
  primary: '#470085'
  on-primary: '#ffffff'
  primary-container: '#5f259f'
  on-primary-container: '#cda3ff'
  inverse-primary: '#dab9ff'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#472a00'
  on-tertiary: '#ffffff'
  tertiary-container: '#653e00'
  on-tertiary-container: '#faa213'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#eedbff'
  primary-fixed-dim: '#dab9ff'
  on-primary-fixed: '#2a0053'
  on-primary-fixed-variant: '#5f259f'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f8f9ff'
  on-background: '#121c2a'
  surface-variant: '#d9e3f6'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  title-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 22px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.03em
  currency-hero:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.03em
  currency-hero-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.02em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1rem
  margin: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
---

## Brand & Style

This design system embodies the high-velocity, trust-critical landscape of Indian digital payments and consumer fintech. It balances instant transaction clarity with an inviting, accessible lifestyle interface designed to serve hundreds of millions of users across tier-1 to tier-4 geographies. 

The aesthetic is Modern Tactile Fintech: crisp white cards layered over soft, light-purple neutral canvases, anchored by deep, vibrant PhonePe royal purple and vivid status accents. The visual hierarchy communicates immediate assurance, security, and effortless navigation. 

Key visual principles:
- **Instant Recognition & Trust:** Primary actions utilize saturated purples, while transaction states trigger undeniable, culturally recognized feedback colors (emerald for verified UPI success, rich amber for pending processing).
- **Glanceable Densities:** High-volume information architectures (contact avatars, quick-pay grids, transaction passbooks) are packaged within distinct card surfaces with subtle structural borders and gentle ambient depth.
- **Fintech Precision:** Prominent Rupee (`₹`) numeral formatting with tabular numeric alignments to guarantee instant legibility under bright sunlight and across varying screen sizes.

## Colors

The palette is engineered around high contrast, institutional reliability, and positive reinforcement. 

- **Primary Violet/Purple (`#5f259f`, `#6739b7`):** The signature identity. Applied across brand headers, top navigation bars, key floating action triggers, primary verification badges, and dominant CTA buttons.
- **Secondary Emerald (`#10b981`, `#0f9d58`):** The hallmark of successful UPI exchanges, verified bank mandates, cashback additions, and positive wallet credits.
- **Tertiary Amber (`#f59e0b`):** Deliberate indicator for pending bank syncs, processing mandates, low-balance warnings, or awaiting-approval statuses.
- **Neutral Core (`#1f2937` primary text, `#4b5563` secondary text, `#9ca3af` subtle captions):** Slate-derived tones provide high-contrast legibility without the harshness of pure black.
- **Surfaces & Canvas (`#f8f7fc` canvas background, `#ffffff` card surface, `#f5f3f9` input/container fill):** Tinted light-purple grays maintain brand presence throughout empty states without fatiguing the eye.
- **Error Crimson (`#ef4444`):** Strictly reserved for failed UPI pins, rejected transfers, or critical security alerts.

## Typography

The type scale relies on Inter for its structural neutrality, crisp legibility at low-resolution mobile viewports, and tabular number figures critical for financial ledgers.

- **Indian Rupee (`₹`) Typography:** Amounts must always use tabular figures (`font-variant-numeric: tabular-nums`) to prevent jitter during real-time balance calculations. The Rupee symbol shares the weight and exact vertical alignment of the accompanying numerical string.
- **Visual Weight Balance:** Financial values and critical counterparty titles take bold/semi-bold weights (`600` or `700`) to enable rapid scanning during time-sensitive checkout sessions.
- **Accessibility & Scanning:** Subtext, UPI transaction IDs, and bank reference numbers (UTR) use `label-md` or `body-sm` in slate-500 (`#6b7280`), retaining optical legibility against both pure white cards and tinted surfaces.

## Layout & Spacing

The layout is built around mobile-first utility, using an 8pt base grid for structured spacing and rapid touch feedback.

- **Grid Architecture:** 
  - Mobile (base): 4-column fluid layout with `16px` outer margins and `12px` to `16px` gutters.
  - Tablet/Desktop viewports (e.g., merchant portals): Fluid 8 or 12-column grid capped at `640px` max-width for mobile wrappers, or `1024px` for merchant dashboards, centered with responsive side padding.
- **Rhythm & Touch Targets:** All interactive touch targets (UPI quick send, contacts, scanner buttons) adhere to a minimum size of `48px x 48px`, surrounded by `space-sm` or `space-md` gaps.
- **Service Hub Arrangement:** Category action tiles (Mobile Recharge, DTH, Electricity, UPI Transfer) operate on fixed 4-column horizontal splits inside structured cards, with `space-xs` between icon containers and label text.

## Elevation & Depth

Visual hierarchy leverages a hybrid approach: crisp surface containers stacked upon soft tinted foundations, elevated by faint, purple-tinted ambient drop shadows.

- **Ground Level (Canvas):** Colored `#f8f7fc`. Provides a clear boundary for content blocks.
- **Level 1 (Cards, Hub Tiles, Form Sections):** Flat pure white `#ffffff` elevated by a subtle structural border (`1px solid #ebe7f5`) and a slight ambient shadow: `0 1px 3px rgba(95, 37, 159, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)`.
- **Level 2 (Quick Action Panels, Bank Account Drawers):** White surface with `0 4px 12px rgba(95, 37, 159, 0.08)`. Used for dynamic interaction widgets, pending bill banners, and promo sliders.
- **Level 3 (Sticky Bottom Sheets, UPI PIN Dialogues, Modal Overlays):** Grounded floating layers with backdrop scrim (`rgba(31, 41, 55, 0.6)`) and an upper shadow: `0 -4px 24px rgba(95, 37, 159, 0.12)`.

## Shapes

The design system adopts a soft, friendly, and ergonomic pill-influenced aesthetic (Level 3 roundedness). This softens dense financial data, making the app feel welcoming and modern.

- **Action Buttons & Badges:** Primary triggers, "Pay Now" actions, and status chips use full pill shapes (`rounded-full` / `9999px`) to immediately convey clickability.
- **Content Cards & Sections:** Standard informational cards employ large corner curvature (`16px` to `20px`), creating cleanly defined content clusters.
- **Quick-Pay Avatars & Service Icons:** Contact heads use perfect circles (`rounded-full`), while utility icons (Electricity, Water, Fastag) sit in smoothed squircle containers (`14px` to `16px`).

## Components

### Buttons
- **Primary CTA ("Pay ₹...", "Proceed to Pay"):** Full-width pill shape, solid `#5f259f` background, white label, medium bold text. Hover/active state deepens to `#4c1d80`. Includes embedded spinner for UPI processing.
- **Secondary CTA ("Check Balance", "View History"):** Outline pill, border `1.5px solid #5f259f`, text `#5f259f`, transparent background. On tap, activates a 5% purple wash (`#f5f0fb`).
- **Success Confirm Action:** Filled `#10b981` pill button for post-transaction actions (e.g., "Done", "Share Receipt").

### Chips & Badges
- **Status Badges:** Small pill capsules with `space-xs` vertical and `space-sm` horizontal padding.
  - *Success:* Background `#ecfdf5`, text `#065f46`, leading emerald check dot.
  - *Pending:* Background `#fffbeb`, text `#92400e`, leading amber clock dot.
  - *Failed:* Background `#fef2f2`, text `#991b1b`, leading red cross dot.
- **Filter Chips:** Light purple-gray fill (`#f5f3f9`), slate-700 text. When selected: deep purple `#5f259f` background with white text.

### Payment Cards & Quick Action Grids
- **Service Hub Tile:** A vertical stack consisting of a `48px x 48px` icon box (tinted purple or brand-colored wash with rounded-xl corners) followed by a 2-line `label-md` text description centered underneath.
- **Transaction Passbook Item:** Full-bleed card list row with a circular avatar on the left (showing recipient logo or bank monogram), title (e.g., "Paid to Swiggy"), timestamp in `body-sm`, and right-aligned amount with bold `₹` value (green with `+` for credits, dark neutral with `-` for debits).

### Input Fields & Amount Entry
- **UPI Currency Input:** Centered, borderless large input displaying `currency-hero` typography. The `₹` sign remains fixed in slate-400 until an amount is typed, shifting to deep purple `#5f259f`.
- **Form Text Fields:** Rounded-xl containers (`12px`) filled with `#f5f3f9`, transitioning to white with a `1.5px solid #5f259f` border upon focus. Subtle placeholder in `#9ca3af`.

### Feedback & Transaction Status Screens
- **Receipt Header:** Top banner featuring an animated emerald checkmark (`#10b981`) within a soft glowing circle, accompanied by bold confirmation typography ("Payment of ₹1,450 Successful"), followed by the sender's debited bank logo and masked account number (`XX1234`).