import { useOrderStore } from '../store/adminStore'

export default function AdminOrders() {
  const orders = useOrderStore((s) => s.orders)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-instrument text-white text-3xl">Orders</h1>
        <p className="text-white/50 text-sm mt-1">Real orders persisted locally • status updates are instant</p>
      </div>

      <div className="rounded-[16px] overflow-hidden border border-white/[0.06] bg-[#141414]">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-white/[0.04] text-white/40 text-xs tracking-widest uppercase">
              <tr>
                <th className="text-left px-4 py-3">Order</th>
                <th className="text-left px-4 py-3">Customer</th>
                <th className="text-left px-4 py-3 hidden md:table-cell">Items</th>
                <th className="text-left px-4 py-3">Total</th>
                <th className="text-left px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04]">
              {orders.map((o) => (
                <tr key={o.id} className="hover:bg-white/[0.03]">
                  <td className="px-4 py-3">
                    <p className="text-white font-medium">{o.id}</p>
                    <p className="text-white/30 text-xs">{new Date(o.date).toLocaleString('en-IN')}</p>
                  </td>
                  <td className="px-4 py-3 text-white/70">{o.customer}</td>
                  <td className="px-4 py-3 text-white/60 hidden md:table-cell max-w-[320px] truncate">
                    {o.items.map((i) => `${i.name}×${i.qty}`).join(', ')}
                  </td>
                  <td className="px-4 py-3 text-white font-medium">₹{o.total.toLocaleString('en-IN')}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs border ${o.status === 'pending' ? 'bg-amber-500/15 text-amber-300 border-amber-500/20' : o.status === 'shipped' ? 'bg-sky-500/15 text-sky-300 border-sky-500/20' : 'bg-emerald-500/15 text-emerald-300 border-emerald-500/20'}`}>
                      {o.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-[16px] bg-[#0d0d0d] border border-white/10 p-4">
        <p className="text-white/60 text-sm">When checkout is wired to backend, new orders will appear here in real-time via `useOrderStore.addOrder()`.</p>
      </div>
    </div>
  )
}
