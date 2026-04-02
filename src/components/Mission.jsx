export default function Mission() {
  return (
    <section className="bg-dark px-24 py-[148px] max-tablet:px-6 max-tablet:py-16 max-phone:px-5 max-phone:py-14">
      <div className="max-w-[900px] flex flex-col gap-[38px]">

        <h2 className="font-syne font-extrabold text-[64px] leading-[60px] tracking-[-0.6px] uppercase text-accent
                       max-tablet:text-[48px] max-tablet:leading-[48px] max-phone:text-[40px] max-phone:leading-[40px]">
          we're<br />on a Mission
        </h2>

        {/* .mission-body p + p margin handled in index.css */}
        <div className="mission-body font-rubik font-extralight text-xl leading-9 tracking-[0.2px] text-white
                        max-tablet:text-lg max-tablet:leading-[30px] max-phone:text-base max-phone:leading-7">
          <p>
            True wellness isn't about doing the work. It's about embodying the work. And then monetizing the
            embodiment. And then disrupting the monetization. Sustainably.
          </p>
          <p>
            When you claim your thought leadership — when you own your mission, articulate your vision, resource your
            nervous system, optimize your protocols, scale your containers, stop eating DANGEROUS seed oils, and
            cross-post about it with a photo of yourself staring into the middle distance on a cliff — everything
            begins to align.
          </p>
          <p>
            Your legacy is more than the organic, fresh-squeezed, green juice you drink; it's the field you generate
            when you walk into a room and everyone can just feel that you've done plant medicine.
          </p>
        </div>

        <div className="border-l-4 border-accent pl-8">
          <p className="font-syne font-bold text-[54px] leading-[54px] tracking-[0.9px] uppercase text-accent
                        max-tablet:text-[36px] max-tablet:leading-[40px] max-phone:text-[28px] max-phone:leading-[32px] max-xs:text-[24px] max-xs:leading-7">
            This is what we help you claim.
          </p>
          <p className="font-syne font-bold text-[54px] leading-[54px] tracking-[0.9px] uppercase text-accent mt-1
                        max-tablet:text-[36px] max-tablet:leading-[40px] max-phone:text-[28px] max-phone:leading-[32px] max-xs:text-[24px] max-xs:leading-7">
            We won't stop until we SAVE THE WORLD.<sup className="text-[18px]">©™©</sup>
          </p>
        </div>

      </div>
    </section>
  )
}
