import ArrowRight from './ArrowRight'
import { CREDS } from '../constants'

const aaronImg = `${import.meta.env.BASE_URL}aaron.png`

export default function About() {
  return (
    <section id="about" className="bg-purple scroll-mt-[72px] max-phone:scroll-mt-[56px]">
      <div className="page-container px-28 pt-[112px] pb-[120px] flex flex-col gap-20
                      max-tablet:px-6 max-tablet:py-16 max-phone:px-6 max-phone:pt-12 max-phone:pb-20 max-phone:gap-8">

        <div className="flex flex-col gap-2">
          <h2 className="section-heading text-cream">
            about<br />dr. aaron steinberg
          </h2>
          <p className="font-figtree font-normal text-[14px] leading-[21px] tracking-[1px] text-cream">
            {CREDS}
          </p>
        </div>

        <div className="flex items-start justify-between gap-[116px] max-tablet:flex-col max-tablet:gap-10">

          <div className="w-[389px] flex-shrink-0 max-tablet:w-full max-tablet:max-w-[300px] max-phone:w-[112px] max-phone:max-w-[112px]">
            <img
              src={aaronImg}
              alt="Dr. Aaron Steinberg"
              className="w-full aspect-square object-cover rounded-full"
            />
          </div>

          <div className="flex flex-col gap-8 flex-1 min-w-0">
            <div className="about-bio-text body-copy text-cream">
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
            <a
              href="#contact"
              className="btn-outline border-cream text-cream hover:bg-cream hover:text-purple
                         max-phone:border max-phone:p-3 max-phone:border-2"
            >
              Book Your Free Discovery Session
              <ArrowRight />
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
