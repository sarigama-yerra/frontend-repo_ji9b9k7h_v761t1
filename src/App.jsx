import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import About from './components/About'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="text-slate-800 bg-white">
      <Navbar />
      <main className="[scroll-behavior:smooth]">
        <Hero />
        <Services />
        <Projects />
        <About />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
