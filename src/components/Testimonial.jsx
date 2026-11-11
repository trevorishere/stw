import { useReveal } from '../hooks/useReveal'

const steveImg = `${import.meta.env.BASE_URL}steve-b.jpg`

export default function Testimonial() {
  const [ref, visible] = useReveal()
  return (
    <section
      ref={ref}
      className={`bg-brand-yellow${visible ? ' in-view' : ''}`}
    >
      <div className="page-container px-12 py-[160px] tablet:px-16 expanded:px-24 desktop:px-24">

        {/* Inner container — centered, 66% width, quote + attribution */}
        <div className="mx-auto max-w-[680px] tablet:max-w-[540px] w-full flex flex-col gap-6">

          <blockquote className="reveal-heading blockquote-hanging font-bitter font-light text-20 leading-1-5 text-cobalt-dark
                                 tablet:text-24
                                 expanded:text-32 desktop:text-32">
            "I thought this was a joke, but I actually learned how to talk to my wife without us both
            wanting to die. Five stars."
          </blockquote>

          {/* ml-4 (1rem) matches blockquote padding-left so attribution aligns with quote text, not the " */}
          <div className="reveal-body flex items-center gap-4 ml-[9px] tablet:ml-[11px] expanded:ml-[14px] desktop:ml-[14px]">
            <img src={steveImg} alt="Steve B." className="w-[88px] h-[88px] tablet:w-[120px] tablet:h-[120px] expanded:w-[120px] expanded:h-[120px] desktop:w-[120px] desktop:h-[120px] rounded-full object-cover shrink-0" />
            <div className="flex flex-col">
              <p className="font-figtree font-bold text-14 leading-1-5 tracking-xs text-cobalt-dark
                            tablet:text-16 expanded:text-16 desktop:text-16">
                Steve B.
              </p>
              <p className="font-figtree font-normal text-13 leading-1-5 tracking-md text-cobalt-dark
                            tablet:font-medium tablet:text-14 expanded:font-medium expanded:text-14 desktop:font-medium desktop:text-14">
                Verified Client, Entrepreneur, Thought Leader, and Speaker
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
