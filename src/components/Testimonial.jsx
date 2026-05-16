import { useReveal } from '../hooks/useReveal'

export default function Testimonial() {
  const [ref, visible] = useReveal()
  return (
    // Negative margins pull the card up into Offerings (cream bg) and pull
    // Products up behind the card's lower half (dark bg shows through).
    // z-10 keeps the card above both adjacent section backgrounds.
    <section
      ref={ref}
      className={`relative z-10
                  -mt-[160px] -mb-[160px]
                  max-phone:-mt-[160px] max-phone:-mb-[160px]
                  ${visible ? 'in-view' : ''}`}
    >
      <div className="page-container px-24 max-tablet:px-16 max-phone:px-6
                      max-phone:py-12">

        <div className="bg-[#2c2c2c] py-[136px] max-tablet:py-24 max-phone:py-16 flex flex-col gap-6">

          {/* Inner container — centered, 66% width, quote + attribution */}
          <div className="mx-auto max-w-[66%] max-phone:max-w-[80%] w-full flex flex-col gap-6">

            <blockquote className="reveal-heading blockquote-hanging font-bitter font-light text-[32px] leading-[48px] tracking-[0.005em] text-white
                                   max-tablet:text-[24px] max-tablet:leading-[36px]
                                   max-phone:text-[20px] max-phone:leading-[30px]">
              "I came for the golf jokes and stayed because I actually learned how to talk to my wife without us both
              wanting to die. Five stars."
            </blockquote>

            {/* ml-4 (1rem) matches blockquote padding-left so attribution aligns with quote text, not the " */}
            <div className="reveal-body flex flex-col ml-4">
              <p className="font-figtree font-bold text-[16px] leading-7 tracking-[0.3px] text-white
                            max-phone:text-[14px] max-phone:leading-[22px]">
                Steve B.
              </p>
              <p className="font-figtree font-medium text-[14px] leading-[22px] tracking-[1px] text-white
                            max-phone:font-normal max-phone:text-[13px] max-phone:leading-[18px]">
                Verified Client, Entrepreneur, Thought Leader, and Speaker
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
