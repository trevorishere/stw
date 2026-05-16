export default function Testimonial() {
  return (
    <section>
      <div className="page-container px-24 max-tablet:px-16 pb-28
                      max-tablet:pb-16
                      max-phone:px-6 max-phone:pt-[88px] max-phone:pb-12">

        <div className="bg-productBg py-[136px] flex flex-col gap-6">

          {/* Inner container — centered, 66% width, quote + attribution */}
          <div className="mx-auto max-w-[66%] max-phone:max-w-[80%] w-full flex flex-col gap-6">

            <blockquote className="blockquote-hanging font-bitter font-normal text-[32px] leading-[48px] text-dark
                                   max-tablet:text-[24px] max-tablet:leading-[36px]
                                   max-phone:text-[20px] max-phone:leading-[30px]">
              "I came for the golf jokes and stayed because I actually learned how to talk to my wife without us both
              wanting to die. Five stars."
            </blockquote>

            {/* ml-4 (1rem) matches blockquote padding-left so attribution aligns with quote text, not the " */}
            <div className="flex flex-col ml-4">
              <p className="font-figtree font-bold text-[16px] leading-7 tracking-[0.3px] text-dark
                            max-phone:text-[14px] max-phone:leading-[22px]">
                Steve B.
              </p>
              <p className="font-figtree font-medium text-[14px] leading-[22px] tracking-[1px] text-dark
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
