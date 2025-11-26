// src/data/artists.ts
export type Artist = {
  id: string
  name: string
  genre: string
  shortDescription: string
}

export const ARTISTS: Artist[] = [
  {
    id: '1',
    name: 'Artista Uno',
    genre: 'Pop Urbano',
    shortDescription:
      'Propuesta fresca con influencias de R&B y música electrónica.',
  },
  {
    id: '2',
    name: 'Artista Dos',
    genre: 'Reggaetón / Trap',
    shortDescription:
      'Sonido contundente orientado a la pista, con letras contemporáneas.',
  },
  {
    id: '3',
    name: 'Artista Tres',
    genre: 'Afrobeat / Fusión',
    shortDescription:
      'Fusión de ritmos latinos y africanos con una estética moderna.',
  },
]
