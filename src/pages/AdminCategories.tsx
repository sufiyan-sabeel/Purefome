import { categories } from '../data/products'
import { Link } from 'react-router-dom'

export default function AdminCategories() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-instrument text-white text-3xl">Categories</h1>
        <p className="text-white/50 text-sm mt-1">Bento grid source • edit via code or future CMS</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {categories.map((c) => (
          <div key={c.id} className="rounded-[20px] overflow-hidden bg-[#141414] border border-white/[0.06] group">
            <div className="h-[160px] overflow-hidden">
              <img src={c.image} alt={c.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-4">
              <p className="text-white font-instrument text-xl">{c.label}</p>
              <p className="text-white/40 text-xs mt-1">{c.count}</p>
              <Link to="/" className="inline-flex mt-3 text-xs text-[#d4af37] hover:text-white">View on store →</Link>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-[16px] bg-white/[0.04] border border-white/10 p-4">
        <p className="text-white/60 text-sm">Categories are currently static. To make them editable, move them into `useAdminStore` similar to products and wire CRUD.</p>
      </div>
    </div>
  )
}
