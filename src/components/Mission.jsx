const CREDS = 'DD, MA, PCC, CPCC, CSE, NTP, CPT, CNC, CWC, BPBJJ, BDSW, L1PG, RLT, DMCC, LMA, L12GCC'

export default function Mission() {
  return (
    <section className="bg-productBg">
      <div className="max-w-[1440px] mx-auto w-full px-28 pt-[120px] pb-[136px] flex flex-col gap-8
                      max-tablet:px-6 max-tablet:py-16 max-phone:px-6 max-phone:py-16 max-phone:gap-12">

        <h2 className="font-figtree font-black text-[64px] leading-[56px] tracking-[2px] uppercase
                       max-tablet:text-[44px] max-tablet:leading-[48px] max-phone:text-2xl max-phone:leading-6 max-phone:tracking-[1px]">
          <span className="text-dark">We're On<br />a </span>
          <span className="text-purple">Mission</span>
        </h2>

        {/* Two-column layout */}
        <div className="flex gap-6 items-start max-tablet:flex-col">

          {/* Left: mission body copy */}
          <div className="flex-1 min-w-0">
            <div className="mission-body font-dmSans text-[20px] leading-[30px] tracking-[0.2px] text-dark
                            max-phone:text-[14px] max-phone:leading-[22px]">
              <p>
                When you claim your thought leadership—when you own your mission, articulate your vision,
                resource your nervous system, optimize your protocols, scale your containers, stop eating{' '}
                <em>dangerous</em> seed oils, and cross-post about it with a photo of yourself staring into
                the middle distance on a cliff—everything begins to align.
              </p>
              <p>
                Your legacy is more than the organic, fresh-squeezed, green juice you drink; it's the field
                you generate when you walk into a room and everyone can just feel that you've done plant
                medicine. This what we help you claim.
              </p>
              <p>
                <strong>We won't stop until we Save The World.</strong>
                <sup className="text-[13px] font-normal max-phone:text-[9px]">©™©</sup>
              </p>
            </div>
          </div>

          {/* Right: blockquote + attribution */}
          <div className="flex-1 min-w-0 flex flex-col gap-6 pl-24 max-tablet:pl-0 max-tablet:pt-4">
            <blockquote className="blockquote-hanging font-bitter font-normal text-[28px] leading-[40px] text-dark">
              "True wellness isn't about doing the work. It's about embodying the work. And then monetizing
              the embodiment. And then disrupting the monetization. Sustainably."
            </blockquote>

            <div className="flex flex-col gap-1">
              <p className="font-figtree font-bold text-[16px] leading-6 tracking-[1px] uppercase text-dark max-phone:text-[12px]">
                Dr. Aaron Steinberg
              </p>
              <p className="font-figtree font-normal text-[14px] leading-[22px] text-dark opacity-70 max-phone:text-[10px]">
                {CREDS}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
