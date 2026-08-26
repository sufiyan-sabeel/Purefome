import { useAdminStore, useOrderStore } from '../store/adminStore'
import { useCart } from '../store/cartStore'
import { Package, ShoppingCart, TrendingUp, AlertTriangle, ArrowUpRight, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AdminDashboard() {
  const products = useAdminStore((s) => s.products)
  const orders = useOrderStore((s) => s.orders)
  const cartItems = useCart((s) => s.items)

  const revenue = orders.reduce((a, o) => a + o.total, 0)
  const lowStock = products.filter((p) => !p.inStock).length
  const saleCount = products.filter((p) => p.badge === 'Sale').length

  const stats = [
    { label: 'Total Products', value: products.length, sub: `${products.filter((p) => p.inStock).length} in stock`, icon: Package, href: '/admin/products' },
    { label: 'Orders', value: orders.length, sub: `${orders.filter((o) => o.status === 'pending').length} pending`, icon: ShoppingCart, href: '/admin/orders' },
    { label: 'Revenue', value: `₹${revenue.toLocaleString('en-IN')}`, sub: 'Last 7 days', icon: TrendingUp, href: '/admin/orders' },
    { label: 'Alerts', value: lowStock, sub: `${saleCount} on sale`, icon: AlertTriangle, href: '/admin/products' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="font-instrument text-white text-3xl">Dashboard</h1>
          <p className="text-white/50 text-sm mt-1">Real inventory • Lenis smooth scrolling enabled on storefront • GH Pages live</p>
        </div>
        <div className="flex gap-2">
          <Link to="/" className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium flex items-center gap-1">
            <Eye className="w-4 h-4" /> View Store
          </Link>
          <Link to="/admin/products" className="px-4 py-2 rounded-full bg-[#d4af37] text-black text-sm font-medium">
            Manage Products
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <Link key={s.label} to={s.href} className="rounded-[20px] bg-[#141414] border border-white/[0.06] p-5 hover:border-white/10 transition-colors">
            <div className="flex items-start justify-between">
              <div className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/10 grid place-items-center">
                <s.icon className="w-4 h-4 text-white/70" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-white/20" />
            </div>
            <p className="text-white/40 text-xs tracking-widest uppercase mt-4">{s.label}</p>
            <p className="text-white text-2xl font-semibold mt-1">{s.value}</p>
            <p className="text-white/30 text-xs mt-1">{s.sub}</p>
          </Link>
        ))}
      </div>

      <div className="grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 rounded-[20px] bg-[#141414] border border-white/[0.06] p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-medium">Recent Orders</h2>
            <Link to="/admin/orders" className="text-xs text-[#d4af37] hover:text-white">
              View all →
            </Link>
          </div>
          <div className="space-y-3">
            {orders.slice(0, 5).map((o) => (
              <div key={o.id} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/[0.04]">
                <div>
                  <p className="text-white text-sm font-medium">{o.id} • {o.customer}</p>
                  <p className="text-white/40 text-xs">{new Date(o.date).toLocaleDateString('en-IN')} • {o.items.map((i) => `${i.name.slice(0, 22)}×${i.qty}`).join(', ')}</p>
                </div>
                <div className="text-right">
                  <p className="text-white font-medium">₹{o.total.toLocaleString('en-IN')}</p>
                  <span className={`text-[11px] px-2 py-0.5 rounded-full border ${o.status === 'pending' ? 'bg-amber-500/20 text-amber-300 border-amber-500/20' : o.status === 'shipped' ? 'bg-sky-500/20 text-sky-300 border-sky-500/20' : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/20'}`}>
                    {o.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 space-y-4">
          <div className="rounded-[20px] bg-gradient-to-br from-[#d4af37]/20 via-[#d4af37]/5 to-transparent border border-[#d4af37]/20 p-6">
            <h3 className="text-white font-medium">Smooth Scrolling</h3>
            <p className="text-white/60 text-sm mt-2">Lenis 1.3 + GSAP ScrollTrigger synced via `gsap.ticker`. 1.2s duration, expo easing, disabled on `prefers-reduced-motion` and on `/admin` routes.</p>
            <p className="text-white/30 text-xs mt-3 font-mono">duration: 1.2 • easing: 1.001-2^-10t • smoothTouch: false</p>
          </div>

          <div className="rounded-[20px] bg-[#141414] border border-white/[0.06] p-6">
            <h3 className="text-white font-medium">Live Cart</h3>
            <p className="text-white/40 text-xs mt-1">Real Zustand cart — persists to localStorage, shown in admin for support.</p>
            {cartItems.length === 0 ? (
              <p className="text-white/30 text-sm mt-4">No active carts.</p>
            ) : (
              <div className="mt-4 space-y-2">
                {cartItems.slice(0, 3).map((ci) => (
                  <div key={ci.product.id} className="flex gap-2 items-center text-sm">
                    <img src={ci.product.image} alt="" className="w-10 h-10 rounded-lg object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="text-white truncate">{ci.product.name}</p>
                      <p className="text-white/40 text-xs">×{ci.qty} • ₹{ci.product.price}</p>
                    </div>
                  </div>
                ))}
                {cartItems.length > 3 && <p className="text-white/30 text-xs">+{cartItems.length - 3} more</p>}
              </div>
            )}
          </div>

          <div className="rounded-[20px] bg-[#0d0d0d] border border-white/10 p-4">
            <p className="text-white/60 text-xs font-mono">Admin credentials</p>
            <p className="text-white text-sm mt-1 font-mono">admin / purefome123</p>
            <p className="text-white/30 text-xs mt-2">Stored in localStorage `purefome-admin`. Wire to real auth when backend ready.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
