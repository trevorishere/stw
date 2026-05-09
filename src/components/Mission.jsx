export default function Mission() {
  return (
    <section className="bg-productBg">
      <div className="page-container px-28 pt-[112px] pb-[120px]
                      max-tablet:px-12 max-tablet:py-16
                      max-phone:px-6 max-phone:py-12">

        <div className="grid grid-cols-[1fr_2fr] gap-6
                        max-phone:grid-cols-1 max-phone:gap-8">

          <h2 className="section-heading text-dark opacity-80">Mission</h2>

          <div className="flex flex-col gap-1 body-copy text-dark">
            <p>
              <strong className="font-bold">True wellness isn't about doing the work.</strong>
              {' '}It's about embodying the work. And then monetizing the embodiment. And then
              disrupting the monetization. Sustainably.
            </p>
            <p>
              When you claim your thought leadership—when you own your mission, articulate your
              vision, resource your nervous system, optimize your protocols, scale your containers,
              stop eating <em>dangerous</em> seed oils, and cross-post about it with a photo of
              yourself staring into the middle distance on a cliff—everything begins to align.
            </p>
            <p>
              Your legacy is more than the organic, fresh-squeezed, green juice you drink; it's the
              field you generate when you walk into a room and everyone can just feel that you've done
              plant medicine. This what we help you claim.
            </p>
            <p className="font-bold">
              We won't stop until we Save The World.
              <sup className="font-normal text-[11px] max-phone:text-[10px]">©TM©</sup>
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
