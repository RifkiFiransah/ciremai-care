---
name: Husada Education System
colors:
  surface: "#f8fafc"
  surface-dim: "#e2e8f0"
  surface-bright: "#ffffff"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#f8fafc"
  surface-container: "#f1f5f9"
  surface-container-high: "#e2e8f0"
  surface-container-highest: "#cbd5e1"
  on-surface: "#002d44"
  on-surface-variant: "#475569"
  inverse-surface: "#001a2c"
  inverse-on-surface: "#f8fafc"
  outline: "#94a3b8"
  outline-variant: "#cbd5e1"
  surface-tint: "#0099cc"
  primary: "#0099cc"
  on-primary: "#ffffff"
  primary-container: "#e0f2fe"
  on-primary-container: "#002d44"
  inverse-primary: "#7dd3fc"
  secondary: "#002d44"
  on-secondary: "#ffffff"
  secondary-container: "#e2e8f0"
  on-secondary-container: "#001a2c"
  tertiary: "#8bc34a"
  on-tertiary: "#ffffff"
  tertiary-container: "#f0fdf4"
  on-tertiary-container: "#14532d"
  error: "#ba1a1a"
  on-error: "#ffffff"
  error-container: "#ffdad6"
  on-error-container: "#93000a"
  background: "#f8fafc"
  on-background: "#002d44"
  surface-variant: "#e2e8f0"
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: "800"
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: "700"
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: "700"
    lineHeight: 32px
  headline-md:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: "600"
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: "400"
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: "600"
    lineHeight: 20px
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: "400"
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: 64px
---

## Brand & Style

The design system is engineered for the healthcare education sector, specifically tailored for **Universitas Bhakti Husada Indonesia**. The brand personality is professional, authoritative, yet deeply compassionate. It aims to transform complex medical information into digestible, accessible, and friendly content for students and patients alike.

The visual style is **Corporate / Modern** with a focus on high legibility and clarity. By utilizing a structured grid and a calming blue palette, the UI evokes a sense of trust and clinical reliability. To soften the institutional feel, the system integrates friendly medical illustrations and rounded geometric shapes, ensuring the interface remains approachable for all users.

## Colors

The color palette is derived from the institutional identity of Bhakti Husada. The **Primary Blue (#0099CC)** is used for interactive elements and brand reinforcement, representing clarity and the sky. The **Secondary Deep Navy (#002D44)** is reserved for typography and high-contrast containers, providing an anchor of professional authority.

**Tertiary Green (#8BC34A)** is used sparingly for success states or health-related highlights, mirroring the university logo's leaf motif. The background uses a soft **Neutral Slate (#F8FAFC)** to reduce eye strain during long reading sessions, while pure white is reserved for cards and elevated surfaces to create a distinct content hierarchy.

## Typography

This design system uses a dual-font approach to balance character with utility. **Manrope** is used for headlines to provide a modern, geometric, and friendly tone. **Inter** is used for all body text and UI labels due to its exceptional legibility in technical and medical contexts.

To ensure accessibility, the scale maintains high contrast between headers and body. Paragraphs utilize a generous line-height (1.5x) to facilitate "skimmability" of educational content. For mobile views, display sizes scale down to prevent excessive wrapping while maintaining hierarchy.

## Layout & Spacing

The system follows a **Fluid Grid** model based on a 4px baseline rhythm. For mobile, a 4-column layout is used with 20px side margins. On desktop, this expands to a 12-column grid with a maximum content width of 1200px.

Spacing is used to group related educational concepts. "Tight" spacing (8px-16px) is used within components like cards or list items. "Wide" spacing (40px+) is used between major sections to provide visual "breathing room," which is critical for preventing cognitive overload in a learning environment.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and extremely soft **Ambient Shadows**. Instead of heavy shadows, the system uses subtle 1px borders in a light gray-blue tint to define boundaries.

- **Level 0 (Background):** Neutral Slate (#F8FAFC), used for the main canvas.
- **Level 1 (Cards):** Pure White (#FFFFFF) with a very soft, diffused shadow (0px 4px 20px rgba(0, 45, 68, 0.05)).
- **Level 2 (Modals/Overlays):** Pure White with a more pronounced shadow to indicate temporary interaction.
- **Tonal Tiers:** Secondary backgrounds use a light tint of the primary color (5% opacity) to group specific educational modules without adding shadow complexity.

## Shapes

The shape language is consistently **Rounded**, using an 8px base radius for standard components. This removes "clinical sharpness" and makes the app feel more inviting.

- **Containers & Cards:** 16px (rounded-lg) for a friendly, modern appearance.
- **Buttons & Inputs:** 8px for a professional, structured feel.
- **Status Tags/Chips:** Full pill-shaped (100px) to differentiate them from actionable buttons.
- **Illustrations:** Should always be contained within rounded clipping masks or sit on top of rounded background shapes.

## Components

### Buttons

Primary buttons use the Solid Primary Blue with white text. Secondary buttons use a Ghost style (Primary Blue border and text). Both feature 8px corner radii and 16px horizontal padding. The Inverted button style uses the Secondary Deep Navy (#002D44) for high emphasis against light backgrounds.

### Cards

Educational content is housed in white cards with 16px padding and 16px corner radii. Cards should always include a header area for the medical illustration and a footer area for the "Universitas Bhakti Husada Indonesia" attribution when necessary.

### Inputs

Search bars and text fields use a light slate background with a 1px border that turns Primary Blue on focus. Labels are always positioned above the field for maximum accessibility.

### Medical Illustrations

Illustrations should be consistent in style: flat, 2D vector characters with friendly expressions. Use the primary blue and secondary navy for clothing/outlines to maintain brand cohesion.

### Navigation

The bottom navigation bar uses a high-contrast white background with large, clear icons in Secondary Navy, shifting to Primary Blue for the active state.
