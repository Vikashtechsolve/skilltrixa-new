import { Link } from 'react-router-dom'
import { PROGRAM_OVERVIEW } from '../data/programOverview'
import './ProgramsOverview.css'

export default function ProgramsOverview() {
  return (
    <section className="programs-overview" aria-labelledby="programs-overview-heading">
      <div className="programs-overview-inner page-inner">
        <header className="programs-overview-head">
          <p className="programs-overview-eyebrow">Our programmes</p>
          <h2 id="programs-overview-heading" className="programs-overview-title">
            Pick your track
          </h2>
          <p className="programs-overview-lead">
            Six career tracks with one focus: skills you can prove, and support until you are interview ready.
          </p>
        </header>

        <ul className="programs-overview-grid">
          {PROGRAM_OVERVIEW.map((program, index) => (
            <li key={program.id} className="programs-overview-cell">
              <Link
                to={`/programs/${program.id}`}
                className="programs-overview-card"
                aria-label={`${program.title}: view programme details`}
              >
                <div className="programs-overview-card-media">
                  <img
                    src={program.imageUrl}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="320"
                    className="programs-overview-card-img"
                  />
                  <span className="programs-overview-index" aria-hidden>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="programs-overview-card-body">
                  <h3 className="programs-overview-card-title">{program.title}</h3>
                  <p className="programs-overview-tagline">{program.tagline}</p>
                  <ul className="programs-overview-highlights">
                    {program.highlights.map((line, i) => (
                      <li key={`${program.id}-h-${i}`}>{line}</li>
                    ))}
                  </ul>
                  <p className="programs-overview-duration">
                    <span className="programs-overview-duration-label">Typical length</span>
                    <span className="programs-overview-duration-value">{program.durationLabel}</span>
                  </p>
                  <span className="programs-overview-cta">
                    View details
                    <span className="programs-overview-cta-arrow" aria-hidden>
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <p className="programs-overview-batch-note">
          Intake dates and weekly schedule depend on your batch. We confirm the exact plan when you
          enquire.
        </p>

        <div className="programs-overview-foot">
          <Link to="/programs" className="programs-overview-foot-link">
            All programmes
          </Link>
        </div>
      </div>
    </section>
  )
}
