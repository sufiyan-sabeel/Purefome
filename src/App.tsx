import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Storefront from './pages/Storefront'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import AdminProducts from './pages/AdminProducts'
import AdminOrders from './pages/AdminOrders'
import AdminCategories from './pages/AdminCategories'
import AdminLayout from './components/admin/AdminLayout'
import { useAdminStore } from './store/adminStore'

function Protected({ children }: { children: React.ReactNode }) {
  const isAuthed = useAdminStore((s) => s.isAuthed)
  if (!isAuthed) return <Navigate to="/admin/login" replace />
  return <>{children}</>
}

export default function App() {
  // Vite base is /Purefome/ on GH Pages, / in dev — use BASE_URL for router basename
  const basename = import.meta.env.BASE_URL?.replace(/\/$/, '') || ''
  // basename will be "/Purefome" in prod, "" in dev; BrowserRouter wants "/Purefome" or "/"
  const routerBase = basename || '/'

  return (
    <BrowserRouter basename={routerBase}>
      <Routes>
        <Route path="/" element={<Storefront />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <Protected>
              <AdminLayout />
            </Protected>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="categories" element={<AdminCategories />} />
        </Route>
        {/* fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
