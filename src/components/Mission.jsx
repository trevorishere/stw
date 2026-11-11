import TradeMark from './TradeMark'
import { useReveal } from '../hooks/useReveal'

export default function Mission() {
  const [ref, visible] = useReveal()
  return (
    <section ref={ref} className={`bg-brand-yellow${visible ? ' in-view' : ''}`}>
      <div className="page-container px-6 pt-[104px] pb-[120px] tablet:px-16 tablet:pt-[120px] tablet:pb-[136px] expanded:px-24 expanded:pt-[120px] expanded:pb-[136px] desktop:px-24 desktop:pt-[120px] desktop:pb-[136px]">

        <div className="grid grid-cols-1 gap-y-6
                        expanded:grid-cols-[23fr_11fr_66fr] expanded:gap-y-0 desktop:grid-cols-[23fr_11fr_66fr] desktop:gap-y-0">

          <h2 className="reveal-heading section-heading text-cobalt-dark expanded:self-center desktop:self-center">
            <span className="block"><TradeMark size="lg" word="STW" /></span>
            <span className="block">Mission</span>
            <span className="block">Statement</span>
          </h2>

          <div className="reveal-body flex flex-col gap-1 text-cobalt-dark max-w-[640px] expanded:col-start-3 desktop:col-start-3">
            <p className="font-dmSans font-semibold text-24 leading-1-3 mb-2">
              True wellness isn't about doing the work. It's about embodying the work. And then
              monetizing the embodiment. And then disrupting the monetization. Sustainably.
            </p>
            <p className="body-copy font-light max-w-none">
              We help you actualize the fullest, most resourced expression of your life by guiding you
              to tend to what's deepest and most authentically underneath.
            </p>
            <p className="body-copy font-light max-w-none mt-2">
              When you meet your own pain, regulate your nervous system, and come home to be and become
              all of who you actually are — everything begins to align. And then you can translate all of
              that into a category-defining, thought-leadership legacy and personal brand dynasty.
            </p>
            <p className="body-copy font-light max-w-none mt-2">
              Then, you guide other souls to a higher frequency of optimization. They guide others, who
              guide others, in a regenerative feedback loop of leveling up that ripples outward through
              all of society until there is no one left to guide.
            </p>
            <p className="body-copy max-w-none font-bold mt-2">
              We won't stop until we SAVE THE <TradeMark size="md" word="WORLD." />
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
