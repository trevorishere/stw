const CREDS = 'DD  ·  MA  ·  PCC  ·  CPCC  ·  CSE  ·  NTP  ·  CPT  ·  CNC  ·  CWC  ·  BPBJJ  ·  BDSW  ·  L1PG  ·  RLT  ·  DMCC  ·  LMA  ·  L12GCC'

export default function About() {
  return (
    <section id="about" className="bg-accent px-12 py-24 flex justify-center max-tablet:px-5 max-tablet:py-12 max-phone:px-5 max-phone:py-8">
      <div className="flex gap-6 w-full max-w-[1340px] max-tablet:flex-col">

        {/* Portrait placeholder */}
        <div className="bg-pearl border-2 border-dark flex-1 min-h-[353px] flex items-end justify-center pb-[34px] overflow-hidden
                        max-tablet:flex-none max-tablet:min-h-[220px] max-phone:min-h-[180px]">
          <span className="font-syne font-bold text-[10px] tracking-[2px] uppercase text-black/25">
            Dr. Steinberg portrait
          </span>
        </div>

        {/* Content panel */}
        <div className="bg-cream border border-grey10 flex-none w-[73%] p-12 pb-16 flex flex-col gap-4
                        max-tablet:w-full max-tablet:p-8 max-phone:p-5 max-phone:pb-8">

          <p className="font-syne font-bold text-base tracking-[3px] uppercase text-grey23/50 pb-4">
            About
          </p>

          <div className="flex flex-col gap-6">
            <div>
              <h2 className="font-syne font-extrabold [font-size:clamp(34px,6vw,80px)] [line-height:clamp(36px,5.6vw,72px)] tracking-[-0.8px] uppercase text-dark">
                Dr. Aaron<br />Steinberg
              </h2>
              <p className="border-t border-b border-black/15 py-[17px] mt-4 font-rubik font-medium [font-size:clamp(10px,1.15vw,13px)] [letter-spacing:clamp(0.2px,0.07vw,1px)] uppercase text-grey23 break-words">
                {CREDS}
              </p>
            </div>

            <div className="flex flex-col gap-[41px]">
              {/* .about-bio-text p + p margin handled in index.css */}
              <div className="about-bio-text font-rubik font-normal text-base leading-[26px] text-grey23 max-phone:text-[15px]">
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

              <a href="#contact"
                 className="inline-block px-[34px] py-[18px] font-syne font-bold text-[13px] tracking-[1.98px] uppercase no-underline border-2 border-dark bg-dark text-accent hover:opacity-90 self-start">
                Book Your Free Discovery Session
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
