import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Featured from './components/Featured'
import Mission from './components/Mission'
import Offerings from './components/Offerings'
import Products from './components/Products'
import Testimonial from './components/Testimonial'
import About from './components/About'
import Donate from './components/Donate'
import Footer from './components/Footer'

function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
}

function smoothScrollTo(targetY, duration) {
  const startY = window.scrollY
  const diff = targetY - startY
  const startTime = performance.now()
  function step(now) {
    const progress = Math.min((now - startTime) / duration, 1)
    window.scrollTo(0, startY + diff * easeInOut(progress))
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

export default function App() {
  useEffect(() => {
    function handleClick(e) {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute('href').slice(1)
      const target = id ? document.getElementById(id) : null
      if (id && !target) return
      e.preventDefault()
      const navHeight = window.innerWidth >= 900 ? 96 : 80
      const targetY = target
        ? target.getBoundingClientRect().top + window.scrollY - navHeight
        : 0
      smoothScrollTo(targetY, 1000)
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Featured />
        <Mission />
        <Offerings />
        <Testimonial />
        <Products />
        <About />
        <Donate />
      </main>
      <Footer />
    </>
  )
}
