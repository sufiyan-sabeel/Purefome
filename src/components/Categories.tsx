import { categories } from '../data/products'

export default function Categories() {
  return (
    <section id="collection" className="bg-[#0d0d0d] py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <div>
            <p className="text-[11px] tracking-[0.28em] uppercase text-[#d4af37] mb-3">Shop by Category</p>
            <h2 className="font-instrument text-white text-3xl md:text-5xl leading-none tracking-tight">
              Crafted <span className="italic text-white/80">Categories</span>
            </h2>
          </div>
          <p className="max-w-[420px] text-white/55 text-sm leading-relaxed">
            A tightly edited selection — from deep woody signatures to sheer, sun-lit veil scents. Each composed as an object.
          </p>
        </div>

        {/* Masonry-ish grid: showcase Stitch-inspired bento */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-5 auto-rows-[220px] md:auto-rows-[280px]">
          {categories.map((c, i) => {
            // layout map for luxury bento: first two wide, etc
            const span =
              i === 0 ? 'md:col-span-8' :
              i === 1 ? 'md:col-span-4' :
              i === 2 ? 'md:col-span-4' :
              i === 3 ? 'md:col-span-4' :
              i === 4 ? 'md:col-span-4' : 'md:col-span-12 md:row-span-1'

            // For mobile, show balanced
            const mobileSpan = i === 5 ? 'col-span-2' : 'col-span-1 md:col-span-4'

            if (i === 5) {
              return (
                <a
                  key={c.id}
                  href="#collection"
                  className={`group relative overflow-hidden rounded-[20px] bg-[#141414] border border-white/[0.06] ${span} ${mobileSpan} flex items-center justify-between p-6 md:p-8`}
                >
                  <div>
                    <p className="text-white font-instrument text-2xl md:text-3xl">{c.label}</p>
                    <p className="text-white/40 text-xs tracking-widest uppercase mt-1">{c.count} — A–Z</p>
                    <span className="inline-flex mt-5 items-center gap-2 text-sm text-white/80 group-hover:text-white transition-colors">
                      View All <span className="w-7 h-7 rounded-full bg-white text-black grid place-items-center text-[12px]">↗</span>
                    </span>
                  </div>
                  <div className="hidden md:flex items-center gap-1 text-white/15 text-xs tracking-widest">
                    <span>A</span><span className="w-8 h-px bg-white/10" /><span>Z</span>
                  </div>
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-[#d4af37]/[0.06] to-transparent" />
                </a>
              )
            }

            return (
              <a
                key={c.id}
                href="#collection"
                className={`group relative overflow-hidden rounded-[24px] bg-[#111111] border border-white/[0.06] ${i < 2 ? (i===0?'md:col-span-7':'md:col-span-5') : 'md:col-span-4'} col-span-1`}
              >
                <img
                  src={c.image}
                  alt={c.label}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.07]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* frosted label */}
                <div className="absolute bottom-0 inset-x-0 p-5 md:p-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[11px] tracking-widest uppercase text-white/80 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                    {c.count}
                  </div>
                  <div className="flex items-end justify-between">
                    <h3 className="font-instrument text-white text-[22px] md:text-[26px] leading-none">{c.label}</h3>
                    <span className="w-9 h-9 rounded-full bg-white text-black grid place-items-center group-hover:bg-[#d4af37] transition-colors">
                      <span className="text-[14px]">→</span>
                    </span>
                  </div>
                </div>

                <div className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 backdrop-blur border border-white/10 grid place-items-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-1 group-hover:translate-y-0">
                  <span className="text-white text-xs">↗</span>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
