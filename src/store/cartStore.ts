import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Product } from '../data/products'

export type CartItem = {
  product: Product
  qty: number
}

type CartState = {
  items: CartItem[]
  add: (product: Product, qty?: number) => void
  remove: (id: string) => void
  inc: (id: string) => void
  dec: (id: string) => void
  clear: () => void
  count: () => number
  subtotal: () => number
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      add: (product, qty = 1) =>
        set((state) => {
          const existing = state.items.find((i) => i.product.id === product.id)
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.product.id === product.id ? { ...i, qty: i.qty + qty } : i
              ),
            }
          }
          return { items: [...state.items, { product, qty }] }
        }),
      remove: (id) => set((s) => ({ items: s.items.filter((i) => i.product.id !== id) })),
      inc: (id) =>
        set((s) => ({
          items: s.items.map((i) => (i.product.id === id ? { ...i, qty: i.qty + 1 } : i)),
        })),
      dec: (id) =>
        set((s) => ({
          items: s.items
            .map((i) => (i.product.id === id ? { ...i, qty: i.qty - 1 } : i))
            .filter((i) => i.qty > 0),
        })),
      clear: () => set({ items: [] }),
      count: () => get().items.reduce((a, b) => a + b.qty, 0),
      subtotal: () => get().items.reduce((a, b) => a + b.product.price * b.qty, 0),
    }),
    { name: 'purefom-cart' }
  )
)
