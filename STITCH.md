# purefom — Stitch UI Design Workflow

This project was designed with **Stitch** (stitch.withgoogle.com) — Google's generative UI design tool — before implementation.

## Why Stitch

Stitch allowed rapid exploration of the **Obsidian Elegance** design system:
- Deep black / charcoal `#0d0d0d` with brushed-gold `#d4af37` accents
- Frosted glass & editorial spacing
- Cinematic hero hierarchy
- Bento category grid & horizontal best-sellers

## Stitch Prompts Used

### 1. Global — Design System
```
Obsidian Elegance design system for luxury perfume boutique "purefom".
Colors: deep black #0d0d0d, charcoal, brushed-gold #d4af37, warm amber, frosted white glass.
Typography: Instrument Serif for hero H1 + navigation overlay, Inter/sans for UI.
Mood: expensive, editorial, cinematic, minimal, highly polished. No neon, no cheap gradients.
```

### 2. Hero — Cinematic 3D
```
Cinematic hero: full-screen video background (subtle vignette, no heavy gradient),
centered realistic 3D glass perfume bottle (transmission, refraction, environment map),
floating + slow rotation, mouse parallax, scroll-trigger scale-down and shift-right,
overlaid with "The Essence of Luxury" (Instrument Serif 84px), secondary copy,
primary CTA pill white, secondary glass pill. Editorial negative space.
```

### 3. Categories — Bento Grid
```
Shop by Category bento grid:
Men / Women / Unisex / Attars / Body Lotions / Brands.
Refined masonry, each card: premium fragrance imagery, subtle glass surface,
hover zoom (1.07 scale, 1.2s cubic-bezier 0.16,1,0.3,1), frosted label pill,
gold dot indicator, editorial spacing. Last card is A-Z directory.
Desktop 12-col grid, mobile 2-col.
```

### 4. Best Sellers — Carousel
```
Horizontal carousel for Best Sellers (desktop) + snap scroll on mobile.
Product card: image 4/5, sale/sold-out badge, quick-view slide-up on hover,
rating stars, price + original price, add-to-cart pill.
Glass, rounded-20, border white/06, backdrop-blur.
```

### 5. Quick View — Glassmorphism Modal
```
Premium glassmorphism modal: large image, name, category, rating, description,
top/middle/base note chips, price, quantity stepper, add-to-cart, frosted white
pills, rounded-24, Framer Motion entrance (0.45s, ease 0.16,1,0.3,1), focus trap,
ESC close.
```

### 6. Fragrance Notes — Exploded 3D
```
Exploded view section: Three.js bottle separates (cap lifts, liquid glows)
on scroll. Neon highlight on hover: top=gold, middle=white, base=amber.
Cards for Top/Middle/Base with chip lists, 120px blur orbs, glass borders.
GSAP ScrollTrigger pinned.
```

### 7. Navigation & Footer
```
Fixed navbar transparent → bg-black/80 backdrop-blur on scrollY>40,
logo purefom, center Navigate pill (md only), Flower2 icon, hamburger 2 bars.
Overlay full-screen bg-black z-40, nav z-50, stagger 150/230/310/390ms,
font-instrument 4xl/6xl. Footer: 12-col, brand story, links, A-Z brands,
newsletter with inline validation.
```

## From Stitch to Code

1. Generate variations in Stitch with above prompts → iterate on spacing, radius (20-28px), blur, and typography scale.
2. Export as Tailwind code (Stitch → "Get Code") → paste into `/src/components/*`.
3. Refine for production: replace placeholder images with Unsplash + video `https://www.image2url.com/r2/default/videos/1787623044702-fce64432-c276-4e4a-84a1-f5cc426b08a3.mp4`,
   wire Zustand cart (persist), add R3F bottle, GSAP ScrollTrigger, Framer Motion, and a11y.

## Design Tokens (exported)

```
bg: #0d0d0d
gold: #d4af37
amber: #d97706
glass: rgba(255,255,255,0.06) + blur16
font-instrument: 'Instrument Serif'
easing-entrance: cubic-bezier(0.16,1,0.3,1)
easing-overlay: cubic-bezier(0.76,0,0.24,1)
radius: 20-28px
max-w: 1440px
```

## Screenshot Reference

Stitch gallery → Search "purefom obsidian" → Copy link for Figma handoff.
Live preview: `npm run dev` in `purefome/`.

---

Built with React 18 + Vite + Tailwind 3 + Three.js + R3F + Drei + Framer Motion + GSAP + lucide-react + Zustand.
