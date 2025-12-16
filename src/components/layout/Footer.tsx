import type { FC } from 'react'
import { FiInstagram, FiYoutube, FiTwitter } from 'react-icons/fi'
import { SiSpotify } from 'react-icons/si'
import logoSamanda from '../../assets/logos/1. Logo_Samanda.png'

const SOCIAL_ICONS = [
  { icon: <FiInstagram size={18} />, label: 'Instagram', url: '#' },
  { icon: <FiYoutube size={18} />, label: 'YouTube', url: '#' },
  { icon: <SiSpotify size={18} />, label: 'Spotify', url: '#' },
  { icon: <FiTwitter size={18} />, label: 'Twitter', url: '#' },
]

export const Footer: FC = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-red-900/20 bg-linear-to-b from-red-950/10 via-black/5 to-black/15">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        {/* Main Footer Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Branding & Socials */}
          <div className="space-y-4">
            <div>
              <img
                src={logoSamanda}
                alt="Samanda Records"
                className="h-40 w-auto mb-3"
                loading="lazy"
              />
              <p className="text-xs font-semibold uppercase tracking-wider text-black/60 mb-2">
                Sello Discográfico
              </p>
            </div>
            <p className="text-sm leading-relaxed text-black/70">
              Impulsamos talento emergente y conectamos culturas a través de la música.
            </p>
            <div className="flex gap-3 pt-4">
              {SOCIAL_ICONS.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-black/10 text-black/70 hover:border-(--sam-red) hover:bg-(--sam-red) hover:text-white transition duration-200 hover:scale-110"
                  title={social.label}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Secciones */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-(--sam-red)">
              Explorar
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Artistas', href: '#artists' },
                { label: 'Canciones', href: '#tracks' },
                { label: 'Galería', href: '#gallery' },
                { label: 'El alma', href: '/soul' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-black/70 hover:text-(--sam-red) transition duration-200 inline-flex items-center gap-1.5"
                  >
                    <span className="text-xs">→</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Información */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-(--sam-red)">
              Contacto
            </h4>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-black/60 uppercase tracking-wider mb-1">Email</p>
                <a
                  href="mailto:hello@samanda.records"
                  className="text-sm text-black/70 hover:text-(--sam-red) transition duration-200 break-all"
                >
                  hello@samanda.records
                </a>
              </div>
              <div>
                <p className="text-xs text-black/60 uppercase tracking-wider mb-1">Servicios</p>
                <p className="text-sm text-black/70">Booking · Distribución · Prensa</p>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-(--sam-red)">
              Legal
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Privacidad', href: '#' },
                { label: 'Términos de servicio', href: '#' },
                { label: 'Cookies', href: '#' },
                { label: 'Sitemap', href: '#' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-black/70 hover:text-(--sam-red) transition duration-200 inline-flex items-center gap-1.5"
                  >
                    <span className="text-xs">→</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-red-900/15 pt-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="flex flex-col sm:flex-row gap-6 text-xs text-black/60">
              <p>
                © {year} <strong>Samanda Records</strong>. Todos los derechos reservados.
              </p>
              <p className="hidden sm:block text-black/20">•</p>
              <p>Hecho con <span className="text-(--sam-red)">♥</span> para la música</p>
            </div>
            <p className="text-xs text-black/50">
              v1.0.0 — <span className="text-(--sam-red)">Modern Music Label</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
