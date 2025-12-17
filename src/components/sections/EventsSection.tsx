import type { FC } from 'react'
import { motion } from 'framer-motion'
import { FiMapPin, FiCalendar, FiDollarSign } from 'react-icons/fi'
import { SectionHeader } from '../ui/SectionHeader'

type Event = {
  id: string
  title: string
  artist: string
  date: string
  time: string
  location: string
  city: string
  venue: string
  ticketLink?: string
  ticketPrice?: string
  type: 'Show' | 'Festival' | 'Presentación'
  flayerImage?: string
}

const UPCOMING_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Presentación DILONG en Vivo',
    artist: 'DILONG',
    date: '2025-01-25',
    time: '20:00',
    location: 'Bogotá, Colombia',
    city: 'Bogotá',
    venue: 'Teatro Metropolitano',
    type: 'Show',
    ticketLink: 'https://ticketmaster.com',
    ticketPrice: '$35.000 COP',
    flayerImage: '/src/assets/banners/Samanda_3.png',
  },
  {
    id: '2',
    title: 'Festival Samanda Records 2025',
    artist: 'Múltiples Artistas',
    date: '2025-02-14',
    time: '18:00',
    location: 'Medellín, Colombia',
    city: 'Medellín',
    venue: 'Parque Arvi',
    type: 'Festival',
    ticketLink: 'https://ticketmaster.com',
    ticketPrice: '$60.000 COP',
    flayerImage: '/src/assets/banners/Samanda_4.png',
  },
  {
    id: '3',
    title: 'Sesión Acústica - Artista Secundario',
    artist: 'Artista Secundario',
    date: '2025-03-01',
    time: '19:30',
    location: 'Cali, Colombia',
    city: 'Cali',
    venue: 'Sala Umbría',
    type: 'Presentación',
    ticketLink: 'https://ticketmaster.com',
    ticketPrice: '$25.000 COP',
    flayerImage: '/src/assets/banners/Samanda_5.png',
  },
]

export const EventsSection: FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="events" className="space-y-10 py-14 sm:py-18 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeader
          eyebrow="Eventos & Shows"
          title="Vive la música en vivo."
          description="Acompáñanos a nuestros próximos eventos y shows. Disfruta en directo la música de Samanda Records y conecta con nuestra comunidad."
        />
      </motion.div>

      <motion.div
        className="space-y-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {UPCOMING_EVENTS.map((event, idx) => {
          const eventDate = new Date(event.date)
          const isUpcoming = eventDate > new Date()

          return (
            <motion.article
              key={event.id}
              variants={itemVariants}
              whileHover={{ x: 8, transition: { duration: 0.3 } }}
              className={`group rounded-2xl border overflow-hidden transition duration-200 hover:border-(--sam-red) hover:shadow-lg ${
                idx % 2 === 0
                  ? 'bg-linear-to-r from-red-950/15 via-red-900/5 to-white border-red-900/20'
                  : 'bg-linear-to-r from-black/12 via-black/5 to-white border-black/18'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-stretch gap-0">
                {/* Flayer Image */}
                {event.flayerImage && (
                  <div className="w-full md:w-48 h-48 md:h-auto shrink-0 overflow-hidden">
                    <img
                      src={event.flayerImage}
                      alt={`Flayer - ${event.title}`}
                      className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                )}

                {/* Información del evento */}
                <div className="flex-1 p-6 flex flex-col md:justify-between gap-6">
                  {/* Type badge */}
                  <div className="flex items-center gap-3">
                    <span className="inline-block px-3 py-1.5 rounded-full bg-(--sam-red)/10 border border-(--sam-red)/30">
                      <p className="text-xs font-semibold text-(--sam-red) uppercase">
                        {event.type}
                      </p>
                    </span>
                    {isUpcoming && (
                      <span className="inline-block px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30">
                        <p className="text-xs font-semibold text-green-600 uppercase">
                          Próximamente
                        </p>
                      </span>
                    )}
                  </div>

                  {/* Título y artista */}
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-1 group-hover:text-(--sam-red) transition">
                      {event.title}
                    </h3>
                    <p className="text-sm text-black/70">{event.artist}</p>
                  </div>

                  {/* Detalles */}
                  <div className="flex flex-col sm:flex-row gap-6 pt-2">
                    {/* Fecha y hora */}
                    <div className="flex items-center gap-3">
                      <FiCalendar size={18} className="text-(--sam-red)" />
                      <div>
                        <p className="text-xs text-black/50 uppercase tracking-wider mb-0.5">
                          Fecha
                        </p>
                        <p className="text-sm font-semibold text-black">
                          {eventDate.toLocaleDateString('es-ES', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </p>
                        <p className="text-xs text-black/60 mt-1">{event.time}</p>
                      </div>
                    </div>

                    {/* Ubicación */}
                    <div className="flex items-center gap-3">
                      <FiMapPin size={18} className="text-(--sam-red)" />
                      <div>
                        <p className="text-xs text-black/50 uppercase tracking-wider mb-0.5">
                          Ubicación
                        </p>
                        <p className="text-sm font-semibold text-black">{event.venue}</p>
                        <p className="text-xs text-black/60 mt-1">{event.location}</p>
                      </div>
                    </div>

                    {/* Precio */}
                    {event.ticketPrice && (
                      <div className="flex items-center gap-3">
                        <FiDollarSign size={18} className="text-(--sam-red)" />
                        <div>
                          <p className="text-xs text-black/50 uppercase tracking-wider mb-0.5">
                            Precio
                          </p>
                          <p className="text-sm font-semibold text-(--sam-red)">
                            {event.ticketPrice}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <motion.a
                      href={event.ticketLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-6 py-3 bg-(--sam-red) text-white rounded-lg font-semibold transition duration-200 hover:opacity-90 w-full md:w-auto justify-center"
                    >
                      Comprar Entrada
                      <span className="ml-2">→</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.article>
          )
        })}
      </motion.div>

      {/* Empty State Option */}
      {UPCOMING_EVENTS.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-12 rounded-2xl border border-black/10 bg-linear-to-br from-black/5 to-white"
        >
          <p className="text-lg text-black/70">No hay eventos programados en este momento.</p>
          <p className="text-sm text-black/50 mt-2">
            Mantente atento a nuestras redes sociales para próximos anuncios.
          </p>
        </motion.div>
      )}
    </section>
  )
}
