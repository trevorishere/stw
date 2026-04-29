const NAV_LINKS = [
  { href: '#offerings', label: 'Transformations' },
  { href: '#offerings', label: 'Embodiments' },
  { href: '#about',     label: 'About' },
  { href: '#products',  label: 'Shop' },
  { href: '#contact',   label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-grey10 border-t-2 border-grey16">
      <div className="max-w-[1440px] mx-auto w-full p-24 flex flex-col gap-10
                      max-tablet:px-6 max-tablet:py-12 max-phone:px-5 max-phone:py-8">

      <div className="flex items-start justify-between gap-8 max-tablet:flex-col">
        {/* Brand */}
        <div className="flex flex-col gap-2 max-w-[680px]">
          <p className="font-rubik font-medium text-[20px] leading-7 tracking-[2px] uppercase text-cream whitespace-nowrap">
            Stein's Total Wellness<sup className="font-normal text-[12.9px] tracking-normal">©TM©</sup>
          </p>
          <p className="font-rubik font-normal text-[11px] leading-4 tracking-[0.3px] text-cream">
            A Dr. Aaron Steinberg Joint
          </p>
        </div>

        {/* Nav links */}
        <ul className="flex flex-wrap gap-6 list-none max-phone:gap-4">
          {NAV_LINKS.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-rubik font-semibold text-[10px] leading-[15px] tracking-[1.8px] uppercase
                           text-cream no-underline hover:opacity-70"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Copyright */}
      <div className="border-t border-cream/50 pt-6">
        <p className="font-rubik font-normal text-[11px] leading-4 tracking-[0.3px] text-cream">
          <span className="text-[7px]">© TM © </span>
          2026 Stein's Total Wellness. All rights reserved. All lefts reserved. All frequencies aligned.
        </p>
      </div>

      </div>
    </footer>
  )
}
