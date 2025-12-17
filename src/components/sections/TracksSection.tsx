import type { FC } from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '../ui/SectionHeader'
import { TRACKS } from '../../data/tracks'

export const TracksSection: FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="tracks" className="space-y-10 py-14 sm:py-18 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeader
          eyebrow="Discografía"
          title="Catálogo de música de Samanda Records."
          description="Explora nuestro catálogo completo de lanzamientos. Cada canción representa el compromiso de nuestro sello con la calidad artística y la innovación sonora."
        />
      </motion.div>

      <motion.div
        className="space-y-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {TRACKS.map((track, idx) => (
          <motion.article
            key={track.id}
            variants={itemVariants}
            whileHover={{ x: 8, transition: { duration: 0.3 } }}
            className={`group flex items-center gap-4 rounded-xl border p-4 transition duration-200 hover:border-(--sam-red) hover:shadow-md overflow-hidden ${
              idx % 3 === 0
                ? 'bg-linear-to-r from-red-950/15 via-red-900/5 to-white border-red-900/20 hover:bg-linear-to-r hover:from-red-900/25 hover:via-red-800/10 hover:to-white'
                : idx % 3 === 1
                  ? 'bg-linear-to-r from-black/12 via-black/5 to-white border-black/18 hover:bg-linear-to-r hover:from-black/22 hover:via-black/10 hover:to-white'
                  : 'bg-linear-to-r from-gray-900/12 via-gray-900/4 to-white border-gray-800/18 hover:bg-linear-to-r hover:from-gray-800/22 hover:via-gray-800/8 hover:to-white'
            }`}
          >
            {/* Portada de la canción */}
            <div className="shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-linear-to-br from-black/10 to-black/20 flex items-center justify-center border border-black/5">
              {track.coverImage ? (
                <img
                  src={track.coverImage}
                  alt={track.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              ) : (
                <span className="text-2xl">🎵</span>
              )}
            </div>

            {/* Información de la canción */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-1">
                <div>
                  <p className="text-xs text-black/50 font-medium mb-1">
                    #{idx + 1}
                  </p>
                  <h4 className="text-sm font-semibold text-black group-hover:text-(--sam-red) transition truncate">
                    {track.title}
                  </h4>
                </div>
              </div>
              <p className="text-xs text-black/65 truncate">
                por <span className="font-medium">{track.artistName}</span>
              </p>
            </div>

            {/* Metadatos */}
            <div className="flex items-center gap-6 shrink-0">
              <div className="text-right">
                <p className="text-xs text-black/50 font-medium">Año</p>
                <p className="text-sm font-semibold text-black">{track.year}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-black/50 font-medium">Duración</p>
                <p className="text-sm font-semibold text-black">{track.duration}</p>
              </div>
              <button
                className="shrink-0 p-2 rounded-full bg-black/5 group-hover:bg-(--sam-red) group-hover:text-white transition duration-200"
                aria-label="Reproducir"
              >
                ▶
              </button>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="rounded-xl border bg-linear-to-r from-red-950/20 via-black/10 to-black/12 p-6 mt-8 border-red-900/25 shadow-sm transition duration-200 hover:shadow-md hover:border-(--sam-red)"
      >
        <p className="text-sm text-black/70">
          📻 <strong className="text-black font-semibold">{TRACKS.length}</strong> canciones en el catálogo
        </p>
        <p className="text-xs text-black/50 mt-2">
          Los enlaces a plataformas de streaming estarán disponibles próximamente.
        </p>
      </motion.div>
    </section>
  )
}
