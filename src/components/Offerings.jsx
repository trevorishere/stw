import Btn from './Btn'
import SectionHeader from './SectionHeader'
import TradeMark from './TradeMark'
import { useReveal } from '../hooks/useReveal'

const BASE = import.meta.env.BASE_URL

const OFFERINGS = [
  {
    id: 1,
    image: `${BASE}sevenminutes.png`,
    imageLeft: false,
    alt: 'Seven Minute Wellness program cover',
    category: 'Life Optimization',
    title: <>Seven Minute <TradeMark size="lg" word="Wellness" gap /></>,
    description: `Total life transformation in seven minutes. That's not a typo. We've compressed decades of therapeutic wisdom into a format shorter than your morning doom scroll. Will it change your life? Statistically, most things don't really go anywhere. But also, maybe.`,
    cta: 'start your seven minutes',
  },
  {
    id: 2,
    image: `${BASE}rockhard.png`,
    imageLeft: true,
    alt: 'Rock Hard Wet Pussy program cover',
    category: 'Relationships & Intimacy',
    title: <>Rock Hard Wet <TradeMark size="lg" word="Pussy" gap /></>,
    description: <>If you thought this was porn, we sincerely apologize. This is a groundbreaking embodied intimacy recalibration protocol for couples who have replaced passion with arguments about the dishwasher. This revolutionary <TradeMark size="md" word="Chore Play" /> framework will completely disrupt your negative patterns and you'll get an extra special <em>bonus chapter</em> (a $1,297 value!!) on whether your attachment style is ruining your orgasms (it is).</>,
    cta: 'Recalibrate Your Intimacy',
  },
  {
    id: 3,
    image: `${BASE}bogeys.png`,
    imageLeft: false,
    alt: 'From Bogeys to Breakthroughs program cover',
    category: 'Power & Performance',
    title: <>From Bogeys to <TradeMark size="lg" word="Breakthroughs" gap /></>,
    description: <>Unlock your leadership potential with quantum golf consciousness powered by the ancient wisdom of the back nine, including HRV-tracked swing analysis, and a breathwork protocol for the putting green. And here's what separates this from every other golf program: you'll also gain real relationship skills so powerful that your wife will actually be excited when you leave for the course. You'll come back a better golfer <em>and</em> a better partner, and she'll never complain about your tee time again. The only handicap holding you back is your belief system.</>,
    cta: 'unlock your swing',
  },
  {
    id: 4,
    image: `${BASE}goingdown2.png`,
    imageLeft: true,
    alt: 'Going Down Together program cover',
    category: 'Teamwork & Accomplishment',
    title: <>Going Down <TradeMark size="lg" word="Together" gap /></>,
    description: `The world is fucked. Your relationship shouldn't be. A couples course for navigating the apocalypse without killing each other. You thought this was a course for oral sex, but it's not. Well it might be. Well it's not. Is it? Well. It's not not about oral sex. Covers functional communication, nervous system co-regulation, and how to split household labor without developing a substance abuse problem.`,
    cta: 'Go Down Together',
  },
]

const empireImg = `${BASE}empire.png`

function OfferingRow({ image, imageLeft, alt = '', category, title, description, cta }) {
  const [ref, visible] = useReveal()

  // At mobile/tablet: image always stacks on top (order-1), text below (order-2).
  // At expanded/desktop: imageLeft controls which side the image is on.
  const textOrder = imageLeft
    ? 'order-2'
    : 'order-2 expanded:order-1 desktop:order-1'

  const pearlClasses = [
    'hidden expanded:block expanded:flex-1 expanded:max-w-[512px] desktop:block desktop:flex-1 desktop:max-w-[512px]',
    'relative expanded:aspect-[512/440] desktop:aspect-[512/440]',
    imageLeft ? 'expanded:order-1 desktop:order-1' : 'expanded:order-2 desktop:order-2',
  ].join(' ')

  return (
    <div
      ref={ref}
      className={`reveal-heading flex flex-col gap-6 px-8 max-phone:px-4
        max-phone:max-w-[664px] max-phone:mx-auto
        tablet:px-12 tablet:max-w-[696px] tablet:mx-auto
        expanded:flex-row expanded:items-center expanded:gap-8 expanded:px-0 expanded:w-full expanded:max-w-[1144px] expanded:mx-auto
        desktop:flex-row desktop:items-center desktop:gap-8 desktop:px-0 desktop:w-full desktop:max-w-[1144px] desktop:mx-auto
        ${visible ? ' in-view' : ''}`}
    >
      {/* Mobile/tablet image — always stacks on top */}
      <div className="order-1 w-full h-[280px] tablet:h-[340px] flex items-end justify-center expanded:hidden desktop:hidden">
        <img src={image} alt={alt} className="h-full w-auto max-w-full object-contain" loading="lazy" />
      </div>

      {/* Text block */}
      <div className={`${textOrder} flex flex-col gap-6 pb-16 expanded:flex-1 expanded:max-w-[600px] expanded:pb-0 desktop:flex-1 desktop:max-w-[600px] desktop:pb-0`}>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-4">
            <p className="eyebrow text-warm-grey-light">{category}</p>
            <h3 className="card-heading text-cobalt-dark">{title}</h3>
          </div>
          <p className="body-copy font-light text-deep-gray">{description}</p>
        </div>
        <a
          href="#contact"
          className="text-cta self-start inline-flex items-center gap-2 text-cobalt-dark"
        >
          {cta}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      {/* Image — expanded/desktop only */}
      <div className={pearlClasses}>
        <img
          src={image}
          alt={alt}
          className="absolute inset-0 w-full h-full object-contain"
          loading="lazy"
        />
      </div>
    </div>
  )
}

export default function Offerings() {
  const [headerRef, headerVisible] = useReveal()
  const [empireRef, empireVisible] = useReveal()
  return (
    <section id="offerings" className="scroll-mt-nav">
      <div className="page-container px-0 pt-[80px] pb-[136px] gap-8 flex flex-col items-center tablet:px-16 tablet:pt-[96px] tablet:pb-[136px] tablet:gap-16 expanded:px-24 expanded:pt-[120px] expanded:pb-[136px] expanded:gap-16 desktop:px-24 desktop:pt-[120px] desktop:pb-[136px] desktop:gap-16">

        {/* Section header */}
        <div ref={headerRef} className={`reveal-heading w-full max-phone:px-6${headerVisible ? ' in-view' : ''}`}>
          <SectionHeader
            title={<>Transformational<br />Offerings</>}
            subtitle="Proprietary Frameworks Delivered Through Revolutionary Containers"
            subtitleClassName="text-warm-grey-light"
          />
        </div>

        <div className="flex flex-col w-full gap-8 tablet:gap-[88px] expanded:gap-[88px] desktop:gap-[88px]">

          {/* Four offering rows */}
          <div className="flex flex-col w-full gap-8 max-phone:px-6 expanded:gap-20 desktop:gap-20">
            {OFFERINGS.map(o => <OfferingRow key={o.id} {...o} />)}
          </div>

          {/* Empire block — image 800px centered, text box full width */}
          <div ref={empireRef} id="empire" className={`reveal-heading scroll-mt-nav${empireVisible ? ' in-view' : ''}`}>

            {/* Image — 800px centered, full width at tablet- */}
            <div className="flex justify-center max-phone:px-6">
              <div className="w-full overflow-hidden expanded:w-[800px] desktop:w-[800px]">
                <div className="w-full aspect-[800/465]">
                  <img
                    src={empireImg}
                    alt="STW Empire Builder group session"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Text area — full width, 1px dark outline, no bg */}
            <div className="border border-olive-dark bg-olive-dark mx-6 px-10 max-w-[680px] tablet:mx-auto tablet:px-14 tablet:max-w-[712px] expanded:mx-auto expanded:px-[120px] expanded:max-w-[840px] desktop:mx-auto desktop:px-[136px] desktop:max-w-[896px]">
              <div className="w-full pt-12 pb-16 gap-2 flex flex-col min-w-0 expanded:pt-[64px] expanded:pb-[80px] desktop:pt-[64px] desktop:pb-[100px]">

                {/* Eyebrow → title */}
                <div className="flex flex-col gap-6">
                  <p className="eyebrow text-warm-grey-light">
                    STW's Signature <TradeMark size="sm" word="Container" />
                  </p>
                  <h3 className="card-heading text-cobalt-dark desktop:text-40 desktop:leading-1-1">
                    <TradeMark size="lg" word="The STW" gap />{' '}
                    Empire Builder &amp; Dependency Cultivation <TradeMark size="lg" word="Accelerator" gap />
                  </h3>
                </div>

                {/* Description → btn */}
                <div className="flex flex-col gap-10 expanded:gap-12 desktop:gap-12">
                  <p className="body-copy text-deep-gray">
                    Dr. Steinberg's signature, most high-touch, deepest, most exclusive, most expensive, and most
                    transformational container. This is not a course. This is not coaching. This is a 12-month
                    embodied leadership lineage transmission in which you will learn to coach, heal, and facilitate
                    transformation in others—and certify practitioners beneath you in an infinitely scalable hierarchy.
                    Master the art of advanced dependency cultivation so your clients can't leave even if they
                    want to. Graduate as a Certified Steinberg STW <TradeMark size="md" word="Method" /> Practitioner
                    with the authority to recruit, train, and certify your own practitioners beneath you in an
                    infinitely scalable hierarchy. Includes unlimited Voxer access, quarterly hot seats, a private
                    retreat in a LUSCIOUS location where you'll be soaked in pleasure, your own STW Black Card,
                    and a certificate of spiritual rank within the STW lineage (belts available for purchase
                    separately). Dr. Steinberg only accepts 2 people per year and there are only 2 spots left.
                    Act fast. You cannot apply unless you have completed at least 3 other STW offerings and
                    submitted a 500-word essay on why you deserve to evolve.
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
