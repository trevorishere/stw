import TradeMark from './TradeMark'

export default function Mission() {
  return (
    <section className="bg-[#2c2c2c]">
      <div className="page-container px-24 max-tablet:px-16 pt-[112px] pb-[120px]
                      max-phone:px-6 max-phone:py-[88px]">

        <div className="grid grid-cols-1 gap-y-6
                        tablet:grid-cols-[23fr_11fr_66fr] tablet:gap-y-0">

          <h2 className="section-heading text-white">Mission</h2>

          <div className="tablet:col-start-3 flex flex-col gap-1 text-cream max-tablet:pl-12 max-phone:pl-8">
            <p className="font-dmSans font-semibold text-[24px] leading-[32px] mb-2">
              True wellness isn't about doing the work. It's about embodying the work. And then
              monetizing the embodiment. And then disrupting the monetization. Sustainably.
            </p>
            <p className="body-copy">
              When you claim your thought leadership—when you own your mission, articulate your
              vision, resource your nervous system, optimize your protocols, scale your containers,
              stop eating <em>dangerous</em> seed oils, and cross-post about it with a photo of
              yourself staring into the middle distance on a cliff—everything begins to align.
            </p>
            <p className="body-copy">
              Your legacy is more than the organic, fresh-squeezed, green juice you drink; it's the
              field you generate when you walk into a room and everyone can just feel that you've done
              plant medicine. This what we help you claim.
            </p>
            <p className="body-copy font-bold">
              We won't stop until we Save The World.
              <TradeMark size="body" />
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
