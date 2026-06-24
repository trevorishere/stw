import { useState } from 'react'
import TradeMark from './TradeMark'
import { navLinks as links } from '../data/navLinks'

// Item animation durations (ms) — must match CSS
const ITEM_OUT_MS   = 200
const ITEM_STAGGER  = 50

export default function Nav() {
  const [open,    setOpen]    = useState(false)
  const [closing, setClosing] = useState(false)

  function openDrawer()  { setOpen(true) }

  function closeDrawer() {
    setClosing(true)
    setOpen(false) // roll up immediately — drawer hides items as it closes
    setTimeout(() => setClosing(false), 350)
  }

  function toggle() { open ? closeDrawer() : openDrawer() }
  function close()  { if (open) closeDrawer() }

  // Item animation class + delay
  function itemProps(i) {
    if (open && !closing) {
      // Open: top → bottom, index order
      return { className: 'nav-item-in', delay: i * ITEM_STAGGER }
    }
    if (closing) {
      // Close: bottom → top, reverse index order
      return { className: 'nav-item-out', delay: (links.length - 1 - i) * ITEM_STAGGER }
    }
    return { className: '', delay: 0 }
  }

  return (
    <>
      <nav className="sticky top-0 z-nav bg-cobalt-dark">
        <div className="page-container flex items-center justify-between h-[80px] px-6 tablet:pl-16 tablet:pr-14 expanded:h-[96px] expanded:px-16 desktop:h-[96px] desktop:px-[80px]">

          {/* Brand — Figtree Black, ©TM© inline on same baseline */}
          <a
            href="#"
            className="font-figtree font-extrabold text-18 tracking-md uppercase text-olive-lighter no-underline whitespace-nowrap"
          >
            <span className="max-phone:hidden">Stein's Total Wellness</span>
            <span className="hidden max-phone:inline">STW</span><TradeMark size="md" />
          </a>

          {/* Desktop nav links */}
          <ul className="hidden expanded:flex desktop:flex items-center gap-6 list-none h-full">
            {links.map(link => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="flex items-center font-figtree font-semibold text-14 tracking-lg uppercase text-warm-grey-dark no-underline hover:text-olive-lighter transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className="expanded:hidden desktop:hidden bg-transparent border-none cursor-pointer text-white p-1 flex items-center justify-center"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={toggle}
          >
            <span className={`nav-hamburger opacity-70${open ? ' is-open' : ''}`}>
              <span className="nav-hamburger-line nav-hamburger-line-top" />
              <span className="nav-hamburger-line nav-hamburger-line-mid" />
              <span className="nav-hamburger-line nav-hamburger-line-bot" />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className="expanded:hidden desktop:hidden bg-cobalt-dark fixed top-[80px] left-0 w-full z-navDrawer overflow-hidden"
        style={{
          maxHeight: open ? '400px' : '0',
          transition: open
            ? 'max-height 300ms cubic-bezier(0.34, 1.4, 0.64, 1)'
            : closing
              ? 'max-height 200ms cubic-bezier(0.42, 0, 0.58, 1)'
              : 'none',
        }}
      >
        <div className="flex flex-col pb-16">
          {links.map((link, i) => {
            const { className, delay } = itemProps(i)
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={close}
                className={`block px-6 tablet:px-16 py-[18px] font-figtree font-semibold text-16 tracking-lg uppercase text-white no-underline text-right ${className}`}
                style={className ? { animationDelay: `${delay}ms` } : {}}
              >
                {link.label}
              </a>
            )
          })}
        </div>
      </div>
    </>
  )
}
