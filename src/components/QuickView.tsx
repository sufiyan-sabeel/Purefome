import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Star, Minus, Plus, ShoppingBag } from 'lucide-react'
import type { Product } from '../data/products'
import { useCart } from '../store/cartStore'

export default function QuickView({
  product,
  open,
  onClose,
}: {
  product: Product | null
  open: boolean
  onClose: () => void
}) {
  const [qty, setQty] = useState(1)
  const add = useCart((s) => s.add)

  useEffect(() => {
    if (open) setQty(1)
  }, [open, product?.id])

  useEffect(() => {
    if (!open) return
    const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onEsc)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onEsc)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!product) return null

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] as any }}
            className="fixed inset-0 z-[61] grid place-items-center p-4 md:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={`Quick view ${product.name}`}
          >
            <div
              className="w-full max-w-[920px] max-h-[90vh] overflow-hidden rounded-[24px] bg-[#141414] border border-white/10 flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="relative md:w-[48%] bg-[#0f0f0f] p-6 md:p-8 flex items-center justify-center">
                <img src={product.image} alt={product.name} className="w-full h-[280px] md:h-[420px] object-cover rounded-[16px]" />
                <button
                  onClick={onClose}
                  aria-label="Close"
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur border border-white/15 text-white grid place-items-center hover:bg-black/80"
                >
                  <X className="w-4 h-4" />
                </button>
                {product.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#d4af37] text-black text-xs font-semibold">{product.badge}</span>
                )}
              </div>

              {/* Info */}
              <div className="flex-1 p-6 md:p-8 flex flex-col overflow-auto">
                <p className="text-[11px] tracking-widest uppercase text-white/40">{product.category}</p>
                <h3 className="font-instrument text-white text-2xl md:text-3xl leading-tight mt-2">{product.name}</h3>

                <div className="flex items-center gap-2 mt-3">
                  <span className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.round(product.rating) ? 'fill-[#d4af37] text-[#d4af37]' : 'text-white/20'}`} />
                    ))}
                  </span>
                  <span className="text-sm text-white/50">{product.rating} ({product.reviews} reviews)</span>
                </div>

                <p className="text-white/60 text-sm leading-relaxed mt-4">{product.description}</p>

                {/* Notes */}
                <div className="mt-5 grid grid-cols-3 gap-3">
                  {(['top', 'middle', 'base'] as const).map((k) => (
                    <div key={k} className="rounded-2xl bg-white/[0.06] border border-white/[0.06] p-3">
                      <p className="text-[10px] tracking-widest uppercase text-white/30">{k} Notes</p>
                      <p className="text-xs text-white/80 mt-1 leading-snug">{product.notes[k].join(' • ')}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-baseline gap-3 mt-6">
                  <span className="text-white text-2xl font-semibold">₹{product.price.toLocaleString('en-IN')}</span>
                  {product.originalPrice && <span className="text-white/30 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>}
                  <span className="ml-auto text-xs tracking-widest uppercase text-white/30">{product.size}</span>
                </div>

                <div className="flex items-center gap-3 mt-6">
                  <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 p-1">
                    <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="w-8 h-8 rounded-full bg-white text-black grid place-items-center">
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center text-white font-medium">{qty}</span>
                    <button onClick={() => setQty((q) => q + 1)} className="w-8 h-8 rounded-full bg-white text-black grid place-items-center">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      add(product, qty)
                      onClose()
                    }}
                    disabled={!product.inStock}
                    className="flex-1 rounded-full bg-white text-black py-3.5 font-medium flex items-center justify-center gap-2 hover:bg-white/90 disabled:bg-white/10 disabled:text-white/30"
                  >
                    <ShoppingBag className="w-4 h-4" /> Add to Cart — ₹{(product.price * qty).toLocaleString('en-IN')}
                  </button>
                </div>

                <p className="text-[11px] text-white/25 mt-4 text-center">Free shipping over ₹2,999 • 14-day returns</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
