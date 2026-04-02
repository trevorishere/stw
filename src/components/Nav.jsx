import { useState } from 'react'

const links = [
  { href: '#offerings', label: 'Offerings' },
  { href: '#products',  label: 'Products' },
  { href: '#about',     label: 'Dr. Steinberg' },
  { href: '#contact',   label: 'Connect' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  function close() { setOpen(false) }

  return (
    <>
      <nav className="sticky top-0 z-[100] flex items-center justify-between bg-cream border-b border-dark px-12 h-16 max-tablet:px-6">
        <a
          href="#"
          className="flex items-baseline gap-2.5 font-rubik font-semibold text-xl tracking-[2px] uppercase text-dark no-underline"
        >
          Stein's Total Wellness
          <sup className="align-baseline relative bottom-[0.7em] font-normal text-[10px]">©™©</sup>
        </a>

        {/* Desktop nav */}
        <ul className="hidden tablet:flex list-none h-[62px]">
          {links.map(link => (
            <li key={link.href} className="flex">
              <a
                href={link.href}
                className="flex items-center px-5 border-l border-dark font-rubik font-normal text-sm tracking-[0.5px] uppercase text-dark no-underline hover:bg-black/[0.04]"
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
      </nav>

      {/* Mobile drawer */}
      <div
        className="tablet:hidden flex flex-col bg-cream border-b-2 border-dark fixed top-16 left-0 w-full z-[99] overflow-hidden"
        style={{
          maxHeight: open ? '400px' : '0',
          borderBottomWidth: open ? '1px' : '0',
          transition: 'max-height 200ms ease-in-out',
        }}
      >
        {links.map(link => (
          <a
            key={link.href}
            href={link.href}
            onClick={close}
            className="block px-6 py-[18px] border-t border-black/10 font-rubik font-normal text-base tracking-[0.5px] uppercase text-dark no-underline"
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  )
}
