import Btn from './Btn'
import SectionHeader from './SectionHeader'
import TradeMark from './TradeMark'

const BASE = import.meta.env.BASE_URL

const OFFERINGS = [
  {
    id: 1,
    image: `${BASE}smw.png`,
    imageLeft: true,
    category: 'Life Optimization',
    title: <>Seven Minute Wellness<TradeMark /></>,
    description: `Total life transformation in seven minutes. That's not a typo. We've compressed decades of therapeutic wisdom into a format shorter than your morning doom scroll. Will it change your life? Statistically, most things don't really go anywhere. But also, maybe.`,
    cta: 'start your seven minutes',
  },
  {
    id: 2,
    image: `${BASE}rhwp.png`,
    imageLeft: false,
    category: 'Relationships & Intimacy',
    title: <>Rock Hard Wet Pussy<TradeMark /></>,
    description: <>If you thought this was porn, we sincerely apologize. This is a groundbreaking embodied intimacy recalibration protocol for couples who have replaced passion with arguments about the dishwasher. This revolutionary Chore Play™ framework will completely disrupt your negative patterns and you'll get an extra special <em>bonus chapter</em> (a $1,297 value!!) on whether your attachment style is ruining your orgasms (it is).</>,
    cta: 'Recalibrate Your Intimacy',
  },
  {
    id: 3,
    image: `${BASE}btb.png`,
    imageLeft: true,
    category: 'Power & Performance',
    title: <>From Bogeys to Breakthroughs<TradeMark /></>,
    description: <>Unlock your leadership potential with quantum golf consciousness powered by the ancient wisdom of the back nine, including HRV-tracked swing analysis, and a breathwork protocol for the putting green. But here's the thing: you'll also gain real relationship skills so powerful that your wife will actually be excited when you leave for the course. You'll come back a better golfer <em>and</em> a better partner, and she'll never complain about your tee time again. The only handicap holding you back is your belief system.</>,
    cta: 'unlock your swing',
  },
  {
    id: 4,
    image: `${BASE}gdt.png`,
    imageLeft: false,
    category: 'Teamwork & Accomplishment',
    title: <>Going Down Together<TradeMark /></>,
    description: `The world is fucked. Your relationship shouldn't be. A couples course for navigating the apocalypse without killing each other. You thought this was a course for oral sex, but it's not. Well it might be. Well it's not. Is it? Well. It's not not about oral sex. Covers functional communication, nervous system co-regulation, and how to split household labor without developing a substance abuse problem.`,
    cta: 'Go Down Together',
  },
]

const empireImg = `${BASE}empire.jpg`

function OfferingRow({ image, imageLeft, category, title, description, cta }) {
  // On tablet + mobile, image always stacks on top regardless of imageLeft.
  // For imageLeft=false rows (text first in DOM), we reverse order via CSS.
  const mobileOrderImg  = !imageLeft ? 'max-tablet:order-1' : ''
  const mobileOrderText = !imageLeft ? 'max-tablet:order-2' : ''

  const imageBlock = (
    <div className={`flex-1 min-w-0 aspect-[596/480] overflow-hidden
                     max-tablet:flex-none max-tablet:w-full max-tablet:aspect-[675/490]
                     max-phone:aspect-[294/200] ${mobileOrderImg}`}>
      <img src={image} alt="" className="w-full h-full object-cover block max-phone:object-contain max-phone:scale-110" loading="lazy" />
    </div>
  )

  const textBlock = (
    <div className={`flex-1 min-w-0 flex flex-col gap-8 max-tablet:gap-10 ${mobileOrderText}`}>
      {/* Text group: eyebrow+title → body */}
      <div className="flex flex-col gap-4 max-phone:gap-2">
        <div className="flex flex-col gap-6 max-phone:gap-4">
          <p className="eyebrow text-dark opacity-60">{category}</p>
          <h3 className="font-figtree font-extrabold text-[40px] leading-[44px] text-dark
                         max-tablet:text-[36px] max-tablet:leading-[40px]
                         max-phone:text-[22px] max-phone:leading-[24px]">
            {title}
          </h3>
        </div>
        <p className="body-copy text-dark">{description}</p>
      </div>
      <Btn color="muted" href="#contact" className="self-start max-phone:self-center">{cta}</Btn>
    </div>
  )

  return (
    <div className="flex gap-6 items-center p-6
                    max-tablet:flex-col max-tablet:items-stretch max-tablet:p-12 max-tablet:gap-6
                    max-tablet:bg-[rgba(255,255,255,0.3)] max-tablet:border max-tablet:border-productBg
                    max-phone:px-8 max-phone:pt-8 max-phone:pb-12">
      {imageLeft ? <>{imageBlock}{textBlock}</> : <>{textBlock}{imageBlock}</>}
    </div>
  )
}

export default function Offerings() {
  return (
    <section id="offerings" className="scroll-mt-nav max-phone:scroll-mt-navMobile">
      <div className="page-container px-28 py-[120px] flex flex-col gap-[48px]
                      max-tablet:px-16 max-tablet:py-16
                      max-phone:px-0 max-phone:pt-20 max-phone:pb-0 max-phone:gap-8">

        {/* Section header */}
        <div className="max-phone:px-6">
          <SectionHeader
            title="Transformational Offerings"
            subtitle="Proprietary Frameworks Delivered Through Revolutionary Containers"
          />
        </div>

        <div className="flex flex-col gap-[48px] max-phone:gap-8">

          {/* Four offering rows */}
          <div className="flex flex-col gap-0 max-tablet:gap-6 max-phone:gap-6 max-phone:px-6">
            {OFFERINGS.map(o => <OfferingRow key={o.id} {...o} />)}
          </div>

          {/* Empire block — centered card, 798px desktop */}
          <div id="empire" className="scroll-mt-nav max-phone:scroll-mt-navMobile
                                      flex justify-center max-phone:px-6">
            <div className="overflow-hidden w-[798px] max-tablet:w-full">

              {/* Image */}
              <div className="relative h-[439px] max-tablet:h-[300px] max-phone:h-[203px]">
                <img
                  src={empireImg}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              {/* Text area */}
              {/* pt-48 px-96 pb-64 per Figma annotations */}
              <div className="bg-[rgba(255,255,255,0.6)] flex flex-col gap-6
                              pt-[48px] px-[96px] pb-[64px]
                              max-tablet:px-12 max-tablet:py-12
                              max-phone:px-8 max-phone:pt-8 max-phone:pb-12 max-phone:gap-2
                              max-phone:bg-[rgba(255,255,255,0.3)] max-phone:border max-phone:border-productBg">

                {/* Eyebrow → title: 24px */}
                <div className="flex flex-col gap-6 max-phone:gap-6">
                  <p className="eyebrow text-dark opacity-60">
                    STW's Signature Container<TradeMark size="xs" />
                  </p>
                  <h3 className="font-figtree font-extrabold text-[40px] leading-[44px] text-dark
                                 max-tablet:text-[32px] max-tablet:leading-[40px]
                                 max-phone:text-[22px] max-phone:leading-[24px]">
                    The STW<TradeMark size="empire" />{' '}
                    Empire Builder &amp; Dependency Cultivation Accelerator<TradeMark size="empire" />
                  </h3>
                </div>

                {/* Title → description: 24px (outer gap-6), description → btn: 40px tablet/mobile */}
                <div className="flex flex-col gap-12 max-tablet:gap-10">
                  <p className="body-copy text-dark">
                    Master the art of advanced dependency cultivation so your clients can't leave even if they
                    want to. A 12-month embodied leadership lineage transmission where you'll learn to facilitate
                    transformation in others—all while building your own STW-certified coaching empire. Enrollment
                    is limited to only 2 individuals who've completed 3 or more previous STW offerings. To apply,
                    submit a 500-word essay on why you deserve to evolve, but hurry there are only 2 spots left!
                    Act fast.
                  </p>
                  <Btn color="muted" href="#contact" className="self-center">APPLY NOW</Btn>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
