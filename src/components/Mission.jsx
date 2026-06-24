import TradeMark from './TradeMark'
import { useReveal } from '../hooks/useReveal'

export default function Mission() {
  const [ref, visible] = useReveal()
  return (
    <section ref={ref} className={`bg-brand-yellow${visible ? ' in-view' : ''}`}>
      <div className="page-container px-6 pt-[104px] pb-[120px] tablet:px-16 tablet:pt-[120px] tablet:pb-[136px] expanded:px-24 expanded:pt-[120px] expanded:pb-[136px] desktop:px-24 desktop:pt-[120px] desktop:pb-[136px]">

        <div className="grid grid-cols-1 gap-y-6
                        expanded:grid-cols-[23fr_11fr_66fr] expanded:gap-y-0 desktop:grid-cols-[23fr_11fr_66fr] desktop:gap-y-0">

          <h2 className="reveal-heading section-heading text-cobalt-dark">Mission</h2>

          <div className="reveal-body flex flex-col gap-1 text-cobalt-dark max-w-[640px] expanded:col-start-3 desktop:col-start-3">
            <p className="font-dmSans font-semibold text-24 leading-1-3 mb-2">
              True wellness isn't about doing the work. It's about embodying the work. And then
              monetizing the embodiment. And then disrupting the monetization. Sustainably.
            </p>
            <p className="body-copy font-light max-w-none">
              When you claim your thought leadership—when you own your mission, articulate your
              vision, resource your nervous system, optimize your protocols, scale your containers,
              and cross-post about it with a photo of
              yourself staring into the middle distance on a cliff—everything begins to align.
            </p>
            <p className="body-copy font-light max-w-none">
              Your legacy is more than the organic, fresh-squeezed, green juice you drink; it's the
              field you generate when you walk into a room and everyone can just feel that you've done
              plant medicine. This what we help you claim.
            </p>
            <p className="body-copy font-light max-w-none font-bold">
              We won't stop until we Save The <TradeMark size="md" word="World." />
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
