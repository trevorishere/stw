import Btn from './Btn'
import { CREDS } from '../constants'
import { useReveal } from '../hooks/useReveal'

const BASE = import.meta.env.BASE_URL
const aaronBgImg = `${BASE}aaron_bg.png`

export default function About() {
  const [ref, visible] = useReveal()
  return (
    <section ref={ref} id="about" className={`bg-productBg scroll-mt-nav max-phone:scroll-mt-navMobile${visible ? ' in-view' : ''}`}>
      <div className="page-container px-24 max-tablet:px-16 pt-[112px] pb-[144px]
                      max-phone:px-6 max-phone:pt-[80px] max-phone:pb-[120px]">

        <div className="flex flex-col gap-8 max-tablet:gap-10">

          {/* Title + credentials — spans left 45% at desktop, full width at tablet- */}
          <div className="reveal-heading w-[45%] flex flex-col gap-2 max-tablet:w-full">
            <h2 className="section-heading text-dark">
              about<br />dr. aaron<br />steinberg
            </h2>
            <p className="credentials text-dark opacity-60
                          max-w-[90%] max-tablet:max-w-[80%] max-phone:max-w-full">
              {CREDS}
            </p>
          </div>

          {/* Image + text row — top-aligned */}
          <div className="flex gap-6 items-start max-tablet:flex-col max-tablet:gap-8">

            {/* Left — image, 45%, fixed 300px height at desktop/expanded */}
            <div className="flex-none w-[45%] min-w-0 pl-6 h-[320px]
                            max-tablet:w-full max-tablet:h-[300px] max-phone:h-[240px]">
              <img
                src={aaronBgImg}
                alt="Dr. Aaron Steinberg"
                className="h-full w-full object-contain object-left"
                loading="lazy"
              />
            </div>

            {/* Right — bio + CTA, 55%, 24px right padding */}
            <div className="reveal-body flex-none w-[55%] min-w-0 flex flex-col gap-[48px] pr-6
                            max-tablet:w-full max-tablet:pr-0 max-phone:gap-8">

              <div className="about-bio-text body-copy text-dark">
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

              <Btn color="dark" href="#contact" className="self-start max-tablet:self-center">
                Book Your Free Discovery Session
              </Btn>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
