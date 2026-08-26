import { Suspense, useEffect, useRef, useState, lazy } from 'react'
import { Canvas } from '@react-three/fiber'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const HeroBottle = lazy(() => import('./HeroBottle'))

export default function Hero({ onShop }: { onShop: () => void }) {
  const sectionRef = useRef<HTMLElement>(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [scrollProgress, setScrollProgress] = useState(0)
  const [canRender3D, setCanRender3D] = useState(true)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isLowPower = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) && window.innerWidth < 768
    if (reduce || isLowPower) setCanRender3D(false)

    // mouse parallax
    const onMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      })
    }
    window.addEventListener('mousemove', onMove)

    // ScrollTrigger for cinematic transition
    if (sectionRef.current) {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self: any) => setScrollProgress(self.progress),
      })
    }

    return () => {
      window.removeEventListener('mousemove', onMove)
      ScrollTrigger.getAll().forEach((t: any) => t.kill())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative w-full min-h-screen overflow-hidden flex items-end justify-center bg-black"
    >
      {/* Cinematic video background — exact spec video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1920&auto=format&fit=crop"
        className="absolute inset-0 w-full h-full object-cover"
        src="https://www.image2url.com/r2/default/videos/1787623044702-fce64432-c276-4e4a-84a1-f5cc426b08a3.mp4"
      />

      {/* Editorial vignette — subtle, not heavy gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

      {/* 3D Bottle Canvas */}
      <div className="absolute inset-0">
        {canRender3D ? (
          <Suspense
            fallback={
              <div className="w-full h-full grid place-items-center">
                <img
                  src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=900&auto=format&fit=crop"
                  alt="purefom bottle"
                  className="w-[340px] md:w-[420px] object-contain opacity-90"
                  loading="eager"
                />
              </div>
            }
          >
            <Canvas
              dpr={[1, 1.8]}
              camera={{ position: [0, 0.6, 4.2], fov: 34 }}
              gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
              shadows
            >
              <HeroBottle mouse={mouse} scrollProgress={scrollProgress} />
            </Canvas>
          </Suspense>
        ) : (
          <div className="w-full h-full grid place-items-center p-6">
            <img
              src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=900&auto=format&fit=crop"
              alt="purefom — luxury perfume bottle"
              className="w-[320px] md:w-[460px] object-contain drop-shadow-[0_32px_64px_rgba(0,0,0,0.9)]"
              loading="eager"
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-10 pb-10 md:pb-16">
        <div className="flex flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] as any }}
            className="text-[11px] tracking-[0.32em] uppercase text-white/60 mb-4"
          >
            Obsidian Elegance — House of purefom
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] as any }}
            className="font-instrument text-white text-[42px] md:text-[84px] leading-[0.9] tracking-[-0.03em]"
          >
            The Essence
            <br />
            <span className="italic font-normal text-white/90">of Luxury</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65, ease: [0.16, 1, 0.3, 1] as any }}
            className="mt-5 max-w-[560px] text-white/70 text-[15px] md:text-[17px] leading-relaxed"
          >
            Discover a fragrance experience crafted for those who refuse the ordinary.
            Glass, light and amber — composed as an editorial object.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-3"
          >
            <button
              onClick={onShop}
              className="rounded-full bg-white text-black px-8 py-3.5 font-medium text-[14px] tracking-wide hover:bg-white/90 transition-colors"
            >
              Shop the Collection
            </button>
            <a
              href="#notes"
              className="rounded-full bg-white/10 text-white backdrop-blur-md border border-white/15 px-8 py-3.5 font-medium text-[14px] hover:bg-white/15 transition-colors"
            >
              Explore Fragrance Notes
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-10 hidden md:flex items-center gap-6 text-[11px] tracking-widest uppercase text-white/35"
          >
            <span>Extrait de Parfum</span>
            <span className="w-8 h-px bg-white/20" />
            <span>100ml • Concentrated</span>
            <span className="w-8 h-px bg-white/20" />
            <span>Made in Paris</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 text-white/30">
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <span className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  )
}
