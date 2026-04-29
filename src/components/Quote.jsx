export default function Quote() {
  return (
    <section className="bg-dark px-24 py-28 flex flex-col gap-8
                        max-tablet:px-6 max-tablet:py-16 max-phone:px-5 max-phone:py-14">
      <blockquote className="blockquote-hanging font-slab font-normal text-[40px] leading-[56px] text-cream
                             max-tablet:text-[28px] max-tablet:leading-[42px] max-phone:text-[22px] max-phone:leading-[34px]">
        "True wellness isn't about doing the work.<br className="max-phone:hidden" />
        {' '}It's about embodying the work.<br className="max-phone:hidden" />
        {' '}And then monetizing the embodiment.<br className="max-phone:hidden" />
        {' '}And then disrupting the monetization.<br className="max-phone:hidden" />
        {' '}Sustainably."
      </blockquote>

      <p className="font-rubik font-semibold text-[16px] leading-5 tracking-[0.3px] uppercase text-accent opacity-80">
        — Dr. Aaron Steinberg, DD, MA, PCC, CPCC, CSE, NTP, CPT, CNC, CWC, BPBJJ, BDSW, L1PG, RLT, DMCC, LMA, L12GCC
      </p>
    </section>
  )
}
