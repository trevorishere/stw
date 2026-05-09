import ArrowRight from './ArrowRight'

const PRODUCTS = [
  {
    id: 1,
    category: 'Empowering Product',
    title: <>The Quantum Empowerment Black Card<sup className="font-normal text-[26px] max-tablet:text-[20px] max-phone:text-[13px]">©TM©</sup></>,
    description: `A premium metal card that certifies you have 'Done The Work' and grants you access to the VIP frequency of life. Use it to purchase your next level of consciousness. Or cut your 98% pure 'spiritual guide-quality Dark Shaman certified' cocaine (the universe doesn't judge evolutionary medicine use when you're in integrity). Comes with a QR code linking to your personal Consciousness Portfolio and the quiet satisfaction of knowing you are further along than everyone else at the dinner party.`,
    cta: 'apply now',
  },
  {
    id: 2,
    category: 'Divination & Clarity',
    title: <>The STW Tarot<sup className="font-normal text-[26px] max-tablet:text-[20px] max-phone:text-[13px]">©TM©</sup></>,
    description: `A secular divination deck featuring seventy-eight of Dr. Steinberg's proprietary psychological archetypes. Pull the Nine of Hogs for clarity on creative blocks. Draw the Tower of Functional Medicine for literally any question about your gut. Includes a 40-page guidebook written entirely in therapeutic jargon.`,
    cta: 'read your future',
  },
]

export default function Products() {
  return (
    <section id="products" className="scroll-mt-[72px] max-phone:scroll-mt-[56px]">
      <div className="page-container px-28 pt-[48px] pb-[136px] flex flex-col gap-12
                      max-tablet:px-6 max-tablet:py-16 max-phone:px-6 max-phone:py-12 max-phone:gap-8">

        <div className="flex flex-col gap-4">
          <h2 className="section-heading">
            <span className="text-purple">Transformational</span>
            <br />
            <span className="text-dark">Products</span>
          </h2>
          <p className="font-figtree font-bold text-[16px] leading-6 tracking-[1px] uppercase text-dark opacity-50">
            Carry the Work With You
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 max-tablet:grid-cols-1">
          {PRODUCTS.map(product => (
            <article key={product.id} className="bg-productBg rounded-2xl overflow-hidden flex flex-col">
              <div className="flex flex-col gap-8 px-16 pb-16 pt-16 flex-1 max-phone:px-5 max-phone:pb-8 max-phone:pt-8">
                <div className="flex flex-col gap-2 flex-1">
                  <div className="flex flex-col gap-1">
                    <p className="eyebrow text-dark">
                      {product.category}
                    </p>
                    <h3 className="card-heading text-dark">
                      {product.title}
                    </h3>
                  </div>
                  <p className="body-copy text-dark">
                    {product.description}
                  </p>
                </div>
                <a
                  href="#contact"
                  className="btn-outline border-dark text-dark hover:bg-dark hover:text-cream"
                >
                  {product.cta}
                  <ArrowRight />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
