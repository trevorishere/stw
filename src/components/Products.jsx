const PRODUCTS = [
  {
    id: 1,
    category: 'Empowering Product',
    title: <>The Quantum Empowerment Black Card<sup className="font-normal text-[31px] max-phone:text-[15px]">©™©</sup></>,
    description: `A premium metal card that certifies you have 'Done The Work' and grants you access to the VIP frequency of life. Use it to purchase your next level of consciousness. Or cut your 98% pure 'spiritual guide-quality Dark Shaman certified' cocaine (the universe doesn't judge evolutionary medicine use when you're in integrity). Comes with a QR code linking to your personal Consciousness Portfolio and the quiet satisfaction of knowing you are further along than everyone else at the dinner party.`,
    cta: 'apply now',
  },
  {
    id: 2,
    category: 'Divination & Clarity',
    title: <>The STW Tarot<sup className="font-normal text-[31px] max-phone:text-[15px]">©™©</sup></>,
    description: `A secular divination deck featuring seventy-eight of Dr. Steinberg's proprietary psychological archetypes. Pull the Nine of Hogs for clarity on creative blocks. Draw the Tower of Functional Medicine for literally any question about your gut. Includes a 40-page guidebook written entirely in therapeutic jargon.`,
    cta: 'read your future',
  },
]

export default function Products() {
  return (
    <section id="products">
      <div className="max-w-[1440px] mx-auto w-full px-28 pt-[48px] pb-[272px] flex flex-col gap-12
                      max-tablet:px-6 max-tablet:py-16 max-phone:px-6 max-phone:py-12 max-phone:gap-8">

        {/* Section header */}
        <div className="flex flex-col gap-1">
          <h2 className="font-figtree font-black text-[64px] leading-[56px] tracking-[2px] uppercase
                         max-tablet:text-[44px] max-tablet:leading-[48px] max-phone:text-2xl max-phone:leading-6 max-phone:tracking-[1px]">
            <span className="text-purple">Transformational</span>
            <br />
            <span className="text-dark">Products</span>
          </h2>
          <p className="font-figtree font-bold text-[16px] leading-8 tracking-[1px] uppercase text-dark opacity-50">
            Carry the Work With You
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 max-tablet:grid-cols-1">
          {PRODUCTS.map(product => (
            <article key={product.id} className="bg-productBg rounded-2xl overflow-hidden flex flex-col">
              <div className="flex flex-col gap-8 px-16 pb-16 pt-16 flex-1 max-phone:px-5 max-phone:pb-8 max-phone:pt-8">
                <div className="flex flex-col gap-4 flex-1">
                  <div className="flex flex-col gap-1">
                    <p className="font-figtree font-extrabold text-[13px] leading-5 tracking-[2px] uppercase text-dark">
                      {product.category}
                    </p>
                    <h3 className="font-figtree font-extrabold text-[48px] leading-[52px] tracking-[0.3px] text-dark
                                   max-phone:text-2xl max-phone:leading-7">
                      {product.title}
                    </h3>
                  </div>
                  <p className="font-dmSans text-[18px] leading-[26px] tracking-[0.1px] text-dark
                                max-phone:text-[14px] max-phone:leading-[22px]">
                    {product.description}
                  </p>
                </div>
                <div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 pl-6 pr-4 py-3 border border-dark
                               font-figtree font-extrabold text-[14px] leading-5 tracking-[1px]
                               uppercase text-dark no-underline hover:bg-dark hover:text-cream transition-colors"
                  >
                    {product.cta}
                    <svg className="w-4 h-4 ml-1 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
