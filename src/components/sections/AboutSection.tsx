// src/components/sections/AboutSection.tsx
import type { FC } from 'react'
import { SectionHeader } from '../ui/SectionHeader'

export const AboutSection: FC = () => {
  return (
    <section id="about" className="space-y-8 py-12 sm:py-16">
      <SectionHeader
        eyebrow="Quiénes somos"
        title="Un sello en construcción, pensado para crecer con sus artistas."
        description={
          <>
            <span className="block">
              SamandaRecord es una disquera ficticia utilizada como referencia
              para la construcción de este sitio web. El objetivo es diseñar y
              desarrollar una plataforma elegante, minimalista y funcional que
              pueda adaptarse fácilmente a la identidad real del sello.
            </span>
            <span className="mt-2 block">
              Toda la información que ves en esta sección es contenido de
              ejemplo. Más adelante se sustituirá con la historia, misión,
              valores y enfoque real que defina el equipo de SamandaRecord.
            </span>
          </>
        }
      />

      <div className="grid gap-8 md:grid-cols-[2fr,1fr]">
        <div className="space-y-4 text-sm text-slate-300">
          <p>
            La intención de este proyecto es dejar una base sólida a nivel de
            diseño, estructura y código. Desde aquí se podrán incorporar
            artistas, lanzamientos, comunicados de prensa y cualquier otro tipo
            de contenido necesario para la operación del sello.
          </p>
          <p>
            Se prioriza una experiencia limpia, con foco en el catálogo y el
            storytelling de los artistas. El sitio estará preparado para
            integrarse en el futuro con plataformas de streaming, sistemas de
            ticketing o módulos de e-commerce.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-200">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Indicadores de ejemplo
          </p>
          <dl className="space-y-3">
            <div className="flex items-baseline justify-between">
              <dt className="text-slate-400">Artistas actuales</dt>
              <dd className="text-sm font-semibold text-emerald-400">3</dd>
            </div>
            <div className="flex items-baseline justify-between">
              <dt className="text-slate-400">Lanzamientos demo</dt>
              <dd className="text-sm font-semibold text-emerald-400">3</dd>
            </div>
            <div className="flex items-baseline justify-between">
              <dt className="text-slate-400">Fases de desarrollo</dt>
              <dd className="text-sm font-semibold text-emerald-400">5</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
