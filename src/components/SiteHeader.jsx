import { useState } from 'react'
import logo from '../assets/compass-logo.svg'
import { ArrowIcon, HeartPulseIcon, HouseIcon, TrophyIcon, PeopleIcon } from './icons.jsx'
import { homePath, homeSection } from '../lib/paths.js'

const navItems = [
  { id: 'healthcare', label: 'Healthcare Benefits', Icon: HeartPulseIcon },
  { id: 'sceneset', label: 'Real Estate Visualization', Icon: HouseIcon },
  { id: 'sports', label: 'College Sports Marketing', Icon: TrophyIcon },
  { id: 'about', label: 'About Compass', Icon: PeopleIcon },
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href={homePath()} aria-label="Compass Affinity Partners home">
          <img className="brand-logo" src={logo} alt="Compass Affinity Partners, LLC" />
        </a>

        <div className="header-divider" aria-hidden="true" />

        <div className="header-main">
          <span className="header-title">Partnership Opportunities</span>

          <nav className={`nav-links${open ? ' is-open' : ''}`} aria-label="Primary navigation">
            {navItems.map(({ id, label, Icon }) => (
              <a key={id} href={homeSection(id)} onClick={() => setOpen(false)}>
                <Icon className="nav-icon" aria-hidden="true" />
                <span>{label}</span>
              </a>
            ))}
            <a className="nav-mobile-cta" href={homeSection('contact')} onClick={() => setOpen(false)}>
              Partner With Us
            </a>
          </nav>
        </div>

        <div className="header-actions">
          <a className="button button-pill" href={homeSection('contact')}>
            Partner With Us
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
