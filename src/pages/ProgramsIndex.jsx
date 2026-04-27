import { Link } from 'react-router-dom'
import { PROGRAMS } from '../data/programs'
import './ProgramsIndex.css'

function programHref(id) {
  return `/programs/${id}`
}

export default function ProgramsIndex() {
  return (
    <main className="programs-index">
      <section className="programs-index-hero" aria-labelledby="programs-index-heading">
        <div className="programs-index-inner">
          <p className="programs-index-eyebrow">Programs</p>
          <h1 id="programs-index-heading" className="programs-index-title">
            Pick a track and go deep
          </h1>
          <p className="programs-index-lead">
            Each track includes curriculum highlights, career paths, fees, and how to apply — same look and
            typography as the rest of the site.
          </p>
        </div>
      </section>

      <section className="programs-index-list-wrap" aria-label="Program tracks">
        <div className="programs-index-inner">
          <ul className="programs-index-grid">
            {PROGRAMS.map((p) => (
              <li key={p.id}>
                <Link to={programHref(p.id)} className="programs-index-card">
                  <span className="programs-index-card-label">{p.label}</span>
                  <span className="programs-index-card-arrow" aria-hidden>
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
