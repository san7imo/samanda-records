// src/components/layout/Navbar.tsx
import type { FC } from 'react'

const NAV_ITEMS = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Quiénes somos', href: '#about' },
  { label: 'Artistas', href: '#artists' },
  { label: 'Canciones', href: '#tracks' },
  { label: 'Contáctanos', href: '#contact' },
]

export const Navbar: FC = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a
          href="#hero"
          className="text-base font-semibold tracking-tight text-slate-50"
        >
          SamandaRecord
        </a>
        <ul className="hidden gap-6 text-xs font-medium text-slate-300 sm:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="transition-colors hover:text-emerald-400"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
