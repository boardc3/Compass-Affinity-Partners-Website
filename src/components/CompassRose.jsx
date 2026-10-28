// Decorative compass rose used as a subtle hero backdrop. Purely presentational.
export default function CompassRose({ className = '' }) {
  const ticks = Array.from({ length: 72 }, (_, i) => i * 5)
  return (
    <svg className={className} viewBox="0 0 400 400" aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="200" cy="200" r="190" />
        <circle cx="200" cy="200" r="172" strokeDasharray="2 6" />
        <circle cx="200" cy="200" r="120" />
        <circle cx="200" cy="200" r="36" />
        {ticks.map((deg) => (
          <line
            key={deg}
            x1="200"
            y1="10"
            x2="200"
            y2={deg % 45 === 0 ? 34 : deg % 15 === 0 ? 24 : 18}
            transform={`rotate(${deg} 200 200)`}
            strokeWidth={deg % 45 === 0 ? 2 : 1}
          />
        ))}
      </g>
      <g fill="currentColor">
        <path d="M200 30 214 186 200 200 186 186Z" opacity="0.9" />
        <path d="M200 370 186 214 200 200 214 214Z" opacity="0.5" />
        <path d="M30 200 186 186 200 200 186 214Z" opacity="0.5" />
        <path d="M370 200 214 214 200 200 214 186Z" opacity="0.9" />
        <path d="M80 80 190 182 200 200 182 190Z" opacity="0.35" />
        <path d="M320 320 210 218 200 200 218 210Z" opacity="0.35" />
        <path d="M320 80 218 190 200 200 210 182Z" opacity="0.35" />
        <path d="M80 320 190 218 200 200 182 210Z" opacity="0.35" />
      </g>
      <circle cx="200" cy="200" r="7" fill="currentColor" />
    </svg>
  )
}
