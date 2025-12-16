import type { FC } from 'react'

import slide3 from '../../assets/banners/Samanda_3.png'
import slide4 from '../../assets/banners/Samanda_4.png'
import slide5 from '../../assets/banners/Samanda_5.png'
import slide6 from '../../assets/banners/Samanda_6.png'
import { ImageCarousel } from '../ui/ImageCarousel'

export const GallerySection: FC = () => {
  return (
    <section id="gallery" className="space-y-12 sm:space-y-14 md:space-y-16">
      <ImageCarousel
        title="Carrusel Samanda"
        description={
          <div className="space-y-6 bg-linear-to-br from-black/12 via-black/5 to-white rounded-2xl p-8 border border-black/15 shadow-sm transition duration-200 hover:shadow-md hover:border-(--sam-red)">
            <div>
              <span className="inline-block px-3 py-1.5 rounded-full bg-(--sam-red) text-white text-xs font-semibold uppercase tracking-wider mb-4">
                Galería visual
              </span>
              <h2 className="text-3xl sm:text-4xl font-(--font-display) leading-tight mb-4">
                Explora nuestro universo visual
              </h2>
              <p className="text-base leading-relaxed text-black/70">
                Cada imagen cuenta una historia de Samanda Records. Desde momentos en estudio, 
                conciertos en vivo, hasta detalles del proceso creativo que hacen que nuestra 
                música sea única.
              </p>
            </div>

            <div className="space-y-4 bg-linear-to-br from-white/50 to-black/2 rounded-xl p-6 border border-black/8">
              <h3 className="font-semibold text-black">Lo que encontrarás:</h3>
              <ul className="space-y-3 text-sm text-black/70">
                <li className="flex items-start gap-3">
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-(--sam-red) mt-1.5" />
                  <span>Momentos detrás de cámaras del sello</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-(--sam-red) mt-1.5" />
                  <span>Eventos y lanzamientos especiales</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-(--sam-red) mt-1.5" />
                  <span>Colaboraciones y proyectos únicos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-(--sam-red) mt-1.5" />
                  <span>La esencia creativa de nuestros artistas</span>
                </li>
              </ul>
            </div>

            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-(--sam-red) text-white rounded-lg font-semibold hover:opacity-90 transition duration-200"
            >
              Colabora con nosotros
            </a>
          </div>
        }
        slides={[
          { src: slide3, alt: 'Samanda Records - Imagen 1' },
          { src: slide4, alt: 'Samanda Records - Imagen 2' },
          { src: slide5, alt: 'Samanda Records - Imagen 3' },
          { src: slide6, alt: 'Samanda Records - Imagen 4' },
        ]}
      />
    </section>
  )
}
