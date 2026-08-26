# purefom — Obsidian Elegance

Premium 3D e-commerce perfume website for **purefom** (brand name is *purefom*, not purefome — folder is `purefome/` per request).

> Cinematic, minimal, immersive luxury fragrance boutique. Editorial spacing, frosted glass, brushed-gold accents, realistic 3D glass bottle.

## Stack

- React 18 + TypeScript + Vite
- Tailwind CSS 3
- Three.js + @react-three/fiber + @react-three/drei
- Framer Motion + GSAP (ScrollTrigger)
- lucide-react (Flower2)
- Zustand (cart, persisted in localStorage)

## Quick Start

```bash
cd purefome
npm install
npm run dev      # http://localhost:5173
npm run build    # production
npm run preview  # preview dist
```

## Design System — Obsidian Elegance

- Background `#0d0d0d`, brushed-gold `#d4af37`, warm amber, frosted white
- `font-instrument` (Instrument Serif) for hero H1 + overlay links
- Easing: entrance `cubic-bezier(0.16,1,0.3,1)`, overlay `cubic-bezier(0.76,0,0.24,1)`
- Max width 1440px, glass surfaces, subtle gradients only

## Structure

```
src/
  components/
    Navbar.tsx          # fixed, scroll bg-black/80, entrance, overlay
    Hero.tsx            # video + Canvas(HeroBottle) + scroll transform
    HeroBottle.tsx      # MeshTransmissionMaterial, Float, mouse parallax
    Categories.tsx      # bento grid, hover zoom, frosted labels
    BestSellers.tsx     # snap carousel
    ProductCard.tsx
    QuickView.tsx       # glassmorphism modal, Framer Motion, a11y
    CartDrawer.tsx      # Zustand, badge, subtotal
    FragranceNotes.tsx  # exploded 3D, hover highlight
    Testimonials.tsx    # slider
    Footer.tsx          # brand, links, A-Z, newsletter validation
  data/products.ts
  store/cartStore.ts
```

## Stitch UI

UI was first composed in **Stitch** (stitch.withgoogle.com). Prompts and tokens in `STITCH.md`.

## Performance & A11y

- `React.lazy` + `Suspense` for 3D, dynamic imports
- `prefers-reduced-motion` disables 3D / reduces motion
- Low-power fallback to static image
- Semantic HTML, keyboard nav, ARIA, focus states, Alt text, contrast

## Brand Rule

Page title and all UI must use **purefom**. Never "Aurevon" or "purfome".

