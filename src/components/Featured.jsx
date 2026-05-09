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
      {/* Single padded container — overflow-hidden clips the ticker at the padding edge */}
      <div className="page-container px-28 pt-[88px] pb-[104px] flex flex-col gap-6
                      max-tablet:px-12 max-tablet:pt-16 max-tablet:pb-16
                      max-phone:px-6 max-phone:pt-12 max-phone:pb-12">

        <p className="font-figtree font-extrabold text-[24px] leading-[32px] tracking-[2px] uppercase text-muted
                      max-tablet:text-[18px] max-tablet:leading-[24px]
                      max-phone:text-[14px] max-phone:leading-[20px] max-phone:tracking-[1px]">
          As Featured Manifesting In…
        </p>

        <div className="overflow-hidden">
          <div className="marquee-track flex gap-12 max-phone:gap-10 w-max">
            {marqueeItems.map((logo, i) => (
              <span
                key={i}
                className="font-dmSans font-medium text-[16px] leading-normal tracking-[3px] uppercase text-muted whitespace-nowrap flex-shrink-0 max-phone:text-[13px]"
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
