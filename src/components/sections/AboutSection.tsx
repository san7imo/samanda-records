import type { FC } from 'react'
import { SectionHeader } from '../ui/SectionHeader'

export const AboutSection: FC = () => {
  return (
    <section id="about" className="space-y-12 py-14 sm:py-18 md:py-20">
      <SectionHeader
        eyebrow="Quiénes somos"
        title="Un sello en construcción, pensado para crecer con sus artistas."
        description={
          <>
            <span className="block">
              Samanda Records es un sello discográfico moderno que nace con la
              visión de impulsar talento emergente y consolidado en la música
              contemporánea.
            </span>
            <span className="mt-2 block">
              Cada lanzamiento es cuidadosamente seleccionado, producido y
              distribuido para llegar a la audiencia global, manteniendo la
              integridad artística de nuestros colaboradores.
            </span>
          </>
        }
      />

      {/* Sección de Misión y Valores */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Misión */}
        <div className="group rounded-2xl border bg-linear-to-br from-red-950/30 via-red-900/10 to-white p-8 shadow-sm transition duration-200 hover:border-(--sam-red) hover:shadow-lg overflow-hidden border-red-900/30 hover:bg-linear-to-br hover:from-red-900/40 hover:via-red-800/15 hover:to-white">
          <div className="absolute inset-0 bg-linear-to-br from-black/0 via-transparent to-black/0 opacity-0 group-hover:opacity-5 transition" />
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-(--sam-red) text-white text-lg mb-4">
              🎯
            </div>
            <h3 className="text-lg font-semibold text-black mb-3">Nuestra Misión</h3>
            <p className="text-sm leading-relaxed text-black/70">
              Ofrecer una plataforma sólida donde artistas de diferentes géneros
              puedan expresar su creatividad, conectar con audiencias globales y
              construir carreras sostenibles en la industria musical moderna.
            </p>
          </div>
        </div>

        {/* Valores */}
        <div className="group rounded-2xl border bg-linear-to-br from-black/15 via-black/5 to-white p-8 shadow-sm transition duration-200 hover:border-(--sam-red) hover:shadow-lg overflow-hidden border-black/20 hover:bg-linear-to-br hover:from-black/25 hover:via-black/10 hover:to-white">
          <div className="absolute inset-0 bg-linear-to-br from-black/0 via-transparent to-black/0 opacity-0 group-hover:opacity-5 transition" />
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-(--sam-red) text-white text-lg mb-4">
              ✨
            </div>
            <h3 className="text-lg font-semibold text-black mb-4">Nuestros Valores</h3>
            <ul className="space-y-3">
              {[
                { label: 'Autenticidad', desc: 'Impulsamos voces genuinas' },
                { label: 'Excelencia', desc: 'Estándares altos en producción' },
                { label: 'Innovación', desc: 'Exploramos nuevos sonidos' },
                { label: 'Comunidad', desc: 'Construimos juntos' },
              ].map((value) => (
                <li key={value.label} className="flex items-start gap-2.5 text-sm">
                  <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-(--sam-red)" />
                  <div>
                    <strong className="text-black">{value.label}:</strong>
                    <span className="text-black/70 ml-1">{value.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Indicadores clave */}
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { label: 'Artistas en catálogo', value: '3+', icon: '🎤', bgClass: 'bg-linear-to-br from-red-950/25 via-red-900/10 to-red-900/5 border-red-900/30 hover:from-red-900/35 hover:via-red-800/15 hover:to-red-900/10' },
          { label: 'Lanzamientos anuales', value: '12+', icon: '🎵', bgClass: 'bg-linear-to-br from-black/20 via-black/8 to-black/5 border-black/25 hover:from-black/30 hover:via-black/12 hover:to-black/8' },
          { label: 'Países alcanzados', value: '50+', icon: '🌍', bgClass: 'bg-linear-to-br from-gray-900/20 via-gray-900/8 to-gray-900/5 border-gray-800/25 hover:from-gray-800/30 hover:via-gray-800/12 hover:to-gray-800/8' },
        ].map((stat) => (
          <div
            key={stat.label}
            className={`group rounded-xl border p-6 text-center shadow-sm transition duration-200 hover:border-(--sam-red) hover:shadow-md ${stat.bgClass}`}
          >
            <div className="text-3xl mb-2 group-hover:scale-110 transition duration-300">{stat.icon}</div>
            <p className="text-3xl font-bold text-(--sam-red) mb-2">{stat.value}</p>
            <p className="text-xs font-medium text-black/60">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="rounded-2xl border bg-linear-to-r from-red-950/20 via-black/10 to-black/15 p-8 text-center shadow-sm border-red-900/25 transition duration-200 hover:shadow-lg hover:border-(--sam-red)">
        <p className="text-sm text-black/70 mb-4">
          💡 ¿Quieres ser parte de nuestra historia?
        </p>
        <p className="text-sm font-semibold text-black mb-6">
          Explora nuestro catálogo completo en la sección de Canciones y conoce a fondo a cada artista.
        </p>
        <a
          href="#artists"
          className="inline-flex items-center px-6 py-2.5 bg-(--sam-red) text-white rounded-lg text-sm font-semibold transition duration-200 hover:opacity-90 hover:shadow-lg active:scale-95"
        >
          Ver artistas →
        </a>
      </div>
    </section>
  )
}
