import logoWhite from '../assets/compass-logo-white.svg'
import { ArrowIcon } from './icons.jsx'
import {
  homeSection,
  CONTACT_EMAIL,
  INFO_EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
  AFR_URL,
} from '../lib/paths.js'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img className="footer-logo" src={logoWhite} alt="Compass Affinity Partners, LLC" />
          <p>
            Building trusted partnerships that create meaningful value for organizations, strengthen
            communities, and improve the lives of the customers we serve.
          </p>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <a href={`mailto:${INFO_EMAIL}`}>{INFO_EMAIL}</a>
          <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
        </div>

        <div className="footer-col">
          <h4>Solutions</h4>
          <a href={homeSection('healthcare')}>Healthcare Benefits</a>
          <a href={homeSection('sceneset')}>SceneSet.ai Visualization</a>
          <a href={homeSection('sports')}>College Sports Marketing</a>
          <a href={homeSection('solutions')}>Other Business Solutions</a>
        </div>

        <div className="footer-col">
          <h4>Get Started</h4>
          <a className="footer-cta" href={homeSection('contact')}>
            Request a conversation
            <ArrowIcon className="button-arrow" />
          </a>
          <a href={homeSection('about')}>About Compass</a>
        </div>
      </div>

      <div className="footer-base">
        <span>&copy; {new Date().getFullYear()} Compass Affinity Partners, LLC. All rights reserved.</span>
        <span>
          Also serving first responders:{' '}
          <a href={AFR_URL} target="_blank" rel="noopener noreferrer">
            AFRBenefits.com
          </a>
        </span>
      </div>
    </footer>
  )
}
