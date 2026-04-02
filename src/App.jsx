import Nav from './components/Nav'
import Hero from './components/Hero'
import Featured from './components/Featured'
import Mission from './components/Mission'
import Quote from './components/Quote'
import Offerings from './components/Offerings'
import Testimonial from './components/Testimonial'
import Products from './components/Products'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Featured />
        <Mission />
        <Quote />
        <Offerings />
        <Testimonial />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
