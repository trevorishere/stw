import Btn from './Btn'
import TradeMark from './TradeMark'
import { useReveal } from '../hooks/useReveal'

export default function Donate() {
  const [ref, visible] = useReveal()
  return (
    <section ref={ref} className={`bg-[#5c3551]${visible ? ' in-view' : ''}`}>
      <div className="page-container px-24 max-tablet:px-16 pt-[120px] pb-[136px]
                      max-phone:px-6 max-phone:pt-[104px] max-phone:pb-[120px]">

        <div className="grid grid-cols-1 gap-y-6
                        tablet:grid-cols-[23fr_11fr_66fr] tablet:gap-y-0">

          <h2 className="reveal-heading section-heading text-cream">
            Support<br />the Future<br />of Wellness
          </h2>

          <div className="reveal-body tablet:col-start-3 flex flex-col gap-8 max-tablet:pl-12 max-phone:pl-8 max-phone:gap-6">
            <p className="body-copy text-cream">
              Stein's Total <TradeMark size="body" word="Wellness" /> is a passion-driven,
              donation-funded initiative at the cutting edge of human transformation. We don't
              take a single dollar in profit. We never have. Every resource goes directly back
              into the research, the frameworks, and the people who need them most.
            </p>
            <p className="body-copy text-cream">
              This work simply could not exist without the generosity of people like you. The
              future of personal development is being built right here, right now, and it is only
              possible because of your support. We are so deeply, profoundly grateful. From the
              bottom of our collectively resourced nervous systems: thank you.
            </p>
            <Btn color="cream" href="#contact" className="self-start max-tablet:self-center">
              Donate Now
            </Btn>
          </div>

        </div>
      </div>
    </section>
  )
}
