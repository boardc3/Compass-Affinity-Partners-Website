// Compass brand mark — gold rose on black. Swap for the official logo file
// (drop it in src/ and import it here) whenever it's available.
import { useId } from 'react'

export default function CompassMark({ className = '', size = 44 }) {
  const gradId = `cmp-gold-${useId().replace(/[^a-zA-Z0-9]/g, '')}`
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="Compass Affinity Partners"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e6c65a" />
          <stop offset="0.5" stopColor="#c9a227" />
          <stop offset="1" stopColor="#9c7a1a" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="31" fill="#111111" />
      <circle cx="32" cy="32" r="26.5" fill="none" stroke={`url(#${gradId})`} strokeWidth="1.4" />
      <g stroke={`url(#${gradId})`} strokeWidth="1.2" strokeLinecap="round" opacity="0.75">
        <path d="M32 6.5v4M32 53.5v4M6.5 32h4M53.5 32h4" />
        <path d="M14 14l2.8 2.8M47.2 47.2 50 50M50 14l-2.8 2.8M16.8 47.2 14 50" />
      </g>
      <path d="M32 9 36.5 32 32 55 27.5 32Z" fill={`url(#${gradId})`} />
      <path d="M9 32 32 27.5 55 32 32 36.5Z" fill={`url(#${gradId})`} opacity="0.55" />
      <path d="M32 9 36.5 32H27.5Z" fill="#f3dc8a" />
      <circle cx="32" cy="32" r="3.2" fill="#111111" stroke="#f3dc8a" strokeWidth="1.2" />
    </svg>
  )
}
