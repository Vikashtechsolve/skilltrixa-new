import { useCallback, useEffect, useId, useState } from 'react'
import { UNIVERSITY_PLATFORM_SHOWCASE } from '../data/testPlatformShowcase'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import './UniversityPlatform.css'

export default function UniversityPlatform() {
  const d = UNIVERSITY_PLATFORM_SHOWCASE
  const n = d.features.length
  const [active, setActive] = useState(0)
  const reduceMotion = usePrefersReducedMotion()
  const headingId = useId()
  const panelId = useId()
  const exploreLabelId = useId()

  const cur = d.features[active]

  const go = useCallback(
    (i) => {
      setActive((prev) => {
        const next = Math.max(0, Math.min(n - 1, i))
        return next === prev ? prev : next
      })
    },
    [n],
  )

  const step = useCallback(
    (delta) => {
      setActive((prev) => {
        const next = Math.max(0, Math.min(n - 1, prev + delta))
        return next === prev ? prev : next
      })
    },
    [n],
  )

  useEffect(() => {
    const onKey = (e) => {
      if (e.target.closest('input, textarea, select')) return
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault()
        step(1)
      }
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault()
        step(-1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [step])

  return (
    <section className="uplat" aria-labelledby={headingId}>
      <div className="uplat-bg" aria-hidden>
        <div className="uplat-bg-slant" />
        <div className="uplat-bg-glow" />
        <div className="uplat-bg-grid" />
      </div>

      <div className="uplat-inner page-inner">
        <header className="uplat-head">
          <div className="uplat-head-tag">{d.eyebrow}</div>
          <h2 id={headingId} className="uplat-title">
            <span className="uplat-title-strong">{d.title}</span>
            <span className="uplat-title-sub">{d.subtitle}</span>
          </h2>
          <p className="uplat-lead">{d.lead}</p>
          <ul className="uplat-tags" aria-label="Platform capabilities">
            {d.highlights.map((label) => (
              <li key={label} className="uplat-tag">
                {label}
              </li>
            ))}
          </ul>
        </header>

        <figure className="uplat-quote">
          <blockquote className="uplat-quote-main">
            <span className="uplat-quote-q" aria-hidden>
              “
            </span>
            {d.quote}
            <span className="uplat-quote-q" aria-hidden>
              ”
            </span>
          </blockquote>
          <figcaption className="uplat-quote-note">{d.quoteNote}</figcaption>
        </figure>

        <div className="uplat-stage">
          <nav className="uplat-rail" aria-label="Choose a platform screen">
            <p className="uplat-rail-title" id={exploreLabelId}>
              Explore
            </p>
            <div className="uplat-rail-list" role="tablist" aria-labelledby={exploreLabelId}>
              {d.features.map((f, i) => (
                <div key={f.id} className="uplat-rail-item">
                  <button
                    type="button"
                    id={`uplat-tab-${f.id}`}
                    role="tab"
                    aria-selected={active === i}
                    aria-controls={panelId}
                    className={`uplat-rail-btn${active === i ? ' is-active' : ''}`}
                    onClick={() => go(i)}
                  >
                    <span className="uplat-rail-idx" aria-hidden>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="uplat-rail-copy">
                      <span className="uplat-rail-name">{f.title}</span>
                      {active === i ? <span className="uplat-rail-hint">{f.shortLabel}</span> : null}
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </nav>

          <div className="uplat-focus">
            <div
              id={panelId}
              role="tabpanel"
              aria-labelledby={`uplat-tab-${cur.id}`}
              className="uplat-panel"
            >
              <div className={`uplat-frame${reduceMotion ? '' : ' uplat-frame--live'}`}>
                <img
                  key={cur.id}
                  className="uplat-shot"
                  src={cur.image}
                  alt={cur.imageAlt}
                  width={1800}
                  height={1200}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 960px) 96vw, min(72vw, 1200px)"
                />
              </div>
              <div className="uplat-readout">
                <span className="uplat-readout-eyebrow">
                  {String(active + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}
                </span>
                <h3 className="uplat-readout-title">{cur.title}</h3>
                <p className="uplat-readout-body">{cur.body}</p>
              </div>
            </div>

            <p className="uplat-hint" aria-hidden="true">
              Arrow keys move between capabilities
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
