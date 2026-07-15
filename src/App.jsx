import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import Stylist from './components/Stylist'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ServicesPage from './pages/ServicesPage'

function HomePage() {
  return (
    <>
      <Nav />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <Services />
        <Stylist />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  )
}
