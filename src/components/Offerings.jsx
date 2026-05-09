import ArrowRight from './ArrowRight'

const BASE = import.meta.env.BASE_URL

const OFFERINGS = [
  {
    id: 1,
    image: `${BASE}smw.png`,
    imageLeft: true,
    category: 'Relationships & Intimacy',
    title: <>Seven Minute Wellness<sup className="font-normal text-[26px] max-tablet:text-[20px] max-phone:text-[13px]">©TM©</sup></>,
    description: `Total life transformation in seven minutes. That's not a typo. We've compressed decades of therapeutic wisdom into a format shorter than your morning doom scroll. Will it change your life? Statistically, most things don't really go anywhere. But also, maybe.`,
    cta: 'start your seven minutes',
  },
  {
    id: 2,
    image: `${BASE}rhwp.png`,
    imageLeft: false,
    category: 'Relationships & Intimacy',
    title: <>Rock Hard Wet Pussy<sup className="font-normal text-[26px] max-tablet:text-[20px] max-phone:text-[13px]">©TM©</sup></>,
    description: <>If you thought this was porn, we sincerely apologize. This is a groundbreaking embodied intimacy recalibration protocol for couples who have replaced passion with arguments about the dishwasher. This revolutionary Chore Play™ framework will completely disrupt your negative patterns and you'll get an extra special <em>bonus chapter</em> (a $1,297 value!!) on whether your attachment style is ruining your orgasms (it is).</>,
    cta: 'Recalibrate Your Intimacy',
  },
  {
    id: 3,
    image: `${BASE}btb.png`,
    imageLeft: true,
    category: 'Power & Performance',
    title: <>From Bogeys to Breakthroughs<sup className="font-normal text-[26px] max-tablet:text-[20px] max-phone:text-[13px]">©TM©</sup></>,
    description: <>Unlock your leadership potential with this revolutionary quantum golf consciousness course powered by the ancient wisdom of the back nine, including HRV-tracked swing analysis and a breathwork protocol for the putting green. But here's the thing: you'll also gain real relationship skills so powerful that your wife will actually be excited when you leave for the course. You'll come back a better golfer <em>and</em> a better partner, and she'll never complain about your tee time again. Because the only handicap holding you back is your belief system.</>,
    cta: 'Unlock Your Swing',
  },
  {
    id: 4,
    image: `${BASE}gdt.png`,
    imageLeft: false,
    category: 'Teamwork & Accomplishment',
    title: <>Going Down Together<sup className="font-normal text-[26px] max-tablet:text-[20px] max-phone:text-[13px]">©TM©</sup></>,
    description: `The world is fucked. Your relationship shouldn't be. A couples course for navigating the apocalypse without killing each other. You thought this was a course for oral sex, but it's not. Well it might be. Well it's not. Is it? Well. It's not not about oral sex. Covers functional communication, nervous system co-regulation, and how to split household labor without developing a substance abuse problem.`,
    cta: 'Go Down Together',
  },
]

const empireImg = `${BASE}empire.png`

function OfferingRow({ image, imageLeft, category, title, description, cta }) {
  const textBlock = (
    <div className="flex-1 min-w-0 flex flex-col gap-8 pr-8 max-tablet:pr-0 max-tablet:order-last
                    max-phone:gap-4 max-phone:order-last">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-4 max-phone:gap-3">
          <p className="eyebrow text-purple opacity-60">
            {category}
          </p>
          <h3 className="card-heading text-dark">
            {title}
          </h3>
        </div>
        <p className="body-copy text-dark">
          {description}
        </p>
      </div>
      <a
        href="#contact"
        className="inline-flex items-center gap-1 pl-6 pr-4 py-3 border border-dark
                   font-figtree font-extrabold text-[14px] leading-5 tracking-[1px]
                   uppercase text-dark no-underline hover:bg-dark hover:text-cream
                   self-start transition-colors
                   max-phone:pl-3 max-phone:pr-[10px] max-phone:py-2
                   max-phone:text-[12px] max-phone:leading-4 max-phone:tracking-[1.25px]"
      >
        {cta}
        <ArrowRight />
      </a>
    </div>
  )

  const imageBlock = (
    <div className="flex-1 min-w-0 rounded-3xl overflow-hidden max-tablet:order-first
                    max-phone:w-full max-phone:flex-none max-phone:order-first">
      <img src={image} alt="" className="w-full h-full object-cover block aspect-[596/480] max-phone:h-auto" />
    </div>
  )

  return (
    <div className="flex gap-6 items-center py-[48px] max-tablet:flex-col max-tablet:py-8
                    max-phone:py-0 max-phone:px-0 max-phone:gap-6">
      {imageLeft ? <>{imageBlock}{textBlock}</> : <>{textBlock}{imageBlock}</>}
    </div>
  )
}

export default function Offerings() {
  return (
    <section id="offerings" className="scroll-mt-[72px] max-phone:scroll-mt-[56px]">
      <div className="page-container px-28 py-[120px] flex flex-col gap-[48px]
                      max-tablet:px-6 max-tablet:py-16
                      max-phone:px-6 max-phone:pt-12 max-phone:pb-0 max-phone:gap-8">

        <div className="flex flex-col gap-1">
          <h2 className="section-heading">
            <span className="text-purple">Transformational</span>
            <br />
            <span className="text-dark"> Offerings</span>
          </h2>
          <p className="font-figtree font-bold text-[16px] leading-8 tracking-[1px] uppercase text-dark opacity-60
                        max-phone:text-[12px] max-phone:leading-4">
            Proprietary Frameworks Delivered Through Revolutionary Containers
          </p>
        </div>

        <div className="flex flex-col gap-[136px] max-tablet:gap-16 max-phone:gap-16">

          <div className="flex flex-col gap-8 max-phone:gap-12 max-phone:pb-8">
            {OFFERINGS.map(offering => (
              <OfferingRow key={offering.id} {...offering} />
            ))}
          </div>

          <div id="empire" className="scroll-mt-[72px] max-phone:scroll-mt-[56px]">
          <div className="rounded-t-[48px] overflow-hidden max-phone:rounded-t-[13px]">
            <div className="relative h-[707px] max-tablet:h-[420px] max-phone:h-[236px]">
              <img
                src={empireImg}
                alt=""
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </div>

            <div className="bg-dark px-28 py-24 flex flex-col gap-2
                            max-tablet:px-8 max-tablet:py-16 max-phone:px-6 max-phone:pt-6 max-phone:pb-8 max-phone:gap-1">
              <div className="flex flex-col gap-4 max-phone:gap-1">
                <p className="eyebrow text-pink">
                  STW's Signature Container<sup className="font-normal text-[8px] max-phone:text-[7px]">©TM©</sup>
                </p>
                <h3 className="card-heading text-cream">
                  The STW<sup className="text-[26px] font-normal max-tablet:text-[20px] max-phone:text-[13px]">©TM©</sup>{' '}
                  Empire Builder &amp; Dependency Cultivation Accelerator<sup className="text-[26px] font-normal max-tablet:text-[20px] max-phone:text-[13px]">©TM©</sup>
                </h3>
              </div>
              <div className="flex flex-col gap-8">
                <p className="font-dmSans text-[20px] leading-[30px] tracking-[0.2px] text-cream max-phone:text-[15px] max-phone:leading-[22px]">
                  Master the art of advanced dependency cultivation so your clients can't leave even if they
                  want to. A 12-month embodied leadership lineage transmission where you'll learn to facilitate
                  transformation in others—all while building your own STW-certified coaching empire. Enrollment
                  is limited to only 2 individuals who've completed 3 or more previous STW offerings. To apply,
                  submit a 500-word essay on why you deserve to evolve, but hurry there are only 2 spots left!
                  Act fast.
                </p>
                <a
                  href="#contact"
                  className="btn-outline border-cream text-cream hover:bg-cream hover:text-dark self-start"
                >
                  APPLY NOW
                  <ArrowRight />
                </a>
              </div>
            </div>
          </div>
          </div>

        </div>
      </div>
    </section>
  )
}
