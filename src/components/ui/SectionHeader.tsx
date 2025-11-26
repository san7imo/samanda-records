// src/components/ui/SectionHeader.tsx
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
    <header className={`flex flex-col gap-3 ${alignmentClasses[align]}`}>
      {eyebrow ? (
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-sm text-slate-300">{description}</p>
      ) : null}
    </header>
  )
}
