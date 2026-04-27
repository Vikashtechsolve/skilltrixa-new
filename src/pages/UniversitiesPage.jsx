import PlacementMarquee from '../components/PlacementMarquee'
import UniversityClientsSection from '../components/UniversityClientsSection'
import UniversityPlatform from '../components/UniversityPlatform'
import { Link } from 'react-router-dom'
import { UNIVERSITY_HERO, UNIVERSITY_HOW_WORKS, UNIVERSITY_PROBLEM, UNIVERSITY_SOLUTION } from '../data/universitiesPage'
import './UniversitiesPage.css'

const ic = {
  className: 'u-hero-ic',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

const icLg = { ...ic, className: 'u-sec-ic' }
const icWorks = { ...ic, className: 'u-works-svg' }

function StatIcon({ name }) {
  switch (name) {
    case 'building':
      return (
        <svg {...ic}>
          <path d="M3 21h18M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
          <path d="M6 7h.01M10 7h.01M14 7h.01M6 11h.01M10 11h.01M14 11h.01M6 15h4" />
        </svg>
      )
    case 'users':
      return (
        <svg {...ic}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    case 'briefcase':
      return (
        <svg {...ic}>
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        </svg>
      )
    case 'book':
      return (
        <svg {...ic}>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          <path d="M8 7h8M8 11h5" />
        </svg>
      )
    default:
      return null
  }
}

function SectionIcon({ name }) {
  switch (name) {
    case 'exposure':
      return (
        <svg {...icLg}>
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M2 7h20M6 7V5a2 2 0 0 1 2-2h4" />
          <path d="M7 12h6M7 16h4" />
        </svg>
      )
    case 'placements':
      return (
        <svg {...icLg}>
          <path d="M3 3v18h18" />
          <path d="M7 16l3-3 3 1 4-4" />
          <path d="M19 6l-4 4" />
        </svg>
      )
    case 'assessment':
      return (
        <svg {...icLg}>
          <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
          <rect x="9" y="3" width="6" height="4" rx="1" />
          <path d="M9 12h6M9 16h3" />
          <line x1="9" y1="9" x2="15" y2="9" />
        </svg>
      )
    case 'mou':
      return (
        <svg {...icLg}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6M8 13h6M8 17h4" />
          <path d="M10 7h2" />
        </svg>
      )
    case 'training':
      return (
        <svg {...icLg}>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          <path d="M10 7v.01M14 7v.01" />
        </svg>
      )
    case 'platform':
      return (
        <svg {...icLg}>
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="2" y1="9" x2="22" y2="9" />
          <line x1="2" y1="13" x2="8" y2="13" />
        </svg>
      )
    case 'project':
      return (
        <svg {...icLg}>
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
          <path d="M14 14h7v3a4 4 0 0 1-4 4h-3" />
        </svg>
      )
    default:
      return null
  }
}

function IconHeadProblem() {
  return (
    <svg
      className="u-sec-hd-svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 3 2 20h20L12 3Z" />
      <path d="M12 9v4M12 17h.01" />
    </svg>
  )
}

function IconHeadSolution() {
  return (
    <svg
      className="u-sec-hd-svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="3" width="7" height="9" rx="1" />
      <rect x="14" y="3" width="7" height="5" rx="1" />
      <rect x="14" y="12" width="7" height="9" rx="1" />
      <rect x="3" y="16" width="7" height="5" rx="1" />
    </svg>
  )
}

function IconCheck() {
  return (
    <svg
      className="u-problem-closing-svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function HowStepIcon({ name }) {
  switch (name) {
    case 'partner':
      return (
        <svg {...icWorks}>
          <path d="M3 21h18" />
          <path d="M5 21V8l7-4 7 4v13" />
          <path d="M9 21v-4h6v4" />
          <path d="M8 6h.01M12 5h.01" />
        </svg>
      )
    case 'deploy':
      return (
        <svg {...icWorks}>
          <path d="M12 3v4" />
          <path d="M5 10h2l1.5 8h9l1.5-8H5Z" />
          <path d="M9 3h6" />
        </svg>
      )
    case 'assess':
      return (
        <svg {...icWorks}>
          <rect x="2" y="4" width="20" height="14" rx="2" />
          <line x1="2" y1="9" x2="22" y2="9" />
          <line x1="2" y1="13" x2="7" y2="13" />
        </svg>
      )
    case 'projects':
      return (
        <svg {...icWorks}>
          <path d="M9 2v4" />
          <rect x="3" y="6" width="18" height="14" rx="2" />
          <line x1="3" y1="11" x2="10" y2="11" />
        </svg>
      )
    case 'outcome':
      return (
        <svg {...icWorks}>
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <path d="M9 12h6" />
        </svg>
      )
    default:
      return null
  }
}

function IconHeadJourney() {
  return (
    <svg
      className="u-sec-hd-svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <polyline points="2,5.5 6,5.5 6,9.5 10,9.5 10,13.5 14,13.5 14,17.5 19,17.5" fill="none" />
      <circle cx="2" cy="5.5" r="1" fill="currentColor" />
    </svg>
  )
}

function IconPhoto() {
  return (
    <svg
      className="u-solution-visual-ic"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="m21 15-3.9-3.9a2 2 0 0 0-2.8 0L7 19" />
    </svg>
  )
}

function splitHeadline(headline) {
  const parts = headline.split(/\s*[—–]\s*/)
  if (parts.length >= 2) {
    return { first: parts[0].trim(), second: parts.slice(1).join(' — ').trim() }
  }
  return { first: headline, second: null }
}

export default function UniversitiesPage() {
  const h = UNIVERSITY_HERO
  const prob = UNIVERSITY_PROBLEM
  const sol = UNIVERSITY_SOLUTION
  const how = UNIVERSITY_HOW_WORKS
  const { first, second } = splitHeadline(h.headline)

  return (
    <main className="universities-page">
      <section className="u-hero" aria-labelledby="u-hero-heading">
        <div className="u-hero-ambient" aria-hidden>
          <div className="u-hero-mesh" />
          <div className="u-hero-grain" />
        </div>

        <div className="u-hero-split">
          <div className="u-hero-panel u-hero-panel--copy">
            <div className="u-hero-deco u-hero-deco--line" aria-hidden />
            <p className="u-hero-eyebrow">
              <span className="u-hero-eyebrow-dot" aria-hidden />
              {h.eyebrow}
            </p>
            <h1 id="u-hero-heading" className="u-hero-title">
              <span className="u-hero-title-line">{first}</span>
              {second ? <span className="u-hero-title-accent">{second}</span> : null}
            </h1>
            <p className="u-hero-sub">{h.subtext}</p>

            <ul className="u-hero-metrics" aria-label="Skilltrixa in numbers">
              {h.stats.map((s) => (
                <li key={s.id} className="u-hero-metric" title={s.label}>
                  <span className="u-hero-metric-ic" aria-hidden>
                    <StatIcon name={s.icon} />
                  </span>
                  <p className="u-hero-metric-value">
                    <span className="u-hero-metric-num">{s.value}</span>
                    {s.suffix ? <span className="u-hero-metric-suf">{s.suffix}</span> : null}
                  </p>
                  <p className="u-hero-metric-name">{s.shortLabel}</p>
                </li>
              ))}
            </ul>

            <div className="u-hero-actions">
              <a href={h.ctaHref} className="u-hero-btn">
                {h.ctaLabel}
                <span className="u-hero-btn-ic" aria-hidden>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M5 12h14M13 5l6 7-6 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
              <p className="u-hero-hint">Typical reply within 2 business days &middot; TPO &amp; placement teams</p>
            </div>
          </div>

          <div className="u-hero-panel u-hero-panel--media">
            <div className="u-hero-media-sheen" aria-hidden />
            <div className="u-hero-frame">
              <img
                className="u-hero-img"
                src={h.image.src}
                srcSet={h.image.srcSet}
                sizes="(max-width: 900px) 100vw, 48vw"
                alt={h.image.alt}
                width={1200}
                height={800}
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
            <p className="u-hero-caption">
              <span>On-campus cohorts</span> · Training &amp; continuous assessment
            </p>
          </div>
        </div>
      </section>

      <section className="u-problem" aria-labelledby="u-problem-heading">
        <div className="u-problem-inner page-inner">
          <header className="u-problem-head">
            <div className="u-sec-hd">
              <div className="u-sec-hd-badge" aria-hidden>
                <IconHeadProblem />
              </div>
              <div className="u-sec-hd-copy">
                <p className="u-sec-eyebrow u-sec-eyebrow--dark">{prob.eyebrow}</p>
                <h2 id="u-problem-heading" className="u-sec-title">
                  {prob.title}
                </h2>
                <p className="u-sec-lead">{prob.lead}</p>
              </div>
            </div>
          </header>

          <ol className="u-problem-list">
            {prob.points.map((p, i) => (
              <li key={p.id} className="u-problem-card">
                <div className="u-problem-card-ic" aria-hidden>
                  <SectionIcon name={p.icon} />
                </div>
                <div className="u-problem-card-body">
                  <span className="u-problem-idx" aria-hidden>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="u-problem-card-title">{p.title}</h3>
                  <p className="u-problem-card-text">{p.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="u-problem-closing">
            <span className="u-problem-closing-ic" aria-hidden>
              <IconCheck />
            </span>
            <p className="u-problem-closing-text">{prob.closing}</p>
          </div>
        </div>
      </section>

      <section className="u-solution" aria-labelledby="u-solution-heading">
        <div className="u-solution-inner page-inner">
          <div className="u-solution-top">
            <div className="u-solution-intro">
              <div className="u-sec-hd u-sec-hd--solution">
                <div className="u-sec-hd-badge" aria-hidden>
                  <IconHeadSolution />
                </div>
                <div className="u-sec-hd-copy">
                  <p className="u-sec-eyebrow u-sec-eyebrow--red">{sol.eyebrow}</p>
                  <h2 id="u-solution-heading" className="u-sec-title u-sec-title--narrow">
                    {sol.title}
                  </h2>
                  <p className="u-sec-lead u-sec-lead--solution">{sol.lead}</p>
                </div>
              </div>
            </div>
            <div className="u-solution-visual">
              <span className="u-solution-visual-tag" aria-hidden>
                <IconPhoto />
                Campus
              </span>
              <img
                className="u-solution-img"
                src={sol.image.src}
                srcSet={sol.image.srcSet}
                sizes="(max-width: 900px) 100vw, 400px"
                alt={sol.image.alt}
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="u-solution-strip" role="list" aria-label="Solution pillars at a glance">
            {sol.pillars.map((p) => (
              <div key={p.id} className="u-solution-strip-item" role="listitem" title={p.title}>
                <span className="u-solution-strip-ic" aria-hidden>
                  <SectionIcon name={p.icon} />
                </span>
                <span className="u-solution-strip-txt">{p.stripLabel}</span>
              </div>
            ))}
          </div>

          <ul className="u-solution-pillars">
            {sol.pillars.map((p, i) => (
              <li key={p.id} className="u-solution-pillar">
                <div className="u-solution-pillar-ic" aria-hidden>
                  <SectionIcon name={p.icon} />
                </div>
                <div className="u-solution-pillar-body">
                  <span className="u-solution-pillar-idx" aria-hidden>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="u-solution-pillar-title">{p.title}</h3>
                  <p className="u-solution-pillar-text">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <p className="u-solution-closing">
            <span className="u-solution-closing-line" aria-hidden />
            {sol.closing}
          </p>
        </div>
      </section>

      <UniversityClientsSection />

      <section className="u-works" aria-labelledby="u-works-heading">
        <div className="u-works-canvas" aria-hidden>
          <div className="u-works-canvas__mesh" />
          <div className="u-works-canvas__beam" />
        </div>
        <div className="u-works-inner page-inner">
          <header className="u-works-head">
            <div className="u-sec-hd u-sec-hd--works">
              <div className="u-sec-hd-badge" aria-hidden>
                <IconHeadJourney />
              </div>
              <div className="u-sec-hd-copy">
                <p className="u-sec-eyebrow u-sec-eyebrow--dark">{how.eyebrow}</p>
                <h2 id="u-works-heading" className="u-sec-title">
                  {how.title}
                </h2>
                <p className="u-sec-lead">{how.lead}</p>
              </div>
            </div>
          </header>

          <ol className="u-works-track" aria-label="Steps in the Skilltrixa university partnership">
            {how.steps.map((step, i) => {
              const isEnd = i === how.steps.length - 1
              return (
                <li key={step.id} className={isEnd ? 'u-works-node u-works-node--end' : 'u-works-node'}>
                  <div className="u-works-node-pivot" aria-hidden>
                    <div className="u-works-node-ic">
                      <HowStepIcon name={step.icon} />
                    </div>
                  </div>
                  <div className="u-works-node-body">
                    <p className="u-works-node-eyebrow">
                      <span className="u-works-node-idx">
                        Step {i + 1} of {how.steps.length}
                      </span>
                      <span className="u-works-node-idx-ghost" aria-hidden>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </p>
                    <h3 className="u-works-node-title">{step.title}</h3>
                    <p className="u-works-node-line">{step.line}</p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      <UniversityPlatform />
      <PlacementMarquee sectionClassName="u-placement" />

      <section className="u-final-cta" aria-labelledby="u-final-cta-heading">
        <div className="u-final-cta-inner page-inner">
          <h2 id="u-final-cta-heading" className="u-sec-title u-final-cta-heading">
            Partner with Skilltrixa and transform your campus
          </h2>
          <p className="u-sec-lead u-final-cta-lead">
            Build a measurable placement-ready journey for every student with assessments, projects,
            mentoring, and recruiter alignment.
          </p>
          <div className="u-final-cta-actions">
            <Link to="/contact-us" className="btn btn-primary">
              Contact us
            </Link>
            <Link to="/programs" className="btn btn-ghost">
              Explore programs
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
