import Btn from './Btn'

const crossout    = `${import.meta.env.BASE_URL}crossout.svg`
const heroImg     = `${import.meta.env.BASE_URL}hero.png`
const gradientsImg = `${import.meta.env.BASE_URL}gradients.svg`

export default function Hero() {
  return (
    <section className="bg-dark [overflow-x:clip] relative pb-[136px] max-tablet:pb-0 max-phone:pb-0">
      <img src={gradientsImg} className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none" aria-hidden="true" alt="" />
      <div className="page-container px-28 pt-[88px] pb-[136px]
                      max-tablet:px-12 max-tablet:pt-[48px] max-tablet:pb-[80px] max-phone:px-6">

        <div className="hero-text-block">
          <div className="hero-top-row">
            <div className="hero-fck-wrapper">
              <span className="hero-fck">F*CK</span>
              <img src={crossout} className="hero-scratchout" aria-hidden="true" alt="" />
            </div>
            <span className="hero-save">SAVE</span>
          </div>
          <div className="hero-the-world">THE WORLD</div>
        </div>

        <div className="relative mt-[72px] max-tablet:mt-[48px] flex gap-0 max-phone:mt-8">

          <div className="flex flex-col gap-4 max-w-[600px] max-tablet:max-w-full">

            <p className="font-figtree font-black text-[36px] leading-[40px] tracking-[1.5px] uppercase text-accent
                          max-tablet:text-2xl max-tablet:leading-8 max-phone:text-[16px] max-phone:leading-5 max-phone:tracking-[1.5px]">
              Step Into Your Optimized Embodied Legacy of Radical Alignment
              <sup className="text-[20px] font-normal not-italic max-tablet:text-[13px] max-phone:text-[10px]">©TM©</sup>
              {' '}And Unlock Your Highest-Potential Purpose-Driven Self
            </p>

            <div className="flex flex-col gap-12 max-tablet:gap-8">
              <p className="font-dmSans text-[20px] leading-[30px] tracking-[0.2px] text-cream max-w-[595px]
                            max-tablet:leading-[30px] max-phone:text-[14px] max-phone:leading-6">
                After decades of Hyper-Gold-Standard<sup className="text-[12px] max-phone:text-[9px]">©TM©</sup> clinical research,
                twelve-week containers, breathwork certifications, cold plunge protocols, and mastermind
                facilitation, Stein's Total Wellness<sup className="text-[12px] max-phone:text-[9px]">©TM©</sup> has distilled the
                entire human experience into a proprietary framework that will disrupt your collective nervous
                system, shatter your limiting beliefs, monetize your trauma, resource your somatic intelligence,
                and optimize your leadership capacity—sustainably.
              </p>

              <Btn variant="hero" color="white" href="#contact" className="self-start">
                begin your inititation
              </Btn>
            </div>
          </div>

          <div className="absolute right-0 bottom-[-192px] w-[449px] h-[816px] pointer-events-none
                          max-tablet:hidden">
            <img src={heroImg} alt="" className="w-full h-full object-cover object-top" />
          </div>

        </div>
      </div>
    </section>
  )
}
