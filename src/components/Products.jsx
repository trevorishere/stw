import ProgramCard from './ProgramCard'

const PRODUCTS = [
  {
    id: 1,
    category: 'Empowering Product',
    title: <>The Quantum Empowerment Black Card<sup>©™©</sup></>,
    description: `A premium metal card that certifies you have Done The Work and grants you access to the VIP frequency of life. Use it to purchase your next level of consciousness. Or cut your 98% pure spiritual guide-quality Dark Shaman certified cocaine. (The universe doesn't judge using evolutionary medicines if you're in complete integrity.) Comes with a QR code linking to your personal Consciousness Portfolio and the quiet satisfaction of knowing you are further along than everyone at the dinner party.`,
    cta: 'Apply Now',
  },
  {
    id: 2,
    category: 'Divination & Clarity',
    title: <>The STW Tarot<sup>©™©</sup></>,
    description: `A secular divination deck featuring 78 of Dr. Steinberg's proprietary psychological archetypes. Pull the Nine of Hogs for clarity on creative blocks. Draw the Tower of Functional Medicine for literally any question about your gut. Includes a 40-page guidebook written entirely in therapeutic jargon.`,
    cta: 'Read Your Future',
  },
]

export default function Products() {
  return (
    <section id="products" className="bg-cream px-12 pt-[98px] pb-[148px] flex flex-col gap-12
                                      max-tablet:px-6 max-tablet:py-16 max-phone:px-5 max-phone:py-12">
      <div className="flex flex-col gap-6">
        <p className="font-syne font-bold text-base tracking-[3px] uppercase text-grey23">
          Transformational Products
        </p>
        <h2 className="font-syne font-extrabold text-[64px] leading-[60px] tracking-[-0.6px] uppercase text-dark
                       max-tablet:text-[48px] max-tablet:leading-[48px] max-phone:text-[36px] max-phone:leading-9">
          Carry the<br />Work With You
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-6 max-tablet:grid-cols-1">
        {PRODUCTS.map(product => (
          <ProgramCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  )
}
