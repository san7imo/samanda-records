import type { FC, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface AnimatedSectionProps {
  children: ReactNode
  delay?: number
  className?: string
}

export const AnimatedSection: FC<AnimatedSectionProps> = ({
  children,
  delay = 0,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const AnimatedContainer: FC<{
  children: ReactNode
  className?: string
  staggerDelay?: number
}> = ({ children, className = '', staggerDelay = 0.1 }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0,
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
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className={className}
    >
      {Array.isArray(children) ? (
        children.map((child, idx) => (
          <motion.div key={idx} variants={itemVariants}>
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={itemVariants}>{children}</motion.div>
      )}
    </motion.div>
  )
}

export const AnimatedText: FC<{
  children: string
  className?: string
  delay?: number
}> = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay }}
      className={className}
    >
      {children}
    </motion.span>
  )
}

export const AnimatedButton: FC<{
  children: ReactNode
  className?: string
  onClick?: () => void
  href?: string
  as?: 'button' | 'a'
}> = ({ children, className = '', onClick, href, as = 'button' }) => {
  const Element = as === 'a' ? 'a' : 'button'

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {Element === 'a' ? (
        <a href={href} className={className}>
          {children}
        </a>
      ) : (
        <button onClick={onClick} className={className}>
          {children}
        </button>
      )}
    </motion.div>
  )
}
