import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAdminStore } from '../store/adminStore'
import { Shield, Lock } from 'lucide-react'

export default function AdminLogin() {
  const [u, setU] = useState('admin')
  const [p, setP] = useState('purefome123')
  const [err, setErr] = useState('')
  const login = useAdminStore((s) => s.login)
  const navigate = useNavigate()

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (login(u, p)) {
      navigate('/admin')
    } else {
      setErr('Invalid credentials. Try admin / purefome123')
    }
  }

  return (
    <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center p-4">
      <div className="w-full max-w-[420px] rounded-[24px] bg-[#141414] border border-white/[0.06] p-8">
        <div className="w-12 h-12 rounded-2xl bg-[#d4af37] grid place-items-center mx-auto mb-4">
          <Shield className="w-6 h-6 text-black" />
        </div>
        <h1 className="font-instrument text-white text-3xl text-center">Purefome Admin</h1>
        <p className="text-white/40 text-sm text-center mt-2">Obsidian Elegance • Secure access</p>

        <form onSubmit={submit} className="mt-8 space-y-4">
          <div>
            <label className="text-xs tracking-widest uppercase text-white/40">Username</label>
            <input
              value={u}
              onChange={(e) => setU(e.target.value)}
              className="mt-1 w-full rounded-xl bg-white/[0.06] border border-white/10 px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#d4af37]/50"
              placeholder="admin"
            />
          </div>
          <div>
            <label className="text-xs tracking-widest uppercase text-white/40">Password</label>
            <input
              type="password"
              value={p}
              onChange={(e) => setP(e.target.value)}
              className="mt-1 w-full rounded-xl bg-white/[0.06] border border-white/10 px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#d4af37]/50"
              placeholder="••••••••"
            />
          </div>
          {err && <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl p-3">{err}</p>}
          <button type="submit" className="w-full rounded-full bg-white text-black py-3 font-medium hover:bg-white/90 flex items-center justify-center gap-2">
            <Lock className="w-4 h-4" /> Sign In
          </button>
          <p className="text-center text-white/20 text-xs">Demo: admin / purefome123 — real auth can be wired to backend</p>
        </form>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-white/30">
          <a href="/" className="hover:text-white">← Back to Store</a>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <a href="https://sufiyan-sabeel.github.io/Purefome/" className="hover:text-white">View Live</a>
        </div>
      </div>
    </div>
  )
}
