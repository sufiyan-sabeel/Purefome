import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { products as seedProducts, type Product } from '../data/products'

type AdminState = {
  products: Product[]
  addProduct: (p: Product) => void
  updateProduct: (id: string, patch: Partial<Product>) => void
  deleteProduct: (id: string) => void
  resetProducts: () => void
  // auth
  isAuthed: boolean
  login: (u: string, p: string) => boolean
  logout: () => void
}

export const useAdminStore = create<AdminState>()(
  persist(
    (set) => ({
      products: seedProducts,
      addProduct: (p) => set((s) => ({ products: [p, ...s.products] })),
      updateProduct: (id, patch) =>
        set((s) => ({
          products: s.products.map((pr) => (pr.id === id ? { ...pr, ...patch } : pr)),
        })),
      deleteProduct: (id) => set((s) => ({ products: s.products.filter((pr) => pr.id !== id) })),
      resetProducts: () => set({ products: seedProducts }),
      isAuthed: false,
      login: (u, p) => {
        const ok = u === 'admin' && p === 'purefome123'
        if (ok) set({ isAuthed: true })
        return ok
      },
      logout: () => set({ isAuthed: false }),
    }),
    {
      name: 'purefome-admin',
      partialize: (s) => ({ products: s.products, isAuthed: s.isAuthed }),
    }
  )
)

// orders mock — derived from cart for demo, but store for persistence
export type Order = {
  id: string
  date: string
  items: { name: string; qty: number; price: number }[]
  total: number
  status: 'pending' | 'shipped' | 'delivered'
  customer: string
}

type OrderState = {
  orders: Order[]
  addOrder: (o: Order) => void
}

export const useOrderStore = create<OrderState>()(
  persist(
    (set) => ({
      orders: [
        {
          id: 'ORD-10241',
          date: new Date(Date.now() - 86400000 * 2).toISOString(),
          items: [{ name: 'purefom Inception Extrait de Parfum', qty: 1, price: 2650 }],
          total: 2650,
          status: 'delivered',
          customer: 'Aarav Sharma',
        },
        {
          id: 'ORD-10242',
          date: new Date(Date.now() - 86400000).toISOString(),
          items: [{ name: 'Noir Obsidian Pour Homme', qty: 2, price: 3200 }],
          total: 6400,
          status: 'shipped',
          customer: 'Leila M.',
        },
        {
          id: 'ORD-10243',
          date: new Date().toISOString(),
          items: [{ name: 'Ambre Lumière Attar', qty: 1, price: 2850 }],
          total: 2850,
          status: 'pending',
          customer: 'Khalid R.',
        },
      ],
      addOrder: (o) => set((s) => ({ orders: [o, ...s.orders] })),
    }),
    { name: 'purefome-orders' }
  )
)
