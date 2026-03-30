import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import Stylist from './components/Stylist'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
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
