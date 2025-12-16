import type { FC } from 'react'
import { motion } from 'framer-motion'
import isotipo from '../assets/logos/5. Isotipo_Samanda.png'
import samanda1 from '../assets/alma/1.png'
import samanda2 from '../assets/alma/2.png'

export const SoulPage: FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <main className="space-y-16 py-12 sm:py-16 md:py-20">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-3xl border bg-linear-to-br from-red-950/25 via-red-900/10 to-black/8 p-8 sm:p-12 md:p-16 shadow-sm border-red-900/30 transition duration-200 hover:shadow-md hover:border-(--sam-red)"
      >
        <motion.img
          src={isotipo}
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="pointer-events-none absolute -right-16 -top-16 h-80 w-80"
        />

        <div className="relative z-10 max-w-4xl">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block px-3 py-1.5 rounded-full bg-(--sam-red) text-white text-xs font-semibold uppercase tracking-wider mb-6"
          >
            El alma de Samanda
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl sm:text-6xl font-(--font-display) mb-6 leading-tight"
          >
            La filosofía detrás de cada nota
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg leading-relaxed text-black/75 max-w-2xl"
          >
            Samanda Records no es solo una disquera. Es un movimiento que celebra la
            diversidad sonora, la autenticidad artística y el impacto cultural de la
            música en nuestro mundo.
          </motion.p>
        </div>
      </motion.div>

      {/* Sección dedicada a Samanda - Diseño en bloques alternados */}
      <div className="space-y-12">
        {/* Bloque 1: Imagen izquierda, texto derecha */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Imagen */}
          <div className="order-2 md:order-1">
            <div className="rounded-2xl overflow-hidden border border-black/10 shadow-lg">
              <img
                src={samanda1}
                alt="Samanda - Mariela Torres Zambrano"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Texto */}
          <div className="order-1 md:order-2 space-y-6">
            <div>
              <p className="text-xs font-semibold text-(--sam-red) uppercase tracking-wider mb-3">
                La visión detrás del movimiento
              </p>
              <h2 className="text-3xl sm:text-4xl font-(--font-display) leading-tight mb-4">
                Una vida dedicada al servicio
              </h2>
            </div>

            <p className="text-base leading-relaxed text-black/75">
              Mariela Torres Zambrano, nacida en Bogotá y reconocida internacionalmente 
              como <strong className="text-black">Samanda</strong>, es una vidente, profesional y empresaria 
              con más de cuatro décadas de experiencia. Desde su infancia manifestó dones 
              especiales de intuición y clarividencia, los cuales más tarde consolidó con 
              estudios en comunicación y parapsicología.
            </p>

            <p className="text-base leading-relaxed text-black/75">
              Su historia está marcada por una profunda fe, especialmente en el Señor de 
              los Milagros de Buga, y por una vocación de servicio que la ha llevado a 
              orientar a miles de personas en asuntos familiares, laborales, amorosos y 
              espirituales.
            </p>
          </div>
        </div>

        {/* Bloque 2: Texto izquierda, imagen derecha */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Texto */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
              Música, medios y espiritualidad
            </h3>

            <p className="text-base leading-relaxed text-black/75">
              De igual manera, ha incursionado en la industria musical con la creación de 
              <strong className="text-black"> Samanda Records</strong>, un sello discográfico que nace con la 
              misión de visibilizar talento y generar oportunidades para artistas emergentes 
              y consolidados.
            </p>

            <p className="text-base leading-relaxed text-black/75">
              Con esta iniciativa, Samanda amplía su compromiso con la cultura 
              y las artes, integrando música, medios y espiritualidad bajo una misma visión. 
              A pesar de sus múltiples responsabilidades, mantiene un equilibrio entre su 
              papel como empresaria, autora, guía espiritual, esposa, madre e hija.
            </p>

            <p className="text-base leading-relaxed text-black/75">
              Su vida está guiada por la perseverancia, la fe y la pasión de dejar un legado 
              en cada proyecto que emprende.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-(--sam-red) text-white rounded-lg font-semibold hover:opacity-90 transition"
            >
              Conocer más
            </a>
          </div>

          {/* Imagen */}
          <div>
            <div className="rounded-2xl overflow-hidden border border-black/10 shadow-lg">
              <img
                src={samanda2}
                alt="Samanda - Mariela Torres Zambrano"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-8">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold"
        >
          Nuestros pilares
        </motion.h2>
        <motion.div
          className="grid gap-8 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {[
            {
              icon: '🎨',
              title: 'Autenticidad Artística',
              description:
                'Creemos en la libertad creativa y en dar espacio a voces genuinas que representan identidades reales y propuestas sonoras únicas.',
            },
            {
              icon: '🌍',
              title: 'Impacto Global',
              description:
                'Queremos llevar la música de Samanda Records a todos los rincones del mundo, creando conexiones entre culturas y audiencias.',
            },
            {
              icon: '👥',
              title: 'Comunidad Colaborativa',
              description:
                'Construimos un ecosistema donde artistas, productores, técnicos y fans trabajan juntos hacia un objetivo común.',
            },
            {
              icon: '🚀',
              title: 'Innovación Constante',
              description:
                'Exploramos nuevos géneros, formatos y tecnologías para mantener la música viva, fresca y relevante en la era digital.',
            },
          ].map((pilar, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`rounded-2xl border p-8 shadow-sm hover:shadow-md hover:border-(--sam-red) transition ${
                idx % 2 === 0
                  ? 'bg-linear-to-br from-red-950/20 via-red-900/8 to-white border-red-900/30'
                  : 'bg-linear-to-br from-black/15 via-black/6 to-white border-black/20'
              }`}
            >
              <div className="text-4xl mb-4">{pilar.icon}</div>
              <h3 className="text-xl font-bold mb-3">{pilar.title}</h3>
              <p className="text-black/70 leading-relaxed">{pilar.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Misión y Visión */}
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border bg-linear-to-br from-red-950/20 via-red-900/8 to-white p-8 shadow-sm hover:shadow-md hover:border-(--sam-red) transition border-red-900/30">
          <p className="text-xs font-semibold text-(--sam-red) uppercase tracking-wider mb-4">
            Nuestra Misión
          </p>
          <h3 className="text-2xl font-bold mb-4">Empoderar talento</h3>
          <p className="text-black/70 leading-relaxed text-base">
            Proveer una plataforma sólida y moderna donde artistas de todos los géneros
            puedan desarrollar sus carreras, conectar con audiencias globales y dejar una
            marca duradera en la industria musical mundial.
          </p>
        </div>

        <div className="rounded-2xl border bg-linear-to-br from-black/15 via-black/6 to-white p-8 shadow-sm hover:shadow-md hover:border-(--sam-red) transition border-black/20">
          <p className="text-xs font-semibold text-(--sam-red) uppercase tracking-wider mb-4">
            Nuestra Visión
          </p>
          <h3 className="text-2xl font-bold mb-4">Música sin límites</h3>
          <p className="text-black/70 leading-relaxed text-base">
            Ser reconocidos como un sello que celebra la diversidad y la innovación,
            donde la música trasciende barreras geográficas y culturales para crear
            experiencias transformadoras en todos los continentes.
          </p>
        </div>
      </div>

      {/* Proceso creativo */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Cómo trabajamos</h2>
        <div className="space-y-4">
          {[
            {
              step: '01',
              title: 'Descubrimiento',
              description:
                'Buscamos constantemente talento emergente y establecido que resuene con nuestra visión artística y cultural.',
            },
            {
              step: '02',
              title: 'Desarrollo',
              description:
                'Trabajamos codo a codo con artistas para perfeccionar su sonido, producción y estrategia de lanzamiento.',
            },
            {
              step: '03',
              title: 'Distribución',
              description:
                'Garantizamos que la música llegue a todas las plataformas principales manteniendo la calidad e integridad del arte.',
            },
            {
              step: '04',
              title: 'Promoción',
              description:
                'Implementamos estrategias personalizadas para maximizar el alcance y el impacto de cada lanzamiento en el mercado global.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`flex gap-6 rounded-2xl border p-8 shadow-sm hover:shadow-md hover:border-(--sam-red) transition ${
                idx % 2 === 0
                  ? 'bg-linear-to-r from-red-950/15 via-red-900/5 to-white border-red-900/25'
                  : 'bg-linear-to-r from-black/12 via-black/5 to-white border-black/18'
              }`}
            >
              <div className="shrink-0">
                <div className="w-16 h-16 rounded-full bg-(--sam-red) text-white flex items-center justify-center font-bold text-xl">
                  {item.step}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-black/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Valores secundarios */}
      <div className="rounded-3xl border bg-linear-to-r from-black via-black/95 to-red-950/30 p-12 text-white shadow-sm border-black/50 transition duration-200 hover:shadow-md hover:border-(--sam-red)">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Lo que nos define</h2>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            {[
              { label: 'Transparencia', value: 'Honestidad en cada relación' },
              { label: 'Excelencia', value: 'Calidad en cada detalle' },
              { label: 'Sostenibilidad', value: 'Crecimiento a largo plazo' },
              { label: 'Inclusión', value: 'Espacio para todos los géneros' },
            ].map((item, idx) => (
              <div key={idx} className="border-t border-white/30 pt-4">
                <p className="text-sm font-semibold text-red-400 mb-1">{item.label}</p>
                <p className="text-base text-white/90">{item.value}</p>
              </div>
            ))}
          </div>

          <p className="text-white/85 italic border-l-2 border-(--sam-red) pl-4">
            "En Samanda Records, creemos que la música es el lenguaje universal que une
            a la humanidad. Cada artista que acompaña es una voz que contribuye a esa
            conversación global."
          </p>
        </div>
      </div>

      {/* Call to action */}
      <div className="text-center space-y-8 py-12 rounded-3xl border bg-linear-to-br from-red-950/15 via-black/5 to-white p-8 shadow-sm border-red-900/20 transition duration-200 hover:shadow-md hover:border-(--sam-red)">
        <h2 className="text-3xl font-bold">Sé parte del movimiento</h2>
        <p className="text-lg text-black/70 max-w-2xl mx-auto">
          Si compartes nuestra visión y crees que tu música tiene cabida en Samanda Records,
          nos encantaría conocerte.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-4 bg-(--sam-red) text-white rounded-lg font-semibold hover:opacity-90 transition"
          >
            Enviar demo
          </a>
          <a
            href="#artists"
            className="px-8 py-4 border-2 border-(--sam-red) text-(--sam-red) rounded-lg font-semibold hover:bg-(--sam-red) hover:text-white transition"
          >
            Conocer artistas
          </a>
        </div>
      </div>
    </main>
  )
}
