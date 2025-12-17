import samanda3 from '../assets/banners/Samanda_3.png'
import samanda4 from '../assets/banners/Samanda_4.png'
import samanda5 from '../assets/banners/Samanda_5.png'

export type Event = {
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

export const UPCOMING_EVENTS: Event[] = [
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
    flayerImage: samanda3,
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
    flayerImage: samanda4,
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
    flayerImage: samanda5,
  },
]
