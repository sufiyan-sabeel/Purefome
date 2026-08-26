import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Flower2, ShoppingBag, X } from 'lucide-react'
import { useCart } from '../store/cartStore'

type Props = {
  onCartOpen: () => void
}

export default function Navbar({ onCartOpen }: Props) {
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const count = useCart((s) => s.count())

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100)
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      clearTimeout(t)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const links = [
    { label: 'Home', href: '#home', delay: 150 },
    { label: 'Story', href: '#story', delay: 230 },
    { label: 'Collection', href: '#collection', delay: 310 },
    { label: 'Inquire', href: '#inquire', delay: 390 },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/[0.06]' : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            className={`font-instrument text-white text-xl md:text-2xl font-semibold tracking-tight z-50 transition-all duration-700 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '0ms' }}
          >
            Purefome
          </a>

          {/* Center pill - desktop */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className={`hidden md:flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 text-white/90 text-sm hover:bg-white/10 transition-all duration-700 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '200ms' }}
            aria-expanded={menuOpen}
            aria-controls="nav-overlay"
          >
            <span>{menuOpen ? 'Close' : 'Navigate'}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
          </button>

          {/* Right */}
          <div
            className={`flex items-center gap-4 md:gap-6 transition-all duration-700 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '400ms' }}
          >
            <button
              aria-label="Cart"
              onClick={onCartOpen}
              className="relative p-1.5 text-white/90 hover:text-white transition-colors"
            >
              <ShoppingBag className="w-6 h-6" strokeWidth={1.6} />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-[#d4af37] text-black text-[11px] font-semibold grid place-items-center leading-none">
                  {count}
                </span>
              )}
            </button>

            <Flower2 className="hidden md:block w-7 h-7 text-white/90" strokeWidth={1.4} />

            {/* Hamburger mobile */}
            <button
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            >
              <span
                className={`block w-6 h-[2px] bg-white transition-all duration-500 ${menuOpen ? 'rotate-45 translate-y-[4px]' : ''}`}
                style={{ transitionTimingFunction: 'cubic-bezier(0.76, 0, 0.24, 1)' }}
              />
              <span
                className={`block w-6 h-[2px] bg-white transition-all duration-500 ${menuOpen ? '-rotate-45 -translate-y-[4px]' : ''}`}
                style={{ transitionTimingFunction: 'cubic-bezier(0.76, 0, 0.24, 1)' }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] as any }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="absolute top-6 right-6 md:top-8 md:right-10 text-white/70 hover:text-white"
            >
              <X className="w-7 h-7" />
            </button>

            <nav className="flex flex-col items-center gap-8">
              {links.map((l) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 24, transition: { delay: 0, duration: 0.3 } }}
                  transition={{ duration: 0.6, delay: l.delay / 1000, ease: [0.16, 1, 0.3, 1] as any }}
                  className="font-instrument text-white text-4xl md:text-6xl hover:opacity-60 transition-opacity"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute bottom-10 flex flex-col items-center gap-3 text-white/50 text-sm tracking-widest uppercase"
            >
              <span>Obsidian Elegance — Est. 2026</span>
              <span className="w-12 h-px bg-white/20" />
              <span className="normal-case tracking-normal text-white/40">Crafted for those who refuse the ordinary</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
