import { useState } from 'react'
import Btn from './Btn'
import TradeMark from './TradeMark'

// Empire Builder application — where the Empire Builder's APPLY NOW lands.
// Doubles as the mailing-list sign-up: connect onSubmit to the list provider.
const OFFERINGS = [
  { id: 'smw',   name: 'Seven Minute',              word: 'Wellness' },
  { id: 'gdt',   name: 'Going Down',                word: 'Together' },
  { id: 'rhwp',  name: 'Rock Hard Wet',             word: 'Pussy' },
]

const label = 'font-figtree font-bold text-14 leading-1-5 tracking-md uppercase text-cobalt-dark'
const field = 'w-full border border-cobalt-dark/40 bg-olive-light rounded-[8px] px-4 font-dmSans text-16 text-cobalt-dark focus:border-cobalt-dark'

export default function Apply() {
  const [sent, setSent] = useState(false)
  const [essay, setEssay] = useState('')
  const words = essay.trim() ? essay.trim().split(/\s+/).length : 0

  function onSubmit(e) {
    e.preventDefault()
    // TODO (Trevor): send to the mailing list / application inbox
    setSent(true)
    window.scrollTo(0, 0)
  }

  return (
    <section id="apply-page" className="bg-olive-light">
      <div className="page-container px-6 pt-[80px] pb-[120px] tablet:px-16 tablet:pt-[112px] tablet:pb-[144px] expanded:px-24 expanded:pt-[112px] expanded:pb-[144px] desktop:px-24 desktop:pt-[112px] desktop:pb-[144px]">
        <div className="border border-olive-dark bg-olive-dark mx-auto max-w-[896px] px-6 py-12 tablet:px-14 expanded:px-[120px] expanded:py-[64px] desktop:px-[136px] desktop:py-[80px]">

          <div className="flex flex-col gap-6">
            <p className="eyebrow text-warm-grey-light">
              STW's Signature <TradeMark size="sm" word="Container" />
            </p>
            <h1 className="card-heading text-cobalt-dark desktop:text-40 desktop:leading-1-1">
              You Felt It. That's Why You're Here.
            </h1>
          </div>

          {sent ? (
            <div role="status" className="mt-8 flex flex-col gap-4">
              <p className="body-copy text-deep-gray">
                Your application is now in Dr. Stein's hands. You'll hear from us before the next container begins.
                For now, notice what's coming up in your body. That's the feeling of being on the precipice
                of your next level of evolution.
              </p>
              <p className="body-copy font-bold text-cobalt-dark">
                MAXIMIZE Your Life. MONETIZE Your <TradeMark size="md" word="Trauma." />
              </p>
              <Btn color="muted" href="#offerings" className="self-start">Back to the Work</Btn>
            </div>
          ) : (
            <>
              <p className="body-copy text-deep-gray mt-4">
                Most people scroll right past the Empire Builder. The ones who click are already different. They've
                done the work, and now they're ready to hold space for others doing theirs — and to certify the
                people who will hold space for them. There's only a couple spots left.
              </p>

              <form onSubmit={onSubmit} className="mt-10 flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="apply-name" className={label}>Full name</label>
                  <input id="apply-name" name="name" required autoComplete="name" className={`${field} h-[48px]`} />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="apply-email" className={label}>Email</label>
                  <input id="apply-email" name="email" type="email" required autoComplete="email" className={`${field} h-[48px]`} />
                </div>

                <fieldset className="flex flex-col gap-3 border-0 p-0 m-0">
                  <legend className={`${label} mb-3`}>
                    Which STW<TradeMark size="sm" /> offerings have you completed? (Choose at least 2.)
                  </legend>
                  {OFFERINGS.map(o => (
                    <label key={o.id} htmlFor={`apply-offering-${o.id}`} className="flex items-center gap-3 body-copy text-deep-gray cursor-pointer">
                      <input id={`apply-offering-${o.id}`} type="checkbox" name="offerings" value={o.id} className="w-5 h-5 accent-[#202020] flex-none" />
                      <span>{o.name} <TradeMark size="md" word={o.word} /></span>
                    </label>
                  ))}
                </fieldset>

                <p className="body-copy text-deep-gray">Dr. Stein reviews every application personally so make sure to be your most transparent, authentic version of yourself.</p>

                <div className="flex flex-col gap-2">
                  <label htmlFor="apply-essay" className={label}>
                    In 500 words, why do you long for this exclusive chance to grow?
                  </label>
                  <textarea
                    id="apply-essay" name="essay" rows={10} value={essay}
                    onChange={e => setEssay(e.target.value)}
                    className={`${field} py-3 leading-1-5 resize-y`}
                  />
                  <p className="font-dmSans text-14 text-warm-grey-light" aria-live="polite">{words} / 500 words</p>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="apply-upgraded" className={label}>
                    What is the upgraded version of you waiting on the other side of this container?
                  </label>
                  <textarea id="apply-upgraded" name="upgraded" rows={6} className={`${field} py-3 leading-1-5 resize-y`} />
                </div>

                <Btn color="dark" type="submit" className="self-start">Submit for Review</Btn>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
