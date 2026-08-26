import { useState, useMemo } from 'react'
import { useAdminStore } from '../store/adminStore'
import type { Product } from '../data/products'
import { Plus, Search, Edit3, Trash2, RotateCcw, Eye } from 'lucide-react'

export default function AdminProducts() {
  const { products, addProduct, updateProduct, deleteProduct, resetProducts } = useAdminStore()
  const [q, setQ] = useState('')
  const [editing, setEditing] = useState<Product | null>(null)
  const [showAdd, setShowAdd] = useState(false)

  const filtered = useMemo(() => {
    if (!q) return products
    const s = q.toLowerCase()
    return products.filter((p) => p.name.toLowerCase().includes(s) || p.category.toLowerCase().includes(s))
  }, [q, products])

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-instrument text-white text-3xl">Products</h1>
          <p className="text-white/50 text-sm mt-1">Real CRUD • persisted to localStorage • reflects instantly on storefront</p>
        </div>
        <div className="flex gap-2">
          <button onClick={resetProducts} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm flex items-center gap-2">
            <RotateCcw className="w-4 h-4" /> Reset seed
          </button>
          <button onClick={() => setShowAdd(true)} className="px-5 py-2 rounded-full bg-[#d4af37] text-black text-sm font-medium flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add Product
          </button>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search products, categories…"
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#141414] border border-white/10 text-white placeholder:text-white/25 focus:outline-none focus:border-[#d4af37]/50"
          />
        </div>
        <span className="text-white/30 text-sm whitespace-nowrap">{filtered.length} items</span>
      </div>

      <div className="rounded-[16px] overflow-hidden border border-white/[0.06] bg-[#141414]">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-white/[0.04] text-white/40 text-xs tracking-widest uppercase">
              <tr>
                <th className="text-left px-4 py-3 font-normal">Product</th>
                <th className="text-left px-4 py-3 font-normal hidden md:table-cell">Category</th>
                <th className="text-left px-4 py-3 font-normal">Price</th>
                <th className="text-left px-4 py-3 font-normal hidden lg:table-cell">Stock</th>
                <th className="text-right px-4 py-3 font-normal">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04]">
              {filtered.map((p) => (
                <tr key={p.id} className="hover:bg-white/[0.03]">
                  <td className="px-4 py-3">
                    <div className="flex gap-3 items-center min-w-[220px]">
                      <img src={p.image} alt="" className="w-12 h-12 rounded-xl object-cover bg-white/5 shrink-0" />
                      <div className="min-w-0">
                        <p className="text-white font-medium truncate max-w-[260px]">{p.name}</p>
                        <p className="text-white/40 text-xs truncate">{p.id} • {p.size} • {p.badge ?? '—'}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-white/60 hidden md:table-cell max-w-[180px] truncate">{p.category}</td>
                  <td className="px-4 py-3">
                    <span className="text-white font-medium">₹{p.price.toLocaleString('en-IN')}</span>
                    {p.originalPrice && <span className="text-white/30 ml-2 line-through text-xs">₹{p.originalPrice.toLocaleString('en-IN')}</span>}
                  </td>
                  <td className="px-4 py-3 hidden lg:table-cell">
                    <span className={`px-2 py-1 rounded-full text-xs border ${p.inStock ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/20' : 'bg-red-500/15 text-red-300 border-red-500/20'}`}>
                      {p.inStock ? 'In stock' : 'Out of stock'}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex justify-end gap-1.5">
                      <a href="/" target="_blank" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 grid place-items-center text-white/60 hover:text-white">
                        <Eye className="w-4 h-4" />
                      </a>
                      <button onClick={() => setEditing(p)} className="w-8 h-8 rounded-full bg-white text-black grid place-items-center hover:bg-white/90">
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button onClick={() => deleteProduct(p.id)} className="w-8 h-8 rounded-full bg-red-500/20 border border-red-500/20 text-red-300 grid place-items-center hover:bg-red-500/30">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && <div className="p-8 text-center text-white/30">No products match “{q}”.</div>}
      </div>

      {/* Edit Modal */}
      {editing && (
        <ProductModal
          product={editing}
          onClose={() => setEditing(null)}
          onSave={(patch) => {
            updateProduct(editing.id, patch)
            setEditing(null)
          }}
        />
      )}
      {showAdd && (
        <ProductModal
          product={null}
          onClose={() => setShowAdd(false)}
          onSave={(patch) => {
            const id = `pf-${Date.now().toString(36)}`
            addProduct({
              id,
              name: (patch.name as string) || 'New Fragrance',
              category: (patch.category as string) || 'Unisex • Extrait',
              price: Number(patch.price) || 0,
              originalPrice: patch.originalPrice ? Number(patch.originalPrice) : undefined,
              image: (patch.image as string) || 'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop',
              rating: 4.8,
              reviews: 0,
              badge: patch.badge as any,
              description: (patch.description as string) || 'New editorial fragrance.',
              notes: (patch.notes as any) || { top: ['Ginger'], middle: ['Jasmine'], base: ['Musk'] },
              size: (patch.size as string) || '100ml',
              inStock: patch.inStock !== false,
            })
            setShowAdd(false)
          }}
        />
      )}
    </div>
  )
}

function ProductModal({ product, onClose, onSave }: { product: Product | null; onClose: () => void; onSave: (p: Partial<Product>) => void }) {
  const [form, setForm] = useState<Partial<Product>>(
    product ?? {
      name: '',
      category: 'Unisex • Extrait',
      price: 0,
      image: '',
      description: '',
      size: '100ml',
      inStock: true,
      badge: undefined,
    }
  )

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-[640px] max-h-[90vh] overflow-auto rounded-[20px] bg-[#141414] border border-white/10 p-6">
        <h3 className="font-instrument text-white text-2xl">{product ? 'Edit Product' : 'Add Product'}</h3>
        <p className="text-white/40 text-sm">{product ? product.id : 'New ID will be generated'}</p>

        <div className="grid gap-4 mt-6">
          <label className="space-y-1">
            <span className="text-xs tracking-widest uppercase text-white/40">Name</span>
            <input value={(form.name as string) ?? ''} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white" />
          </label>
          <div className="grid md:grid-cols-2 gap-4">
            <label className="space-y-1">
              <span className="text-xs tracking-widest uppercase text-white/40">Category</span>
              <input value={(form.category as string) ?? ''} onChange={(e) => setForm({ ...form, category: e.target.value })} className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white" />
            </label>
            <label className="space-y-1">
              <span className="text-xs tracking-widest uppercase text-white/40">Size</span>
              <input value={(form.size as string) ?? ''} onChange={(e) => setForm({ ...form, size: e.target.value })} className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white" />
            </label>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <label className="space-y-1">
              <span className="text-xs tracking-widest uppercase text-white/40">Price (₹)</span>
              <input type="number" value={form.price as any} onChange={(e) => setForm({ ...form, price: Number(e.target.value) })} className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white" />
            </label>
            <label className="space-y-1">
              <span className="text-xs tracking-widest uppercase text-white/40">Original Price</span>
              <input type="number" value={(form.originalPrice as any) ?? ''} onChange={(e) => setForm({ ...form, originalPrice: e.target.value ? Number(e.target.value) : undefined })} className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white" />
            </label>
          </div>
          <label className="space-y-1">
            <span className="text-xs tracking-widest uppercase text-white/40">Image URL</span>
            <input value={(form.image as string) ?? ''} onChange={(e) => setForm({ ...form, image: e.target.value })} placeholder="https://..." className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white" />
          </label>
          <label className="space-y-1">
            <span className="text-xs tracking-widest uppercase text-white/40">Description</span>
            <textarea value={(form.description as string) ?? ''} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white" />
          </label>
          <div className="grid md:grid-cols-2 gap-4">
            <label className="space-y-1">
              <span className="text-xs tracking-widest uppercase text-white/40">Badge</span>
              <select value={(form.badge as any) ?? ''} onChange={(e) => setForm({ ...form, badge: (e.target.value || undefined) as any })} className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white">
                <option value="" className="bg-[#141414]">None</option>
                <option value="Sale" className="bg-[#141414]">Sale</option>
                <option value="New" className="bg-[#141414]">New</option>
                <option value="Sold Out" className="bg-[#141414]">Sold Out</option>
              </select>
            </label>
            <label className="flex items-center gap-3 mt-6">
              <input type="checkbox" checked={form.inStock !== false} onChange={(e) => setForm({ ...form, inStock: e.target.checked })} className="w-5 h-5 rounded" />
              <span className="text-white text-sm">In Stock</span>
            </label>
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <button onClick={onClose} className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white">
            Cancel
          </button>
          <button onClick={() => onSave(form)} className="px-6 py-2.5 rounded-full bg-white text-black font-medium">
            Save
          </button>
        </div>
      </div>
    </div>
  )
}
