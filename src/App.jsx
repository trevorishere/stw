import Nav from './components/Nav'
import Hero from './components/Hero'
import Featured from './components/Featured'
import Mission from './components/Mission'
import Offerings from './components/Offerings'
import Products from './components/Products'
import Testimonial from './components/Testimonial'
import About from './components/About'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Featured />
        <Mission />
        <Offerings />
        <Products />
        <Testimonial />
        <About />
      </main>
      <Footer />
    </>
  )
}
