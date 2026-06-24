import Btn from './Btn'
import { CREDS } from '../constants'
import { useReveal } from '../hooks/useReveal'

const BASE = import.meta.env.BASE_URL
const aaronBgImg = `${BASE}aaron.png`

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

            {/* Image — 400×400 fixed at expanded/desktop, stacked at phone/tablet */}
            <div className="flex-none w-full h-[240px] min-w-0 tablet:h-[300px] expanded:[flex:0_1_400px] expanded:max-w-[400px] expanded:h-auto expanded:aspect-square expanded:order-2 desktop:[flex:0_1_400px] desktop:max-w-[400px] desktop:h-auto desktop:aspect-square desktop:order-2">
              <img
                src={aaronBgImg}
                alt="Dr. Aaron Steinberg"
                className="h-full w-full object-contain object-center"
                loading="lazy"
              />
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
                  leaders in entrepreneurship to business leadership to entrepreneurial business in the last 3
                  years alone. Does this sound like you? He has over 15 certifications with 10s more on the
                  way, including a purchased Doctor of Divinity, an actually legitimate Master's in Psychology,
                  and other real therapy trainings. He's been meditating since he was five—not originally by
                  choice.
                </p>
                <p>
                  He's a purple belt in Brazilian Jiu-Jitsu. He's spent tens of thousands of dollars on
                  thousands of hours of workshops, therapy, retreats, and trainings, and probably (definitely)
                  became a practitioner more to work out his own shit than anything else.
                </p>
                <p>
                  Everything he makes comes out of a genuine obsession with psychology, spirituality, and
                  wellbeing, thinking about who we are, why we do what we do, and how to close the gap between
                  where we are and where we want to be. This is for people who are tired of being over-promised
                  the answer and want to grapple with the questions—sincerely, but without losing the ability
                  to laugh about it. Sustainably.
                </p>
              </div>

              <Btn color="dark" href="#contact" className="self-center expanded:self-start desktop:self-start">
                Book Your Free Discovery Session
              </Btn>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
