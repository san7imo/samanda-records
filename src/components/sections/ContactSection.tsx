import type { FC, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { FiInstagram, FiYoutube, FiTwitter } from 'react-icons/fi'
import { SiSpotify } from 'react-icons/si'
import { SectionHeader } from '../ui/SectionHeader'

const SOCIALS = [
  { name: 'Instagram', icon: <FiInstagram size={20} />, url: '#' },
  { name: 'YouTube', icon: <FiYoutube size={20} />, url: '#' },
  { name: 'Spotify', icon: <SiSpotify size={20} />, url: '#' },
  { name: 'Twitter', icon: <FiTwitter size={20} />, url: '#' },
]

export const ContactSection: FC = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    alert('Formulario enviado. Te contactaremos pronto.')
  }

  return (
    <section id="contact" className="space-y-12 py-14 sm:py-18 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeader
          eyebrow="Contáctanos"
          title="Booking, demos, prensa y más."
          description="¿Tienes una propuesta musical? ¿Quieres colaborar con nosotros? Envíanos un mensaje y te responderemos lo antes posible."
        />
      </motion.div>

      <div className="grid gap-10">
        {/* FORM + INFO */}
        <div className="grid gap-8 lg:grid-cols-[1.25fr,0.75fr] lg:items-start">
          {/* Formulario */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-3xl border bg-linear-to-br from-red-950/15 via-red-900/5 to-white p-6 shadow-sm sm:p-8 border-red-900/25 transition duration-200 hover:shadow-md hover:border-(--sam-red)"
          >
            {/* Campos Nombre y Email */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2.5">
                <label
                  htmlFor="name"
                  className="text-xs font-semibold uppercase tracking-wider text-black/75"
                >
                  Nombre completo *
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black/85 placeholder:text-black/40 outline-none transition focus:border-[color:var(--sam-red)] focus:ring-2 focus:ring-[color:var(--sam-red)]/20"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="space-y-2.5">
                <label
                  htmlFor="email"
                  className="text-xs font-semibold uppercase tracking-wider text-black/75"
                >
                  Correo electrónico *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black/85 placeholder:text-black/40 outline-none transition focus:border-[color:var(--sam-red)] focus:ring-2 focus:ring-[color:var(--sam-red)]/20"
                  placeholder="correo@ejemplo.com"
                />
              </div>
            </div>

            {/* Asunto */}
            <div className="space-y-2.5">
              <label
                htmlFor="subject"
                className="text-xs font-semibold uppercase tracking-wider text-black/75"
              >
                Asunto *
              </label>
              <select
                id="subject"
                name="subject"
                required
                className="w-full cursor-pointer rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black/85 outline-none transition focus:border-[color:var(--sam-red)] focus:ring-2 focus:ring-[color:var(--sam-red)]/20"
              >
                <option value="">Selecciona un asunto</option>
                <option value="booking">Booking y actuaciones</option>
                <option value="demo">Envío de demo</option>
                <option value="press">Prensa y medios</option>
                <option value="sync">Sincronización</option>
                <option value="collaboration">Colaboración</option>
                <option value="other">Otro</option>
              </select>
            </div>

            {/* Mensaje */}
            <div className="space-y-2.5">
              <label
                htmlFor="message"
                className="text-xs font-semibold uppercase tracking-wider text-black/75"
              >
                Mensaje *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full resize-none rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black/85 placeholder:text-black/40 outline-none transition focus:border-[color:var(--sam-red)] focus:ring-2 focus:ring-[color:var(--sam-red)]/20"
                placeholder="Cuéntanos brevemente qué necesitas..."
              />
            </div>

            {/* Botón Submit */}
            <button
              type="submit"
              className="w-full rounded-xl bg-[color:var(--sam-red)] px-6 py-3.5 text-sm font-semibold text-white transition duration-200 hover:opacity-90 hover:shadow-md active:scale-[0.99]"
            >
              Enviar mensaje
            </button>

            <p className="text-[11px] leading-relaxed text-black/55">
              Nota: este formulario es una base visual. En la siguiente fase lo
              conectamos a correo/CRM (Resend, Brevo, Formspark, etc.).
            </p>
          </form>

          {/* Columna lateral (resumen breve) */}
          <aside className="rounded-3xl border bg-linear-to-br from-black/12 via-black/5 to-white p-6 shadow-sm sm:p-8 border-black/18 transition duration-200 hover:shadow-md hover:border-(--sam-red)">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/55">
              Enfoques de contacto
            </p>
            <p className="mt-3 text-sm leading-relaxed text-black/70">
              Para agilizar la respuesta, selecciona el asunto correcto y
              describe tu solicitud con enlaces de referencia (EPK, press kit,
              demos privados, etc.).
            </p>
          </aside>
        </div>

        {/* BLOQUES HORIZONTALES 3 EN 1 (full width) */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Contacto directo */}
          <div className="flex h-full flex-col justify-between rounded-3xl border bg-linear-to-br from-red-950/20 via-red-900/8 to-white p-6 shadow-sm transition hover:border-(--sam-red) hover:shadow-md border-red-900/30">
            <div>
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-red-900/20 bg-red-950/10 text-lg">
                📧
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/55">
                Contacto directo
              </p>
              <p className="mt-2 text-sm leading-relaxed text-black/70">
                Si prefieres escribirnos directamente, este canal es ideal para
                prensa y solicitudes formales.
              </p>
            </div>

            <div className="mt-5">
              <a
                href="mailto:hello@samanda.records"
                className="inline-flex w-full items-center justify-center rounded-xl bg-[color:var(--sam-red)] px-4 py-3 text-xs font-semibold text-white transition hover:opacity-90"
              >
                hello@samanda.records
              </a>
              <p className="mt-2 text-[11px] text-black/55">
                Respuesta típica: 24–48 horas hábiles.
              </p>
            </div>
          </div>

          {/* Redes sociales */}
          <div className="flex h-full flex-col justify-between rounded-3xl border bg-linear-to-br from-black/15 via-black/6 to-white p-6 shadow-sm transition hover:border-(--sam-red) hover:shadow-md border-black/22">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-black/55 mb-4">
                Redes sociales
              </p>
              <p className="text-sm leading-relaxed text-black/70">
                Síguenos y revisa novedades, lanzamientos y contenido del sello.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-center gap-4">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-black/10 bg-black/2 text-black/70 transition hover:border-(--sam-red) hover:bg-(--sam-red) hover:text-white hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Horario */}
          <div className="flex h-full flex-col justify-between rounded-3xl border bg-linear-to-br from-gray-900/15 via-gray-900/5 to-white p-6 shadow-sm transition hover:border-(--sam-red) hover:shadow-md border-gray-800/22">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-black/55 mb-4">
                Horario de respuesta
              </p>
              <p className="text-sm leading-relaxed text-black/70">
                Respondemos a todos los mensajes en máximo{' '}
                <strong className="text-black">48 horas</strong>.
              </p>
            </div>

            <div className="mt-5 rounded-2xl border border-gray-800/20 bg-linear-to-br from-gray-900/10 to-gray-900/5 p-4">
              <p className="text-xs font-semibold text-black/75">
                Atención general
              </p>
              <p className="mt-2 text-xs text-black/65">
                Lunes a viernes, 9:00 - 18:00 (hora Colombia).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
