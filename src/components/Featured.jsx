import { useReveal } from '../hooks/useReveal'

const logos = [
  'Yahoo!',
  'Goop.blogspot',
  "Dave Asprey's Sauna",
  'The Life You Wish You Had',
  'A Back Issue of Playgirl',
  'Wall St. Bets Reddit',
  'Heart Body Mind Centered Green',
  'TheJoeRoganBlog.geocities',
]

// Duplicate for seamless loop — translateX(-50%) lands back on the start
const marqueeItems = [...logos, ...logos]

export default function Featured() {
  const [ref, visible] = useReveal()
  return (
    <section ref={ref} className={`bg-surface-darker${visible ? ' in-view' : ''}`}>
      {/* Single padded container — overflow-hidden clips the ticker at the padding edge */}
      <div className="page-container px-6 py-[112px] flex flex-col gap-4 tablet:px-16 expanded:px-24 desktop:px-24">

        <p className="reveal-heading font-figtree font-extrabold text-24 leading-1 tracking-md uppercase text-white
                      tablet:tracking-lg
                      expanded:leading-1-2 expanded:tracking-lg desktop:leading-1-2 desktop:tracking-lg">
          As Featured<br className="hidden max-phone:block" /> Manifesting In…
        </p>

        <div className="reveal-body overflow-hidden">
          <div className="marquee-track flex gap-10 tablet:gap-12 w-max">
            {marqueeItems.map((logo, i) => (
              <span
                key={i}
                className="font-dmSans font-normal text-13 leading-1-5 tracking-caps uppercase text-yellow whitespace-nowrap flex-shrink-0 tablet:text-16 expanded:text-16 desktop:text-16"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
