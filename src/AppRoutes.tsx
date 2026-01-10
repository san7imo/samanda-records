import type { FC } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { HeroSection } from './components/sections/HeroSection'
import { AboutSection } from './components/sections/AboutSection'
import { ArtistsSection } from './components/sections/ArtistsSection'
import { TracksSection } from './components/sections/TracksSection'
import { ReleasesSection } from './components/sections/ReleasesSection'
import { EventsSection } from './components/sections/EventsSection'
import { GallerySection } from './components/sections/GallerySection'
import { ContactSection } from './components/sections/ContactSection'
import { ArtistPage } from './pages/ArtistPage'
import { SoulPage } from './pages/SoulPage'
import { ConstructionPage } from './pages/ConstructionPage'

// Página principal con el sitio actual
const MainSitePage: FC = () => (
  <Layout>
    <HeroSection />
    <AboutSection />
    <ArtistsSection />
    <TracksSection />
    <EventsSection />
    <ReleasesSection />
    <GallerySection />
    <ContactSection />
  </Layout>
)

// Página de artista con layout
const ArtistPageWrapper: FC = () => (
  <Layout>
    <ArtistPage />
  </Layout>
)

// Página del alma con layout
const SoulPageWrapper: FC = () => (
  <Layout>
    <SoulPage />
  </Layout>
)

const AppRoutes: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ConstructionPage />} />
        <Route path="/construccion" element={<MainSitePage />} />
        <Route path="/artist/:id" element={<ArtistPageWrapper />} />
        <Route path="/soul" element={<SoulPageWrapper />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
