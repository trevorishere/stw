import { useState } from 'react'
import TradeMark from './TradeMark'

const links = [
  { href: '#offerings', label: 'Transformations' },
  { href: '#empire',    label: 'Embodiments' },
  { href: '#products',  label: 'Shop' },
  { href: '#about',     label: 'About' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  function close() { setOpen(false) }

  return (
    <>
      <nav className="sticky top-0 z-nav bg-cream">
        <div className="page-container flex items-center justify-between px-[80px] h-[72px] max-tablet:px-6 max-phone:h-[56px]">

          {/* Brand — Figtree Black, ©TM© inline on same baseline */}
          <a
            href="#"
            className="font-figtree font-extrabold text-[20px] max-tablet:text-[16px] tracking-[1px] uppercase text-dark no-underline whitespace-nowrap"
          >
            <span className="max-phone:hidden">Stein's Total Wellness</span>
            <span className="hidden max-phone:inline">STW</span><TradeMark size="sm" />
          </a>

          {/* Desktop nav links */}
          <ul className="hidden tablet:flex items-center gap-6 list-none h-full">
            {links.map(link => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="flex items-center font-figtree font-semibold text-[14px] tracking-[1px] uppercase text-dark no-underline opacity-60 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className="tablet:hidden bg-transparent border-none text-2xl leading-none cursor-pointer text-dark p-1"
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
        className="tablet:hidden flex flex-col bg-cream fixed top-[72px] max-phone:top-[56px] left-0 w-full z-navDrawer overflow-hidden"
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
            className="block px-6 py-[18px] font-figtree font-semibold text-base tracking-[1px] uppercase text-dark no-underline text-right"
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  )
}
