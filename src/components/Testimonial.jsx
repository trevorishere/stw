export default function Testimonial() {
  return (
    <section className="bg-dark px-24 py-[150px] flex flex-col gap-8 max-tablet:px-6 max-tablet:py-16 max-phone:px-5 max-phone:py-14">
      <div className="flex flex-col gap-6">
        <blockquote className="font-slab font-light text-[48px] leading-[64px] text-accent
                               max-tablet:text-[32px] max-tablet:leading-[44px] max-phone:text-2xl max-phone:leading-9">
          "I came for the golf jokes and<br className="max-phone:hidden" />
          {' '}stayed because I actually<br className="max-phone:hidden" />
          {' '}learned how to talk to my wife<br className="max-phone:hidden" />
          {' '}without us both wanting to die.<br className="max-phone:hidden" />
          {' '}Five stars."
        </blockquote>

        <p className="text-xl tracking-[8px] text-accent">★ ★ ★ ★ ★</p>

        <div className="w-[60px] h-0.5 bg-accent" />

        <p className="font-rubik font-medium text-sm text-accent">
          <span>Steve B.</span>
          <span className="text-white/40">&nbsp;&nbsp;·</span>
          <span className="text-white/60">&nbsp;&nbsp;Verified Client&nbsp;&nbsp;·&nbsp;&nbsp;Entrepreneur, Thought Leader, and Speaker</span>
        </p>
      </div>
    </section>
  )
}
