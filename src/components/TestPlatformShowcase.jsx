import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { TEST_PLATFORM_SHOWCASE } from '../data/testPlatformShowcase'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import './TestPlatformShowcase.css'

function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n))
}

export default function TestPlatformShowcase({ data = TEST_PLATFORM_SHOWCASE }) {
  const d = data
  const n = d.features.length
  const [active, setActive] = useState(0)
  const panelId = useId()
  const trackRef = useRef(null)
  const rafRef = useRef(0)
  const reduceMotion = usePrefersReducedMotion()
  const scrollDrive = !reduceMotion

  const current = d.features[active]

  const updateActiveFromScroll = useCallback(() => {
    const el = trackRef.current
    if (!el || !scrollDrive) return
    const rect = el.getBoundingClientRect()
    const trackH = el.offsetHeight
    const vh = window.innerHeight
    const maxScroll = Math.max(1, trackH - vh)
    const scrolledInto = Math.max(0, -rect.top)
    const progress = clamp(scrolledInto / maxScroll, 0, 1)
    const idx = Math.min(n - 1, Math.floor(progress * n))
    setActive((prev) => (prev === idx ? prev : idx))
  }, [scrollDrive, n])

  const onScroll = useCallback(() => {
    if (!scrollDrive) return
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = 0
      updateActiveFromScroll()
    })
  }, [scrollDrive, updateActiveFromScroll])

  useEffect(() => {
    if (!scrollDrive) return
    updateActiveFromScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [scrollDrive, onScroll, updateActiveFromScroll])

  const scrollToSlide = useCallback(
    (index) => {
      const el = trackRef.current
      if (!el) return
      const i = clamp(index, 0, n - 1)
      if (scrollDrive) {
        const rect = el.getBoundingClientRect()
        const top = window.scrollY + rect.top
        const maxScroll = Math.max(1, el.offsetHeight - window.innerHeight)
        const y = top + (maxScroll * i) / n
        window.scrollTo({ top: y, behavior: 'smooth' })
      } else {
        setActive(i)
      }
    },
    [scrollDrive, n],
  )

  return (
    <section className="tp-showcase" aria-labelledby="tp-showcase-heading">
      <div className="tp-showcase-inner page-inner">
        <header className="tp-showcase-head">
          <p className="tp-showcase-eyebrow">{d.eyebrow}</p>
          <h2
            id="tp-showcase-heading"
            className={`tp-showcase-title${d.subtitle ? ' tp-showcase-title--split' : ''}`}
          >
            <span className="tp-showcase-title-main">{d.title}</span>
            {d.subtitle ? (
              <span className="tp-showcase-title-accent">{d.subtitle}</span>
            ) : null}
          </h2>
          <p className="tp-showcase-lead">{d.lead}</p>
          <ul className="tp-showcase-highlights" aria-label="What the platform includes">
            {d.highlights.map((label) => (
              <li key={label} className="tp-showcase-highlight">
                {label}
              </li>
            ))}
          </ul>
        </header>

        <figure className="tp-showcase-quote">
          <blockquote className="tp-showcase-quote-text">
            <span className="tp-showcase-quote-mark" aria-hidden>
              “
            </span>
            {d.quote}
            <span className="tp-showcase-quote-mark" aria-hidden>
              ”
            </span>
          </blockquote>
          <figcaption className="tp-showcase-quote-cap">{d.quoteNote}</figcaption>
        </figure>

        {scrollDrive ? (
          <p className="tp-tour-scroll-hint" aria-hidden>
            Scroll to cycle through live screens
          </p>
        ) : null}

        <div
          ref={trackRef}
          className={`tp-tour-scroll-track${scrollDrive ? '' : ' tp-tour-scroll-track--static'}`}
          style={scrollDrive ? { '--tp-slide-count': n } : undefined}
        >
          <div className="tp-tour-scroll-sticky">
            <div className="tp-tour">
              <nav className="tp-tour-rail" aria-label="Pick a test screen to preview">
                <p className="tp-tour-rail-label">Screens</p>
                <ul className="tp-tour-rail-list">
                  {d.features.map((item, index) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        className={`tp-tour-rail-btn${index === active ? ' is-active' : ''}`}
                        aria-pressed={index === active}
                        aria-controls={panelId}
                        onClick={() => scrollToSlide(index)}
                      >
                        <span className="tp-tour-rail-thumb">
                          <img src={item.image} alt="" width={120} height={80} loading="lazy" decoding="async" />
                        </span>
                        <span className="tp-tour-rail-text">
                          <span className="tp-tour-rail-num">{String(index + 1).padStart(2, '0')}</span>
                          <span className="tp-tour-rail-name">{item.shortLabel}</span>
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="tp-tour-main">
                <div
                  id={panelId}
                  className="tp-window"
                  role="region"
                  aria-roledescription="Screenshot preview"
                  aria-label={current.title}
                >
                  <div className="tp-window-chrome" aria-hidden>
                    <span className="tp-window-dots">
                      <span />
                      <span />
                      <span />
                    </span>
                    <span className="tp-window-title">Skilltrixa · {current.title}</span>
                  </div>
                  <div className="tp-window-body">
                    <img
                      key={current.id}
                      className="tp-window-shot"
                      src={current.image}
                      alt={current.imageAlt}
                      width={1800}
                      height={1200}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>

                <div className="tp-tour-copy">
                  <h3 className="tp-tour-copy-title">{current.title}</h3>
                  <p className="tp-tour-copy-body">{current.body}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
