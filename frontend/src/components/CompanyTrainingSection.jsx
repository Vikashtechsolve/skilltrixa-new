import { useState } from 'react'
import {
  PLACEMENT_COMPANIES,
  placementBrandColor,
  placementIconUrl,
} from '../data/placementCompanies'
import './CompanyTrainingSection.css'

/**
 * Curated subset of partner companies we run private/cohort
 * training for. Pulled from `placementCompanies.js` so brand colours
 * and Simple Icons URLs stay in one place.
 */
const COMPANY_TRAINING_PARTNER_IDS = [
  'tcs',
  'infosys',
  'wipro',
  'accenture',
  'cognizant',
  'hcl',
  'persistent',
  'bosch',
  'siemens',
  'paypal',
  'zoho',
  'flipkart',
]

const COMPANY_TRAINING_PARTNERS = COMPANY_TRAINING_PARTNER_IDS
  .map((id) => PLACEMENT_COMPANIES.find((c) => c.id === id))
  .filter(Boolean)

const HIGHLIGHTS = [
  {
    id: 'curriculum',
    icon: 'curriculum',
    title: 'Custom curriculum',
    text: 'Built around your tech stack, role ladder, and onboarding milestones, not a generic syllabus.',
  },
  {
    id: 'projects',
    icon: 'projects',
    title: 'Hands on projects',
    text: 'Sprint style assignments that mirror real product, data, and engineering work your teams ship.',
  },
  {
    id: 'measurable',
    icon: 'measure',
    title: 'Measurable outcomes',
    text: 'Continuous assessments and L&D dashboards so HR and engineering leads can see the impact.',
  },
]

function HighlightIcon({ name }) {
  switch (name) {
    case 'curriculum':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          <path d="M9 7h7M9 11h5" />
        </svg>
      )
    case 'projects':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <path d="M14 14h7v3a4 4 0 0 1-4 4h-3z" />
        </svg>
      )
    case 'measure':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M3 3v18h18" />
          <path d="M7 14l3-3 3 1 4-4" />
          <path d="M19 6l-4 4" />
        </svg>
      )
    default:
      return null
  }
}

function CompanyTile({ company }) {
  const [failed, setFailed] = useState(false)
  const iconUrl = placementIconUrl(company.iconSlug)
  const brandColor = placementBrandColor(company.iconSlug)

  const initials = company.name
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 3)
    .toUpperCase()

  return (
    <li className="u-corp-tile" title={company.name}>
      <div className="u-corp-tile-frame">
        {failed ? (
          <span className="u-corp-tile-initials" aria-hidden>
            {initials}
          </span>
        ) : (
          <>
            <img
              src={iconUrl}
              alt=""
              className="u-corp-tile-probe"
              width={1}
              height={1}
              loading="lazy"
              decoding="async"
              onError={() => setFailed(true)}
            />
            <span
              className="u-corp-tile-icon"
              style={{
                backgroundColor: brandColor,
                WebkitMaskImage: `url(${iconUrl})`,
                maskImage: `url(${iconUrl})`,
              }}
              role="img"
              aria-label={company.name}
            />
          </>
        )}
      </div>
      <span className="u-corp-tile-name">{company.name}</span>
    </li>
  )
}

export default function CompanyTrainingSection() {
  return (
    <section className="u-corp" aria-labelledby="u-corp-heading">
      <div className="u-corp-inner page-inner">
        <header className="u-corp-head">
          <p className="u-sec-eyebrow u-sec-eyebrow--dark">For corporates</p>
          <h2 id="u-corp-heading" className="u-sec-title u-corp-title">
            Company specific training programs
          </h2>
          <p className="u-sec-lead u-corp-lead">
            Skilltrixa runs private, company specific training cohorts for your
            hiring outcomes. We map the curriculum to your stack and role
            ladder, deliver hands on projects, and run continuous assessments so
            students become interview ready with measurable progress your team
            can trust.
          </p>
        </header>

        <ul
          className="u-corp-highlights"
          aria-label="What our company specific training delivers"
        >
          {HIGHLIGHTS.map((h) => (
            <li key={h.id} className="u-corp-highlight">
              <span className="u-corp-highlight-ic" aria-hidden>
                <HighlightIcon name={h.icon} />
              </span>
              <div className="u-corp-highlight-body">
                <h3 className="u-corp-highlight-title">{h.title}</h3>
                <p className="u-corp-highlight-text">{h.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="u-corp-divider" role="presentation">
          <span className="u-corp-divider-label">Trusted by teams at</span>
        </div>

        <ul className="u-corp-grid" aria-label="Companies we have trained">
          {COMPANY_TRAINING_PARTNERS.map((c) => (
            <CompanyTile key={c.id} company={c} />
          ))}
        </ul>
      </div>
    </section>
  )
}
