import { motion, AnimatePresence } from 'framer-motion'
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'
import { useCart } from '../store/cartStore'

export default function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { items, inc, dec, remove, subtotal, clear } = useCart()
  const count = items.reduce((a, b) => a + b.qty, 0)
  const total = subtotal()

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] as any }}
            className="fixed right-0 top-0 h-[100dvh] w-full max-w-[420px] z-[71] bg-[#0d0d0d] border-l border-white/10 flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
          >
            <div className="flex items-center justify-between px-6 h-[64px] border-b border-white/10 shrink-0">
              <h2 className="text-white font-medium flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#d4af37]" /> Cart <span className="text-white/40 font-normal">({count})</span>
              </h2>
              <button onClick={onClose} aria-label="Close cart" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 grid place-items-center text-white hover:bg-white hover:text-black transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex-1 grid place-items-center p-8 text-center">
                <div>
                  <div className="w-20 h-20 rounded-full bg-white/[0.06] border border-white/10 grid place-items-center mx-auto mb-4">
                    <ShoppingBag className="w-8 h-8 text-white/30" />
                  </div>
                  <p className="font-instrument text-white text-2xl">Your cart is empty</p>
                  <p className="text-white/50 text-sm mt-2 max-w-[260px]">Add a fragrance to experience the Obsidian Elegance ritual.</p>
                  <button onClick={onClose} className="mt-6 rounded-full bg-white text-black px-6 py-2.5 text-sm font-medium">Continue Shopping</button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-auto divide-y divide-white/5">
                  {items.map(({ product, qty }) => (
                    <div key={product.id} className="flex gap-4 p-5">
                      <img src={product.image} alt={product.name} className="w-20 h-20 rounded-2xl object-cover bg-[#141414] shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-medium leading-snug line-clamp-2">{product.name}</p>
                        <p className="text-white/40 text-xs mt-1">{product.size} • ₹{product.price.toLocaleString('en-IN')}</p>
                        <div className="flex items-center gap-2 mt-3">
                          <div className="flex items-center gap-1 rounded-full bg-white/5 border border-white/10 p-1">
                            <button onClick={() => dec(product.id)} className="w-7 h-7 rounded-full bg-white text-black grid place-items-center">
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="w-6 text-center text-white text-sm">{qty}</span>
                            <button onClick={() => inc(product.id)} className="w-7 h-7 rounded-full bg-white text-black grid place-items-center">
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <button onClick={() => remove(product.id)} className="ml-auto w-8 h-8 rounded-full bg-white/5 border border-white/10 grid place-items-center text-white/60 hover:text-white">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <span className="text-white font-medium text-sm">₹{(product.price * qty).toLocaleString('en-IN')}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/10 p-6 bg-[#141414] space-y-4 shrink-0">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/50">Subtotal</span>
                    <span className="text-white font-semibold">₹{total.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/50">Shipping</span>
                    <span className="text-[#d4af37] text-xs">Free over ₹2,999</span>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div className="flex justify-between">
                    <span className="text-white font-medium">Total</span>
                    <span className="text-white font-semibold text-lg">₹{total.toLocaleString('en-IN')}</span>
                  </div>
                  <button className="w-full rounded-full bg-white text-black py-3.5 font-medium hover:bg-white/90">Checkout</button>
                  <button onClick={clear} className="w-full rounded-full bg-white/5 border border-white/10 text-white py-2.5 text-sm hover:bg-white/10">Clear Cart</button>
                  <p className="text-[11px] text-white/25 text-center">Secure checkout • UPI, Cards, NetBanking</p>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
