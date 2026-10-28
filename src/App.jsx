import React, { useEffect, useRef, useState } from 'react'
import Layout from './components/Layout.jsx'
import afrLogo from './afr-benefits-logo.png'
import heroMountains from './assets/hero-mountains.jpg'
import panelHealthcare from './assets/panel-healthcare.jpg'
import panelRealEstate from './assets/panel-real-estate.jpg'
import panelSports from './assets/panel-sports.jpg'
import CompassRose from './components/CompassRose.jsx'
import {
  ShieldIcon,
  HeartIcon,
  MindIcon,
  PillIcon,
  FamilyIcon,
  ArrowIcon,
  ExternalIcon,
} from './components/icons.jsx'
import {
  homeSection,
  SCENESET_URL,
  HSRN_URL,
  AFR_URL,
  CONTACT_EMAIL,
  INFO_EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
} from './lib/paths.js'

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const heroPanels = [
  { id: 'healthcare', label: 'Healthcare Benefits', image: panelHealthcare },
  { id: 'sceneset', label: 'Real Estate Visualization', image: panelRealEstate },
  { id: 'sports', label: 'College Sports Marketing', image: panelSports },
]

const proofStats = [
  { value: '24/7/365', label: 'Virtual Healthcare' },
  { value: 'Up to 80%', label: 'Prescription Savings' },
  { value: '$10K', label: 'Life Insurance' },
]

const supportPillars = [
  'Small Businesses',
  'Employers of Every Size',
  'Nonprofits',
  'Associations & Chambers',
  'Contractors & Trades',
]

const benefits = [
  {
    Icon: HeartIcon,
    eyebrow: '01 — Virtual Healthcare',
    title: 'Virtual healthcare, day or night',
    description:
      'Two ways to get care: Virtual Urgent Healthcare for right-now needs, and Virtual Primary Care for ongoing health.',
    groups: [
      {
        heading: 'Virtual Urgent Healthcare',
        items: ['24/7 Access', '$0 Copay', 'Available Anytime, Day or Night'],
      },
      {
        heading: 'Virtual Primary Care',
        items: [
          'Scheduled Appointments',
          'Follow-Up Care',
          'Consistent Access to Care',
          'Covers Employees Plus Up to Six Household Family Members',
        ],
      },
    ],
  },
  {
    Icon: MindIcon,
    eyebrow: '02 — Mental Health',
    title: 'Virtual Mental Health Support',
    description: 'Support when your employees need someone to talk to.',
    items: [
      'Free Peer-to-Peer Support',
      'Licensed Clinicians for a $25 Copay',
      'Unlimited Conversations',
      'Confidential Virtual Access',
      'Support for Stress, Anxiety, Grief, and Burnout',
    ],
  },
  {
    Icon: PillIcon,
    eyebrow: '03 — Prescription Savings',
    title: 'Real savings at the pharmacy counter',
    description:
      'Help employees reduce medication costs at national and local pharmacies with an easy-to-use savings tool.',
    items: [
      'Works at national and local pharmacies',
      'Easy-to-use mobile app',
      'Immediate savings at the counter',
    ],
  },
  {
    Icon: ShieldIcon,
    eyebrow: '04 — Life Insurance',
    title: 'Built-in protection for the family at home',
    description:
      'Simple coverage designed to support employees’ families if the unthinkable happens.',
    items: [
      '$10,000 Life Insurance Benefit',
      'No Medical Exam Required',
      'Available for Qualified Employees',
      'Accelerated Benefit for Qualifying Conditions',
    ],
  },
]

const sceneSetPoints = [
  {
    title: 'Properties',
    body: 'Photorealistic renders and virtual staging for listings, developments, and commercial spaces — marketed before the paint is dry.',
  },
  {
    title: 'Projects',
    body: 'Turn plans and concepts into imagery your stakeholders, lenders, and customers can actually picture.',
  },
  {
    title: 'Products',
    body: 'Launch-ready product visuals and cinematic video without a photo shoot, a studio, or weeks of lead time.',
  },
]

const sportsPoints = [
  {
    title: 'Advertising',
    body: 'Reach college sports audiences through broadcast and digital advertising opportunities across HSRN programming.',
  },
  {
    title: 'Sponsorships',
    body: 'Connect your brand with college sports programming, game coverage, and special events through available sponsorship opportunities.',
  },
  {
    title: 'Promotional Opportunities',
    body: 'Explore customized campaigns, on-air mentions, giveaways, and other promotional opportunities designed to help your business stand out.',
  },
]

const steps = [
  {
    title: 'Reach out',
    body: 'Tell us a little about your organization and what you’re trying to solve.',
  },
  {
    title: 'We listen',
    body: 'A short, focused conversation to understand your needs — no pressure, no obligation.',
  },
  {
    title: 'We connect you',
    body: 'We match you with the right trusted partner and help you get set up quickly.',
  },
]

const interests = [
  'Healthcare & Employee Benefits',
  'SceneSet.ai Visualization',
  'College Sports Marketing',
  'Other Business Solutions',
  'Not sure yet — let’s talk',
]

/* ------------------------------------------------------------------ */
/* Hooks                                                               */
/* ------------------------------------------------------------------ */

const useReveal = () => {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px -10% 0px' }
    )

    node.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return ref
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-backdrop" aria-hidden="true">
        <img className="hero-mountains" src={heroMountains} alt="" />
        <CompassRose className="hero-rose" />
      </div>

      <div className="hero-stage">
        <div className="hero-copy">
          <span className="hero-eyebrow" data-reveal>
            Strategic Partnerships. Real Solutions.
          </span>
          <h1 data-reveal>
            Guiding Businesses Toward Greater <em>Opportunities.</em>
          </h1>
          <span className="hero-rule" data-reveal />
          <p className="lede" data-reveal>
            Compass Affinity Partners connects innovative solutions, strategic partnerships, and
            powerful opportunities across healthcare, real estate, and collegiate sports.
          </p>
          <div className="hero-actions" data-reveal>
            <a className="button button-gold" href={homeSection('healthcare')}>
              Explore Our Partnership Opportunities
              <ArrowIcon className="button-arrow" />
            </a>
          </div>
        </div>

        <nav className="hero-panels" aria-label="Partnership areas">
          {heroPanels.map((panel, index) => (
            <a
              className="hero-panel"
              key={panel.id}
              href={homeSection(panel.id)}
              style={{ '--delay': `${index * 90}ms` }}
              data-reveal
            >
              <img src={panel.image} alt="" />
              <span className="hero-panel-label">
                {panel.label}
                <span className="hero-panel-rule" />
              </span>
            </a>
          ))}
        </nav>
      </div>

      <div className="hero-strip" data-reveal>
        {proofStats.map((stat) => (
          <div className="hero-strip-item" key={stat.label}>
            <span className="strip-value">{stat.value}</span>
            <span className="strip-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Contact form                                                        */
/* ------------------------------------------------------------------ */

const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`

function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    if (data._honey) return

    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...data,
          _subject: `New inquiry from ${data.name} — CompassAffinityPartners.com`,
          _template: 'table',
          _captcha: 'false',
        }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      form.reset()
    } catch {
      // Fallback: open the visitor's email client with the message pre-filled.
      const body = [
        `Name: ${data.name}`,
        `Company / Organization: ${data.company}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone}`,
        `Interested in: ${data.interest}`,
        '',
        data.message || '',
      ].join('\n')
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        'Inquiry from CompassAffinityPartners.com'
      )}&body=${encodeURIComponent(body)}`
      setStatus('error')
    }
  }

  return (
    <form className="demo-form" onSubmit={handleSubmit} data-reveal>
      {status === 'sent' && (
        <div className="success-message" role="status">
          Thank you. Mike will be in touch shortly.
        </div>
      )}
      {status === 'error' && (
        <div className="success-message is-error" role="status">
          We opened your email app with your message. If it didn&rsquo;t appear, email{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or call {PHONE_DISPLAY}.
        </div>
      )}

      <input type="text" name="_honey" tabIndex="-1" autoComplete="off" className="honey" aria-hidden="true" />

      <div className="form-grid">
        <label>
          <span>Name</span>
          <input name="name" type="text" required autoComplete="name" />
        </label>
        <label>
          <span>Company / Organization</span>
          <input name="company" type="text" required autoComplete="organization" />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" required autoComplete="email" />
        </label>
        <label>
          <span>Phone</span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
      </div>

      <label>
        <span>I&rsquo;m interested in</span>
        <select name="interest" defaultValue="" required>
          <option value="" disabled>
            Select one
          </option>
          {interests.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>

      <label>
        <span>Message (Optional)</span>
        <textarea name="message" rows="4" placeholder="Tell us a little about your organization and what you need" />
      </label>

      <button className="button form-submit" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send Message'}
        <ArrowIcon className="button-arrow" />
      </button>
      <p className="form-note">Your message goes directly to Mike Faust. No newsletters, no spam.</p>
    </form>
  )
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

function App() {
  const rootRef = useReveal()

  return (
    <Layout>
      <div ref={rootRef}>
        <main>
          <Hero />

          <section className="trust" aria-label="Who Compass Affinity Partners serves">
            <div className="trust-inner">
              <span className="trust-label">Built for the businesses that power our communities</span>
              <div className="trust-list">
                {supportPillars.map((pillar) => (
                  <span key={pillar}>{pillar}</span>
                ))}
              </div>
            </div>
          </section>

          {/* ---------------- Healthcare Benefits ---------------- */}
          <section className="section benefits" id="healthcare">
            <div className="section-inner">
              <header className="section-head" data-reveal>
                <span className="section-tag">
                  <span className="section-num">01</span>
                  Exectras Healthcare Benefits
                </span>
                <h2>
                  Real benefits your employees and their families can actually use{' '}
                  <em>every day.</em>
                </h2>
                <p className="section-lede">
                  Affordable, business-class healthcare and employee benefits powered by Exectras.
                  Practical, real-world benefits designed to be used when your people need them most.
                </p>
              </header>

              <div className="benefit-grid">
                {benefits.map(({ Icon, ...benefit }, index) => (
                  <article
                    className="benefit-card"
                    key={benefit.eyebrow}
                    data-reveal
                    style={{ '--delay': `${index * 70}ms` }}
                  >
                    <div className="benefit-icon">
                      <Icon />
                    </div>
                    <span className="benefit-eyebrow">{benefit.eyebrow}</span>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                    {benefit.groups ? (
                      <div className="benefit-groups">
                        {benefit.groups.map((group) => (
                          <div className="benefit-group" key={group.heading}>
                            <h4>{group.heading}</h4>
                            <ul>
                              {group.items.map((item) => (
                                <li key={item}>
                                  <span className="check" aria-hidden="true">
                                    <ShieldIcon />
                                  </span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <ul>
                        {benefit.items.map((item) => (
                          <li key={item}>
                            <span className="check" aria-hidden="true">
                              <ShieldIcon />
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                ))}
              </div>

              <div className="benefit-callout" data-reveal>
                <FamilyIcon className="callout-icon" />
                <p>
                  <strong>Designed around families.</strong> Virtual Primary Care covers employees plus
                  up to six household family members &mdash; seven in all &mdash; so the support
                  extends to the people who matter most.
                </p>
              </div>
            </div>
          </section>

          {/* ---------------- Why it matters ---------------- */}
          <section className="section problem">
            <div className="section-inner two-col">
              <div className="section-side" data-reveal>
                <span className="section-tag">
                  <span className="section-num">02</span>
                  Why It Matters
                </span>
                <h2>Good people are hard to find. Harder to keep.</h2>
              </div>

              <div className="section-body" data-reveal>
                <p>
                  Businesses are being asked to do more with less, while competing for talent against
                  larger employers with bigger benefit budgets.
                </p>
                <blockquote>
                  Real support means giving your employees something they can actually use every day.
                </blockquote>
                <p>
                  Whether it&rsquo;s quick access to care, saving money on prescriptions, or simply
                  having someone to talk to when it matters &mdash; it should be there when they need
                  it, at a cost your business can sustain.
                </p>
                <a className="link-button" href={homeSection('contact')}>
                  Ask about pricing for your team
                </a>
              </div>
            </div>
          </section>

          {/* ---------------- SceneSet.ai ---------------- */}
          <section className="section feature feature-sceneset" id="sceneset">
            <div className="section-inner">
              <div className="feature-grid">
                <div className="feature-copy" data-reveal>
                  <span className="section-tag light">
                    <span className="section-num">03</span>
                    AI-Powered Visualization
                  </span>
                  <h2>
                    Show it before you build it, with{' '}
                    <a href={SCENESET_URL} target="_blank" rel="noopener noreferrer" className="inline-brand">
                      SceneSet.ai
                    </a>
                  </h2>
                  <p>
                    <a href={SCENESET_URL} target="_blank" rel="noopener noreferrer">SceneSet.ai</a>{' '}
                    uses AI-powered visualization to help businesses showcase properties, projects,
                    and products with photorealistic imagery and video &mdash; produced in days, not
                    months, at a fraction of traditional production cost.
                  </p>
                  <p>
                    From real estate listings and new developments to product launches and marketing
                    campaigns, SceneSet.ai gives you the visuals to sell the vision while it&rsquo;s
                    still a vision.
                  </p>
                  <div className="hero-actions">
                    <a
                      className="button button-gold"
                      href={SCENESET_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit SceneSet.ai
                      <ExternalIcon className="button-arrow" />
                    </a>
                    <a className="link-button light" href={homeSection('contact')}>
                      Ask Compass about a project
                    </a>
                  </div>
                </div>

                <div className="feature-cards" data-reveal>
                  {sceneSetPoints.map((point, index) => (
                    <article className="feature-card" key={point.title} style={{ '--delay': `${index * 80}ms` }}>
                      <h3>{point.title}</h3>
                      <p>{point.body}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ---------------- College Sports Marketing ---------------- */}
          <section className="section feature feature-sports" id="sports">
            <div className="section-inner">
              <div className="feature-grid reverse">
                <div className="feature-copy" data-reveal>
                  <span className="section-tag">
                    <span className="section-num">04</span>
                    College Sports Marketing
                  </span>
                  <h2>Put Your Brand in the Game.</h2>
                  <p className="feature-sub">
                    Reach passionate college sports fans. Build recognition. Create new opportunities.
                  </p>
                  <p>
                    Through our relationship with the{' '}
                    <a href={HSRN_URL} target="_blank" rel="noopener noreferrer">
                      Heritage Sports Radio Network (HSRN)
                    </a>
                    , Compass Affinity Partners helps businesses explore advertising, sponsorship, and
                    promotional opportunities connected to college athletics, with a particular
                    emphasis on the HBCU community.
                  </p>
                  <p>
                    Whether you&rsquo;re looking for consistent brand exposure throughout the season
                    or a targeted campaign around a major game, we&rsquo;ll help identify
                    opportunities that align with your marketing goals and budget.
                  </p>
                  <div className="hero-actions">
                    <a className="button" href={homeSection('contact')}>
                      Let&rsquo;s Talk Sports Marketing
                      <ArrowIcon className="button-arrow" />
                    </a>
                  </div>
                </div>

                <div className="feature-cards" data-reveal>
                  {sportsPoints.map((point, index) => (
                    <article className="feature-card" key={point.title} style={{ '--delay': `${index * 80}ms` }}>
                      <h3>{point.title}</h3>
                      <p>{point.body}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ---------------- Other Business Solutions ---------------- */}
          <section className="section future" id="solutions">
            <div className="section-inner two-col">
              <div className="section-side" data-reveal>
                <span className="section-tag">
                  <span className="section-num">05</span>
                  Other Business Solutions
                </span>
                <h2>More ways to save and grow.</h2>
              </div>
              <div className="section-body future-body" data-reveal>
                <p>
                  Healthcare and marketing are just the beginning. Through our network of trusted
                  partners, Compass can also help businesses access additional services and
                  cost-saving opportunities designed to reduce expenses and strengthen operations.
                </p>
                <p className="future-teaser">
                  Not sure what you need? Start a conversation &mdash; if we can&rsquo;t help, we&rsquo;ll
                  point you to someone who can.
                </p>
              </div>
            </div>
          </section>

          {/* ---------------- How it works ---------------- */}
          <section className="section how" id="how-it-works">
            <div className="section-inner">
              <header className="section-head" data-reveal>
                <span className="section-tag">
                  <span className="section-num">06</span>
                  How It Works
                </span>
                <h2>Simple to get started. Easy to work with.</h2>
                <p className="section-lede">Our approach is simple, and so is the first step.</p>
              </header>

              <ol className="step-list">
                {steps.map((step, index) => (
                  <li className="step" key={step.title} data-reveal style={{ '--delay': `${index * 80}ms` }}>
                    <span className="step-number">{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <p className="reinforce" data-reveal>
                No complicated systems. No unnecessary barriers. Just trusted partners and real value.
              </p>
            </div>
          </section>

          {/* ---------------- Mission & About ---------------- */}
          <section className="section credibility" id="about">
            <div className="section-inner">
              <article className="credibility-card" data-reveal>
                <span className="section-tag light">
                  <span className="section-num">07</span>
                  Our Mission
                </span>
                <blockquote>
                  Our mission is to build trusted partnerships that create meaningful value for
                  organizations, strengthen communities, and improve the lives of the customers we
                  serve.
                </blockquote>
                <span className="credibility-meta">Compass Affinity Partners, LLC</span>
              </article>

              <div className="about-grid" data-reveal>
                <div className="about-side">
                  <h2>About Compass Affinity Partners</h2>
                </div>
                <div className="about-body">
                  <p>
                    Compass Affinity Partners, LLC is a relationship-driven company focused on
                    connecting businesses and organizations with innovative solutions that deliver
                    meaningful value.
                  </p>
                  <p>
                    We work with trusted partners to provide affordable healthcare and employee
                    benefits, innovative marketing opportunities, and other business solutions
                    designed to help organizations reduce costs, strengthen their operations, and
                    support the people they serve.
                  </p>
                  <p>
                    Our approach is simple: build lasting relationships, understand the needs of each
                    organization, and connect them with solutions that make a difference.
                  </p>
                </div>
              </div>

              <a
                className="sister-card"
                href={AFR_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-reveal
              >
                <img src={afrLogo} alt="AFR Benefits powered by Exectras logo" />
                <div className="sister-copy">
                  <span className="benefit-eyebrow">Our family of companies</span>
                  <h3>AFR Benefits powered by Exectras</h3>
                  <p>
                    The same healthcare benefits, built for the people who answer the call. Through
                    AFR Benefits, we bring Exectras virtual healthcare, mental health support,
                    prescription savings, and life insurance to volunteer fire, EMS, rescue, and
                    first responder organizations.
                  </p>
                  <span className="link-button light">
                    Visit AFRBenefits.com
                    <ExternalIcon className="button-arrow" />
                  </span>
                </div>
              </a>
            </div>
          </section>

          {/* ---------------- Contact ---------------- */}
          <section className="section demo" id="contact">
            <div className="section-inner two-col">
              <div className="section-side" data-reveal>
                <span className="section-tag">
                  <span className="section-num">08</span>
                  Contact
                </span>
                <h2>Let&rsquo;s talk about your business.</h2>
                <p className="section-lede">
                  Tell us a little about your organization and we&rsquo;ll reach out to schedule a
                  time that works for you.
                </p>
                <ul className="demo-points">
                  <li>Quick walkthrough of what&rsquo;s available</li>
                  <li>Tailored to your organization&rsquo;s size and needs</li>
                  <li>No obligation, no pressure</li>
                </ul>

                <div className="contact-card">
                  <span className="contact-name">Mike Faust</span>
                  <span className="contact-role">Compass Affinity Partners, LLC</span>
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                  <a href={`mailto:${INFO_EMAIL}`}>{INFO_EMAIL}</a>
                  <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
                </div>
              </div>

              <ContactForm />
            </div>
          </section>
        </main>
      </div>
    </Layout>
  )
}

export default App
