import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import About from './components/About'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { I18nProvider, useI18n } from './i18n'

function AppInner() {
  const { dir } = useI18n()
  return (
    <div className="text-slate-800 bg-white" dir={dir}>
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

function App() {
  return (
    <I18nProvider>
      <AppInner />
    </I18nProvider>
  )
}

export default App
