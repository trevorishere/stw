import Btn from './Btn'
import TradeMark from './TradeMark'
import { useReveal } from '../hooks/useReveal'

export default function Donate() {
  const [ref, visible] = useReveal()
  return (
    <section ref={ref} className={`bg-purple${visible ? ' in-view' : ''}`}>
      <div className="page-container px-6 pt-[104px] pb-[120px] tablet:px-16 tablet:pt-[120px] tablet:pb-[136px] expanded:px-24 expanded:pt-[120px] expanded:pb-[136px] desktop:px-24 desktop:pt-[120px] desktop:pb-[136px]">

        <div className="grid grid-cols-1 gap-y-6
                        expanded:grid-cols-[23fr_11fr_66fr] expanded:gap-y-0 desktop:grid-cols-[23fr_11fr_66fr] desktop:gap-y-0">

          <h2 className="reveal-heading section-heading text-olive-lighter">
            Support<br />the Future<br />of Wellness
          </h2>

          <div className="reveal-body flex flex-col gap-6 tablet:gap-8 expanded:col-start-3 desktop:col-start-3">
            <div className="body-copy font-light text-olive-lighter [&>p+p]:mt-4">
              <p>
                Stein's Total <TradeMark size="md" word="Wellness" /> is a passion-driven,
                donation-funded initiative at the cutting edge of human transformation. We don't
                take a single dollar in profit. We never have. Every resource goes directly back
                into the research, the frameworks, and the people who need them most.
              </p>
              <p>
                This work simply could not exist without the generosity of people like you. The
                future of personal development is being built right here, right now, and it is only
                possible because of your support. We are so deeply, profoundly grateful. From the
                bottom of our collectively resourced nervous systems: thank you.
              </p>
            </div>
            <Btn color="cream" href="#contact" className="self-start">
              Donate Now
            </Btn>
          </div>

        </div>
      </div>
    </section>
  )
}
