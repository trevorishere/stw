import TradeMark from './TradeMark'
import { navLinks as NAV_LINKS } from '../data/navLinks'
import { useReveal } from '../hooks/useReveal'

const crossout = `${import.meta.env.BASE_URL}crossout-pink.svg`

export default function Footer() {
  const [ref, visible] = useReveal()
  return (
    <footer ref={ref} className={`bg-cobalt-dark [overflow-x:clip]${visible ? ' in-view' : ''}`}>
      <div className="page-container px-6 py-12 flex flex-col gap-20 tablet:px-16 tablet:py-16 expanded:px-24 expanded:py-[120px] desktop:px-24 desktop:py-[120px]">

        {/* Hero header — F*CK SAVE / THE WORLD in footer colors */}
        <div className="reveal-heading footer-hero">
          <div className="hero-text-block relative">
            <img src={crossout} className="hero-scratchout" aria-hidden="true" alt="" />
            <div className="hero-top-row">
              <div className="hero-fck-wrapper">
                <span className="hero-fck">F*CK</span>
              </div>
              <span className="hero-save">SAVE</span>
            </div>
            <div className="hero-the-world">THE WORLD</div>
          </div>
        </div>

        {/* Logo, nav links, copyright */}
        <div className="reveal-body flex flex-col gap-12">

        <div className="flex flex-col items-start gap-12 tablet:gap-8 expanded:flex-row expanded:justify-between expanded:gap-8 desktop:flex-row desktop:justify-between desktop:gap-8">
          <div className="flex flex-col gap-2">
            <p className="font-figtree font-extrabold text-20 leading-1-1 tracking-md uppercase text-warm-grey-dark whitespace-nowrap">
              Stein's Total Wellness<TradeMark size="md" />
            </p>
            <p className="font-figtree font-medium text-14 leading-1-5 tracking-xs text-warm-grey-dark
                          tablet:text-12 tablet:leading-1-2">
              A Dr. Aaron Steinberg Joint
            </p>
          </div>

          <ul className="flex flex-col gap-6 list-none tablet:flex-row tablet:flex-wrap expanded:flex-row expanded:flex-wrap desktop:flex-row desktop:flex-wrap">
            {NAV_LINKS.map(link => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-figtree font-semibold text-14 leading-1-5 tracking-lg uppercase
                             text-warm-grey-dark no-underline hover:text-olive-light transition-colors
                             tablet:text-13 tablet:leading-1-2"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="font-figtree font-normal text-12 leading-1-2 tracking-xs text-warm-grey-dark tablet:text-11">
          <p>©TM© 2026 Stein's Total Wellness. All rights reserved. All lefts reserved. All frequencies aligned.</p>
        </div>

        </div>{/* end logo/nav/copyright block */}
      </div>
    </footer>
  )
}
