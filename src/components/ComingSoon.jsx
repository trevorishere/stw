import Btn from './Btn'
import TradeMark from './TradeMark'

// Coming Soon — where Going Down Together, Rock Hard Wet Pussy, the Black Card and the Tarot buttons land.
export default function ComingSoon() {
  return (
    <section id="coming-soon-page" className="bg-brand-yellow">
      <div className="page-container px-6 pt-[104px] pb-[136px] tablet:px-16 tablet:pt-[136px] tablet:pb-[160px] expanded:px-24 expanded:pt-[160px] expanded:pb-[200px] desktop:px-24 desktop:pt-[160px] desktop:pb-[200px]">
        <div className="flex flex-col gap-6 max-w-[760px]">
          <p className="eyebrow text-cobalt-dark">Coming Soon</p>
          <h1 className="section-heading text-cobalt-dark">This Container Is Still Being Held</h1>
          <p className="body-copy font-light text-cobalt-dark max-w-[640px]">
            Every STW<TradeMark size="md" /> offering goes through a rigorous,{' '}
            <TradeMark size="md" word="Hyper-Gold-Standard" /> development process before it's ready to receive
            you. This one isn't ready yet. And if we're being really honest with each other, that might be exactly
            what you needed to hear today.
          </p>
          <Btn color="dark" href="#offerings" className="self-start mt-4">Back to the Work</Btn>
        </div>
      </div>
    </section>
  )
}
