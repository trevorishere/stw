import { useState } from 'react'

const links = [
  { href: '#offerings', label: 'Transformations' },
  { href: '#empire',    label: 'Embodiments' },
  { href: '#products',  label: 'Shop' },
  { href: '#about',     label: 'About' },
  { href: '#contact',   label: 'Connect' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  function close() { setOpen(false) }

  return (
    <>
      <nav className="sticky top-0 z-[100] bg-dark">
        <div className="page-container flex items-center justify-between px-24 h-[72px] max-tablet:px-6 max-phone:h-[56px]">
          <a
            href="#"
            className="flex items-baseline gap-1 font-figtree font-extrabold text-[16px] tracking-[1.5px] uppercase text-muted no-underline"
          >
            <span className="max-phone:hidden">Stein's Total Wellness</span>
            <span className="hidden max-phone:inline">STW</span>
            <sup className="align-baseline relative bottom-[0.5em] font-normal text-[10px]">©TM©</sup>
          </a>

          {/* Desktop nav */}
          <ul className="hidden tablet:flex list-none h-full">
            {links.map(link => (
              <li key={link.label} className="flex">
                <a
                  href={link.href}
                  className="flex items-center px-4 font-figtree font-semibold text-[14px] tracking-[1.25px] uppercase text-muted no-underline hover:text-cream transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className="tablet:hidden bg-transparent border-none text-2xl leading-none cursor-pointer text-muted p-1"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(o => !o)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className="tablet:hidden flex flex-col bg-dark fixed top-[72px] max-phone:top-[56px] left-0 w-full z-[99] overflow-hidden"
        style={{
          maxHeight: open ? '400px' : '0',
          transition: 'max-height 200ms ease-in-out',
        }}
      >
        {links.map(link => (
          <a
            key={link.label}
            href={link.href}
            onClick={close}
            className="block px-6 py-[18px] font-figtree font-semibold text-base tracking-[1.25px] uppercase text-muted no-underline text-right"
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  )
}
