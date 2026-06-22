import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import SEO from '../components/SEO'
import CourseSchema from '../components/CourseSchema'
import { buildBreadcrumbsLd, buildFaqLd } from '../config/seo'
import { API_BASE } from '../config/api'
import './ProgramTemplate.css'

/* ── Inline SVG Icons (mirrors FullStackDev.jsx so the layout is pixel-identical) ── */
function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.5 8h9M8.5 4l4 4-4 4" />
    </svg>
  )
}

function ChevronLeftIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M10 3.5L5.5 8l4.5 4.5" />
    </svg>
  )
}

function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6 3.5L10.5 8 6 12.5" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 7.5l3 3 6-6" />
    </svg>
  )
}

function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

function ServerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  )
}

function DatabaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  )
}

function GitBranchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="6" y1="3" x2="6" y2="15" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M18 9a9 9 0 01-9 9" />
    </svg>
  )
}

function BarChartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function MonitorIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  )
}

function LayersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  )
}

function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  )
}

function VideoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  )
}

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
    </svg>
  )
}

function MessageCircleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  )
}

const ICON_MAP = {
  code: CodeIcon,
  server: ServerIcon,
  database: DatabaseIcon,
  gitbranch: GitBranchIcon,
  barchart: BarChartIcon,
  clock: ClockIcon,
  monitor: MonitorIcon,
  layers: LayersIcon,
  users: UsersIcon,
  video: VideoIcon,
  briefcase: BriefcaseIcon,
  messagecircle: MessageCircleIcon,
  heart: HeartIcon,
  globe: GlobeIcon,
}

function IconByKey({ name }) {
  const Cmp = ICON_MAP[name] || CodeIcon
  return <Cmp />
}

function AdmissionStepIcon({ index }) {
  if (index === 0) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    )
  }
  if (index === 1) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}

export default function ProgramTemplate({ program, path }) {
  const programPath = path || (program?.id ? `/programs/${program.id}` : undefined)
  const programLabel = useMemo(
    () => program?.meta?.title?.replace(/\s*\|\s*Skilltrixa.*$/i, '').trim() || 'Program',
    [program?.meta?.title],
  )
  const seoJsonLd = useMemo(() => {
    const list = [buildFaqLd(program?.faq)]
    if (programPath) {
      list.push(
        buildBreadcrumbsLd([
          { name: 'Home', path: '/' },
          { name: 'Programs', path: '/programs' },
          { name: programLabel, path: programPath },
        ]),
      )
    }
    return list.filter(Boolean)
  }, [program, programPath, programLabel])

  const [heroImageIndex, setHeroImageIndex] = useState(0)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [activePillar, setActivePillar] = useState(0)
  const [faqCategory, setFaqCategory] = useState(program.faq.tabs[0].id)
  const [openFaq, setOpenFaq] = useState(0)
  const [applyOpen, setApplyOpen] = useState(false)
  const [applySubmitted, setApplySubmitted] = useState(false)
  const applyCloseTimerRef = useRef(null)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
  })

  const clearApplyFormFields = useCallback(() => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      city: '',
    })
  }, [])

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index)
  }

  const testimonialCount = program.testimonials.length
  const goTestimonialPrev = () => {
    setActiveTestimonial((i) => (i - 1 + testimonialCount) % testimonialCount)
  }
  const goTestimonialNext = () => {
    setActiveTestimonial((i) => (i + 1) % testimonialCount)
  }

  useEffect(() => {
    if (typeof window === 'undefined') return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduceMotion.matches) return
    const id = window.setInterval(() => {
      setHeroImageIndex((prev) => (prev + 1) % program.hero.images.length)
    }, 4000)
    return () => window.clearInterval(id)
  }, [program.hero.images.length])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduceMotion.matches) return
    const id = window.setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % program.testimonials.length)
    }, 7000)
    return () => window.clearInterval(id)
  }, [program.testimonials.length])

  const closeApplyForm = useCallback(() => {
    if (applyCloseTimerRef.current) {
      window.clearTimeout(applyCloseTimerRef.current)
      applyCloseTimerRef.current = null
    }
    setApplySubmitted(false)
    setApplyOpen(false)
    clearApplyFormFields()
  }, [clearApplyFormFields])

  useEffect(() => {
    if (!applyOpen) return
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeApplyForm()
      }
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [applyOpen, closeApplyForm])

  useEffect(() => {
    return () => {
      if (applyCloseTimerRef.current) {
        window.clearTimeout(applyCloseTimerRef.current)
      }
    }
  }, [])

  const faqItems = program.faq.data[faqCategory] || []
  const openApplyForm = () => {
    if (applyCloseTimerRef.current) {
      window.clearTimeout(applyCloseTimerRef.current)
      applyCloseTimerRef.current = null
    }
    clearApplyFormFields()
    setApplySubmitted(false)
    setApplyOpen(true)
  }

  const onFormChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const onApplySubmit = async (event) => {
    event.preventDefault()

    try {
      const res = await fetch(`${API_BASE}/applications`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          city: formData.city,
          program: programLabel,
          message: 'Applied from program page',
        }),
      })

      if (!res.ok) throw new Error('Submission failed')
      
      setApplySubmitted(true)
      clearApplyFormFields()
      if (applyCloseTimerRef.current) {
        window.clearTimeout(applyCloseTimerRef.current)
      }
      applyCloseTimerRef.current = window.setTimeout(() => {
        applyCloseTimerRef.current = null
        setApplySubmitted(false)
        setApplyOpen(false)
      }, 2000)
    } catch (err) {
      console.error('Form submission error:', err)
      alert('Something went wrong. Please try again.')
    }
  }

  return (
    <>
      <CourseSchema program={program} path={programPath} />
      <SEO
        title={program?.meta?.title}
        description={program?.meta?.description}
        path={programPath}
        image={program?.hero?.images?.[0]}
        jsonLd={seoJsonLd}
      />
    <main className="fsd-page">
      {/* ═══ 1  HERO ═══ */}
      <section className="fsd-hero" aria-labelledby="fsd-hero-heading">
        <div className="fsd-hero-grid">
          <div className="fsd-hero-copy">
            <p className="fsd-hero-kicker">
              <span className="fsd-hero-badge-pill">{program.hero.kicker}</span>
            </p>
            <h1 id="fsd-hero-heading" className="fsd-hero-title">
              {program.hero.title.lead} <span>{program.hero.title.accent}</span>
            </h1>
            <p className="fsd-hero-subtitle">{program.hero.subtitle}</p>

            <div className="fsd-hero-cta-row" role="group" aria-label="Program actions">
              <button type="button" className="fsd-btn fsd-btn--primary" onClick={openApplyForm}>
                Apply Now
              </button>
              <a href="#curriculum" className="fsd-btn fsd-btn--outline">
                View Curriculum
              </a>
            </div>

            <div className="fsd-hero-meta" aria-label="Upcoming batch">
              <p className="fsd-hero-meta-item">
                Next batch starts <strong>{program.hero.batchDate}</strong>
              </p>
              <span className="fsd-hero-meta-dot" aria-hidden />
              <p className="fsd-hero-meta-item fsd-hero-meta-item--soft">
                {program.hero.batchSoft}
              </p>
            </div>

            <ul className="fsd-hero-badges">
              {program.hero.badges.map((f) => (
                <li key={f.title} className="fsd-hero-badge">
                  <p className="fsd-hero-badge-title">{f.title}</p>
                  <p className="fsd-hero-badge-value">{f.value}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="fsd-hero-visual" aria-label="Program photos, rotating">
            <div className="fsd-hero-visual-circle" aria-hidden />
            <div className="fsd-hero-visual-photos">
              <div className="fsd-hero-visual-sizer" aria-hidden />
              {program.hero.images.map((src, i) => (
                <img
                  key={src}
                  className={`fsd-hero-img${i === heroImageIndex ? ' is-active' : ''}`}
                  src={src}
                  alt={`Skilltrixa student ${i + 1} of ${program.hero.images.length}`}
                  width={700}
                  height={700}
                  sizes="(max-width: 880px) 80vw, 420px"
                  loading={i === 0 ? 'eager' : 'lazy'}
                  fetchPriority={i === 0 ? 'high' : 'auto'}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="fsd-hero-stats-shell">
          <ul className="fsd-hero-stats" aria-label="Program highlights">
            {program.hero.stats.map((s) => (
              <li key={s.label} className="fsd-hero-stat">
                <p className="fsd-hero-stat-value">{s.value}</p>
                <p className="fsd-hero-stat-label">{s.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══ 2  ABOUT, What makes Skilltrixa different ═══ */}
      <section className="fsd-section fsd-different" aria-labelledby="fsd-about-heading">
        <div className="fsd-section-inner fsd-different-inner">
          <div className="fsd-different-header">
            <p className="fsd-different-eyebrow">{program.about.eyebrow}</p>
            <h2 id="fsd-about-heading" className="fsd-different-title">
              {program.about.titleHead}{' '}
              <span className="fsd-different-title-accent">{program.about.titleBrand}</span>{' '}
              {program.about.titleTail}
            </h2>
            <p className="fsd-different-lead">{program.about.lead}</p>
          </div>

          <div className="fsd-different-layout">
            <div
              className="fsd-bento"
              role="group"
              aria-label="Pillar visuals, select a focus area to highlight"
            >
              <div className="fsd-bento-glow" aria-hidden />
              <button
                type="button"
                className={`fsd-bento-tile fsd-bento-tile--main${activePillar === 0 ? ' is-active' : ''}`}
                onClick={() => setActivePillar(0)}
                aria-pressed={activePillar === 0}
                aria-label={`${program.about.pillars[0].title}, show story`}
              >
                <img
                  src={program.about.pillars[0].image}
                  alt={program.about.pillars[0].imageAlt}
                  loading="lazy"
                  width={800}
                  height={1000}
                />
                <span className="fsd-bento-tile-pill" aria-hidden>01</span>
              </button>
              <div className="fsd-bento-column">
                <button
                  type="button"
                  className={`fsd-bento-tile fsd-bento-tile--sub${activePillar === 1 ? ' is-active' : ''}`}
                  onClick={() => setActivePillar(1)}
                  aria-pressed={activePillar === 1}
                  aria-label={`${program.about.pillars[1].title}, show story`}
                >
                  <img
                    src={program.about.pillars[1].image}
                    alt={program.about.pillars[1].imageAlt}
                    loading="lazy"
                    width={640}
                    height={480}
                  />
                  <span className="fsd-bento-tile-pill" aria-hidden>02</span>
                </button>
                <button
                  type="button"
                  className={`fsd-bento-tile fsd-bento-tile--sub${activePillar === 2 ? ' is-active' : ''}`}
                  onClick={() => setActivePillar(2)}
                  aria-pressed={activePillar === 2}
                  aria-label={`${program.about.pillars[2].title}, show story`}
                >
                  <img
                    src={program.about.pillars[2].image}
                    alt={program.about.pillars[2].imageAlt}
                    loading="lazy"
                    width={640}
                    height={480}
                  />
                  <span className="fsd-bento-tile-pill" aria-hidden>03</span>
                </button>
              </div>
            </div>

            <ol className="fsd-pillar-list">
              {program.about.pillars.map((p, i) => (
                <li key={p.id}>
                  <button
                    type="button"
                    className={`fsd-pillar-card${activePillar === i ? ' is-active' : ''}`}
                    onClick={() => setActivePillar(i)}
                    aria-pressed={activePillar === i}
                  >
                    <span className="fsd-pillar-step" aria-hidden>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="fsd-pillar-icon" aria-hidden>
                      {i === 0 && (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                          <path d="M8 7h8M8 11h5" />
                        </svg>
                      )}
                      {i === 1 && (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      )}
                      {i === 2 && (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>
                      )}
                    </div>
                    <div className="fsd-pillar-text">
                      <h3 className="fsd-pillar-title">{p.title}</h3>
                      <p className="fsd-pillar-body">{p.text}</p>
                    </div>
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ═══ 2.5 WHY CHOOSE THIS PROGRAM ═══ */}
      <section className="fsd-section" aria-labelledby="fsd-why-heading">
        <div className="fsd-section-inner">
          <div className="fsd-why-header">
            <h2 id="fsd-why-heading">
              {program.why.titleLead} <span className="fsd-vts-text">{program.why.titleAccent}</span>
            </h2>
            <p className="fsd-why-lead">{program.why.lead}</p>
            <button type="button" className="fsd-btn fsd-btn--primary" onClick={openApplyForm}>
              Register Now
            </button>
          </div>

          <div className="fsd-why-grid">
            {program.why.cards.map((card) => (
              <div className="fsd-why-card" key={card.heading}>
                <div className="fsd-why-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="12" fill="var(--color-primary)" />
                    <path d="M7 12L10.5 15.5L18 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="fsd-why-card-content">
                  <h3>{card.heading}</h3>
                  <p>{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3  TECHNOLOGIES / SKILLS ═══ */}
      <section id="curriculum" className="fsd-section fsd-section--alt" aria-labelledby="fsd-tech-heading">
        <div className="fsd-section-inner">
          <div className="fsd-section-header">
            <p className="fsd-section-eyebrow">{program.tech.eyebrow}</p>
            <h2 id="fsd-tech-heading" className="fsd-section-title">
              {program.tech.title}
            </h2>
            <p className="fsd-section-lead">{program.tech.lead}</p>
          </div>
          <div className="fsd-tech-grid">
            {program.tech.cards.map((card) => (
              <div className="fsd-tech-card" key={card.heading}>
                <div className="fsd-tech-card-icon">
                  <IconByKey name={card.icon} />
                </div>
                <h3>{card.heading}</h3>
                <ul className="fsd-tech-tags">
                  {card.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4  ADMISSION PROCESS ═══ */}
      <section className="fsd-section fsd-adm" aria-labelledby="fsd-admission-heading">
        <div className="fsd-section-inner fsd-adm-inner">
          <header className="fsd-adm-head">
            <p className="fsd-adm-eyebrow">{program.admission.eyebrow}</p>
            <h2 id="fsd-admission-heading" className="fsd-adm-title">
              <span className="fsd-adm-title-brand">{program.admission.titleBrand}</span>{' '}
              <span>{program.admission.titleTail}</span>
            </h2>
            <p className="fsd-adm-deck">{program.admission.deck}</p>
          </header>

          <div className="fsd-adm-grid">
            <div className="fsd-adm-hero">
              <div className="fsd-adm-hero-blob" aria-hidden />
              <div className="fsd-adm-hero-frame">
                <img
                  src={program.admission.image}
                  alt={program.admission.imageAlt}
                  loading="lazy"
                  width={800}
                  height={520}
                />
                <p className="fsd-adm-hero-badge" aria-label="Three simple steps in the process">
                  {program.admission.badge.number} <span>{program.admission.badge.label}</span>
                </p>
              </div>
            </div>

            <ol className="fsd-adm-track" aria-label="Admission steps in order">
              {program.admission.steps.map((step, i) => (
                <li key={step.n} className="fsd-adm-item">
                  <div className="fsd-adm-connector" aria-hidden>
                    <div className="fsd-adm-connector-nub" />
                    {i < program.admission.steps.length - 1 && <div className="fsd-adm-connector-join" />}
                  </div>
                  <div className="fsd-adm-card">
                    <div className="fsd-adm-mono" aria-hidden>
                      {String(step.n).padStart(2, '0')}
                    </div>
                    <div className="fsd-adm-top">
                      <div className="fsd-adm-icon" aria-hidden>
                        <AdmissionStepIcon index={i} />
                      </div>
                      <div className="fsd-adm-text">
                        <h3 className="fsd-adm-h">{step.title}</h3>
                        <p className="fsd-adm-p">{step.text}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ═══ 5  PROGRAM STRUCTURE ═══ */}
      <section className="fsd-section fsd-section--alt" aria-labelledby="fsd-structure-heading">
        <div className="fsd-section-inner">
          <div className="fsd-section-header">
            <p className="fsd-section-eyebrow">{program.structure.eyebrow}</p>
            <h2 id="fsd-structure-heading" className="fsd-section-title">
              {program.structure.title}
            </h2>
            <p className="fsd-section-lead">{program.structure.lead}</p>
          </div>
          <div className="fsd-program-card">
            <span className="fsd-program-badge">{program.structure.badge}</span>
            <h3>{program.structure.h3}</h3>
            <div className="fsd-program-details">
              <div className="fsd-program-detail">
                <div className="fsd-program-detail-icon"><ClockIcon /></div>
                <div>
                  <p className="fsd-program-detail-label">Duration</p>
                  <p className="fsd-program-detail-value">{program.structure.duration}</p>
                </div>
              </div>
              <div className="fsd-program-detail">
                <div className="fsd-program-detail-icon"><MonitorIcon /></div>
                <div>
                  <p className="fsd-program-detail-label">Mode</p>
                  <p className="fsd-program-detail-value">{program.structure.mode}</p>
                </div>
              </div>
              <div className="fsd-program-detail">
                <div className="fsd-program-detail-icon"><LayersIcon /></div>
                <div>
                  <p className="fsd-program-detail-label">Projects</p>
                  <p className="fsd-program-detail-value">{program.structure.projects}</p>
                </div>
              </div>
              <div className="fsd-program-detail">
                <div className="fsd-program-detail-icon"><UsersIcon /></div>
                <div>
                  <p className="fsd-program-detail-label">Batch Size</p>
                  <p className="fsd-program-detail-value">{program.structure.batchSize}</p>
                </div>
              </div>
            </div>
            <ul className="fsd-program-features">
              {program.structure.features.map((f) => (
                <li key={f}>
                  <span className="check-icon"><CheckIcon /></span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ 6  COURSE FEATURES ═══ */}
      <section className="fsd-section" aria-labelledby="fsd-features-heading">
        <div className="fsd-section-inner">
          <div className="fsd-section-header">
            <p className="fsd-section-eyebrow">{program.features.eyebrow}</p>
            <h2 id="fsd-features-heading" className="fsd-section-title">
              {program.features.title}
            </h2>
            <p className="fsd-section-lead">{program.features.lead}</p>
          </div>
          <div className="fsd-features-grid">
            {program.features.items.map((item) => (
              <div className="fsd-feature-item" key={item.heading}>
                <div className="fsd-feature-icon">
                  <IconByKey name={item.icon} />
                </div>
                <div>
                  <h3>{item.heading}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 7  CAREER SECTION ═══ */}
      <section className="fsd-section fsd-section--alt" aria-labelledby="fsd-career-heading">
        <div className="fsd-section-inner">
          <div className="fsd-section-header">
            <p className="fsd-section-eyebrow">{program.career.eyebrow}</p>
            <h2 id="fsd-career-heading" className="fsd-section-title">
              {program.career.title}
            </h2>
            <p className="fsd-section-lead">{program.career.lead}</p>
          </div>
          <div className="fsd-career-grid">
            {program.career.cards.map((card) => (
              <div className="fsd-career-card" key={card.heading}>
                <div className="fsd-career-card-icon">
                  <IconByKey name={card.icon} />
                </div>
                <h3>{card.heading}</h3>
                <p>{card.text}</p>
                <span className="fsd-career-salary">{card.salary}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 8  FEE STRUCTURE ═══ */}
      <section className="fsd-section" aria-labelledby="fsd-fee-heading">
        <div className="fsd-section-inner">
          <div className="fsd-section-header">
            <p className="fsd-section-eyebrow">{program.fee.eyebrow}</p>
            <h2 id="fsd-fee-heading" className="fsd-section-title">
              {program.fee.title}
            </h2>
            <p className="fsd-section-lead">{program.fee.lead}</p>
          </div>
          <div className="fsd-fee-layout">
            <div className="fsd-fee-visual">
              <div className="fsd-fee-visual-blob" aria-hidden />
              <div className="fsd-fee-visual-frame">
                <img
                  src={program.fee.image}
                  alt={program.fee.imageAlt}
                  loading="lazy"
                  width={800}
                  height={1000}
                />
              </div>
            </div>

            <div className="fsd-fee-card">
              <div className="fsd-fee-card-header">
                <h3>{program.fee.name}</h3>
                <p className="fsd-fee-price">
                  {program.fee.price} <span>{program.fee.priceSuffix}</span>
                </p>
              </div>
              <div className="fsd-fee-card-body">
                <ul className="fsd-fee-includes">
                  {program.fee.includes.map((inc) => (
                    <li key={inc}>
                      <span className="check-icon"><CheckIcon /></span>
                      {inc}
                    </li>
                  ))}
                </ul>
                <button type="button" className="fsd-btn fsd-btn--primary" onClick={openApplyForm}>
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 8.5 TESTIMONIALS ═══ */}
      <section className="fsd-section fsd-stories" aria-labelledby="fsd-testimonials-heading">
        <div className="fsd-section-inner">
          <div className="fsd-stories-header">
            <p className="fsd-stories-eyebrow">{program.testimonialsHeader.eyebrow}</p>
            <h2 id="fsd-testimonials-heading" className="fsd-stories-title">
              {program.testimonialsHeader.titleParts[0]}
              <span>{program.testimonialsHeader.titleParts[1]}</span>
              {program.testimonialsHeader.titleParts[2]}
              <span>{program.testimonialsHeader.titleParts[3]}</span>
            </h2>
            <p className="fsd-stories-lead">{program.testimonialsHeader.lead}</p>
          </div>

          {(() => {
            const t = program.testimonials[activeTestimonial]
            return (
              <div className="fsd-stories-stage">
                <article
                  key={t.id}
                  className="fsd-stories-feature"
                  aria-live="polite"
                >
                  <div className="fsd-stories-feature-photo">
                    <img src={t.photo} alt={t.name} />
                  </div>

                  <div className="fsd-stories-feature-body">
                    <p className="fsd-stories-quote">{t.quote}</p>

                    <div className="fsd-stories-meta">
                      <div className="fsd-stories-author">
                        <p className="fsd-stories-name">{t.name}</p>
                        <p className="fsd-stories-role">
                          {t.role} · <span>{t.company}</span>
                        </p>
                      </div>

                      <ul className="fsd-stories-stats" aria-label="Outcome highlights">
                        <li>
                          <span className="fsd-stories-stat-label">Program</span>
                          <span className="fsd-stories-stat-value">{t.program}</span>
                        </li>
                        <li>
                          <span className="fsd-stories-stat-label">Duration</span>
                          <span className="fsd-stories-stat-value">{t.duration}</span>
                        </li>
                        <li>
                          <span className="fsd-stories-stat-label">Outcome</span>
                          <span className="fsd-stories-stat-value fsd-stories-stat-value--accent">
                            {t.salaryHike}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </article>

                <nav className="fsd-stories-controls" aria-label="Testimonial stories">
                  <button
                    type="button"
                    className="fsd-stories-nav"
                    onClick={goTestimonialPrev}
                    aria-label="Previous story"
                  >
                    <ChevronLeftIcon />
                  </button>
                  <div
                    className="fsd-stories-index"
                    role="status"
                    aria-live="polite"
                    aria-atomic="true"
                    aria-label={`Slide ${activeTestimonial + 1} of ${program.testimonials.length}`}
                    title={`Slide ${activeTestimonial + 1} of ${program.testimonials.length}`}
                  >
                    {String(activeTestimonial + 1).padStart(2, '0')}
                  </div>
                  <button
                    type="button"
                    className="fsd-stories-nav"
                    onClick={goTestimonialNext}
                    aria-label="Next story"
                  >
                    <ChevronRightIcon />
                  </button>
                </nav>
              </div>
            )
          })()}

          <ul className="fsd-stories-rail" aria-label="Other student stories">
            {program.testimonials.map((t, i) => (
              <li key={t.id}>
                <button
                  type="button"
                  className={`fsd-stories-chip${i === activeTestimonial ? ' is-active' : ''}`}
                  aria-pressed={i === activeTestimonial}
                  onClick={() => setActiveTestimonial(i)}
                >
                  <img src={t.photo} alt="" aria-hidden />
                  <span className="fsd-stories-chip-text">
                    <span className="fsd-stories-chip-name">{t.name}</span>
                    <span className="fsd-stories-chip-role">
                      {t.role} · {t.company}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══ 8.7 FAQ ═══ */}
      <section className="fsd-section fsd-faq-section" aria-labelledby="fsd-faq-heading">
        <div className="fsd-section-inner fsd-faq-outer">
          <div className="fsd-faq-panel" role="region" aria-label="Frequently asked questions and answers">
            <header className="fsd-faq-panel-head">
              <div className="fsd-faq-panel-head-copy">
                <p className="fsd-faq-eyebrow">{program.faq.header.eyebrow}</p>
                <h2 id="fsd-faq-heading" className="fsd-faq-title">
                  {program.faq.header.titleHead} <span>{program.faq.header.titleAccent}</span>
                </h2>
                <p className="fsd-faq-deck">{program.faq.header.deck}</p>
              </div>
              <div className="fsd-faq-figure" aria-hidden>
                <div className="fsd-faq-figure-glow" />
                <div className="fsd-faq-figure-bubble">?</div>
                <svg
                  className="fsd-faq-figure-ring"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="100"
                    cy="100"
                    r="90"
                    stroke="url(#fsd-faq-ring-grad)"
                    strokeWidth="2.5"
                    strokeDasharray="4 8"
                    opacity="0.55"
                  />
                  <defs>
                    <linearGradient id="fsd-faq-ring-grad" x1="0" y1="0" x2="1" y2="1">
                      <stop stopColor="var(--color-primary)" stopOpacity="0" />
                      <stop offset="0.5" stopColor="var(--color-primary)" stopOpacity="0.4" />
                      <stop offset="1" stopColor="var(--color-primary)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </header>

            <div className="fsd-faq-pills-wrap">
              <div className="fsd-faq-pills" role="tablist" aria-label="FAQ topic">
                {program.faq.tabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    id={`fsd-faq-tab-${tab.id}`}
                    className={faqCategory === tab.id ? 'is-active' : ''}
                    aria-selected={faqCategory === tab.id}
                    tabIndex={faqCategory === tab.id ? 0 : -1}
                    onClick={() => { setFaqCategory(tab.id); setOpenFaq(0) }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div
              className="fsd-faq-list"
              role="region"
              aria-label={`${program.faq.tabs.find((t) => t.id === faqCategory)?.label || ''} questions`}
            >
              {faqItems.map((faq, index) => {
                const isOpen = openFaq === index
                return (
                  <div
                    key={`${faqCategory}-${index}`}
                    className={`fsd-faq-block${isOpen ? ' is-open' : ''}`}
                  >
                    <button
                      type="button"
                      className="fsd-faq-open"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                      id={`fsd-faq-h-${faqCategory}-${index}`}
                      aria-controls={`fsd-faq-b-${faqCategory}-${index}`}
                    >
                      <span className="fsd-faq-q" aria-hidden>
                        Q{index + 1}
                      </span>
                      <span className="fsd-faq-qtext">{faq.q}</span>
                      <span className="fsd-faq-control" aria-hidden>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          {isOpen ? (
                            <line x1="5" y1="12" x2="19" y2="12" />
                          ) : (
                            <>
                              <line x1="12" y1="5" x2="12" y2="19" />
                              <line x1="5" y1="12" x2="19" y2="12" />
                            </>
                          )}
                        </svg>
                      </span>
                    </button>
                    <div
                      className="fsd-faq-drop"
                      id={`fsd-faq-b-wrap-${faqCategory}-${index}`}
                    >
                      <div
                        className="fsd-faq-drop-inner"
                        id={`fsd-faq-b-${faqCategory}-${index}`}
                        role="region"
                        aria-labelledby={`fsd-faq-h-${faqCategory}-${index}`}
                      >
                        <p className="fsd-faq-atext">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 9  FINAL CTA ═══ */}
      <section className="fsd-cta" aria-labelledby="fsd-cta-heading">
        <div className="fsd-cta-inner">
          <h2 id="fsd-cta-heading">{program.cta.title}</h2>
          <p>{program.cta.subcopy}</p>
          <button type="button" className="fsd-btn fsd-btn--primary" onClick={openApplyForm}>
            {program.cta.buttonLabel} <ArrowRightIcon />
          </button>
        </div>
      </section>

      {applyOpen ? (
        <div className="fsd-apply-overlay" role="presentation" onClick={closeApplyForm}>
          <div
            className="fsd-apply-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={applySubmitted ? 'fsd-apply-done-title' : 'fsd-apply-title'}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="fsd-apply-close"
              onClick={closeApplyForm}
              aria-label="Close apply form"
            >
              <span aria-hidden>×</span>
            </button>

            {applySubmitted ? (
              <div className="fsd-apply-done" role="status">
                <div className="fsd-apply-done-icon" aria-hidden>
                  <svg viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" opacity="0.2" />
                    <path
                      d="M14 24.5l7 7 13-14"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 id="fsd-apply-done-title" className="fsd-apply-done-title">
                  Form filled successfully
                </h3>
                <p className="fsd-apply-done-text">
                  Thanks, we have your details. This window will close in a moment.
                </p>
              </div>
            ) : (
              <>
                <header className="fsd-apply-head">
                  <p className="fsd-apply-eyebrow">Apply</p>
                  <h3 id="fsd-apply-title" className="fsd-apply-title">
                    {program.hero.title.lead}{' '}
                    <span className="fsd-apply-title-accent">{program.hero.title.accent}</span>
                  </h3>
                  <p className="fsd-apply-subtitle">
                    Next batch starts <strong>8th June 2026</strong>. Tell us how to reach you.
                  </p>
                </header>

                <form className="fsd-apply-form" onSubmit={onApplySubmit}>
                  <div className="fsd-apply-form-grid">
                    <label className="fsd-apply-field">
                      <span className="fsd-apply-label">Full name</span>
                      <input
                        type="text"
                        name="fullName"
                        autoComplete="name"
                        placeholder="e.g. Priya Sharma"
                        value={formData.fullName}
                        onChange={onFormChange}
                        required
                      />
                    </label>

                    <label className="fsd-apply-field">
                      <span className="fsd-apply-label">Email</span>
                      <input
                        type="email"
                        name="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={onFormChange}
                        required
                      />
                    </label>

                    <label className="fsd-apply-field">
                      <span className="fsd-apply-label">Phone</span>
                      <input
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        placeholder="+91 …"
                        value={formData.phone}
                        onChange={onFormChange}
                        required
                      />
                    </label>

                    <label className="fsd-apply-field">
                      <span className="fsd-apply-label">City</span>
                      <input
                        type="text"
                        name="city"
                        autoComplete="address-level2"
                        placeholder="Your city"
                        value={formData.city}
                        onChange={onFormChange}
                        required
                      />
                    </label>
                  </div>

                  <button type="submit" className="fsd-btn fsd-btn--primary fsd-apply-submit">
                    Submit application
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      ) : null}
    </main>
    </>
  )
}
