import type { FC } from 'react'
import { useMemo, useState } from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom'

import logoTipografico from '../../assets/logos/10. Samanda_tipografico.png'

const NAV_ITEMS = [
  { label: 'Inicio', href: '/construccion', isExternal: false },
  { label: 'Quiénes somos', href: '/construccion#about', isExternal: false },
  { label: 'Artistas', href: '/construccion#artists', isExternal: false },
  { label: 'Discografía', href: '/construccion#tracks', isExternal: false },
  { label: 'Lanzamientos', href: '/construccion#releases', isExternal: false },
  { label: 'Eventos', href: '/construccion#events', isExternal: false },
  { label: 'El alma', href: '/soul', isExternal: false },
  { label: 'Contáctanos', href: '/construccion#contact', isExternal: false },
] as const

export const Navbar: FC = () => {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const items = useMemo(() => NAV_ITEMS, [])
  const isSoulItem = (href: string) => href === '/soul'
  const getDesktopTextClass = (href: string) =>
    isSoulItem(href) ? 'text-(--sam-red) hover:text-black/70' : 'hover:text-(--sam-red)'
  const getMobileTextClass = (href: string) =>
    isSoulItem(href)
      ? 'text-(--sam-red) hover:text-black/80'
      : 'text-black/80 hover:text-(--sam-red)'

  const handleNavClick = (href: string) => {
    setOpen(false)

    const hashIndex = href.indexOf('#')
    if (hashIndex === -1) {
      return
    }

    const basePath = href.slice(0, hashIndex) || '/'
    const id = href.slice(hashIndex + 1)

    if (location.pathname !== basePath) {
      navigate(basePath)
      setTimeout(() => {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
      return
    }

    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-30 border-b border-black/10 bg-white/90 backdrop-blur-sm shadow-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:py-4">
        <Link
          to="/construccion"
          className="inline-flex items-center gap-3 transition hover:opacity-75"
          aria-label="Ir al inicio"
          onClick={() => setOpen(false)}
        >
          <img
            src={logoTipografico}
            alt="Samanda Records"
            className="h-7 w-auto sm:h-9"
            loading="eager"
          />
        </Link>

        <ul className="hidden items-center gap-8 text-xs font-semibold tracking-wide text-black/70 sm:flex">
          {items.map((item) => (
            <li key={item.href}>
              {item.href.includes('#') ? (
                <button
                  onClick={() => {
                    handleNavClick(item.href)
                  }}
                  className={`transition-colors duration-200 cursor-pointer bg-transparent border-none ${getDesktopTextClass(
                    item.href
                  )}`}
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className={`transition-colors duration-200 ${getDesktopTextClass(item.href)}`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="inline-flex items-center rounded-lg border border-black/10 bg-white px-3 py-2 text-xs font-semibold text-black sm:hidden transition hover:bg-black/2"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`sm:hidden border-t border-black/10 transition-all duration-200 ${
          open ? 'block' : 'hidden'
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 py-3">
          <div className="space-y-1 rounded-xl bg-black/2 p-2">
            {items.map((item) => (
              <div key={item.href}>
                {item.href.includes('#') ? (
                  <button
                    onClick={() => {
                      handleNavClick(item.href)
                    }}
                    className={`block w-full text-left rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors duration-200 hover:bg-black/10 bg-transparent border-none ${getMobileTextClass(
                      item.href
                    )}`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={`block rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors duration-200 hover:bg-black/10 ${getMobileTextClass(
                      item.href
                    )}`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
