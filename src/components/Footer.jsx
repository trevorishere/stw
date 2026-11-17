import TradeMark from './TradeMark'
import { navLinks as NAV_LINKS } from '../data/navLinks'
import { useReveal } from '../hooks/useReveal'

const crossout = `${import.meta.env.BASE_URL}crossout-pink.svg`

export default function Footer() {
  const [ref, visible] = useReveal()
  return (
    <footer ref={ref} className={`bg-cobalt-dark [overflow-x:clip]${visible ? ' in-view' : ''}`}>
      <div className="page-container px-6 py-20 flex flex-col gap-16 tablet:px-16 tablet:py-20 expanded:px-24 expanded:py-[136px] desktop:px-24 desktop:py-[136px]">

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
        <div className="reveal-body flex flex-col gap-16">

          {/* Nav links — horizontal row at tablet+ */}
          <ul className="flex flex-col gap-6 list-none tablet:flex-row tablet:flex-wrap tablet:gap-x-8 tablet:gap-y-4 expanded:flex-row expanded:flex-wrap expanded:gap-x-8 desktop:flex-row desktop:flex-wrap desktop:gap-x-8">
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

          {/* Brand + tagline + copyright */}
          <div className="flex flex-col gap-1">
            <p className="font-figtree font-extrabold text-20 max-phone:text-18 leading-1-1 tracking-md uppercase text-warm-grey-dark whitespace-nowrap">
              Stein's Total Wellness<TradeMark size="md" />
            </p>
            <p className="font-figtree font-medium text-14 leading-1-5 tracking-xs text-warm-grey-dark
                          tablet:text-12 tablet:leading-1-2">
              A Dr. Aaron Steinberg Joint
            </p>
            <p className="font-figtree font-normal text-12 leading-1-2 tracking-xs text-warm-grey-dark tablet:text-11 mt-4">
              ©TM© 2026 Stein's Total Wellness. All rights reserved. All lefts reserved. All frequencies aligned.
            </p>

            {/* Disclaimer — a note in Dr. Stein's voice, then the plain version */}
            <div className="flex flex-col gap-2 mt-4 max-w-[640px]">
              <p className="font-figtree font-normal text-12 leading-1-5 tracking-xs text-warm-grey-dark tablet:text-11">
                A note from Dr. Stein: Everything on this site came to me in a state of total alignment, and I stand behind every word of it. My lawyer, who has not done the work, asked me to add the following.
              </p>
              <p className="font-figtree font-normal text-12 leading-1-5 tracking-xs text-warm-grey-dark tablet:text-11">
                This site is parody and satire. Testimonials and client names are fictional, and photos are AI-generated. Aaron Steinberg is not a medical doctor, psychologist or licensed therapist, and nothing here is medical, mental health, legal or financial advice. No illegal products are offered.
              </p>
            </div>
          </div>

        </div>{/* end logo/nav/copyright block */}
      </div>
    </footer>
  )
}
