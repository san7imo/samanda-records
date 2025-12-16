// src/data/tracks.ts
export type Track = {
  id: string
  title: string
  artistName: string
  year: number
  duration: string
  coverImage?: string
}

export const TRACKS: Track[] = [
  {
    id: 't1',
    title: 'Midnight Echoes',
    artistName: 'Artista Uno',
    year: 2024,
    duration: '3:25',
  },
  {
    id: 't2',
    title: 'Neón en la ciudad',
    artistName: 'Artista Dos',
    year: 2024,
    duration: '3:05',
  },
  {
    id: 't3',
    title: 'Ritual',
    artistName: 'Artista Tres',
    year: 2023,
    duration: '3:48',
  },
]
