export default function Testimonial() {
  return (
    <section className="bg-dark">
      <div className="page-container px-[316px] py-[136px] flex flex-col gap-6
                      max-tablet:px-20 max-tablet:py-16 max-phone:px-[48px]">

        <blockquote className="blockquote-hanging font-bitter font-normal text-[32px] leading-[48px] text-accent
                               max-w-[806px]
                               max-tablet:text-[24px] max-tablet:leading-[36px] max-phone:text-[20px] max-phone:leading-8">
          "I came for the golf jokes and stayed because I actually learned how to talk to my wife without us both
          wanting to die. Five stars."
        </blockquote>

        <div className="flex flex-col">
          <p className="font-figtree font-bold text-[16px] leading-7 text-cream max-tablet:leading-7 max-phone:text-[12px] max-phone:leading-5">
            Steve B.
          </p>
          <p className="font-figtree font-normal text-[16px] leading-7 text-cream max-tablet:leading-7 max-phone:text-[12px] max-phone:leading-5">
            Verified Client, Entrepreneur, Thought Leader, and Speaker
          </p>
        </div>

      </div>
    </section>
  )
}
