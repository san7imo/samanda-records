import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import banner from '../assets/banners/samanda-banner.png'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export const ConstructionPage: FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-red-100">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_15%_10%,rgba(155,0,0,0.35),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_85%_20%,rgba(155,0,0,0.25),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2),rgba(0,0,0,0.95))]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-10 px-6 py-16 text-center sm:px-10"
      >
        <motion.img
          variants={item}
          src={banner}
          alt="Samanda Records"
          className="w-full max-w-4xl rounded-3xl border border-red-900/50 bg-black/40 p-6 shadow-[0_30px_120px_rgba(155,0,0,0.3)]"
        />

        <motion.div variants={item} className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-200/80">
            Sitio en construccion
          </p>
          <h1 className="font-(--font-display) text-3xl leading-tight sm:text-4xl md:text-5xl">
            Estamos puliendo cada detalle
            <span className="block text-(--sam-red)">para que suene perfecto.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-red-200/70 sm:text-base">
            Muy pronto vas a encontrar una experiencia renovada, elegante y con la
            fuerza de Samanda Records.
          </p>
        </motion.div>
      </motion.div>

      <div className="pointer-events-none absolute inset-6 rounded-[36px] border border-red-900/40" />
    </div>
  )
}
