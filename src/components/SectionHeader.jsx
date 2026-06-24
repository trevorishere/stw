export default function SectionHeader({ title, subtitle, titleClassName = 'text-cobalt-dark', subtitleClassName = '' }) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className={`section-heading ${titleClassName}`}>{title}</h2>
      <p className={`section-subheading ${subtitleClassName}`}>{subtitle}</p>
    </div>
  )
}
