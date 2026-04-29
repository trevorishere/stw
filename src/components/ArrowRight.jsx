/** Small arrow-right icon matching the Figma CTA style */
export default function ArrowRight({ className = 'w-5 h-5' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="3" y1="10" x2="17" y2="10" />
      <polyline points="11 4 17 10 11 16" />
    </svg>
  )
}
