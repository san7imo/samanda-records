import type { FC } from 'react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import bannerYoutube from '../../assets/banners/Banner_Youtube.png'
import banner3 from '../../assets/banners/Samanda_3.png'
import banner4 from '../../assets/banners/Samanda_4.png'
import banner5 from '../../assets/banners/Samanda_5.png'
import banner6 from '../../assets/banners/samanda-banner.png'

const BANNER_SLIDES = [
  { id: 1, src: bannerYoutube, alt: 'Samanda Records - Banner Principal' },
  { id: 2, src: banner3, alt: 'Samanda Records - Banner 3' },
  { id: 3, src: banner4, alt: 'Samanda Records - Banner 4' },
  { id: 4, src: banner5, alt: 'Samanda Records - Banner 5' },
  { id: 5, src: banner6, alt: 'Samanda Records - Banner 6' },
]

export const TopBanner: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % BANNER_SLIDES.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % BANNER_SLIDES.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + BANNER_SLIDES.length) % BANNER_SLIDES.length)
  }

  return (
    <section className="w-full border-b border-black/5 bg-linear-to-b from-black/2 to-transparent">
      <div className="mx-auto max-w-full px-0 bg-black relative group">
        <div className="relative w-full overflow-hidden bg-black" style={{ aspectRatio: '16 / 9' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <img
                src={BANNER_SLIDES[currentSlide].src}
                alt={BANNER_SLIDES[currentSlide].alt}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </motion.div>
          </AnimatePresence>

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />

          {/* Controles - Flechas */}
          <motion.button
            onClick={prevSlide}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/40 text-white hover:bg-black/60 transition duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Anterior"
          >
            <span className="text-2xl">←</span>
          </motion.button>

          <motion.button
            onClick={nextSlide}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/40 text-white hover:bg-black/60 transition duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Siguiente"
          >
            <span className="text-2xl">→</span>
          </motion.button>

          {/* Indicadores de puntos */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
            {BANNER_SLIDES.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition duration-300 ${
                  idx === currentSlide ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/75'
                }`}
                whileHover={{ scale: 1.2 }}
                aria-label={`Ir a slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Contador slides */}
          <div className="absolute top-4 right-4 z-10">
            <div className="px-3 py-1.5 rounded-full bg-black/40 text-white text-xs font-semibold">
              {currentSlide + 1} / {BANNER_SLIDES.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
