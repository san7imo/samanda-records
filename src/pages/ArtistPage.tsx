import type { FC } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FiInstagram, FiMusic, FiYoutube, FiTwitter } from 'react-icons/fi'
import { SiSpotify, SiSoundcloud, SiApplemusic, SiTiktok } from 'react-icons/si'
import { ARTISTS } from '../data/artists'

const getSocialIcon = (platform: string) => {
  const iconSize = 24
  const iconProps = { size: iconSize, className: 'transition-transform duration-200' }
  
  switch (platform) {
    case 'instagram':
      return <FiInstagram {...iconProps} />
    case 'spotify':
      return <SiSpotify {...iconProps} />
    case 'youtube':
      return <FiYoutube {...iconProps} />
    case 'twitter':
      return <FiTwitter {...iconProps} />
    case 'soundcloud':
      return <SiSoundcloud {...iconProps} />
    case 'appleMusic':
      return <SiApplemusic {...iconProps} />
    case 'tiktok':
      return <SiTiktok {...iconProps} />
    default:
      return <FiMusic {...iconProps} />
  }
}

export const ArtistPage: FC = () => {
  const { id } = useParams<{ id: string }>()
  const artist = ARTISTS.find((a) => a.id === id)

  if (!artist) {
    return (
      <div className="py-20 text-center space-y-6">
        <h1 className="text-3xl font-bold">Artista no encontrado</h1>
        <p className="text-black/60">Lo sentimos, no pudimos encontrar este artista.</p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-(--sam-red) text-white rounded-lg font-semibold hover:opacity-90 transition"
        >
          Volver al inicio
        </Link>
      </div>
    )
  }

  return (
    <main className="space-y-16 py-12 sm:py-16 md:py-20">
      {/* Hero del artista */}
      <div className="rounded-3xl border border-black/10 bg-white overflow-hidden shadow-md">
        <div className="p-8 sm:p-12 md:p-14">
          {/* Imagen pequeña y badge */}
          <div className="flex items-start gap-6 mb-8">
            <div className="shrink-0 w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border border-black/10 bg-linear-to-br from-black/10 to-black/20 flex items-center justify-center shadow-md">
              {artist.image ? (
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-5xl">♪</span>
              )}
            </div>

            <div className="flex-1">
              <div className="mb-3">
                <span className="inline-block px-3.5 py-1.5 rounded-full bg-(--sam-red) text-white text-xs font-semibold uppercase tracking-wider">
                  {artist.genre}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-(--font-display) mb-4 leading-tight">
                {artist.name}
              </h1>

              <p className="text-sm sm:text-base leading-relaxed text-black/75 mb-6 max-w-2xl">
                {artist.fullDescription}
              </p>

              <div className="flex gap-3 flex-wrap">
                <a
                  href="/#contact"
                  className="inline-flex items-center px-6 py-3 bg-(--sam-red) text-white rounded-lg font-semibold hover:opacity-90 transition"
                >
                  Colaborar
                </a>
                <a
                  href="/"
                  className="inline-flex items-center px-6 py-3 border border-black/20 text-black rounded-lg font-semibold hover:border-black/40 hover:bg-black/2 transition"
                >
                  Volver
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Biografía y Género */}
      <div className="grid gap-8 md:grid-cols-[1.2fr,1fr]">
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold mb-4">Biografía</h2>
            <p className="text-black/70 leading-relaxed text-base">
              {artist.bio}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-black/10 bg-linear-to-br from-white to-black/2 p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-black/60 mb-3">
              Género principal
            </p>
            <p className="text-3xl font-bold text-(--sam-red) mb-4">
              {artist.genre}
            </p>
            <p className="text-sm text-black/65">
              Exploración de nuevos sonidos manteniendo la esencia de la propuesta musical.
            </p>
          </div>
        </div>
      </div>

      {/* Redes Sociales */}
      {artist.socialLinks && Object.keys(artist.socialLinks).length > 0 && (
        <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm text-center">
          <h3 className="text-2xl font-bold mb-8">Síguelo en</h3>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {Object.entries(artist.socialLinks).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                title={platform.charAt(0).toUpperCase() + platform.slice(1)}
                className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-black/10 bg-black/2 text-black/70 hover:border-(--sam-red) hover:bg-(--sam-red) hover:text-white transition duration-200 hover:scale-110"
              >
                {getSocialIcon(platform)}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Discografía */}
      {artist.releases && artist.releases.length > 0 && (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Discografía</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {artist.releases.map((release) => (
              <article
                key={release.id}
                className="group rounded-2xl border border-black/10 bg-white overflow-hidden shadow-sm hover:shadow-md hover:border-(--sam-red) transition"
              >
                {/* Portada */}
                <div className="aspect-square bg-linear-to-br from-black/10 to-black/20 flex items-center justify-center overflow-hidden">
                  {release.coverImage ? (
                    <img
                      src={release.coverImage}
                      alt={release.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-5xl">
                      ♪
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-6">
                  <p className="text-xs font-semibold text-(--sam-red) uppercase tracking-wider mb-2">
                    {release.type}
                  </p>
                  <h4 className="text-lg font-bold group-hover:text-(--sam-red) transition mb-2">
                    {release.title}
                  </h4>
                  <p className="text-sm text-black/60">
                    {new Date(release.releaseDate).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* CTA Final */}
      <div className="rounded-3xl border border-black/10 bg-linear-to-r from-black via-black/95 to-black/90 p-12 text-white text-center shadow-md">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4">
          ¿Interesado en trabajar con {artist.name}?
        </h3>
        <p className="text-white/80 mb-8 max-w-2xl mx-auto text-base">
          Booking, colaboraciones, sincronización y más. Contáctanos para conocer las
          oportunidades disponibles.
        </p>
        <a
          href="/#contact"
          className="inline-block px-8 py-4 bg-(--sam-red) rounded-lg font-semibold hover:opacity-90 transition duration-200"
        >
          Enviar propuesta
        </a>
      </div>
    </main>
  )
}
