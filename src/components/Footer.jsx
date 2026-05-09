const NAV_LINKS = [
  { href: '#offerings', label: 'Transformations' },
  { href: '#offerings', label: 'Embodiments' },
  { href: '#about',     label: 'About' },
  { href: '#products',  label: 'Shop' },
]

export default function Footer() {
  return (
    <footer className="bg-dark">
      <div className="page-container px-28 py-[120px] flex flex-col gap-16
                      max-tablet:px-12 max-tablet:py-16 max-phone:px-6 max-phone:py-12">

        <div className="flex items-start justify-between gap-8 max-tablet:flex-col">
          <div className="flex flex-col gap-2 max-w-[680px]">
            <p className="font-figtree font-extrabold text-[20px] leading-7 tracking-[2px] uppercase text-muted whitespace-nowrap">
              Stein's Total Wellness<sup className="font-medium text-[11px] tracking-normal max-phone:text-[8px]">©TM©</sup>
            </p>
            <p className="font-figtree font-normal text-[12px] leading-4 tracking-[0.3px] text-muted">
              A Dr. Aaron Steinberg Joint
            </p>
          </div>

          <ul className="flex flex-wrap gap-6 list-none max-phone:flex-col max-phone:gap-2">
            {NAV_LINKS.map(link => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-figtree font-bold text-[13px] leading-[15px] tracking-[1.5px] uppercase
                             text-muted no-underline hover:text-cream transition-colors max-phone:text-[10px]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="font-figtree font-normal text-[12px] leading-4 tracking-[0.3px] text-muted max-phone:text-[10px]">
          <span className="text-[7.74px]">© TM © </span>
          2026 Stein's Total Wellness. All rights reserved. All lefts reserved. All frequencies aligned.
        </p>

      </div>
    </footer>
  )
}
