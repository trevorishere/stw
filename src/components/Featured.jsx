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

export default function Featured() {
  return (
    <section className="bg-black/[0.06] px-12 py-20 flex flex-col gap-8 items-center max-tablet:px-6 max-tablet:py-12 max-phone:px-5 max-phone:py-8">
      <p className="font-dmMono text-[20px] leading-7 tracking-[4px] uppercase text-center text-grey23 w-full max-phone:text-sm max-phone:tracking-[2px]">
        As featured manifesting in…
      </p>

      <div className="flex flex-wrap items-start justify-center w-full gap-12 max-tablet:gap-6">
        {logos.map(logo => (
          <span
            key={logo}
            className="font-rubik font-bold text-[20px] leading-5 tracking-[1px] uppercase text-grey23"
          >
            {logo}
          </span>
        ))}
      </div>
    </section>
  )
}
