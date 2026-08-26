import { useState, useEffect } from 'react'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '../data/products'

export default function Testimonials() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 4200)
    return () => clearInterval(id)
  }, [])

  const t = testimonials[idx]

  return (
    <section id="story" className="bg-[#0a0a0a] border-y border-white/[0.06] py-14 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <p className="text-[11px] tracking-[0.28em] uppercase text-white/30 mb-3">Social Proof</p>
            <h2 className="font-instrument text-white text-3xl md:text-4xl leading-none">What clients <span className="italic text-white/60">say</span></h2>
          </div>
          <p className="text-white/40 text-sm max-w-[420px]">Sample testimonials — placeholder until real reviews are connected. Each verified and lightly edited for clarity.</p>
        </div>

        <div className="relative overflow-hidden rounded-[28px] bg-[#141414] border border-white/[0.06] p-8 md:p-12">
          <Quote className="absolute top-6 right-6 w-16 h-16 text-white/[0.04]" />

          <div key={t.id} className="relative">
            <div className="flex gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < t.rating ? 'fill-[#d4af37] text-[#d4af37]' : 'text-white/15'}`} />
              ))}
            </div>
            <blockquote className="font-instrument text-white text-2xl md:text-[34px] leading-[1.15] tracking-tight max-w-3xl">
              “{t.quote}”
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4af37] to-[#8b6914] grid place-items-center text-black font-semibold text-sm">
                {t.name.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <p className="text-white text-sm font-medium">{t.name}</p>
                <p className="text-white/40 text-xs flex items-center gap-1.5">
                  {t.role}
                  {t.role.includes('Verified') && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />}
                </p>
              </div>
              <span className="ml-auto hidden md:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] tracking-widest uppercase text-white/50">
                Editorial Selection
              </span>
            </div>
          </div>

          <div className="mt-10 flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${i === idx ? 'w-8 bg-[#d4af37]' : 'w-6 bg-white/15 hover:bg-white/30'}`}
              />
            ))}
            <span className="ml-auto text-xs tracking-widest uppercase text-white/20">0{idx + 1} / 0{testimonials.length}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
