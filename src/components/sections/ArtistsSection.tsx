// src/components/sections/ArtistsSection.tsx
import type { FC } from 'react'
import { SectionHeader } from '../ui/SectionHeader'
import { ARTISTS } from '../../data/artists'

export const ArtistsSection: FC = () => {
  return (
    <section id="artists" className="space-y-8 py-12 sm:py-16">
      <SectionHeader
        eyebrow="Artistas"
        title="Talento en vitrina, listo para ser descubierto."
        description="Esta sección muestra un listado de artistas de ejemplo. En la implementación final, aquí se cargarán los perfiles reales de los artistas de SamandaRecord."
      />

      <div className="grid gap-6 sm:grid-cols-3">
        {ARTISTS.map((artist) => (
          <article
            key={artist.id}
            className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-4 transition-transform transition-colors duration-200 hover:-translate-y-1 hover:border-emerald-500/80"
          >
            <h3 className="text-sm font-semibold tracking-tight">
              {artist.name}
            </h3>
            <p className="mt-1 text-xs text-emerald-400">{artist.genre}</p>
            <p className="mt-3 text-xs text-slate-300">
              {artist.shortDescription}
            </p>
            <button className="mt-4 text-[11px] font-medium text-emerald-400 underline-offset-4 group-hover:underline">
              Ver perfil (placeholder)
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}
