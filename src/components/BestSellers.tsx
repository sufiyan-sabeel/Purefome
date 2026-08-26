import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useAdminStore } from '../store/adminStore'
import ProductCard from './ProductCard'
import type { Product } from '../data/products'

export default function BestSellers({ onQuickView }: { onQuickView: (p: Product) => void }) {
  const scroller = useRef<HTMLDivElement>(null)
  const products = useAdminStore((s) => s.products)

  const scroll = (dir: 1 | -1) => {
    scroller.current?.scrollBy({ left: dir * 360, behavior: 'smooth' })
  }

  return (
    <section className="bg-[#0d0d0d] py-12 md:py-20 border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <p className="text-[11px] tracking-[0.28em] uppercase text-white/40 mb-3">Best Sellers</p>
            <h2 className="font-instrument text-white text-3xl md:text-[44px] leading-none tracking-tight">
              Most <span className="italic text-white/70">Loved</span>
            </h2>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll(-1)}
              aria-label="Previous"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 grid place-items-center text-white hover:bg-white hover:text-black transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Next"
              className="w-10 h-10 rounded-full bg-white text-black grid place-items-center hover:bg-white/90 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Desktop carousel + Mobile horizontal scroll */}
        <div
          ref={scroller}
          className="flex gap-4 md:gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-pl-6 md:scroll-pl-10 pb-2 -mx-6 px-6 md:mx-0 md:px-0"
        >
          {products.map((p) => (
            <div key={p.id} className="snap-start shrink-0 w-[78vw] max-w-[300px] md:w-[300px]">
              <ProductCard product={p} onQuickView={onQuickView} />
            </div>
          ))}
        </div>

        {/* Mobile hint */}
        <p className="md:hidden text-center text-white/25 text-xs tracking-widest uppercase mt-4">Swipe to explore</p>
      </div>
    </section>
  )
}
