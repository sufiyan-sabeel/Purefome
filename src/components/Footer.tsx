import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'error' | 'success'>('idle')

  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error')
      return
    }
    setStatus('success')
    setEmail('')
    setTimeout(() => setStatus('idle'), 3000)
  }

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

  return (
    <footer id="inquire" className="bg-black border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="grid md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-4">
            <p className="text-white text-2xl font-semibold tracking-tight">purefom</p>
            <p className="text-white/45 text-sm leading-relaxed mt-3 max-w-[320px]">
              A modern fragrance house built on glass, light and amber. Editorial objects, composed for those who refuse the ordinary. Obsidian Elegance — since 2026.
            </p>
            <div className="mt-6 flex gap-3 text-white/30 text-xs tracking-widest uppercase">
              <span>Paris</span><span className="opacity-30">•</span><span>Dubai</span><span className="opacity-30">•</span><span>Mumbai</span>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-2">
            <p className="text-white text-sm font-medium mb-4">Quick Links</p>
            <ul className="space-y-2.5 text-sm text-white/55">
              {['About Us', 'Contact Us', 'Shipping', 'Returns', 'Privacy', 'Terms'].map((l) => (
                <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-white text-sm font-medium mb-4">Categories</p>
            <ul className="space-y-2.5 text-sm text-white/55">
              {['Men', 'Women', 'Unisex', 'Attars', 'Body Lotions'].map((l) => (
                <li key={l}><a href="#collection" className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4">
            <p className="text-white text-sm font-medium mb-4">Newsletter</p>
            <p className="text-white/45 text-sm mb-4">Join the Obsidian list — early access, private edits, and editorial notes.</p>
            <form onSubmit={onSubscribe} className="flex gap-2" noValidate>
              <label htmlFor="newsletter-email" className="sr-only">Enter your email</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-full bg-white/[0.06] border border-white/10 px-5 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#d4af37]/50"
                aria-invalid={status === 'error'}
              />
              <button type="submit" className="rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 shrink-0">
                Subscribe
              </button>
            </form>
            {status === 'error' && <p className="text-red-400 text-xs mt-2" role="alert">Please enter a valid email address.</p>}
            {status === 'success' && <p className="text-emerald-400 text-xs mt-2" role="status">Welcome to purefom — check your inbox.</p>}
            <p className="text-white/20 text-[11px] mt-3">By subscribing you agree to our Privacy Policy. No spam, unsubscribe anytime.</p>
          </div>
        </div>

        {/* Brands A-Z */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <p className="text-white text-sm font-medium mb-3">Brands — A to Z</p>
          <div className="flex flex-wrap gap-1.5">
            {letters.map((l) => (
              <a
                key={l}
                href="#"
                className="w-8 h-8 rounded-full bg-white/[0.06] border border-white/10 grid place-items-center text-xs text-white/60 hover:bg-white hover:text-black hover:border-white transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/25 border-t border-white/5 pt-6">
          <p>© {new Date().getFullYear()} purefom. All rights reserved. Crafted as a luxury editorial object.</p>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline">Obsidian Elegance Design System</span>
            <span className="w-1 h-1 rounded-full bg-white/20 hidden md:block" />
            <span>Made with Stitch-inspired UI</span>
            <Link to="/admin" className="hover:text-white/60 border border-white/10 rounded-full px-3 py-1 bg-white/[0.04]">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
