// src/components/layout/Footer.tsx
import type { FC } from 'react'

export const Footer: FC = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} SamandaRecord. Todos los derechos reservados.</p>
        <p className="text-slate-500">
          Sitio en construcción. Contenido de ejemplo para estructura inicial.
        </p>
      </div>
    </footer>
  )
}
