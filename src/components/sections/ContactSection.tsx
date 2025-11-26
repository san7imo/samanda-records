// src/components/sections/ContactSection.tsx
import type { FC, FormEvent } from 'react'
import { SectionHeader } from '../ui/SectionHeader'

export const ContactSection: FC = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // En esta fase solo mostramos un placeholder.
    // Más adelante se conectará con backend o servicio de correo.
    // eslint-disable-next-line no-alert
    alert('Formulario de ejemplo. Aquí se conectará el envío real.')
  }

  return (
    <section id="contact" className="space-y-8 py-12 sm:py-16">
      <SectionHeader
        eyebrow="Contáctanos"
        title="Booking, demos y prensa."
        description="Este formulario sirve como referencia visual. En la versión definitiva se configurará con la lógica de envío que defina SamandaRecord (correo, CRM o herramienta de contacto)."
      />

      <div className="grid gap-8 md:grid-cols-[1.2fr,1fr]">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1">
              <label
                htmlFor="name"
                className="text-xs font-medium text-slate-200"
              >
                Nombre completo
              </label>
              <input
                id="name"
                name="name"
                className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-xs text-slate-50 outline-none ring-emerald-500/50 transition-shadow focus:ring-1"
                placeholder="Nombre de contacto"
              />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="email"
                className="text-xs font-medium text-slate-200"
              >
                Correo electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-xs text-slate-50 outline-none ring-emerald-500/50 transition-shadow focus:ring-1"
                placeholder="correo@ejemplo.com"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label
              htmlFor="subject"
              className="text-xs font-medium text-slate-200"
            >
              Asunto
            </label>
            <input
              id="subject"
              name="subject"
              className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-xs text-slate-50 outline-none ring-emerald-500/50 transition-shadow focus:ring-1"
              placeholder="Booking, demo, prensa, etc."
            />
          </div>

          <div className="space-y-1">
            <label
              htmlFor="message"
              className="text-xs font-medium text-slate-200"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full resize-none rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-xs text-slate-50 outline-none ring-emerald-500/50 transition-shadow focus:ring-1"
              placeholder="Cuéntanos brevemente qué necesitas."
            />
          </div>

          <button
            type="submit"
            className="rounded-full bg-emerald-500 px-6 py-2 text-xs font-semibold text-slate-950 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-emerald-400"
          >
            Enviar mensaje de prueba
          </button>
        </form>

        <div className="space-y-4 text-xs text-slate-300">
          <p>
            Los campos y estructura de este formulario son solo una base. En la
            versión final se ajustarán a los flujos de trabajo de SamandaRecord:
            atención a artistas, booking, sincronización, distribución, etc.
          </p>
          <p>
            También se podrá conectar con herramientas de terceros para gestionar
            los leads y mensajes que lleguen desde esta página.
          </p>
        </div>
      </div>
    </section>
  )
}
