import type { FC } from 'react'
import { motion } from 'framer-motion'
import isotipo from '../../assets/logos/5. Isotipo_Samanda.png'

export const HeroSection: FC = () => {
  return (
    <section id="hero" className="space-y-12 sm:space-y-14 md:space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative overflow-hidden rounded-3xl border bg-linear-to-br from-red-950/25 via-red-900/10 to-black/8 p-8 sm:p-10 md:p-12 shadow-sm border-red-900/30 transition duration-200 hover:shadow-md hover:border-(--sam-red)"
      >
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs font-semibold uppercase tracking-[0.32em] text-black/60"
          >
            Sello discográfico
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 font-(--font-display) text-4xl leading-tight tracking-tight text-black sm:text-5xl md:text-6xl"
          >
            Un sello que se escucha,
            <span className="block text-(--sam-red)">una huella que perdura.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-2xl text-sm leading-relaxed text-black/70 sm:text-base"
          >
            En Samanda Records creemos que la música es más que un sonido: es una
            huella que trasciende fronteras. Cada artista, cada nota, cada beat es
            parte de una historia que queremos compartir con el mundo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <motion.a
              href="#artists"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 25px rgba(155, 0, 0, 0.2)' }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-(--sam-red) px-7 py-3 text-xs font-semibold text-white transition duration-200 hover:opacity-90 hover:shadow-lg active:scale-95"
            >
              Ver artistas
            </motion.a>
            <motion.a
              href="#tracks"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border border-black/20 px-7 py-3 text-xs font-semibold text-black/80 transition duration-200 hover:border-black/40 hover:bg-black/2 hover:text-black active:scale-95"
            >
              Explorar catálogo
            </motion.a>
          </motion.div>
        </div>

        <motion.img
          src={isotipo}
          alt="Samanda Records Isotipo"
          initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute -bottom-12 -right-12 w-96 h-96"
        />
      </motion.div>
    </section>
  )
}
