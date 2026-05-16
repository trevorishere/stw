import TradeMark from './TradeMark'
import { navLinks as NAV_LINKS } from '../data/navLinks'

const crossout = `${import.meta.env.BASE_URL}crossout-pink.svg`

export default function Footer() {
  return (
    <footer className="bg-dark [overflow-x:clip]">
      <div className="page-container px-24 max-tablet:px-16 py-[120px] flex flex-col gap-[80px]
                      max-tablet:py-16 max-phone:px-6 max-phone:py-12">

        {/* Hero header — F*CK SAVE / THE WORLD in footer colors */}
        <div className="footer-hero">
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
        <div className="flex flex-col gap-[48px]">

        <div className="flex items-start justify-between gap-8 max-tablet:flex-col max-phone:gap-12">
          <div className="flex flex-col gap-2">
            <p className="font-figtree font-extrabold text-[20px] leading-[22px] tracking-[2px] uppercase text-muted whitespace-nowrap
                          max-phone:text-[14px]">
              Stein's Total Wellness<TradeMark size="footer" />
            </p>
            <p className="font-figtree font-medium text-[12px] leading-4 tracking-[0.3px] text-muted
                          max-phone:text-[11px] max-phone:leading-4">
              A Dr. Aaron Steinberg Joint
            </p>
          </div>

          <ul className="flex flex-wrap gap-6 list-none tablet:justify-end max-phone:flex-col max-phone:gap-6">
            {NAV_LINKS.map(link => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-figtree font-semibold text-[13px] leading-[15px] tracking-[1.5px] uppercase
                             text-muted no-underline hover:text-cream transition-colors
                             max-phone:text-[11px] max-phone:leading-[15px]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="font-figtree font-normal text-[12px] leading-4 tracking-[0.3px] text-muted max-phone:text-[10px]">
          <p><span className="text-[8px] max-phone:text-[6px]">© TM © </span>2026 Stein's Total Wellness. All rights reserved.</p>
          <p>All lefts reserved. All frequencies aligned.</p>
        </div>

        </div>{/* end logo/nav/copyright block */}
      </div>
    </footer>
  )
}
