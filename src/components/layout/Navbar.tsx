import type { FC } from 'react'
import { useMemo, useState } from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom'

import logoTipografico from '../../assets/logos/10. Samanda_tipografico.png'

const NAV_ITEMS = [
  { label: 'Inicio', href: '/', isExternal: false },
  { label: 'Quiénes somos', href: '/#about', isExternal: false },
  { label: 'Artistas', href: '/#artists', isExternal: false },
  { label: 'Discografía', href: '/#tracks', isExternal: false },
  { label: 'Lanzamientos', href: '/#releases', isExternal: false },
  { label: 'Eventos', href: '/#events', isExternal: false },
  { label: 'El alma', href: '/soul', isExternal: false },
  { label: 'Contáctanos', href: '/#contact', isExternal: false },
] as const

export const Navbar: FC = () => {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const items = useMemo(() => NAV_ITEMS, [])

  const handleNavClick = (href: string) => {
    setOpen(false)
    
    // Si es un hash y no estamos en home, navega a home primero
    if (href.startsWith('/#') && location.pathname !== '/') {
      navigate('/')
      // El hash se ejecutará cuando la página se cargue
      setTimeout(() => {
        const id = href.substring(2) // Remover #/
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  return (
    <header className="sticky top-0 z-30 border-b border-black/10 bg-white/90 backdrop-blur-sm shadow-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:py-4">
        <Link
          to="/"
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
              {item.href === '/' ? (
                <Link
                  to={item.href}
                  className="transition-colors duration-200 hover:text-(--sam-red)"
                >
                  {item.label}
                </Link>
              ) : item.href.startsWith('/#') ? (
                <button
                  onClick={() => {
                    handleNavClick(item.href)
                    if (location.pathname === '/') {
                      const id = item.href.substring(2)
                      const element = document.getElementById(id)
                      element?.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="transition-colors duration-200 hover:text-(--sam-red) cursor-pointer bg-transparent border-none"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className="transition-colors duration-200 hover:text-(--sam-red)"
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
                {item.href === '/' ? (
                  <Link
                    to={item.href}
                    className="block rounded-lg px-4 py-2.5 text-sm font-semibold text-black/80 transition-colors duration-200 hover:bg-black/10 hover:text-(--sam-red)"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : item.href.startsWith('/#') ? (
                  <button
                    onClick={() => {
                      handleNavClick(item.href)
                      if (location.pathname === '/') {
                        const id = item.href.substring(2)
                        const element = document.getElementById(id)
                        element?.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="block w-full text-left rounded-lg px-4 py-2.5 text-sm font-semibold text-black/80 transition-colors duration-200 hover:bg-black/10 hover:text-(--sam-red) bg-transparent border-none"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="block rounded-lg px-4 py-2.5 text-sm font-semibold text-black/80 transition-colors duration-200 hover:bg-black/10 hover:text-(--sam-red)"
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
