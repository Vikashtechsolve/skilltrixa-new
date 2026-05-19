import { useState } from 'react'
import {
  PLACEMENT_COMPANIES,
  getPlacementCompaniesRowB,
  placementBrandColor,
  placementIconUrl,
} from '../data/placementCompanies'
import './PlacementMarquee.css'

function LogoTile({ company }) {
  const [failed, setFailed] = useState(false)
  const iconUrl = placementIconUrl(company.iconSlug)
  const brandColor = placementBrandColor(company.iconSlug)

  const initials = company.name
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 3)
    .toUpperCase()

  if (failed) {
    return (
      <div className="placement-logo placement-logo--fallback" title={company.name}>
        <span className="placement-logo-initials" aria-hidden>
          {initials}
        </span>
      </div>
    )
  }

  return (
    <div className="placement-logo" title={company.name}>
      <img
        src={iconUrl}
        alt=""
        className="placement-probe"
        width={1}
        height={1}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
      />
      <span
        className="placement-icon"
        style={{
          backgroundColor: brandColor,
          WebkitMaskImage: `url(${iconUrl})`,
          maskImage: `url(${iconUrl})`,
        }}
        role="img"
        aria-label={company.name}
      />
    </div>
  )
}

function MarqueeBand({ companies, directionLeft, durationSec, paused }) {
  return (
    <div
      className={`placement-marquee${directionLeft ? ' placement-marquee--left' : ' placement-marquee--right'}${paused ? ' is-paused' : ''}`}
      style={{ '--marquee-duration': `${durationSec}s` }}
    >
      <div className="placement-marquee-viewport" role="presentation">
        <div className="placement-marquee-track">
          <div className="placement-marquee-chunk">
            {companies.map((c) => (
              <LogoTile key={c.id} company={c} />
            ))}
          </div>
          <div className="placement-marquee-chunk" aria-hidden="true">
            {companies.map((c) => (
              <LogoTile key={`${c.id}-dup`} company={c} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PlacementMarquee({ reduceMotion, sectionClassName }) {
  const rowB = getPlacementCompaniesRowB()
  const names = PLACEMENT_COMPANIES.map((c) => c.name).join(', ')

  return (
    <section
      className={['placement-section', sectionClassName].filter(Boolean).join(' ')}
      aria-labelledby="placement-heading"
    >
      <div className="placement-section-head page-inner">
        <h2 id="placement-heading" className="placement-section-title">
          Companies where our learners get placed
        </h2>
        <p className="placement-section-lead">
          A glimpse of teams and brands — from global tech to India&apos;s fastest-growing product companies.
        </p>
        <p className="sr-only">
          Placement and hiring presence includes organisations such as: {names}.
        </p>
      </div>

      {reduceMotion ? (
        <div className="placement-static-grid page-inner" role="list">
          {PLACEMENT_COMPANIES.map((c) => (
            <div key={c.id} className="placement-static-item" role="listitem">
              <LogoTile company={c} />
              <span className="placement-static-name">{c.name}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="placement-marquees" aria-hidden="true">
          <MarqueeBand companies={PLACEMENT_COMPANIES} directionLeft durationSec={92} paused={false} />
          <MarqueeBand companies={rowB} directionLeft={false} durationSec={118} paused={false} />
        </div>
      )}
    </section>
  )
}
