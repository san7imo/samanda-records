import type { FC, ReactNode } from 'react'
import { useEffect, useMemo, useState } from 'react'

type Slide = {
  src: string
  alt: string
}

type ImageCarouselProps = {
  slides: Slide[]
  intervalMs?: number
  title?: string
  description?: ReactNode
}

export const ImageCarousel: FC<ImageCarouselProps> = ({
  slides,
  intervalMs = 4500,
  title = 'Galería',
  description,
}) => {
  const safeSlides = useMemo(() => slides.filter(Boolean), [slides])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (safeSlides.length <= 1) return

    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % safeSlides.length)
    }, intervalMs)

    return () => window.clearInterval(id)
  }, [intervalMs, safeSlides.length])

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + safeSlides.length) % safeSlides.length)
  }

  const goNext = () => {
    setIndex((prev) => (prev + 1) % safeSlides.length)
  }

  if (safeSlides.length === 0) return null

  // Si no hay descripción, mostrar carrusel simple
  if (!description) {
    return (
      <section aria-label={title} className="space-y-3">
        <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-black shadow-sm">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {safeSlides.map((slide) => (
              <div key={slide.src} className="min-w-full flex items-center justify-center bg-black" style={{ aspectRatio: '1 / 1' }}>
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent" />

          <div className="absolute inset-x-0 bottom-3 flex items-center justify-between px-3">
            <div className="flex items-center gap-2">
              {safeSlides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Ir a la imagen ${i + 1}`}
                  className={`pointer-events-auto h-2 w-2 rounded-full border border-white/50 transition ${
                    i === index ? 'bg-(--sam-red)' : 'bg-white/60'
                  }`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>

            {safeSlides.length > 1 ? (
              <div className="pointer-events-auto flex items-center gap-2">
                <button
                  type="button"
                  onClick={goPrev}
                  className="rounded-full border border-white/30 bg-white/10 px-3 py-2 text-xs font-semibold text-white backdrop-blur transition hover:bg-white/20"
                  aria-label="Anterior"
                >
                  Anterior
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="rounded-full border border-white/30 bg-white/10 px-3 py-2 text-xs font-semibold text-white backdrop-blur transition hover:bg-white/20"
                  aria-label="Siguiente"
                >
                  Siguiente
                </button>
              </div>
            ) : null}
          </div>
        </div>

        <p className="text-xs text-black/60">
          Desliza o usa los controles para navegar.
        </p>
      </section>
    )
  }

  // Layout con descripción (2 columnas) - LADO A LADO
  return (
    <section aria-label={title} className="space-y-4">
      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        {/* Columna izquierda: Carrusel de imágenes - 50% */}
        <div className="flex-1 relative overflow-hidden rounded-2xl border border-black/10 bg-black shadow-sm order-2 lg:order-1">
          <div
            className="flex transition-transform duration-500 ease-out h-full"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {safeSlides.map((slide) => (
              <div key={slide.src} className="min-w-full flex items-center justify-center bg-black" style={{ aspectRatio: '0.8 / 1', minHeight: '400px' }}>
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent" />

          <div className="absolute inset-x-0 bottom-3 flex items-center justify-between px-3">
            <div className="flex items-center gap-1.5">
              {safeSlides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Ir a la imagen ${i + 1}`}
                  className={`pointer-events-auto h-1.5 w-1.5 rounded-full border border-white/50 transition ${
                    i === index ? 'bg-(--sam-red)' : 'bg-white/60'
                  }`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>

            {safeSlides.length > 1 ? (
              <div className="pointer-events-auto flex items-center gap-1">
                <button
                  type="button"
                  onClick={goPrev}
                  className="rounded-full border border-white/30 bg-white/10 px-2 py-1 text-xs font-semibold text-white backdrop-blur transition hover:bg-white/20"
                  aria-label="Anterior"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="rounded-full border border-white/30 bg-white/10 px-2 py-1 text-xs font-semibold text-white backdrop-blur transition hover:bg-white/20"
                  aria-label="Siguiente"
                >
                  →
                </button>
              </div>
            ) : null}
          </div>
        </div>

        {/* Columna derecha: Texto descriptivo - 50% */}
        <div className="flex-1 space-y-4 text-base leading-relaxed text-black/80 flex flex-col justify-center text-right order-1 lg:order-2">
          {description}
        </div>
      </div>

      <p className="text-xs text-black/60">
        Usa los controles para navegar por las imágenes.
      </p>
    </section>
  )
}
