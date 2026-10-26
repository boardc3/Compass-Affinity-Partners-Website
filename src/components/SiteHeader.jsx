import { useState } from 'react'
import CompassMark from './CompassMark.jsx'
import { ArrowIcon } from './icons.jsx'
import { homePath, homeSection } from '../lib/paths.js'

const navItems = [
  { id: 'healthcare', label: 'Healthcare Benefits' },
  { id: 'sceneset', label: 'SceneSet.ai' },
  { id: 'sports', label: 'Sports Marketing' },
  { id: 'about', label: 'About' },
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href={homePath()} aria-label="Compass Affinity Partners home">
          <CompassMark className="brand-mark" />
          <span>
            Compass <strong>Affinity</strong> Partners
          </span>
        </a>

        <nav className={`nav-links${open ? ' is-open' : ''}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.id} href={homeSection(item.id)} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="nav-mobile-cta" href={homeSection('contact')} onClick={() => setOpen(false)}>
            Contact Us
          </a>
        </nav>

        <div className="header-actions">
          <a className="button button-pill" href={homeSection('contact')}>
            Contact Us
            <ArrowIcon className="button-arrow" />
          </a>
          <button
            type="button"
            className={`nav-toggle${open ? ' is-open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
