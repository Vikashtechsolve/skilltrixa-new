import { WHY_CHOOSE_US } from '../data/whyChooseUs'
import './WhyChooseUs.css'

const ic = {
  className: 'why-choose-bento-ic',
  'aria-hidden': true,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function BentoIcon({ id }) {
  switch (id) {
    case 'aptitude':
      return (
        <svg {...ic}>
          <path d="M4 20V4M4 20h16" />
          <rect x="6.5" y="12" width="3" height="8" rx="0.75" fill="currentColor" stroke="none" opacity="0.22" />
          <rect x="10.5" y="8" width="3" height="12" rx="0.75" fill="currentColor" stroke="none" opacity="0.38" />
          <rect x="14.5" y="10" width="3" height="10" rx="0.75" fill="currentColor" stroke="none" opacity="0.55" />
        </svg>
      )
    case 'coding':
      return (
        <svg {...ic}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M8 10l-2 2 2 2M16 10l2 2-2 2" />
          <path d="M13 8l-2 8" strokeWidth="1.35" />
        </svg>
      )
    case 'dbms':
      return (
        <svg {...ic}>
          <ellipse cx="12" cy="5" rx="7" ry="2.25" />
          <path d="M5 5v3.5c0 1.25 3.15 2.25 7 2.25s7-1 7-2.25V5" />
          <path d="M5 10.25V14c0 1.25 3.15 2.25 7 2.25s7-1 7-2.25v-3.75" />
          <path d="M5 15.25V18.5c0 1.25 3.15 2.25 7 2.25s7-1 7-2.25v-3.25" />
          <ellipse cx="12" cy="18.5" rx="7" ry="2.25" />
        </svg>
      )
    case 'system-design':
      return (
        <svg {...ic}>
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="5" rx="1.5" />
          <rect x="14" y="10" width="7" height="11" rx="1.5" />
          <rect x="3" y="12" width="7" height="9" rx="1.5" />
          <path d="M10 6.5h4M10 10v2h4M6.5 16H11" strokeWidth="1.35" opacity="0.55" />
        </svg>
      )
    case 'ai-project':
      return (
        <svg {...ic}>
          <path d="M8 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-5-5H8z" />
          <path d="M14 3v4a2 2 0 0 0 2 2h4" />
          <path d="M8 13h8M8 17h5" strokeWidth="1.35" />
          <circle cx="18" cy="18" r="3" strokeWidth="1.35" opacity="0.9" />
          <path d="M16.3 18l.9.9 1.9-2" strokeWidth="1.35" />
        </svg>
      )
    case 'ai-interview':
      return (
        <svg {...ic}>
          <rect x="2" y="5" width="15" height="12" rx="2" />
          <path d="M17 9v4a2 2 0 0 0 2 2h1" />
          <circle cx="7.5" cy="11" r="1" fill="currentColor" stroke="none" />
          <circle cx="11.5" cy="11" r="1" fill="currentColor" stroke="none" opacity="0.45" />
          <path d="M5 15.5c1.2 1 2.8 1.5 4.5 1.5s3.3-.5 4.5-1.5" />
        </svg>
      )
    default:
      return null
  }
}

export default function WhyChooseUs() {
  const d = WHY_CHOOSE_US

  return (
    <section className="why-choose" aria-labelledby="why-choose-heading">
      <div className="why-choose-inner page-inner">
        <header className="why-choose-intro">
          <p className="why-choose-eyebrow">{d.eyebrow}</p>
          <h2 id="why-choose-heading" className="why-choose-title">
            {d.title}
          </h2>
          <p className="why-choose-line">{d.line}</p>
        </header>

        <div className="why-choose-layout">
          <div className="why-choose-feature" aria-label={d.slab.headline}>
            <div className="why-choose-feature-noise" aria-hidden />
            <div className="why-choose-feature-body">
              <p className="why-choose-feature-kicker">{d.slab.kicker}</p>
              <p className="why-choose-feature-headline">{d.slab.headline}</p>
              <p className="why-choose-feature-line">{d.slab.oneLine}</p>
            </div>
            <ul className="why-choose-feature-tags">
              {d.slabTags.map((tag) => (
                <li key={tag} className="why-choose-feature-tag">
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <ul className="why-choose-grid" aria-label="Assessment types">
            {d.bento.map((item) => (
              <li key={item.id} className="why-choose-card">
                <span className="why-choose-card-ic" aria-hidden>
                  <BentoIcon id={item.id} />
                </span>
                <div className="why-choose-card-copy">
                  <h3 className="why-choose-card-title">{item.title}</h3>
                  <p className="why-choose-card-hook">{item.hook}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <ul className="why-choose-perks" role="list" aria-label="Included with the platform">
          {d.perks.map((p) => (
            <li key={p.label} className="why-choose-perk">
              {p.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
