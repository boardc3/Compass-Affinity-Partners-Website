import SiteHeader from './SiteHeader.jsx'
import SiteFooter from './SiteFooter.jsx'
import { INFO_EMAIL, PHONE_DISPLAY, PHONE_TEL } from '../lib/paths.js'

export default function Layout({ children }) {
  return (
    <div className="site-shell">
      <div className="utility-bar">
        <div className="utility-inner">
          <span className="utility-mark">Compass Affinity Partners, LLC</span>
          <div className="utility-meta">
            <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
            <span aria-hidden="true">/</span>
            <a href={`mailto:${INFO_EMAIL}`}>{INFO_EMAIL}</a>
          </div>
        </div>
      </div>

      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  )
}
