const CREDS = 'DD · MA · PCC · CPCC · CSE · NTP · CPT · CNC · CWC · BPBJJ · BDSW · L1PG · RLT · DMCC · LMA · L12GCC'

export default function About() {
  return (
    <section id="about" className="bg-accent p-24 flex justify-center
                                   max-tablet:px-6 max-tablet:py-16 max-phone:px-5 max-phone:py-12">
      <div className="flex flex-col gap-4 w-full">

        <p className="font-dmMono text-[16px] leading-6 tracking-[2px] uppercase text-grey23">
          about
        </p>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="font-rubik font-semibold text-[48px] leading-16 tracking-[2px] uppercase text-dark
                           max-tablet:text-[36px] max-tablet:leading-[44px] max-phone:text-[28px] max-phone:leading-9">
              Dr. Aaron Steinberg
            </h2>

            <p className="border-t border-b border-grey23/25 py-[17px] font-dmSans font-medium text-[20px] leading-8
                          text-grey23 max-phone:text-base max-phone:leading-7">
              {CREDS}
            </p>
          </div>

          <div className="flex flex-col gap-12">
            <div className="about-bio-text font-dmSans font-medium text-[20px] leading-8 text-grey23
                            max-phone:text-base max-phone:leading-7">
              <p>
                After his last breakdown, Dr. Steinberg knew that he HAD to help people and become a coach so that
                they didn't have to experience the trauma he experienced in the corporate world. For over 20 years,
                he's worked with 196,000+ people to make their lives soar and reach maximum fulfillment.
              </p>
              <p>
                After expanding to business leadership coaching, in the last three years alone, he's worked with
                75,000 of the top leaders in their fields from entrepreneurship to business leadership to
                entrepreneurial business. Does this sound like you? He has over 15 certifications with 10s more on
                the way, including a purchased Doctor of Divinity, an actually legitimate Master's in Psychology,
                and other real therapy trainings. He's been meditating since he was five — not originally by choice.
              </p>
              <p>
                He's a purple belt in Brazilian Jiu-Jitsu. He's spent tens of thousands of dollars on thousands of
                hours of workshops, therapy, retreats, and trainings, and probably (definitely) became a practitioner
                more to work out his own shit than anything else.
              </p>
              <p>
                Everything he makes comes out of a genuine obsession with psychology, spirituality, and wellbeing,
                thinking about who we are, why we do what we do, and how to close the gap between where we are and
                where we want to be. This is for people who are tired of being over-promised the answer and want to
                grapple with the questions — sincerely, but without losing the ability to laugh about it.
                Sustainably.
              </p>
            </div>

            <div>
              <a
                href="#contact"
                className="inline-block px-9 py-5 border-2 border-dark font-rubik font-bold
                           text-[16px] leading-4 tracking-[2px] uppercase text-dark no-underline
                           hover:bg-dark hover:text-accent transition-colors"
              >
                Book Your Free Discovery Session
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
