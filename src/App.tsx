import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import BestSellers from './components/BestSellers'
import QuickView from './components/QuickView'
import CartDrawer from './components/CartDrawer'
import FragranceNotes from './components/FragranceNotes'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import type { Product } from './data/products'

export default function App() {
  const [quickProduct, setQuickProduct] = useState<Product | null>(null)
  const [cartOpen, setCartOpen] = useState(false)

  const handleShop = () => {
    document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar onCartOpen={() => setCartOpen(true)} />

      <main>
        <Hero onShop={handleShop} />
        <Categories />
        <BestSellers onQuickView={setQuickProduct} />
        <FragranceNotes />
        <Testimonials />

        {/* Stitch-inspired editorial statement */}
        <section className="bg-[#0d0d0d] py-12 md:py-16 border-t border-white/[0.06]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <div className="rounded-[24px] overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/[0.06] p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <p className="text-[#d4af37] text-[11px] tracking-[0.28em] uppercase mb-3">Stitch UI • Obsidian Elegance</p>
                <h3 className="font-instrument text-white text-2xl md:text-3xl leading-tight">
                  Designed in Stitch, engineered for <span className="italic text-white/60">performance</span>.
                </h3>
                <p className="text-white/45 text-sm leading-relaxed mt-3 max-w-[560px]">
                  This storefront was first composed in Stitch (stitch.withgoogle.com) — exploring a bento category grid, glassmorphism, and cinematic hero hierarchy — then implemented as production React + Three.js with lazy 3D, Suspense, and GPU-friendly motion.
                </p>
                <div className="mt-5 flex flex-wrap gap-2 text-[11px] tracking-widest uppercase text-white/30">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Framer Motion</span>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">GSAP ScrollTrigger</span>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">R3F + Drei</span>
                </div>
              </div>
              <div className="w-full md:w-[360px] shrink-0">
                <div className="rounded-2xl bg-black border border-white/10 p-4">
                  <p className="text-white/60 text-xs font-mono">stitch prompt →</p>
                  <p className="text-white text-sm leading-relaxed mt-2 font-mono bg-white/[0.04] rounded-xl p-3 border border-white/5">
                    “Luxury perfume boutique, obsidian + brushed gold, frosted glass, cinematic hero with floating 3D glass bottle, bento categories, horizontal best sellers, editorial spacing”
                  </p>
                  <a href="https://stitch.withgoogle.com" target="_blank" rel="noreferrer" className="mt-3 inline-flex text-xs text-[#d4af37] hover:text-[#e8c872]">Open stitch.withgoogle.com →</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <QuickView product={quickProduct} open={!!quickProduct} onClose={() => setQuickProduct(null)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

      {/* Skip link target for a11y */}
      <div id="a11y-live" aria-live="polite" className="sr-only" />
    </div>
  )
}
