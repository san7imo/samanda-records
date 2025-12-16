// src/data/artists.ts
import dilongImage from '../assets/artists/dilong.jpg'

export type Artist = {
  id: string
  name: string
  genre: string
  shortDescription: string
  fullDescription?: string
  image?: string
  bio?: string
  socialLinks?: {
    spotify?: string
    instagram?: string
    youtube?: string
    twitter?: string
    soundcloud?: string
    appleMusic?: string
    tiktok?: string
  }
  releases?: Release[]
}

export type Release = {
  id: string
  title: string
  type: 'Single' | 'EP' | 'Album'
  releaseDate: string
  coverImage?: string
}

export const ARTISTS: Artist[] = [
  {
    id: '1',
    name: 'DILONG',
    genre: 'Urbano / Reggaetón / Trap',
    shortDescription:
      'Artista urbano de La Bonita (Colombia), conocido como “La bestia de negro”.',
    fullDescription:
      'DILONG es un artista urbano colombiano con una propuesta directa y contemporánea, construida desde lo independiente y enfocada en comunidad digital. En sus perfiles se presenta como cantante y compositor, y mantiene presencia activa en plataformas y contenido audiovisual.',
    bio:
      'DILONG se identifica como “La bestia de negro” y se presenta como artista de La Bonita, Colombia. Su catálogo está disponible en plataformas de streaming y su contenido se apoya fuerte en redes y video (YouTube/Instagram).',
    image: dilongImage,
    socialLinks: {
      instagram:
        'https://www.instagram.com/dilong_music?igsh=bHYyM2VqMXN9Z2Zi&utm_source=qr',
      spotify:
        'https://open.spotify.com/artist/4on3Yi3TXmN9iyUAtLXaTH?si=ru-nWtp5QaCOpxVEBatvlw',
      soundcloud: 'https://on.soundcloud.com/bBsM4GzimtwjdGviTq',
      appleMusic: 'https://music.apple.com/es/artist/dilong/1609891235',
      youtube: 'https://youtube.com/@dilongmusic?si=w6gnKm0wKel_9Xfr',
      tiktok: 'https://www.tiktok.com/@dilong_oficial26?_r=1&_t=ZS-927oyK2PEav',
    },
    releases: [
      {
        id: 'd1',
        title: 'Gatita',
        type: 'Single',
        releaseDate: '2024-01-01',
      },
      {
        id: 'd2',
        title: 'Flete (feat. beat noise)',
        type: 'Single',
        releaseDate: '2025-05-22',
      },
      {
        id: 'd3',
        title: 'Volver a Amar',
        type: 'Single',
        releaseDate: '2025-01-01',
      },
      {
        id: 'd4',
        title: 'Garrafón',
        type: 'Single',
        releaseDate: '2025-01-01',
      },
    ],
  },

  {
    id: '2',
    name: 'Artista Dos',
    genre: 'Reggaetón / Trap',
    shortDescription:
      'Sonido contundente orientado a la pista, con letras contemporáneas.',
    fullDescription:
      'Artista Dos trae un sonido contundente y completamente orientado a la pista. Especializado en reggaetón y trap latino, sus producciones generan movimiento y enganche inmediato, con letras que hablan de la realidad contemporánea.',
    bio: 'Con raíces en la calle y visión de futuro, Artista Dos combina la esencia del reggaetón tradicional con elementos del trap moderno. Sus colaboraciones han resonado en plataformas digitales y espacios de concierto, consolidando un sonido único.',
    socialLinks: {
      spotify: '#',
      instagram: '#',
      youtube: '#',
    },
    releases: [
      {
        id: 'r3',
        title: 'Ritmo de la Calle',
        type: 'Album',
        releaseDate: '2024-05-20',
      },
      {
        id: 'r4',
        title: 'En Movimiento',
        type: 'Single',
        releaseDate: '2024-09-05',
      },
    ],
  },

  {
    id: '3',
    name: 'Artista Tres',
    genre: 'Afrobeat / Fusión',
    shortDescription:
      'Fusión de ritmos latinos y africanos con una estética moderna.',
    fullDescription:
      'Artista Tres es un maestro de la fusión sonora. Combinando ritmos africanos con influencias latinas y toques de modernidad, crea experiencias auditivas que trascienden fronteras y géneros, estableciendo un puente entre culturas.',
    bio: 'Con formación en etnomusicología y pasión por la experimentación sonora, Artista Tres es un compositor e intérprete versátil. Su trabajo ha sido presentado en festivales internacionales y ha colaborado con músicos de diferentes disciplinas.',
    socialLinks: {
      spotify: '#',
      instagram: '#',
      youtube: '#',
      twitter: '#',
    },
    releases: [
      {
        id: 'r5',
        title: 'Puentes Sonoros',
        type: 'Album',
        releaseDate: '2024-03-10',
      },
      {
        id: 'r6',
        title: 'Ritmo Ancestral',
        type: 'Single',
        releaseDate: '2024-07-22',
      },
      {
        id: 'r7',
        title: 'Fusión del Tiempo',
        type: 'EP',
        releaseDate: '2024-10-01',
      },
    ],
  },
]
