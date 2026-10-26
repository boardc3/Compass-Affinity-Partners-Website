import React, { useCallback, useEffect, useRef, useState } from 'react'
import Layout from './components/Layout.jsx'
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
  CONTACT_EMAIL,
  INFO_EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
} from './lib/paths.js'

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const slides = [
  {
    id: 'healthcare',
    eyebrow: 'Exectras Healthcare Benefits',
    title: (
      <>
        Affordable healthcare benefits for your business <em>and your people.</em>
      </>
    ),
    lede:
      'Compass Affinity Partners brings proven, business-class benefits to businesses and organizations of every size: 24/7 virtual healthcare, mental health support, prescription savings, and life insurance — powered by Exectras.',
    cta: { label: 'Explore Healthcare Benefits', href: homeSection('healthcare') },
    secondary: { label: 'Talk to Mike', href: homeSection('contact') },
    visual: {
      kicker: 'Powered by Exectras',
      headline: 'Virtual Healthcare, Mental Health, Rx Savings & Life Insurance',
      tags: ['24/7/365 Virtual Care', '$0 Urgent Care Copay', 'Up to 80% Rx Savings'],
      tone: 'gold',
    },
  },
  {
    id: 'sceneset',
    eyebrow: 'SceneSet.ai Visualization',
    title: (
      <>
        Show the property, project, or product <em>before it exists.</em>
      </>
    ),
    lede:
      'AI-powered visualization from SceneSet.ai turns plans, photos, and ideas into photorealistic imagery and video — so businesses can sell, lease, and launch with confidence.',
    cta: { label: 'See SceneSet.ai', href: homeSection('sceneset') },
    secondary: { label: 'Visit SceneSet.ai', href: SCENESET_URL, external: true },
    visual: {
      kicker: 'AI-Powered Visualization',
      headline: 'Properties · Projects · Products',
      tags: ['Photorealistic Renders', 'Cinematic Video', 'Fast Turnaround'],
      tone: 'light',
    },
  },
  {
    id: 'sports',
    eyebrow: 'College Sports Marketing',
    title: (
      <>
        Put your brand in front of fans <em>who show up.</em>
      </>
    ),
    lede:
      'Advertising, sponsorships, and promotional opportunities tied to college athletics through the Heritage Sports Radio Network (HSRN) — exposure that reaches loyal, engaged audiences.',
    cta: { label: 'Explore Sports Marketing', href: homeSection('sports') },
    secondary: { label: 'Talk to Mike', href: homeSection('contact') },
    visual: {
      kicker: 'Heritage Sports Radio Network',
      headline: 'Advertising · Sponsorships · Promotions',
      tags: ['Game-Day Exposure', 'Loyal Fan Audiences', 'Flexible Packages'],
      tone: 'dark',
    },
  },
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
    body: 'Broadcast and digital placements across HSRN college athletics programming.',
  },
  {
    title: 'Sponsorships',
    body: 'Align your brand with games, segments, and events that fans tune in for all season long.',
  },
  {
    title: 'Promotional Opportunities',
    body: 'Giveaways, on-air mentions, and custom activations built around your goals and budget.',
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

const ROTATE_MS = 7000

const useCarousel = (count) => {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const go = useCallback((next) => setIndex(((next % count) + count) % count), [count])

  useEffect(() => {
    if (paused) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const timer = window.setInterval(() => setIndex((i) => (i + 1) % count), ROTATE_MS)
    return () => window.clearInterval(timer)
  }, [paused, count])

  return { index, go, setPaused }
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function HeroVisual({ visual, active }) {
  return (
    <div className={`hero-frame tone-${visual.tone}${active ? ' is-active' : ''}`} aria-hidden="true">
      <div className="hero-grid" />
      <div className="hero-glow" />
      <div className="hero-visual-copy">
        <span className="hero-visual-kicker">{visual.kicker}</span>
        <span className="hero-visual-headline">{visual.headline}</span>
      </div>
      <div className="hero-visual-tags">
        {visual.tags.map((tag) => (
          <span className="hero-tag" key={tag}>
            <span className="tag-dot" />
            {tag}
          </span>
        ))}
      </div>
      <div className="hero-compass">
        <span className="ring ring-a" />
        <span className="ring ring-b" />
        <span className="needle" />
      </div>
    </div>
  )
}

function Hero() {
  const { index, go, setPaused } = useCarousel(slides.length)
  const slide = slides[index]

  return (
    <section
      className="hero"
      id="home"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="hero-stage">
        <div className="hero-copy" key={slide.id}>
          <span className="hero-eyebrow">
            <span className="dot" /> {slide.eyebrow}
          </span>
          <h1>{slide.title}</h1>
          <p className="lede">{slide.lede}</p>

          <div className="hero-actions">
            <a className="button" href={slide.cta.href}>
              {slide.cta.label}
              <ArrowIcon className="button-arrow" />
            </a>
            {slide.secondary.external ? (
              <a
                className="link-button"
                href={slide.secondary.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {slide.secondary.label}
                <ExternalIcon className="button-arrow" />
              </a>
            ) : (
              <a className="link-button" href={slide.secondary.href}>
                {slide.secondary.label}
              </a>
            )}
          </div>
        </div>

        <aside className="hero-visual">
          {slides.map((s, i) => (
            <HeroVisual key={s.id} visual={s.visual} active={i === index} />
          ))}
        </aside>
      </div>

      <div className="hero-controls" role="group" aria-label="Featured solutions">
        <button type="button" className="hero-arrow" aria-label="Previous" onClick={() => go(index - 1)}>
          <ArrowIcon style={{ transform: 'rotate(180deg)' }} />
        </button>
        <div className="hero-dots">
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              className={`hero-dot${i === index ? ' is-active' : ''}`}
              aria-label={`Show ${s.eyebrow}`}
              aria-pressed={i === index}
              onClick={() => go(i)}
            >
              <span>{s.eyebrow}</span>
            </button>
          ))}
        </div>
        <button type="button" className="hero-arrow" aria-label="Next" onClick={() => go(index + 1)}>
          <ArrowIcon />
        </button>
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
                  <h2>
                    Increase your exposure through <em>college athletics.</em>
                  </h2>
                  <p>
                    Compass helps businesses reach loyal, engaged fans through advertising,
                    sponsorships, and promotional opportunities associated with college athletics on
                    the{' '}
                    <a href={HSRN_URL} target="_blank" rel="noopener noreferrer">
                      Heritage Sports Radio Network (HSRN)
                    </a>
                    .
                  </p>
                  <p>
                    Whether you want season-long presence or a targeted push around a big game, we
                    help you find the right package for your goals and budget.
                  </p>
                  <div className="hero-actions">
                    <a className="button" href={homeSection('contact')}>
                      Ask about sports marketing
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
