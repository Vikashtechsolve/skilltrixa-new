import { Link } from 'react-router-dom'
import './PlacementAssistanceSection.css'

function ArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12h14M13 5l6 7-6 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SmallIcon({ variant }) {
  // Simple inline icons (so we don’t depend on external assets).
  switch (variant) {
    case 'resume':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M8 7h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M8 11h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M8 15h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path
            d="M4.5 6.5A2 2 0 0 1 6.5 4.5H18a1.5 1.5 0 0 1 1.5 1.5V19a1.5 1.5 0 0 1-1.5 1.5H6.5A2 2 0 0 1 4.5 18.5V6.5Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'mock':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M21 15a4 4 0 0 1-4 4H8l-5 3 1-5V7a4 4 0 0 1 4-4h9a4 4 0 0 1 4 4v8Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path d="M8 10h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M8 14h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )
    case 'drive':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M3 7h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M8 12h.01M12 12h.01M16 12h.01"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'support':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path d="M7 12l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M12 3v14"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      )
    default:
      return null
  }
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M20 6 9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SparkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="m18.5 3 .6 1.6 1.6.6-1.6.6-.6 1.6-.6-1.6-1.6-.6 1.6-.6.6-1.6Z" fill="currentColor" />
    </svg>
  )
}

export default function PlacementAssistanceSection() {
  return (
    <section className="pa" aria-labelledby="pa-heading">
      <div className="page-inner pa-inner">
        <div className="pa-top">
          <div className="pa-head">
            <p className="pa-eyebrow">Placement support</p>
            <h2 id="pa-heading" className="pa-title">
              <span className="pa-title-ic" aria-hidden>
                <SparkIcon />
              </span>
              Placement Assistance
            </h2>
            <p className="pa-subtitle">
              End-to-end support that helps students convert preparation into selection — resume, mock interviews,
              drive readiness, and continuous guidance.
            </p>
          </div>

          <div className="pa-pill" aria-label="Dedicated placement guidance">
            <span className="pa-pill-ic" aria-hidden>
              <CheckIcon />
            </span>
            Dedicated placement guidance
          </div>
        </div>

        <div className="pa-grid">
          <div className="pa-left">
            <div className="pa-left-tabs" aria-label="Placement journey phases">
              <span className="pa-tab pa-tab--resume">Resume</span>
              <span className="pa-tab pa-tab--mock">Mock Interviews</span>
              <span className="pa-tab pa-tab--drive">Drive Prep</span>
            </div>

            <div className="pa-feature-list" role="list" aria-label="Placement assistance features">
              <div className="pa-feature" role="listitem">
                <span className="pa-feature-ic pa-feature-ic--resume" aria-hidden>
                  <SmallIcon variant="resume" />
                </span>
                <div className="pa-feature-body">
                  <h3 className="pa-feature-title">Resume Building & Profile Optimization</h3>
                  <p className="pa-feature-text">ATS-friendly structure, stronger project/skill framing, and interview-ready highlights.</p>
                </div>
              </div>

              <div className="pa-feature" role="listitem">
                <span className="pa-feature-ic pa-feature-ic--mock" aria-hidden>
                  <SmallIcon variant="mock" />
                </span>
                <div className="pa-feature-body">
                  <h3 className="pa-feature-title">Mock Interviews with Feedback</h3>
                  <p className="pa-feature-text">HR + technical mock rounds with actionable feedback to improve clarity and confidence.</p>
                </div>
              </div>

              <div className="pa-feature" role="listitem">
                <span className="pa-feature-ic pa-feature-ic--drive" aria-hidden>
                  <SmallIcon variant="drive" />
                </span>
                <div className="pa-feature-body">
                  <h3 className="pa-feature-title">Placement Drive Preparation</h3>
                  <p className="pa-feature-text">Company-wise practice sets, mock tests, and final-week revision strategy.</p>
                </div>
              </div>

              <div className="pa-feature" role="listitem">
                <span className="pa-feature-ic pa-feature-ic--support" aria-hidden>
                  <SmallIcon variant="support" />
                </span>
                <div className="pa-feature-body">
                  <h3 className="pa-feature-title">Continuous Updates & Support</h3>
                  <p className="pa-feature-text">WhatsApp/Telegram groups for drive alerts, practice resources, and guidance.</p>
                </div>
              </div>
            </div>

            <Link to="/contact-us" className="pa-cta">
              Book Free 1:1 Session <ArrowRight />
            </Link>
          </div>

          <div className="pa-right">
            <div className="pa-journey-card">
              <div className="pa-journey-head">
                <h3 className="pa-journey-title">
                  <span className="pa-journey-title-ic" aria-hidden>
                    <SparkIcon />
                  </span>
                  Your Journey with skilltrixa
                </h3>
              </div>

              <ol className="pa-steps" aria-label="skilltrixa journey steps">
                <li className="pa-step">
                  <span className="pa-step-badge">1</span>
                  <div className="pa-step-body">
                    <h4 className="pa-step-title">Assessment & Roadmap</h4>
                    <p className="pa-step-text">We evaluate your current level and plan what to focus on to match company patterns.</p>
                  </div>
                </li>
                <li className="pa-step">
                  <span className="pa-step-badge">2</span>
                  <div className="pa-step-body">
                    <h4 className="pa-step-title">Preparation &amp; Practice</h4>
                    <p className="pa-step-text">Daily sets + weekly mocks to build accuracy, speed, and confidence.</p>
                  </div>
                </li>
                <li className="pa-step">
                  <span className="pa-step-badge">3</span>
                  <div className="pa-step-body">
                    <h4 className="pa-step-title">Mock Interviews &amp; Improvement</h4>
                    <p className="pa-step-text">HR + technical mock rounds to improve answers, delivery, and communication.</p>
                  </div>
                </li>
                <li className="pa-step">
                  <span className="pa-step-badge">4</span>
                  <div className="pa-step-body">
                    <h4 className="pa-step-title">Drive Support</h4>
                    <p className="pa-step-text">Final support with drive updates, revision guidance, and last-mile preparation.</p>
                  </div>
                </li>
              </ol>

              <div className="pa-journey-foot">
                <span className="pa-foot-ic" aria-hidden>
                  <CheckIcon />
                </span>
                <p className="pa-foot-text">
                  We provide dedicated placement assistance and support through your corporate tie-ups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

