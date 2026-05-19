import { useCallback, useEffect, useState } from 'react'
import { TESTIMONIALS } from '../data/testimonials'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import './Testimonials.css'

const ROTATE_MS = 7200

export default function Testimonials() {
  const reduceMotion = usePrefersReducedMotion()
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const go = useCallback((i) => {
    const n = TESTIMONIALS.length
    setActive(((i % n) + n) % n)
  }, [])

  useEffect(() => {
    if (reduceMotion || paused || TESTIMONIALS.length <= 1) return
    const n = TESTIMONIALS.length
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % n)
    }, ROTATE_MS)
    return () => window.clearInterval(id)
  }, [reduceMotion, paused])

  const t = TESTIMONIALS[active]

  return (
    <section
      className="ts"
      aria-labelledby="ts-heading"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false)
      }}
    >
      <div className="ts-bg" aria-hidden>
        <svg className="ts-bg-svg" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="ts-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(231,33,11,0)" />
              <stop offset="35%" stopColor="rgba(231,33,11,0.12)" />
              <stop offset="100%" stopColor="rgba(231,33,11,0)" />
            </linearGradient>
          </defs>
          <path
            d="M0 120 Q200 80 400 130 T800 100"
            fill="none"
            stroke="url(#ts-line-grad)"
            strokeWidth="1.5"
            opacity="0.9"
          />
          <path
            d="M0 260 Q220 300 440 240 T800 280"
            fill="none"
            stroke="rgba(13,13,13,0.06)"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="ts-inner page-inner">
        <header className="ts-head">
          <p className="ts-eyebrow">Placements</p>
          <div className="ts-head-row">
            <h2 id="ts-heading" className="ts-title">
              Voices from students who made the shortlist
            </h2>
            <p className="ts-lead">
              Real campus stories — not scripted ads. Tap a face to hear how they prepared and where
              they landed.
            </p>
          </div>
        </header>

        <div className="ts-stage">
          <div className="ts-stage-visual" aria-hidden="true">
            <div className="ts-frame-ring" />
            <div className="ts-frame">
              <img
                key={t.id}
                className="ts-portrait"
                src={t.image}
                srcSet={t.imageSrcSet}
                sizes="(max-width: 720px) 72vw, 320px"
                alt=""
                width={640}
                height={800}
                loading="lazy"
                decoding="async"
              />
            </div>
            <span className="ts-tape ts-tape--tl" aria-hidden />
            <span className="ts-tape ts-tape--br" aria-hidden />
          </div>

          <div className="ts-stage-copy">
            <div className="ts-company-line">
              <span className="ts-company-stamp">{t.company}</span>
              <span className="ts-meta">
                {t.role} · {t.location}
              </span>
            </div>

            <blockquote className="ts-quote-block">
              <p className="ts-quote" id={`ts-quote-${t.id}`}>
                {t.quote}
              </p>
              <footer className="ts-attribution">
                <cite className="ts-name">{t.name}</cite>
                <span className="ts-campus">{t.campus}</span>
              </footer>
            </blockquote>

            <div className="ts-controls" role="group" aria-label="Choose a student story">
              <button
                type="button"
                className="ts-arrow"
                aria-label="Previous story"
                onClick={() => go(active - 1)}
              >
                <span aria-hidden>←</span>
              </button>
              <div className="ts-rail">
                {TESTIMONIALS.map((item, i) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`ts-rail-btn${i === active ? ' is-active' : ''}`}
                    onClick={() => go(i)}
                    aria-label={`Show story from ${item.name}, ${item.company}`}
                    aria-pressed={i === active}
                  >
                    <span className="ts-rail-img-wrap">
                      <img
                        src={item.image}
                        srcSet={item.imageSrcSet}
                        sizes="56px"
                        alt=""
                        width={112}
                        height={112}
                        loading="lazy"
                        decoding="async"
                      />
                    </span>
                    <span className="ts-rail-label">{item.name.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
              <button
                type="button"
                className="ts-arrow"
                aria-label="Next story"
                onClick={() => go(active + 1)}
              >
                <span aria-hidden>→</span>
              </button>
            </div>
          </div>
        </div>

        <p className="ts-live sr-only" aria-live="polite">
          Showing {t.name}, placed at {t.company}.
        </p>
      </div>
    </section>
  )
}
