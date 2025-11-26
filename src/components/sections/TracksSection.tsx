// src/components/sections/TracksSection.tsx
import type { FC } from 'react'
import { SectionHeader } from '../ui/SectionHeader'
import { TRACKS } from '../../data/tracks'

export const TracksSection: FC = () => {
  return (
    <section id="tracks" className="space-y-8 py-12 sm:py-16">
      <SectionHeader
        eyebrow="Canciones"
        title="Catálogo de canciones de ejemplo."
        description="Esta tabla muestra un conjunto de canciones ficticias. En la versión final se conectará con el catálogo real del sello y, si se requiere, con reproductores incrustados desde plataformas externas."
      />

      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
        <div className="grid grid-cols-[2fr,1.5fr,0.7fr,0.7fr] border-b border-slate-800 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400">
          <span>Título</span>
          <span>Artista</span>
          <span>Año</span>
          <span>Duración</span>
        </div>
        <ul>
          {TRACKS.map((track) => (
            <li
              key={track.id}
              className="grid grid-cols-[2fr,1.5fr,0.7fr,0.7fr] border-t border-slate-800/60 px-4 py-3 text-xs text-slate-200 transition-colors hover:bg-slate-900"
            >
              <span>{track.title}</span>
              <span className="text-slate-300">{track.artistName}</span>
              <span className="text-slate-400">{track.year}</span>
              <span className="text-slate-400">{track.duration}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
