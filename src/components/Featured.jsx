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
    <section className="bg-[#262626]">
      {/* Single padded container — overflow-hidden clips the ticker at the padding edge */}
      <div className="page-container px-24 max-tablet:px-16 py-[112px] flex flex-col gap-4
                      max-phone:px-6">

        <p className="font-figtree font-extrabold text-[24px] leading-[32px] tracking-[2px] uppercase text-white
                      max-tablet:text-[18px] max-tablet:leading-[24px]
                      max-phone:text-[14px] max-phone:leading-[20px] max-phone:tracking-[1px]">
          As Featured Manifesting In…
        </p>

        <div className="overflow-hidden">
          <div className="marquee-track flex gap-12 max-phone:gap-10 w-max">
            {marqueeItems.map((logo, i) => (
              <span
                key={i}
                className="font-dmSans font-normal text-[16px] leading-normal tracking-[0.15em] uppercase text-accent whitespace-nowrap flex-shrink-0 max-phone:text-[13px]"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
