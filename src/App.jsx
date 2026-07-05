import { HashRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import Stylist from './components/Stylist'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AmazonPicks from './pages/AmazonPicks'
import ServicesPage from './pages/ServicesPage'

function HomePage() {
  return (
    <>
      <Nav />
      <main>
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
        <Route path="/picks" element={<AmazonPicks />} />
      </Routes>
    </HashRouter>
  )
}
