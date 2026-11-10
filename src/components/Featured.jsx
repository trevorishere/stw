import { useReveal } from '../hooks/useReveal'

// Fake outlet marks (mockups). Original designs, not the outlets' real logos.
// One color (currentColor = yellow) so they sit together as a press bar.
const Steam = () => (
  <svg className="mark-icon" width="18" height="26" viewBox="0 0 18 26" fill="none" aria-hidden="true">
    <path d="M3 24c-2-3 2-5 0-8s2-5 0-8M9 24c-2-3 2-5 0-8s2-5 0-8M15 24c-2-3 2-5 0-8s2-5 0-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
)

const Leaf = () => (
  <svg className="mark-icon" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <path d="M3 19C3 9 9 3 19 3c0 10-6 16-16 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M3 19 13 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const logos = [
  { name: 'Yahoo!', mark: <span className="mark-yahoo">Yahoo!</span> },
  { name: 'Goop.blogspot', mark: <span className="mark-goop"><b>goop</b>.blogspot<span className="mark-goop-cursor">_</span></span> },
  { name: "Dave Asprey's Sauna", mark: (
    <span className="mark-sauna"><Steam /><span className="mark-stack"><small>Dave Asprey's</small><span>Sauna</span></span></span>
  ) },
  { name: 'The Life You Wish You Had', mark: <span className="mark-life">The Life You Wish You Had</span> },
  { name: 'A Back Issue of Playgirl', mark: (
    <span className="mark-stack mark-playgirl"><small>A Back Issue of</small><span>Playgirl</span></span>
  ) },
  { name: 'Wall St. Bets Reddit', mark: (
    <span className="mark-wsb"><span aria-hidden="true">▲</span>Wall St. Bets<small>on reddit</small></span>
  ) },
  { name: 'Heart Body Mind Centered Green', mark: (
    <span className="mark-green"><Leaf /><span className="mark-stack"><small>heart body mind</small><span>Centered Green</span></span></span>
  ) },
  { name: 'TheJoeRoganBlog.geocities', mark: (
    <span className="mark-stack mark-geo"><span>TheJoeRoganBlog</span><small>.geocities</small></span>
  ) },
]

// Duplicate for seamless loop — translateX(-50%) lands back on the start
const marqueeItems = [...logos, ...logos]

export default function Featured() {
  const [ref, visible] = useReveal()
  return (
    <section ref={ref} className={`bg-surface-darkest${visible ? ' in-view' : ''}`}>
      {/* Single padded container — overflow-hidden clips the ticker at the padding edge */}
      <div className="page-container px-6 pt-2 pb-[120px] flex flex-col gap-4 tablet:px-16 expanded:px-24 desktop:px-24">

        <p className="reveal-heading font-figtree font-extrabold text-24 leading-1 tracking-md uppercase text-olive-lighter
                      tablet:tracking-lg
                      expanded:leading-1-2 expanded:tracking-lg desktop:leading-1-2 desktop:tracking-lg">
          As Featured<br className="hidden max-phone:block" /> Manifesting In…
        </p>

        <div className="reveal-body overflow-hidden">
          <div className="marquee-track flex items-center gap-12 tablet:gap-16 w-max">
            {marqueeItems.map((logo, i) => (
              <div
                key={i}
                className="featured-mark text-yellow flex-shrink-0"
                role="img"
                aria-label={logo.name}
                aria-hidden={i >= logos.length ? 'true' : undefined}
              >
                {logo.mark}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
