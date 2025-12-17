import type { FC } from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '../ui/SectionHeader'

type Release = {
  id: string
  title: string
  artist: string
  releaseDate: string
  type: 'Album' | 'EP' | 'Single'
  coverImage?: string
  link?: string
}

const UPCOMING_RELEASES: Release[] = [
  {
    id: '1',
    title: 'Horizonte Infinito',
    artist: 'DILONG',
    releaseDate: '2025-01-15',
    type: 'Album',
    link: 'https://spotify.com',
  },
  {
    id: '2',
    title: 'Ritmos del Alma',
    artist: 'Artista Secundario',
    releaseDate: '2025-02-03',
    type: 'EP',
    link: 'https://spotify.com',
  },
  {
    id: '3',
    title: 'Noche Urbana',
    artist: 'Tercer Artista',
    releaseDate: '2025-02-20',
    type: 'Single',
    link: 'https://spotify.com',
  },
]

export const ReleasesSection: FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="releases" className="space-y-10 py-14 sm:py-18 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeader
          eyebrow="Próximos Lanzamientos"
          title="Música fresca en camino."
          description="Descubre los próximos álbumes, EPs y singles que Samanda Records tiene preparado para ti. Mantente atento a nuestros estrenos."
        />
      </motion.div>

      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {UPCOMING_RELEASES.map((release, idx) => {
          const releaseDate = new Date(release.releaseDate)
          const daysUntil = Math.ceil(
            (releaseDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
          )
          const isComingSoon = daysUntil > 0

          return (
            <motion.div
              key={release.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group rounded-2xl border overflow-hidden shadow-sm transition duration-200 hover:border-(--sam-red) hover:shadow-lg flex flex-col ${
                idx % 3 === 0
                  ? 'bg-linear-to-br from-red-950/20 via-red-900/5 to-white border-red-900/20'
                  : idx % 3 === 1
                    ? 'bg-linear-to-br from-black/10 via-black/5 to-white border-black/15'
                    : 'bg-linear-to-br from-gray-900/15 via-black/5 to-white border-gray-800/20'
              }`}
            >
              {/* Cover Image */}
              <div className="relative w-full h-48 bg-linear-to-br from-black/10 to-black/20 overflow-hidden flex items-center justify-center">
                {release.coverImage ? (
                  <img
                    src={release.coverImage}
                    alt={release.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-linear-to-br from-black/20 to-black/10 flex flex-col items-center justify-center">
                    <span className="text-5xl mb-2">🎵</span>
                    <span className="text-xs text-black/50 uppercase font-semibold">
                      {release.type}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-(--sam-red) uppercase tracking-wider">
                    {release.type}
                  </p>
                  <h3 className="text-lg font-semibold tracking-tight text-black group-hover:text-(--sam-red) transition">
                    {release.title}
                  </h3>
                  <p className="text-sm text-black/70">{release.artist}</p>
                </div>

                {/* Release Info */}
                <div className="mt-5 pt-4 border-t border-black/10 space-y-3 flex-1">
                  <div>
                    <p className="text-xs font-semibold text-black/50 mb-1 uppercase tracking-wider">
                      Fecha de Lanzamiento
                    </p>
                    <p className="text-sm font-semibold text-black">
                      {releaseDate.toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>

                  {isComingSoon && (
                    <div className="inline-flex px-3 py-1 rounded-full bg-(--sam-red)/10 border border-(--sam-red)/30">
                      <p className="text-xs font-semibold text-(--sam-red)">
                        {daysUntil} días
                      </p>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <div className="mt-5 pt-4 border-t border-black/10">
                  <motion.a
                    href={release.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-4 py-2.5 bg-(--sam-red) text-white rounded-lg text-xs font-semibold transition duration-200 hover:opacity-90"
                  >
                    Ir a Spotify
                    <span className="ml-2">→</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
