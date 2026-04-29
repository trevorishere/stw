export default function Testimonial() {
  return (
    <section className="bg-dark px-24 py-28 flex flex-col gap-8
                        max-tablet:px-6 max-tablet:py-16 max-phone:px-5 max-phone:py-14">
      <div className="flex flex-col gap-8">
        <blockquote className="blockquote-hanging font-slab font-normal text-[40px] leading-[56px] text-accent
                               max-w-[886px]
                               max-tablet:text-[28px] max-tablet:leading-[42px] max-phone:text-[22px] max-phone:leading-[34px]">
          "I came for the golf jokes and stayed because I actually learned how to talk to my wife without us both
          wanting to die. Five stars."
        </blockquote>

        <p className="font-rubik font-medium text-[16px] leading-5 tracking-[0.3px] text-cream">
          <span>Steve B.</span>
          <span className="font-normal text-cream/60">&nbsp;&nbsp;·&nbsp;&nbsp;Verified Client&nbsp;&nbsp;·&nbsp;&nbsp;Entrepreneur, Thought Leader, and Speaker</span>
        </p>
      </div>
    </section>
  )
}
