import Btn from './Btn'
import { CREDS } from '../constants'
import { useReveal } from '../hooks/useReveal'

const aaronImg = `${import.meta.env.BASE_URL}aaron.png`

export default function About() {
  const [ref, visible] = useReveal()
  return (
    <section ref={ref} id="about" className={`bg-[#ffa3a3] scroll-mt-nav max-phone:scroll-mt-navMobile${visible ? ' in-view' : ''}`}>
      <div className="page-container px-24 py-[112px] max-tablet:px-16 flex flex-col gap-[48px]
                      max-phone:px-6 max-phone:pt-12 max-phone:pb-16 max-phone:gap-8">

        {/* Photo — tablet/mobile only, sits above the title */}
        <img
          src={aaronImg}
          alt="Dr. Aaron Steinberg"
          className="tablet:hidden w-[193px] h-[193px] object-cover object-bottom rounded-full shrink-0
                     max-phone:w-[112px] max-phone:h-[112px] max-phone:object-top"
          loading="lazy"
        />

        {/* Title + content: 24px gap at tablet/mobile, 48px at desktop */}
        <div className="flex flex-col gap-6 tablet:gap-[48px]">

          {/* Title block */}
          <div className="reveal-heading flex flex-col gap-2">
            <h2 className="section-heading text-dark">
              about<br />dr. aaron steinberg
            </h2>
            <p className="font-figtree font-semibold text-[14px] leading-[22px] tracking-[1px] text-dark opacity-60
                          max-phone:text-[12px] max-phone:leading-[18px] max-phone:tracking-[0.5px]">
              {CREDS}
            </p>
          </div>

          {/* Main row — bio left, photo right at desktop only */}
          <div className="reveal-body flex gap-6 items-start">

            {/* Bio + button */}
            <div className="flex-1 min-w-0 flex flex-col gap-[48px] max-phone:gap-8">
              <div className="about-bio-text body-copy text-dark max-phone:text-[16px] max-phone:leading-[24px]">
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
              <Btn color="dark" href="#contact" className="self-start">
                Book Your Free Discovery Session
              </Btn>
            </div>

            {/* Photo — desktop only, right column */}
            <div className="hidden tablet:flex flex-1 min-w-0 justify-center">
              <img
                src={aaronImg}
                alt="Dr. Aaron Steinberg"
                className="w-[323px] h-[323px] object-cover object-bottom rounded-full shrink-0"
                loading="lazy"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
