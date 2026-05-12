import { useState, useEffect } from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Repos from './components/Repos'
import Staff from './components/Staff'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans antialiased text-slate-800 bg-white">
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <About />
        <Repos />
        <Staff />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
