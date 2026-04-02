import { useState } from 'react'

const INTEREST_OPTIONS = [
  'Seven Minute Wellness',
  'STW Empire Builder',
  'Discovery Session',
  'General Inquiry',
]

const FIELD_CLASSES =
  'w-full bg-transparent border-none outline-none font-rubik font-light text-base text-white/70 pb-5 placeholder:text-white/20'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', interest: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: wire up to a form backend (e.g. Resend, Formspree, or your own API)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-dark px-12 py-24 max-tablet:px-6 max-tablet:py-16 max-phone:px-5 max-phone:py-14">
      <div className="max-w-[640px] max-phone:max-w-full flex flex-col gap-0">

        <p className="font-syne font-bold text-base tracking-[3px] uppercase text-white/60 mb-4">
          Connect
        </p>

        <h2 className="font-syne font-extrabold tracking-[-0.6px] uppercase mb-10 max-phone:mb-6
                       text-[60px] leading-[60px] max-tablet:text-[44px] max-tablet:leading-[48px] max-phone:text-[32px] max-phone:leading-9">
          <span className="text-cream block">Begin the</span>
          <span className="text-accent block">Conversation</span>
        </h2>

        <p className="font-rubik font-light text-[13px] leading-[21px] text-white/50 mb-[19px]">
          Dr. Steinberg's team responds to all inquiries within 3–5 business days.<br />
          Please note: unsolicited advice will not be returned, but all genuine seeking will be honored.
        </p>

        {submitted ? (
          <p className="font-syne font-bold text-accent text-xl py-8 border-t border-white/20 mt-4">
            Your inquiry has been received. We'll be in touch.
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="border-b border-white/50 pb-px">
              <label htmlFor="name" className="block font-syne font-bold text-[9px] tracking-[2.25px] uppercase text-white/35 pt-[23.5px] pb-2">
                Full name
              </label>
              <input
                id="name" name="name" type="text"
                value={form.name} onChange={handleChange}
                placeholder="Your name"
                className={FIELD_CLASSES}
              />
            </div>

            <div className="border-b border-white/50 pb-px">
              <label htmlFor="email" className="block font-syne font-bold text-[9px] tracking-[2.25px] uppercase text-white/35 pt-[23.5px] pb-2">
                Email address
              </label>
              <input
                id="email" name="email" type="email"
                value={form.email} onChange={handleChange}
                placeholder="your@email.com"
                className={FIELD_CLASSES}
              />
            </div>

            <div className="border-b border-white/50 pb-px">
              <label htmlFor="interest" className="block font-syne font-bold text-[9px] tracking-[2.25px] uppercase text-white/35 pt-[23.5px] pb-2">
                Area of interest
              </label>
              <select
                id="interest" name="interest"
                value={form.interest} onChange={handleChange}
                className={`${FIELD_CLASSES} appearance-none cursor-pointer text-cream`}
              >
                <option value="" disabled>Select a program or inquiry type</option>
                {INTEREST_OPTIONS.map(opt => (
                  <option key={opt} value={opt} className="bg-dark text-cream">{opt}</option>
                ))}
              </select>
            </div>

            <div className="border-b border-white/50 pb-[8.59px]">
              <label htmlFor="message" className="block font-syne font-bold text-[9px] tracking-[2.25px] uppercase text-white/35 pt-[23.5px] pb-2">
                Your message
              </label>
              <textarea
                id="message" name="message"
                value={form.message} onChange={handleChange}
                placeholder="Tell us where you are on your journey..."
                rows={5}
                className={`${FIELD_CLASSES} resize-none pb-20`}
              />
            </div>

            <button
              type="submit"
              className="mt-8 bg-accent text-dark border-none font-syne font-extrabold text-[11px] tracking-[2.2px] uppercase px-10 py-[18px] cursor-pointer hover:opacity-90"
            >
              Send My Inquiry
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
