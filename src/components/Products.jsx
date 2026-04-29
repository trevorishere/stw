import ProgramCard from './ProgramCard'

const PRODUCTS = [
  {
    id: 1,
    category: 'Empowering Product',
    title: <>The Quantum Empowerment Black Card<sup>©™©</sup></>,
    description: `A premium metal card that certifies you have Done The Work and grants you access to the VIP frequency of life. Use it to purchase your next level of consciousness. Or cut your 98% pure spiritual guide-quality Dark Shaman certified cocaine. (The universe doesn't judge using evolutionary medicines if you're in complete integrity.) Comes with a QR code linking to your personal Consciousness Portfolio and the quiet satisfaction of knowing you are further along than everyone at the dinner party.`,
    cta: 'Claim Your Card',
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
    <section id="products" className="bg-cream flex flex-col gap-12 p-24
                                      max-tablet:px-6 max-tablet:py-16 max-phone:px-5 max-phone:py-12">
      {/* Section header */}
      <div className="flex flex-col gap-4 text-center">
        <p className="font-dmMono text-[16px] leading-6 tracking-[2px] uppercase text-grey23">
          Transformational Products
        </p>
        <h2 className="font-rubik font-semibold text-[48px] leading-16 tracking-[2px] uppercase text-dark
                       max-tablet:text-[36px] max-tablet:leading-[44px] max-phone:text-[28px] max-phone:leading-9">
          Carry the Work With You
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
