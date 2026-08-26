import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { LayoutDashboard, Package, ShoppingCart, Layers, LogOut, Menu, X, Shield } from 'lucide-react'
import { useAdminStore } from '../../store/adminStore'
import { useState } from 'react'

export default function AdminLayout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const logout = useAdminStore((s) => s.logout)
  const navigate = useNavigate()

  const links = [
    { to: '/admin', label: 'Dashboard', icon: LayoutDashboard, end: true },
    { to: '/admin/products', label: 'Products', icon: Package },
    { to: '/admin/orders', label: 'Orders', icon: ShoppingCart },
    { to: '/admin/categories', label: 'Categories', icon: Layers },
  ]

  const handleLogout = () => {
    logout()
    navigate('/admin/login')
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex">
      {/* Sidebar desktop */}
      <aside className="hidden md:flex w-[280px] shrink-0 bg-[#0d0d0d] border-r border-white/[0.06] flex-col sticky top-0 h-screen">
        <div className="h-[64px] flex items-center gap-3 px-6 border-b border-white/[0.06]">
          <div className="w-8 h-8 rounded-lg bg-[#d4af37] grid place-items-center text-black font-bold">P</div>
          <div>
            <p className="font-instrument text-[18px] leading-none tracking-tight">Purefome</p>
            <p className="text-[10px] tracking-[0.2em] uppercase text-white/40">Admin • Obsidian</p>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors ${
                  isActive ? 'bg-white text-black font-medium' : 'text-white/60 hover:bg-white/[0.06] hover:text-white'
                }`
              }
            >
              <l.icon className="w-4 h-4" />
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-white/[0.06]">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/10 text-white/70 text-sm"
          >
            <LogOut className="w-4 h-4" /> Logout
          </button>
          <p className="text-[11px] text-white/20 mt-3 text-center">purefome admin v1 • Stitch UI</p>
        </div>
      </aside>

      {/* Mobile sidebar */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-[300px] bg-[#0d0d0d] border-r border-white/10 p-4 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#d4af37] grid place-items-center text-black font-bold">P</div>
                <span className="font-instrument text-lg">Purefome Admin</span>
              </div>
              <button onClick={() => setMobileOpen(false)} className="w-9 h-9 rounded-full bg-white/10 grid place-items-center">
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="space-y-1 flex-1">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.end}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm ${isActive ? 'bg-white text-black' : 'text-white/70 bg-white/5'}`
                  }
                >
                  <l.icon className="w-4 h-4" /> {l.label}
                </NavLink>
              ))}
            </nav>
            <button onClick={handleLogout} className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white text-black text-sm">
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        </div>
      )}

      {/* Main */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Topbar */}
        <header className="h-[64px] sticky top-0 z-10 bg-[#0d0d0d]/80 backdrop-blur-md border-b border-white/[0.06] flex items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-3">
            <button onClick={() => setMobileOpen(true)} className="md:hidden w-9 h-9 rounded-xl bg-white/5 border border-white/10 grid place-items-center">
              <Menu className="w-5 h-5" />
            </button>
            <div className="hidden md:flex items-center gap-2 text-sm text-white/50">
              <Shield className="w-4 h-4 text-[#d4af37]" />
              <span>Secure • Real-time inventory • GH Pages ready</span>
            </div>
            <span className="md:hidden font-instrument text-lg">Admin</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden md:inline text-xs tracking-widest uppercase text-white/30">Purefome • Obsidian Elegance</span>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#d4af37] to-[#8b6914] grid place-items-center text-black font-semibold text-sm">
              A
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-8 bg-[#0a0a0a]">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
