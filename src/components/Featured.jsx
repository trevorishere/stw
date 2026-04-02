const logos = [
  'Goop.blogspot',
  'The Life You Wish You Had',
  'A Back Issue of Playgirl',
  "Dave Asprey's Sauna",
  'Wall St. Bets Reddit',
  'Heart Body Mind Centered Green',
  'TheJoeRoganBlog.geocities',
  'Yahoo!',
]

export default function Featured() {
  return (
    <section className="bg-black/[0.06] border-b-2 border-dark px-12 py-20 flex flex-col gap-8 items-center max-tablet:px-6 max-tablet:py-12 max-phone:px-5 max-phone:py-8">
      <p className="font-rubik font-bold text-xl tracking-[4px] uppercase text-center text-grey23 w-full max-phone:text-sm max-phone:tracking-[2px]">
        As featured manifesting in…
      </p>

      <div className="flex flex-wrap items-start justify-center w-full">
        {logos.map((logo, i) => (
          <span
            key={logo}
            className={`font-syne font-bold text-xl leading-5 tracking-[0.84px] uppercase text-black
                        py-4 max-phone:py-2 max-phone:text-base
                        ${i < logos.length - 1
                          ? 'px-4 border-r border-black/20 max-phone:px-3'
                          : 'px-4 max-phone:px-3'
                        }`}
          >
            {logo}
          </span>
        ))}
      </div>
    </section>
  )
}
