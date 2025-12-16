import type { FC, ReactNode } from 'react'

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: ReactNode
  align?: 'left' | 'center'
}

const alignmentClasses: Record<NonNullable<SectionHeaderProps['align']>, string> =
  {
    left: 'items-start text-left',
    center: 'items-center text-center',
  }

export const SectionHeader: FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
}) => {
  return (
    <header className={`flex flex-col gap-4 ${alignmentClasses[align]}`}>
      {eyebrow ? (
        <p className="text-xs font-bold uppercase tracking-[0.32em] text-(--sam-red)">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="font-(--font-display) text-3xl sm:text-4xl tracking-tight text-black leading-tight">
        {title}
      </h2>

      {description ? (
        <p className="max-w-2xl text-base leading-relaxed text-black/70">
          {description}
        </p>
      ) : null}
    </header>
  )
}
