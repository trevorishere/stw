const logos = [
  'Yahoo!',
  'Goop.blogspot',
  "Dave Asprey's Sauna",
  'The Life You Wish You Had',
  'A Back Issue of Playgirl',
  'Wall St. Bets Reddit',
  'Heart Body Mind Centered Green',
  'TheJoeRoganBlog.geocities',
]

// Duplicate for seamless loop — translateX(-50%) lands back on the start
const marqueeItems = [...logos, ...logos]

export default function Featured() {
  return (
    <section className="bg-dark">
      <div className="page-container px-28 pt-24 pb-8
                      max-tablet:px-12 max-tablet:pt-16 max-tablet:pb-6
                      max-phone:pl-6 max-phone:pr-0 max-phone:pt-12 max-phone:pb-4">
        <p className="font-figtree font-black text-[32px] leading-8 tracking-[2px] uppercase text-cream max-w-[500px]
                      max-tablet:text-[16px] max-tablet:leading-[18px]
                      max-phone:text-[13px] max-phone:leading-[13px] max-phone:tracking-[1px] max-phone:max-w-[172px]">
          As Featured<br />Manifesting In…
        </p>
      </div>

      <div className="overflow-hidden pb-[120px] max-tablet:pb-16 max-phone:pb-12">
        <div className="marquee-track flex gap-12 max-phone:gap-10 w-max">
          {marqueeItems.map((logo, i) => (
            <span
              key={i}
              className="font-dmSans font-medium text-[16px] leading-normal tracking-[4px] uppercase text-cream whitespace-nowrap flex-shrink-0 max-phone:text-[13px] max-phone:tracking-[3px]"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
