import { CREDS } from '../constants'
import { useReveal } from '../hooks/useReveal'

const BASE = import.meta.env.BASE_URL
const PHOTOS = [
  { cls: 'is-shades',    src: `${BASE}about-shades.jpg`,    alt: 'Dr. Aaron Steinberg in sunglasses' },
  { cls: 'is-bjj',       src: `${BASE}about-bjj.jpg`,       alt: 'Dr. Aaron Steinberg with a jiu-jitsu gold medal' },
  { cls: 'is-underwear', src: `${BASE}about-underwear.jpg`, alt: 'Dr. Aaron Steinberg in his underwear' },
]

export default function About() {
  const [ref, visible] = useReveal()
  return (
    <section ref={ref} id="about" className={`bg-olive-dark scroll-mt-nav${visible ? ' in-view' : ''}`}>
      <div className="page-container px-6 pt-[80px] pb-[120px] tablet:px-16 tablet:pt-[112px] tablet:pb-[144px] expanded:px-24 expanded:pt-[112px] expanded:pb-[144px] desktop:px-24 desktop:pt-[112px] desktop:pb-[144px]">

        <div className="flex flex-col gap-10 expanded:gap-16 desktop:gap-16">

          {/* Title + credentials — max-w-[680px] at expanded/desktop */}
          <div className="reveal-heading w-full flex flex-col gap-2 expanded:max-w-[680px] desktop:max-w-[680px]">
            <h2 className="section-heading text-cobalt-dark">
              about<br />dr. aaron steinberg
            </h2>
            <p className="credentials text-warm-grey-light
                          max-w-full tablet:max-w-[80%] expanded:max-w-full desktop:max-w-full">
              {CREDS}
            </p>
          </div>

          {/* Bio + image row — top-aligned, 64px gap */}
          <div className="flex flex-col gap-8 items-start expanded:flex-row expanded:items-start expanded:justify-center expanded:gap-16 desktop:flex-row desktop:items-start desktop:justify-center desktop:gap-16">

            {/* Photo collage — three overlapping circles (.about-collage in index.css).
                Up to 480px wide beside the bio at expanded/desktop, centered above it at phone/tablet */}
            <div className="flex-none w-full max-w-[480px] min-w-0 mx-auto expanded:mx-0 expanded:[flex:0_1_480px] expanded:min-w-[300px] expanded:order-2 desktop:mx-0 desktop:[flex:0_1_480px] desktop:order-2">
              <div className="about-collage">
                {PHOTOS.map(p => (
                  <img key={p.cls} className={p.cls} src={p.src} alt={p.alt} loading="lazy" />
                ))}
              </div>
            </div>

            {/* Bio + CTA — flex-1 max-w-[600px] at expanded/desktop */}
            <div className="reveal-body flex-none w-full min-w-0 flex flex-col gap-8 tablet:mx-auto tablet:max-w-[560px] tablet:gap-12 expanded:flex-auto expanded:max-w-[600px] expanded:gap-12 expanded:order-1 desktop:flex-auto desktop:max-w-[600px] desktop:gap-12 desktop:order-1">

              <div className="about-bio-text body-copy text-deep-gray">
                <p>
                  After his last breakdown, Dr. Steinberg knew that he HAD to help people and become a coach so
                  that they didn't have to experience the trauma he experienced in the corporate world. For over
                  20 years, he's worked with 196,000+ people to make their lives soar and reach maximum
                  fulfillment.
                </p>
                <p>
                  After expanding to business leadership coaching, he's worked with over 75,000 of the top
                  leaders in entrepreneurship to executive business leadership to visionary legacy in the last
                  3 years alone. Does this sound like you? He has over 15 certifications with 10s more on the
                  way, including a Doctor of Divinity, a Master's in Integral Counseling Psychology, and many
                  other therapy trainings. He's been meditating since he was five—not originally by choice, but
                  is a mindfulness master nonetheless.
                </p>
                <p>
                  He's a purple belt in Brazilian Jiu-Jitsu. He's spent tens of thousands of dollars – maybe the
                  most trained of any coach – on thousands of hours of workshops, therapy, retreats, and
                  trainings. While he originally became a practitioner more to work out his own shit than
                  anything else, he’s considered to be one of, if not the best coaches and wellness
                  practitioners in the world.
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
