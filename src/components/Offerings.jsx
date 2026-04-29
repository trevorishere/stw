import ProgramCard from './ProgramCard'

const CARDS = [
  {
    id: 1,
    category: 'Relationships & Intimacy',
    title: <>Seven Minute Wellness<sup>©™©</sup></>,
    description: `Total life transformation in seven minutes. That's not a typo. We've compressed decades of therapeutic wisdom into a format shorter than your morning doom scroll. Will it change your life? Statistically, most things don't really go anywhere. But also, maybe.`,
    cta: 'start your seven minutes',
  },
  {
    id: 2,
    category: 'Relationships & Intimacy',
    title: <>Rock Hard Wet Pussy<sup>©™©</sup></>,
    description: `If you thought this was porn, we sincerely apologize. This is a groundbreaking embodied intimacy recalibration protocol for couples who have replaced passion with arguments about the dishwasher. This revolutionary Chore Play™ framework will completely disrupt your negative patterns and you'll get an extra special BONUS chapter (a $1,297 value!!) on whether your attachment style is ruining your orgasms. (It is.)`,
    cta: 'Recalibrate Your Intimacy',
  },
  {
    id: 3,
    category: 'Health & Authenticity',
    title: <>The TRUTH About Medication!<sup>©™©</sup></>,
    description: `After thousands of hours of independent research from his toilet, Dr. Steinberg has uncovered what Big Pharma, Big Wellness, and Big Yoga DESPERATELY don't want you to know. The findings are SHOCKING. The implications are STAGGERING. The revelation? Medications are only... SOMEWHAT EFFECTIVE. That's right. Not miraculous. Not poison. Just... moderately helpful, sometimes, for some people, with side effects. A comprehensive treatise on the heartbreaking banality of clinical effect sizes.`,
    cta: "Discover What They Don't Want You To Know",
  },
  {
    id: 4,
    category: 'Power & Performance',
    title: <>From Bogeys to Breakthroughs<sup>©™©</sup></>,
    description: `How to Get Great at Golf and Your Wife O! Your Back. A revolutionary 6-module quantum golf consciousness course that uses the ancient wisdom of the back nine to unlock your leadership potential. Includes HRV-tracked swing analysis and a breathwork protocol for the putting green. But here's the thing: you'll also learn real relationship skills so powerful that your wife will actually be excited when you leave for the course. You'll come back a better golfer AND a better partner, and she'll never complain about your tee time again. Because the only handicap holding you back is your belief system.`,
    cta: 'Unlock Your Swing',
  },
  {
    id: 5,
    category: 'Teamwork & Accomplishment',
    title: <>Going Down Together<sup>©™©</sup></>,
    description: `The world is f***ed; your relationship shouldn't be. A couples course for navigating the apocalypse without killing each other. You thought this was a course for oral sex, but it's not. Well it might be. Well it's not. Is it? Well. It's not not about oral sex. Covers functional communication, nervous system co-regulation, and how to split household labor without developing a substance abuse problem.`,
    cta: 'Go Down Together',
  },
]

const WIDE_CARD = {
  category: <>STW's Signature Container<sup className="text-[10px]">©™©</sup></>,
  title: <>The STW<sup>©™©</sup> Empire Builder &amp; Dependency Cultivation Accelerator<sup>©™©</sup></>,
  description: `This is a 12-month embodied leadership lineage transmission in which you will learn to coach, heal, and facilitate transformation in others — and build your own STW-certified coaching empire while doing it. Master the art of advanced dependency cultivation so your clients can't leave even if they want to. Dr. Steinberg only accepts 2 people per year and there are only 2 spots left. ACT FAST. You cannot apply unless you have completed at least 3 other STW offerings and submitted a 500-word essay on why you deserve to evolve.`,
  cta: 'Submit Your Application for Consideration',
}

export default function Offerings() {
  return (
    <section id="offerings">
      <div className="max-w-[1440px] mx-auto w-full px-12 pt-20 pb-24 flex flex-col gap-6 max-tablet:px-6 max-tablet:py-16 max-phone:px-5 max-phone:py-12">

      {/* Section header */}
      <div className="flex flex-col gap-4 items-center text-center mb-6">
        <p className="font-dmMono text-[16px] leading-6 tracking-[2px] uppercase text-dark">
          Transformational Offerings
        </p>
        <h2 className="font-rubik font-semibold text-[48px] leading-16 tracking-[2px] uppercase text-grey23
                       max-tablet:text-[32px] max-tablet:leading-[40px] max-phone:text-[26px] max-phone:leading-8">
          Proprietary Frameworks Delivered Through Revolutionary Containers
        </h2>
      </div>

      {/* Row 1 — cards 1 & 2, equal height via CSS grid auto rows */}
      <div className="grid grid-cols-2 grid-rows-[1fr] gap-6 max-tablet:grid-cols-1 max-tablet:grid-rows-none">
        {CARDS.slice(0, 2).map(card => (
          <ProgramCard key={card.id} {...card} />
        ))}
      </div>

      {/* Row 2 — cards 3 & 4, equal height */}
      <div className="grid grid-cols-2 grid-rows-[1fr] gap-6 max-tablet:grid-cols-1 max-tablet:grid-rows-none">
        {CARDS.slice(2, 4).map(card => (
          <ProgramCard key={card.id} {...card} />
        ))}
      </div>

      {/* Row 3 — card 5, half-width centered */}
      <div className="flex justify-center">
        <div className="w-1/2 max-tablet:w-full">
          <ProgramCard {...CARDS[4]} />
        </div>
      </div>

      {/* Wide signature card */}
      <ProgramCard {...WIDE_CARD} wide noBorder className="!pt-[99px]" />

      </div>
    </section>
  )
}
