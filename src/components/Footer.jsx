const NAV_LINKS = [
  { href: '#offerings', label: 'Transformations' },
  { href: '#offerings', label: 'Embodiments' },
  { href: '#about',     label: 'About' },
  { href: '#products',  label: 'Shop' },
  { href: '#contact',   label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-grey10 border-t-2 border-grey16 px-12 py-12 flex items-start justify-between flex-wrap gap-8
                       max-tablet:px-6 max-tablet:py-8 max-tablet:flex-col max-phone:px-5 max-phone:py-7">

      <div className="flex flex-col gap-[3px]">
        <p className="font-rubik font-medium text-xl tracking-[2px] uppercase text-cream">
          Stein's Total Wellness<span className="font-light text-[12.9px]">©TM©</span>
        </p>
        <p className="font-rubik font-light text-[11px] text-cream">
          A Dr. Aaron Steinberg Joint
        </p>
      </div>

      <ul className="flex flex-wrap gap-0 list-none">
        {NAV_LINKS.map(link => (
          <li key={link.label}>
            <a
              href={link.href}
              className="block font-syne font-bold text-[10px] tracking-[1.8px] uppercase text-cream no-underline py-[7px] pr-5 hover:opacity-70"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <p className="w-full border-t border-grey16 pt-6 mt-2 font-rubik font-light text-[11px] tracking-[0.44px] text-cream max-phone:text-[10px]">
        © TM © 2026 Stein's Total Wellness. All rights reserved. All lefts reserved. All frequencies aligned.
      </p>

    </footer>
  )
}
