export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="flex flex-col gap-4 max-tablet:gap-2">
      <h2 className="section-heading text-dark">{title}</h2>
      <p className="section-subheading">{subtitle}</p>
    </div>
  )
}
