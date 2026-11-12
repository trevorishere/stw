import { useRef, useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const BASE = import.meta.env.BASE_URL

// Carousel order. `photo` is optional; without one the name and title stand alone.
const TESTIMONIALS = [
  {
    quote: <>I thought this was a joke, but I actually learned how to talk to my wife without us both wanting to die. Five stars.</>,
    name: 'Steve B.',
    title: 'Verified Client, Entrepreneur, Thought Leader, and Speaker',
    photo: `${BASE}steve-b.jpg`,
  },
  {
    quote: <>Seven Minute Wellness gave me back seven minutes a day. Not freed up. <em>Gave back.</em> My days are 24 hours and 7 minutes now, and my watch can't keep up.</>,
    name: 'Dana R.',
    title: 'Verified Client & Early Adopter',
  },
  {
    quote: <>One breathwork session with Dr. Stein and my credit score went up 140 points. My bank has no explanation.</>,
    name: 'Marcus T.',
    title: 'Verified Client, Founder',
  },
  {
    quote: <>I was 5'9" before STW. I'm 6'1" now. I'm not saying it's related, but I'm not saying it isn't.</>,
    name: 'Kevin L.',
    title: 'Verified Client, Thought Leader',
  },
  {
    quote: <>After one Voxer from Dr. Stein, my estranged brother called to apologize. I'm an only child.</>,
    name: 'Priya S.',
    title: 'Verified Client, Speaker',
  },
  {
    quote: <>I don't drive anymore. I just arrive.</>,
    name: 'Chad W.',
    title: 'Verified Client, Fully Embodied',
  },
  {
    quote: <>My wife and I hadn't spoken in eleven years. Now we finish each other's sentences. Last week she finished one I won't start until 2031.</>,
    name: 'Rob & Tina M.',
    title: 'Verified Couple',
  },
  {
    quote: <>I pulled the Nine of Hogs and woke up fluent in Portuguese.</>,
    name: 'Lauren K.',
    title: 'Verified Client, Divination Practitioner (Level 2)',
  },
  {
    quote: <>I tapped my Black Card at a restaurant that doesn't open until next spring. They seated me immediately.</>,
    name: 'Brent A.',
    title: "Black Card Member, Evolved Since '26",
  },
  {
    quote: <>My trauma used to cost me $300 a week in therapy. Now it makes me $40,000 a month. Honestly, I could use more trauma.</>,
    name: 'Jess P.',
    title: 'Verified Client, Seven-Figure Healer',
  },
  {
    quote: <>I can't make a single decision without Dr. Stein anymore, which he says is how I know it's working. He also told me to write this.</>,
    name: 'Mike D.',
    title: 'Verified Client, Empire Builder Cohort 3',
  },
  {
    quote: <>I've certified 40 practitioners beneath me, and each of them certified 40 more. I've never met any of them, but they all pay me. My mom is in it now.</>,
    name: 'Tara V.',
    title: 'Lineage Holder (Tier 4)',
  },
]

const Arrow = ({ flip }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" style={flip ? { transform: 'scaleX(-1)' } : undefined}>
    <path d="M7 3.5 12.5 9 7 14.5" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Testimonial() {
  const [ref, visible] = useReveal()
  const [active, setActive] = useState(0)
  const touch = useRef(null)
  const count = TESTIMONIALS.length
  const go = i => setActive((i + count) % count)

  // Swipe on touch screens — only a clearly sideways swipe changes the slide, so vertical scrolling is untouched
  const onTouchStart = e => { touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY } }
  const onTouchEnd = e => {
    if (!touch.current) return
    const dx = e.changedTouches[0].clientX - touch.current.x
    const dy = e.changedTouches[0].clientY - touch.current.y
    touch.current = null
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) go(active + (dx < 0 ? 1 : -1))
  }

  return (
    <section
      ref={ref}
      className={`bg-brand-yellow${visible ? ' in-view' : ''}`}
      aria-roledescription="carousel"
      aria-label="Client testimonials"
    >
      <div className="page-container px-6 py-[160px] tablet:px-16 expanded:px-24 desktop:px-24">

        {/* Inner container — centered column: big quote mark, quote, attribution, controls, all on one left edge */}
        <div className="mx-auto max-w-[720px] tablet:max-w-[540px] w-full flex flex-col gap-10">

          <div className="reveal-heading text-cobalt-dark">
            {/* The big mark stands in for inline quote marks (.testimonial-* in index.css) */}
            <svg className="testimonial-mark" viewBox="0 0 96 69" aria-hidden="true" focusable="false">
              <path d="M0 46C0 21 14 5 37 0l4 9C29 13 23 21 22 29a20 20 0 1 1-22 17Z" />
              <path d="M53 46C53 21 67 5 90 0l4 9C82 13 76 21 75 29a20 20 0 1 1-22 17Z" />
            </svg>

            {/* All slides share one grid cell, so the box is as tall as the longest quote and the page never jumps */}
            <div className="testimonial-slides" aria-live="polite" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
              {TESTIMONIALS.map((t, i) => {
                const on = i === active
                return (
                  <figure
                    key={t.name}
                    className={`testimonial-slide flex flex-col gap-6${on ? ' is-active' : ''}`}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${i + 1} of ${count}`}
                    aria-hidden={on ? undefined : 'true'}
                    {...(on ? {} : { inert: '' })}
                  >
                    <blockquote>
                      <p className="testimonial-quote">{t.quote}</p>
                    </blockquote>
                    <figcaption className="flex items-center gap-4">
                      {t.photo && (
                        <img src={t.photo} alt={t.name} className="w-[88px] h-[88px] tablet:w-[120px] tablet:h-[120px] expanded:w-[120px] expanded:h-[120px] desktop:w-[120px] desktop:h-[120px] rounded-full object-cover shrink-0" />
                      )}
                      <div className="flex flex-col">
                        <p className="font-figtree font-bold text-14 leading-1-5 tracking-xs text-cobalt-dark
                                      tablet:text-16 expanded:text-16 desktop:text-16">
                          {t.name}
                        </p>
                        <p className="font-figtree font-normal text-13 leading-1-5 tracking-md text-cobalt-dark
                                      tablet:font-medium tablet:text-14 expanded:font-medium expanded:text-14 desktop:font-medium desktop:text-14">
                          {t.title}
                        </p>
                      </div>
                    </figcaption>
                  </figure>
                )
              })}
            </div>
          </div>

          {/* Controls — previous / next and where you are */}
          <div className="reveal-body flex items-center gap-3 text-cobalt-dark">
            <button type="button" className="testimonial-nav" onClick={() => go(active - 1)} aria-label="Previous testimonial">
              <Arrow flip />
            </button>
            <button type="button" className="testimonial-nav" onClick={() => go(active + 1)} aria-label="Next testimonial">
              <Arrow />
            </button>
            <p className="ml-2 font-figtree font-bold text-14 tracking-md tabular-nums" aria-hidden="true">
              {active + 1} / {count}
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
