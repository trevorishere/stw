export default function SectionHeader({ title, subtitle, titleClassName = '', subtitleClassName = '' }) {
  return (
    <div className="flex flex-col gap-4 max-tablet:gap-2">
      <h2 className={`section-heading text-dark ${titleClassName}`}>{title}</h2>
      <p className={`section-subheading ${subtitleClassName}`}>{subtitle}</p>
    </div>
  )
}
