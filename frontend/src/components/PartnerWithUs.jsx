import { Link } from 'react-router-dom'
import './PartnerWithUs.css'

const ic = {
  className: 'pwu-svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

function IconTracks() {
  return (
    <svg {...ic}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <path d="M8 7h8M8 11h6" />
    </svg>
  )
}

function IconScreen() {
  return (
    <svg {...ic}>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  )
}

function IconChart() {
  return (
    <svg {...ic}>
      <path d="M3 3v18h18" />
      <path d="M7 16l4-4 4 4 5-7" />
      <circle cx="7" cy="16" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="11" cy="12" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="15" cy="16" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="20" cy="9" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconBuilding() {
  return (
    <svg {...ic}>
      <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" />
      <path d="M9 9v.01M9 12v.01M9 15v.01M9 18v.01" />
    </svg>
  )
}

function IconUsers() {
  return (
    <svg {...ic}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

const PARTNER_IMAGE =
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=960&q=85'
const PARTNER_IMAGE_SRCSET =
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=560&q=82 560w, https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=960&q=85 960w'

export default function PartnerWithUs() {
  return (
    <section className="pwu" aria-labelledby="pwu-heading">
      <div className="pwu-bg" aria-hidden />
      <div className="pwu-pattern" aria-hidden />
      <div className="pwu-inner page-inner">
        <ul className="pwu-kicker-row">
          <li className="pwu-kicker">
            <span className="pwu-kicker-ic" aria-hidden>
              <IconBuilding />
            </span>
            <span className="pwu-kicker-text">Institution programmes</span>
          </li>
          <li className="pwu-kicker">
            <span className="pwu-kicker-ic" aria-hidden>
              <IconScreen />
            </span>
            <span className="pwu-kicker-text">Tests &amp; mock interviews</span>
          </li>
          <li className="pwu-kicker">
            <span className="pwu-kicker-ic" aria-hidden>
              <IconChart />
            </span>
            <span className="pwu-kicker-text">Outcomes you can report</span>
          </li>
        </ul>

        <div className="pwu-grid">
          <div className="pwu-copy">
            <p className="pwu-eyebrow">Partner with us</p>
            <h2 id="pwu-heading" className="pwu-title">
              Bring Skilltrixa to your university placement story
            </h2>
            <p className="pwu-lead">
              One platform for structured prep, assessments, and mock interviews — so students train
              on what recruiters actually filter on, and your TPO sees signal before drive season.
            </p>
            <p className="pwu-body">
              Tie-ups include cohort onboarding, reporting that faculty can trust, and optional flows
              aligned to your calendar. The universities page walks through models, timelines, and how
              to reach our partnerships team.
            </p>
          </div>

          <div className="pwu-visual">
            <div className="pwu-visual-ring" aria-hidden />
            <div className="pwu-visual-frame">
              <img
                className="pwu-visual-img"
                src={PARTNER_IMAGE}
                srcSet={PARTNER_IMAGE_SRCSET}
                sizes="(max-width: 959px) 92vw, 380px"
                alt="Students working together in a classroom"
                width={960}
                height={640}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="pwu-float pwu-float--a">
              <IconChart />
              <span>TPO view</span>
            </div>
            <div className="pwu-float pwu-float--b">
              <IconTracks />
              <span>Batch tracks</span>
            </div>
          </div>
        </div>

        <ul className="pwu-features">
          <li className="pwu-feature">
            <div className="pwu-feature-icon" aria-hidden>
              <IconTracks />
            </div>
            <h3 className="pwu-feature-title">Department-mapped tracks</h3>
            <p className="pwu-feature-text">
              Placement-ready paths tuned to how your programmes run — not generic one-size content.
            </p>
          </li>
          <li className="pwu-feature">
            <div className="pwu-feature-icon" aria-hidden>
              <IconScreen />
            </div>
            <h3 className="pwu-feature-title">Central command</h3>
            <p className="pwu-feature-text">
              One dashboard for batches, tests, interviews, and outcomes so nothing lives in
              scattered sheets.
            </p>
          </li>
          <li className="pwu-feature">
            <div className="pwu-feature-icon" aria-hidden>
              <IconUsers />
            </div>
            <h3 className="pwu-feature-title">Pilot → rollout</h3>
            <p className="pwu-feature-text">
              We stay beside you from pilot cohort to campus-wide launch — clear owners and
              checkpoints.
            </p>
          </li>
        </ul>

        <div className="pwu-actions">
          <Link to="/universities" className="pwu-cta">
            <span className="pwu-cta-ic" aria-hidden>
              <IconBuilding />
            </span>
            University partnerships
            <span className="pwu-cta-arrow" aria-hidden>
              →
            </span>
          </Link>
          <p className="pwu-actions-note">
            Opens the universities section — tie-up models, timelines, and next steps.
          </p>
        </div>
      </div>
    </section>
  )
}
