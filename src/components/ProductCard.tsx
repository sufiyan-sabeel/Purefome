import { Star, Eye, ShoppingBag } from 'lucide-react'
import type { Product } from '../data/products'
import { useCart } from '../store/cartStore'

export default function ProductCard({
  product,
  onQuickView,
}: {
  product: Product
  onQuickView: (p: Product) => void
}) {
  const add = useCart((s) => s.add)

  return (
    <div className="group relative flex flex-col rounded-[20px] overflow-hidden bg-[#141414] border border-white/[0.06] hover:border-white/10 transition-colors">
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#0f0f0f]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {product.badge && (
            <span
              className={`px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide backdrop-blur-md border ${
                product.badge === 'Sale'
                  ? 'bg-[#d4af37] text-black border-[#d4af37]'
                  : product.badge === 'Sold Out'
                  ? 'bg-black/70 text-white border-white/15'
                  : 'bg-white text-black border-white'
              }`}
            >
              {product.badge}
            </span>
          )}
        </div>

        {/* quick view */}
        <button
          onClick={() => onQuickView(product)}
          className="absolute bottom-3 left-3 right-3 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 bg-white/95 backdrop-blur text-black rounded-full py-2.5 text-sm font-medium flex items-center justify-center gap-2 hover:bg-white"
        >
          <Eye className="w-4 h-4" /> Quick View
        </button>
      </div>

      {/* Info */}
      <div className="p-4 md:p-5 flex flex-col gap-2 flex-1">
        <p className="text-[11px] tracking-widest uppercase text-white/40">{product.category}</p>
        <h3 className="text-white text-[14px] md:text-[15px] font-medium leading-snug line-clamp-2 min-h-[42px]">{product.name}</h3>

        <div className="flex items-center gap-1.5">
          <span className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`w-3.5 h-3.5 ${i < Math.round(product.rating) ? 'fill-[#d4af37] text-[#d4af37]' : 'text-white/15'}`} />
            ))}
          </span>
          <span className="text-xs text-white/45">({product.reviews})</span>
        </div>

        <div className="flex items-end justify-between mt-1">
          <div className="flex items-baseline gap-2">
            <span className="text-white font-semibold">₹{product.price.toLocaleString('en-IN')}</span>
            {product.originalPrice && (
              <span className="text-white/35 text-sm line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
            )}
          </div>
          <span className="text-[11px] tracking-wide text-white/30">{product.size}</span>
        </div>

        <button
          onClick={() => product.inStock && add(product)}
          disabled={!product.inStock}
          className={`mt-3 w-full rounded-full py-2.5 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
            product.inStock
              ? 'bg-white text-black hover:bg-white/90'
              : 'bg-white/10 text-white/40 cursor-not-allowed border border-white/10'
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          {product.inStock ? 'Add to Cart' : 'Sold Out'}
        </button>
      </div>
    </div>
  )
}
