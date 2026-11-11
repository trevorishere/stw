import { useReveal } from '../hooks/useReveal'

const steveImg = `${import.meta.env.BASE_URL}steve-b.jpg`

export default function Testimonial() {
  const [ref, visible] = useReveal()
  return (
    <section
      ref={ref}
      className={`bg-brand-yellow${visible ? ' in-view' : ''}`}
    >
      <div className="page-container px-6 py-[160px] tablet:px-16 expanded:px-24 desktop:px-24">

        {/* Inner container — centered column: big quote mark, quote, attribution, all on one left edge */}
        <div className="mx-auto max-w-[720px] tablet:max-w-[540px] w-full flex flex-col gap-6">

          {/* The big mark stands in for the inline quote marks (.testimonial-* in index.css) */}
          <blockquote className="reveal-heading text-cobalt-dark">
            <svg className="testimonial-mark" viewBox="0 0 96 69" aria-hidden="true" focusable="false">
              <path d="M0 46C0 21 14 5 37 0l4 9C29 13 23 21 22 29a20 20 0 1 1-22 17Z" />
              <path d="M53 46C53 21 67 5 90 0l4 9C82 13 76 21 75 29a20 20 0 1 1-22 17Z" />
            </svg>
            <p className="testimonial-quote">
              I thought this was a joke, but I actually learned how to talk to my wife without us both
              wanting to die. Five stars.
            </p>
          </blockquote>

          <div className="reveal-body flex items-center gap-4">
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
