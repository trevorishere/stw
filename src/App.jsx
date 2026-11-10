import { useEffect, useState } from 'react'
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
import ComingSoon from './components/ComingSoon'
import Apply from './components/Apply'

// Hash routes for the two stand-alone pages; any other hash shows the home page.
const PAGES = { 'coming-soon': ComingSoon, apply: Apply }
const currentRoute = () => window.location.hash.slice(1)

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
  const [route, setRoute] = useState(currentRoute)

  useEffect(() => {
    const onHash = () => setRoute(currentRoute())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  // Pages open at the top; a section hash (e.g. #offerings) scrolls to that section once home renders.
  useEffect(() => {
    if (PAGES[route]) { window.scrollTo(0, 0); return }
    const target = route ? document.getElementById(route) : null
    if (target) {
      const navHeight = window.innerWidth >= 900 ? 96 : 80
      window.scrollTo(0, target.getBoundingClientRect().top + window.scrollY - navHeight)
    }
  }, [route])

  useEffect(() => {
    function handleClick(e) {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute('href').slice(1)
      if (PAGES[id]) return
      // Leaving a page: the brand link goes back to the top of home
      if (!id && PAGES[currentRoute()]) { e.preventDefault(); window.location.hash = ''; return }
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
        {PAGES[route] ? (() => { const Page = PAGES[route]; return <Page /> })() : (
          <>
            <Hero />
            <Featured />
            <Mission />
            <Offerings />
            <Testimonial />
            <Products />
            <About />
            <Donate />
          </>
        )}
      </main>
      <Footer />
    </>
  )
}
