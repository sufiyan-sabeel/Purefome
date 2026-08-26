import { Suspense, useEffect, useRef, useState, lazy } from 'react'
import { Canvas } from '@react-three/fiber'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const HeroBottle = lazy(() => import('./HeroBottle'))

export default function FragranceNotes() {
  const sectionRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState<string | null>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 70%',
        end: 'bottom 30%',
        onUpdate: (s: any) => setProgress(s.progress),
        onEnter: () => setProgress(1),
      })
    })
    return () => ctx.revert()
  }, [])

  const notes = [
    {
      id: 'top',
      label: 'Top Notes',
      items: ['Ginger', 'Lemon'],
      desc: 'A bright, effervescent lift — cold-pressed citrus and solar ginger that grabs the light.',
      accent: 'from-[#d4af37]/20 to-transparent',
    },
    {
      id: 'middle',
      label: 'Middle Notes',
      items: ['Jasmine', 'Lavender', 'Aromatic Floral'],
      desc: 'An aromatic heart that blooms slowly, powder-soft and editorial, built for skin-warmth.',
      accent: 'from-white/10 to-transparent',
    },
    {
      id: 'base',
      label: 'Base Notes',
      items: ['Sandalwood', 'Musk', 'Amber', 'Woods'],
      desc: 'Smoked woods and golden amber, musked and rounded — the trail that remains.',
      accent: 'from-[#b45309]/20 to-transparent',
    },
  ]

  return (
    <section
      id="notes"
      ref={sectionRef}
      className="relative bg-[#0d0d0d] border-t border-white/[0.06] py-16 md:py-24 overflow-hidden"
    >
      {/* ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#d4af37]/[0.06] blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/[0.03] blur-[100px] rounded-full" />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <p className="text-[11px] tracking-[0.28em] uppercase text-[#d4af37] mb-3">Fragrance Notes — 3D Exploded View</p>
          <h2 className="font-instrument text-white text-3xl md:text-5xl leading-none">
            An olfactive <span className="italic text-white/70">architecture</span>
          </h2>
          <p className="text-white/50 text-sm md:text-[15px] leading-relaxed mt-4">
            Scroll to explode the sculpture. Hover each note to highlight its material in the composition — a signature GSAP + Three.js sequence.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-center">
          {/* 3D */}
          <div className="md:col-span-6 lg:col-span-7">
            <div className="relative aspect-[4/3.4] md:aspect-[4/3] rounded-[28px] overflow-hidden bg-gradient-to-b from-[#141414] to-[#0a0a0a] border border-white/[0.06]">
              <Suspense fallback={<div className="w-full h-full grid place-items-center text-white/20 text-sm">Loading 3D…</div>}>
                <Canvas camera={{ position: [0, 0.5, 3.8], fov: 32 }} dpr={[1, 1.6]} gl={{ antialias: true, alpha: true }}>
                  <HeroBottle mouse={{ x: 0, y: 0 }} scrollProgress={0} exploded={progress > 0.15} activeNote={active} />
                </Canvas>
              </Suspense>

              {/* exploded indicator */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/10 text-[11px] tracking-widest uppercase text-white/70">
                  {progress > 0.15 ? 'Exploded — Hover Notes' : 'Scroll to explode'}
                </span>
                <span className="hidden md:inline text-[11px] text-white/20 tracking-widest uppercase">00 / 03 — Purefom</span>
              </div>

              {/* subtle grid */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
            </div>
          </div>

          {/* Notes */}
          <div className="md:col-span-6 lg:col-span-5 space-y-4">
            {notes.map((n) => (
              <div
                key={n.id}
                onMouseEnter={() => setActive(n.id)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(n.id)}
                onBlur={() => setActive(null)}
                tabIndex={0}
                className={`group relative rounded-[20px] p-6 border transition-all duration-500 cursor-pointer ${
                  active === n.id ? 'bg-white/[0.08] border-[#d4af37]/40' : 'bg-white/[0.04] border-white/[0.06] hover:bg-white/[0.06]'
                }`}
              >
                <div className={`absolute inset-0 rounded-[20px] bg-gradient-to-br ${n.accent} opacity-60`} />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`w-9 h-9 rounded-full grid place-items-center border text-xs font-semibold tracking-widest ${active === n.id ? 'bg-[#d4af37] text-black border-[#d4af37]' : 'bg-white/10 text-white border-white/10'}`}>
                      {n.id === 'top' ? '01' : n.id === 'middle' ? '02' : '03'}
                    </span>
                    <h3 className="text-white font-medium tracking-tight">{n.label}</h3>
                    <span className={`ml-auto w-2 h-2 rounded-full transition-colors ${active === n.id ? 'bg-[#d4af37] shadow-[0_0_12px_rgba(212,175,55,0.8)]' : 'bg-white/20'}`} />
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {n.items.map((it) => (
                      <span key={it} className={`px-3 py-1 rounded-full text-sm border ${active === n.id ? 'bg-white text-black border-white' : 'bg-white/5 text-white/80 border-white/10'}`}>
                        {it}
                      </span>
                    ))}
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">{n.desc}</p>
                </div>
              </div>
            ))}

            <div className="rounded-[20px] bg-gradient-to-br from-[#d4af37]/[0.12] to-transparent border border-[#d4af37]/20 p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#d4af37] grid place-items-center text-black font-semibold">✺</div>
              <div>
                <p className="text-white text-sm font-medium">Configurable per product</p>
                <p className="text-white/50 text-xs">Each fragrance carries its own top / middle / base structure — data-ready for CMS.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
