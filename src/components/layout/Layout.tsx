import type { FC, ReactNode } from 'react'
import { Navbar } from './Navbar'
import { TopBanner } from './TopBanner'
import { Footer } from './Footer'

type LayoutProps = {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <TopBanner />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:py-16 md:py-20">{children}</main>
      <Footer />
    </div>
  )
}
