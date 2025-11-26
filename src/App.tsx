// src/App.tsx
import type { FC } from 'react'
import { Layout } from './components/layout/Layout'
import { HeroSection } from './components/sections/HeroSection'
import { AboutSection } from './components/sections/AboutSection'
import { ArtistsSection } from './components/sections/ArtistsSection'
import { TracksSection } from './components/sections/TracksSection'
import { ContactSection } from './components/sections/ContactSection'

const App: FC = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ArtistsSection />
      <TracksSection />
      <ContactSection />
    </Layout>
  )
}

export default App
