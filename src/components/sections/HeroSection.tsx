// src/components/sections/HeroSection.tsx
import type { FC } from 'react'

export const HeroSection: FC = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col gap-8 overflow-hidden py-12 sm:py-20"
    >
      {/* Orbes decorativos */}
      <div className="pointer-events-none absolute -left-40 top-0 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />

      <div className="relative flex flex-col gap-8 sm:flex-row sm:items-center">
        <div className="flex-1 space-y-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-emerald-400">
            Sello discográfico independiente
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            SamandaRecord, sonido contemporáneo con esencia propia.
          </h1>
          <p className="max-w-xl text-sm text-slate-300">
            Este es el espacio digital de SamandaRecord. Aquí vivirá la historia,
            los lanzamientos y el talento de los artistas que forman parte del
            sello. Por ahora trabajamos con contenido de ejemplo para definir la
            estructura y la experiencia del sitio.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#artists"
              className="rounded-full bg-emerald-500 px-6 py-2 text-xs font-semibold text-slate-950 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-emerald-400"
            >
              Ver artistas
            </a>
            <a
              href="#tracks"
              className="rounded-full border border-slate-700 px-6 py-2 text-xs font-semibold text-slate-100 transition-colors duration-200 hover:border-emerald-500 hover:text-emerald-400"
            >
              Escuchar catálogo
            </a>
          </div>
        </div>

        <div className="relative mt-6 flex flex-1 justify-center sm:mt-0">
          <div className="h-48 w-64 rounded-3xl border border-slate-800 bg-slate-900/60 p-4 shadow-xl shadow-emerald-500/10">
            <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
              <span>Panel del sello</span>
              <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-400">
                Demo
              </span>
            </div>
            <div className="space-y-2 text-xs text-slate-200">
              <p>Artistas activos: 3</p>
              <p>Próximos lanzamientos: 4</p>
              <p>Catálogo inicial en construcción.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
