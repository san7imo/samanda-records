import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SectionHeader } from '../ui/SectionHeader'
import { ARTISTS } from '../../data/artists'

export const ArtistsSection: FC = () => {
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
    <section id="artists" className="space-y-10 py-14 sm:py-18 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeader
          eyebrow="Artistas"
          title="Talento en vitrina, listo para ser descubierto."
          description="En Samanda Records trabajamos con artistas de diferentes géneros y estilos. Cada uno trae una perspectiva única y un sonido inconfundible a nuestro catálogo."
        />
      </motion.div>

      <motion.div
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {ARTISTS.map((artist, idx) => (
          <motion.article
            key={artist.id}
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className={`group rounded-2xl border overflow-hidden shadow-sm transition duration-200 hover:-translate-y-1 hover:border-(--sam-red) hover:shadow-lg flex flex-col ${
              idx % 3 === 0
                ? 'bg-linear-to-br from-red-950/20 via-red-900/5 to-white border-red-900/20 hover:bg-linear-to-br hover:from-red-900/30 hover:via-red-800/10 hover:to-red-950/5'
                : idx % 3 === 1
                  ? 'bg-linear-to-br from-black/10 via-black/5 to-white border-black/15 hover:bg-linear-to-br hover:from-black/20 hover:via-black/10 hover:to-black/5'
                  : 'bg-linear-to-br from-gray-900/15 via-black/5 to-white border-gray-800/20 hover:bg-linear-to-br hover:from-gray-800/25 hover:via-black/10 hover:to-gray-900/10'
            }`}
          >
            {/* Imagen del artista */}
            <div className="relative w-full h-48 bg-linear-to-br from-black/10 via-black/5 to-black/10 overflow-hidden flex items-center justify-center">
              {artist.image ? (
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              ) : (
                <div className="w-full h-full bg-linear-to-br from-black/20 to-black/5 flex items-center justify-center">
                  <span className="text-3xl">🎵</span>
                </div>
              )}
            </div>

            {/* Contenido */}
            <div className="flex flex-col flex-1 p-6">
              <div className="space-y-2">
                <p className="text-xs font-semibold text-(--sam-red) uppercase tracking-wider">
                  {artist.genre}
                </p>
                <h3 className="text-lg font-semibold tracking-tight text-black group-hover:text-(--sam-red) transition">
                  {artist.name}
                </h3>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-black/70 flex-1">
                {artist.shortDescription}
              </p>

              {artist.releases && artist.releases.length > 0 && (
                <div className="mt-5 pt-4 border-t border-black/10">
                  <p className="text-xs font-semibold text-black/50 mb-2 uppercase tracking-wider">
                    Últimos lanzamientos
                  </p>
                  <ul className="space-y-1.5">
                    {artist.releases.slice(0, 2).map((release) => (
                      <li
                        key={release.id}
                        className="text-xs text-black/65 flex justify-between items-center"
                      >
                        <span className="truncate">{release.title}</span>
                        <span className="text-[10px] text-black/50 ml-2 whitespace-nowrap">{release.type}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-5 pt-4 border-t border-black/10">
                <Link
                  to={`/artist/${artist.id}`}
                  className="inline-flex items-center text-xs font-semibold text-(--sam-red) group-hover:translate-x-1 transition"
                >
                  Ver perfil completo
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
