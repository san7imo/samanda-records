// src/components/layout/Layout.tsx
import type { FC, ReactNode } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

type LayoutProps = {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 scroll-smooth">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-10 sm:py-16">{children}</main>
      <Footer />
    </div>
  )
}
