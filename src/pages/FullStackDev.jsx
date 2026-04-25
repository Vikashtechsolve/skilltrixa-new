import { useEffect, useState } from 'react'
import './FullStackDev.css'

/* ── Inline SVG Icons ── */
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

function ShoppingCartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
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

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
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

/**
 * Cut-out PNG portraits (transparent backgrounds) — they sit IN FRONT of
 * the pink circle backdrop, exactly like the reference design.
 * Drop additional PNGs into /public/hero/ to extend the rotation.
 */
const FSD_HERO_IMAGES = [
  '/hero/fsd-hero-1.png',
  '/hero/fsd-hero-2.png',
  '/hero/fsd-hero-3.png',
]

const FSD_TESTIMONIALS = [
  {
    id: 'riya',
    name: 'Riya Sharma',
    role: 'Junior Full Stack Developer',
    company: 'Rocket',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=240&q=85',
    program: 'MERN Mini Program',
    duration: '3 months',
    salaryHike: '+62%',
    quote:
      'I went from basic HTML and CSS to shipping full-stack MERN projects in just three months. The hands-on practice and DSA sessions made my first interview feel familiar, not scary.',
  },
  {
    id: 'rohit',
    name: 'Rohit Verma',
    role: 'Frontend Developer',
    company: 'Microsoft',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&q=85',
    program: 'Macro Program + Internship',
    duration: '6 months',
    salaryHike: 'First job',
    quote:
      'I joined with zero backend knowledge. The structured learning, live projects, and internship gave me real production experience — I cleared a frontend role within weeks of finishing.',
  },
  {
    id: 'chiya',
    name: 'Chiya Pandey',
    role: 'Software Engineer (MERN)',
    company: 'Deloitte',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=240&q=85',
    program: 'Macro Program',
    duration: '6 months',
    salaryHike: '+85%',
    quote:
      'The advanced curriculum and mentorship were the differentiators. From scalable backend systems to real-time features, every module mapped to what teams actually build.',
  },
]

/* Admission process — used by redesigned admission section */
const FSD_ADMISSION_STEPS = [
  {
    n: 1,
    title: 'Qualifier Test',
    text: 'Appear for a short aptitude and programming readiness test to evaluate logical thinking and commitment.',
  },
  {
    n: 2,
    title: 'Complete Counselling',
    text: 'Attend a one-on-one counselling session to understand your goals, choose the right program (Mini or Macro), and set clear career expectations.',
  },
  {
    n: 3,
    title: 'Start Learning',
    text: 'Enroll in the selected program and begin your structured, mentor-led journey toward becoming a job-ready full-stack MERN developer.',
  },
]

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

const FSD_HERO_FEATURES = [
  { title: 'Industry-aligned curriculum', value: 'Modules mapped to what product teams build today' },
  { title: 'Real-world projects', value: 'Ship portfolio apps, not just tutorial drills' },
  { title: 'Placement preparation', value: 'Resumes, mocks, and interview-focused coaching' },
  { title: 'Mentorship support', value: 'Guidance from experienced full-stack developers' },
  { title: 'MERN & APIs', value: 'MongoDB, Express, React & Node end-to-end' },
  { title: 'Job-ready output', value: 'Git, testing habits, and deploy-ready code' },
]

const FSD_ABOUT_PILLARS = [
  {
    id: 'industry',
    title: 'Industry-Focused Learning',
    text: 'We bridge the gap between academics and industry with a job-ready full stack curriculum built for real-world development roles.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Team collaborating in a learning environment',
  },
  {
    id: 'expert',
    title: 'Expert-Led Training',
    text: 'Learn directly from experienced professionals working at top tech companies and building products at scale.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Mentor with students in a live session',
  },
  {
    id: 'placement',
    title: 'Strong Placement Support',
    text: 'From career mentoring to industry connections and alumni support, we help you move from learning to earning.',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Professional in a high-tech work environment',
  },
]

const FAQ_DATA = {
  overview: [
    {
      q: "Do I need prior programming experience?",
      a: "No prior experience is necessary! Our curriculum is designed to take you from absolute beginner to a job-ready full-stack developer."
    },
    {
      q: "What is the class schedule?",
      a: "Classes are held on weekends and weekday evenings to accommodate working professionals and students."
    },
    {
      q: "Is placement guaranteed?",
      a: "Yes, our Macro program comes with 100% placement assistance, resume building, and interview preparation until you get hired."
    }
  ],
  macro: [
    {
      q: "What exactly is covered in the Macro Program?",
      a: "The Macro Program covers everything from HTML/CSS to advanced React, Node.js, system design, DSA, and includes multiple real-world projects."
    },
    {
      q: "How long is the internship period?",
      a: "The built-in internship period lasts for 2 months, during which you will work on live projects under the guidance of our technical leads."
    },
    {
      q: "Will I get a certificate?",
      a: "Yes, upon successful completion of the Macro Program and internship, you will receive an industry-recognized certificate."
    }
  ]
}

export default function FullStackDev() {
  const [heroImageIndex, setHeroImageIndex] = useState(0)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [activePillar, setActivePillar] = useState(0)
  const [faqCategory, setFaqCategory] = useState('overview')
  const [openFaq, setOpenFaq] = useState(0)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index)
  }

  const testimonialCount = FSD_TESTIMONIALS.length
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
      setHeroImageIndex((prev) => (prev + 1) % FSD_HERO_IMAGES.length)
    }, 4000)
    return () => window.clearInterval(id)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduceMotion.matches) return
    const id = window.setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % FSD_TESTIMONIALS.length)
    }, 7000)
    return () => window.clearInterval(id)
  }, [])

  useEffect(() => {
    document.title = 'Full Stack Development Course | Skilltrixa'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute(
        'content',
        'Learn Full Stack Development with Skilltrixa and become job-ready with real-world skills and placement support.'
      )
    }
    return () => {
      document.title = 'Skilltrixa — Learn skills. Get job-ready.'
    }
  }, [])

  return (
    <main className="fsd-page">
      {/* ═══ 1  HERO ═══ */}
      <section className="fsd-hero" aria-labelledby="fsd-hero-heading">
        <div className="fsd-hero-grid">
          <div className="fsd-hero-copy">
            <p className="fsd-hero-kicker">
              <span className="fsd-hero-badge-pill">Career-Ready Program</span>
            </p>
            <h1 id="fsd-hero-heading" className="fsd-hero-title">
              Full Stack MERN Development <span>Program</span>
            </h1>
            <p className="fsd-hero-subtitle">
              Go deep on both frontend and backend with MongoDB, Express, React, and Node—so you can ship end-to-end features, not just static pages. Build real-world projects and a capstone for your portfolio. Graduate job-ready, with the workflows and skills hiring teams expect.
            </p>

            <div className="fsd-hero-cta-row" role="group" aria-label="Program actions">
              <button type="button" className="fsd-btn fsd-btn--primary">
                Apply Now
              </button>
              <a href="#curriculum" className="fsd-btn fsd-btn--outline">
                View Curriculum
              </a>
            </div>

            <div className="fsd-hero-meta" aria-label="Upcoming batch">
              <p className="fsd-hero-meta-item">
                Next batch starts <strong>20 January 2026</strong>
              </p>
              <span className="fsd-hero-meta-dot" aria-hidden />
              <p className="fsd-hero-meta-item fsd-hero-meta-item--soft">
                Limited seats · Mentor-led cohort
              </p>
            </div>

            <ul className="fsd-hero-badges">
              {FSD_HERO_FEATURES.map((f) => (
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
              {FSD_HERO_IMAGES.map((src, i) => (
                <img
                  key={src}
                  className={`fsd-hero-img${i === heroImageIndex ? ' is-active' : ''}`}
                  src={src}
                  alt={`Skilltrixa Full Stack student ${i + 1} of ${FSD_HERO_IMAGES.length}`}
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
            <li className="fsd-hero-stat">
              <p className="fsd-hero-stat-value">3–6 Months</p>
              <p className="fsd-hero-stat-label">Course Duration</p>
            </li>
            <li className="fsd-hero-stat">
              <p className="fsd-hero-stat-value">Training + Internship</p>
              <p className="fsd-hero-stat-label">Program Schedule</p>
            </li>
            <li className="fsd-hero-stat">
              <p className="fsd-hero-stat-value">Online</p>
              <p className="fsd-hero-stat-label">Mode</p>
            </li>
            <li className="fsd-hero-stat">
              <p className="fsd-hero-stat-value">Beginner to Advanced</p>
              <p className="fsd-hero-stat-label">Level</p>
            </li>
          </ul>
        </div>
      </section>

      {/* ═══ 2  ABOUT — What makes Skilltrixa different (bento + pillars) ═══ */}
      <section className="fsd-section fsd-different" aria-labelledby="fsd-about-heading">
        <div className="fsd-section-inner fsd-different-inner">
          <div className="fsd-different-header">
            <p className="fsd-different-eyebrow">The Skilltrixa approach</p>
            <h2 id="fsd-about-heading" className="fsd-different-title">
              What makes <span className="fsd-different-title-accent">Skilltrixa</span> Different
            </h2>
            <p className="fsd-different-lead">
              Three ways we go beyond theory — curriculum that maps to how teams build, training led by people who have shipped, and a path
              to placement that does not end at the last lecture.
            </p>
          </div>

          <div className="fsd-different-layout">
            <div
              className="fsd-bento"
              role="group"
              aria-label="Pillar visuals — select a focus area to highlight"
            >
              <div className="fsd-bento-glow" aria-hidden />
              <button
                type="button"
                className={`fsd-bento-tile fsd-bento-tile--main${activePillar === 0 ? ' is-active' : ''}`}
                onClick={() => setActivePillar(0)}
                aria-pressed={activePillar === 0}
                aria-label={`${FSD_ABOUT_PILLARS[0].title} — show story`}
              >
                <img
                  src={FSD_ABOUT_PILLARS[0].image}
                  alt={FSD_ABOUT_PILLARS[0].imageAlt}
                  loading="lazy"
                  width={800}
                  height={1000}
                />
                <span className="fsd-bento-tile-pill" aria-hidden>
                  01
                </span>
              </button>
              <div className="fsd-bento-column">
                <button
                  type="button"
                  className={`fsd-bento-tile fsd-bento-tile--sub${activePillar === 1 ? ' is-active' : ''}`}
                  onClick={() => setActivePillar(1)}
                  aria-pressed={activePillar === 1}
                  aria-label={`${FSD_ABOUT_PILLARS[1].title} — show story`}
                >
                  <img
                    src={FSD_ABOUT_PILLARS[1].image}
                    alt={FSD_ABOUT_PILLARS[1].imageAlt}
                    loading="lazy"
                    width={640}
                    height={480}
                  />
                  <span className="fsd-bento-tile-pill" aria-hidden>
                    02
                  </span>
                </button>
                <button
                  type="button"
                  className={`fsd-bento-tile fsd-bento-tile--sub${activePillar === 2 ? ' is-active' : ''}`}
                  onClick={() => setActivePillar(2)}
                  aria-pressed={activePillar === 2}
                  aria-label={`${FSD_ABOUT_PILLARS[2].title} — show story`}
                >
                  <img
                    src={FSD_ABOUT_PILLARS[2].image}
                    alt={FSD_ABOUT_PILLARS[2].imageAlt}
                    loading="lazy"
                    width={640}
                    height={480}
                  />
                  <span className="fsd-bento-tile-pill" aria-hidden>
                    03
                  </span>
                </button>
              </div>
            </div>

            <ol className="fsd-pillar-list">
              {FSD_ABOUT_PILLARS.map((p, i) => (
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
              Why Choose <span className="fsd-vts-text">This Program ?</span>
            </h2>
            <p className="fsd-why-lead">
              A career-focused full-stack program built to take you from learning to hiring-ready.
            </p>
            <button className="fsd-btn fsd-btn--primary">Register Now</button>
          </div>

          <div className="fsd-why-grid">
            <div className="fsd-why-card">
              <div className="fsd-why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="var(--color-primary)" />
                  <path d="M7 12L10.5 15.5L18 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="fsd-why-card-content">
                <h3>Job-Focused Curriculum</h3>
                <p>Our curriculum is carefully designed around current industry requirements, ensuring you learn exactly what companies expect from full-stack developers — not outdated theory.</p>
              </div>
            </div>
            
            <div className="fsd-why-card">
              <div className="fsd-why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="var(--color-primary)" />
                  <path d="M7 12L10.5 15.5L18 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="fsd-why-card-content">
                <h3>Structure Growth Path</h3>
                <p>Whether you choose the Mini Program (fast-track) or the Macro Program (deep mastery), the learning journey is structured to match your career goals and experience level.</p>
              </div>
            </div>

            <div className="fsd-why-card">
              <div className="fsd-why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="var(--color-primary)" />
                  <path d="M7 12L10.5 15.5L18 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="fsd-why-card-content">
                <h3>Industry-Experienced Mentor</h3>
                <p>Learn directly from working professionals with real-world experience in building and scaling applications, not just academic instructors.</p>
              </div>
            </div>

            <div className="fsd-why-card">
              <div className="fsd-why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="var(--color-primary)" />
                  <path d="M7 12L10.5 15.5L18 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="fsd-why-card-content">
                <h3>Internship Experience Included</h3>
                <p>Gain real industry exposure through mandatory internships that help you apply your learning in real-world environments and strengthen your resume.</p>
              </div>
            </div>

            <div className="fsd-why-card">
              <div className="fsd-why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="var(--color-primary)" />
                  <path d="M7 12L10.5 15.5L18 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="fsd-why-card-content">
                <h3>Hands-On, Project-Driven Learning</h3>
                <p>Every concept is backed by practical implementation, real-world projects, and portfolio-ready applications that showcase your skills to recruiters.</p>
              </div>
            </div>

            <div className="fsd-why-card">
              <div className="fsd-why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="var(--color-primary)" />
                  <path d="M7 12L10.5 15.5L18 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="fsd-why-card-content">
                <h3>Career Support & Placement Assistance</h3>
                <p>From resume building and mock interviews to job referrals and hiring support — we help you transition from learner to professional.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3  TECHNOLOGIES / SKILLS ═══ */}
      <section id="curriculum" className="fsd-section fsd-section--alt" aria-labelledby="fsd-tech-heading">
        <div className="fsd-section-inner">
          <div className="fsd-section-header">
            <p className="fsd-section-eyebrow">Tech Stack</p>
            <h2 id="fsd-tech-heading" className="fsd-section-title">
              Technologies &amp; Skills You'll Learn
            </h2>
            <p className="fsd-section-lead">
              A comprehensive curriculum covering the most in-demand technologies used by top companies worldwide.
            </p>
          </div>
          <div className="fsd-tech-grid">
            <div className="fsd-tech-card">
              <div className="fsd-tech-card-icon"><CodeIcon /></div>
              <h3>Frontend Development</h3>
              <ul className="fsd-tech-tags">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React.js</li>
              </ul>
            </div>
            <div className="fsd-tech-card">
              <div className="fsd-tech-card-icon"><ServerIcon /></div>
              <h3>Backend Development</h3>
              <ul className="fsd-tech-tags">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>REST APIs</li>
              </ul>
            </div>
            <div className="fsd-tech-card">
              <div className="fsd-tech-card-icon"><DatabaseIcon /></div>
              <h3>Database Management</h3>
              <ul className="fsd-tech-tags">
                <li>MongoDB</li>
                <li>SQL</li>
                <li>Mongoose</li>
              </ul>
            </div>
            <div className="fsd-tech-card">
              <div className="fsd-tech-card-icon"><GitBranchIcon /></div>
              <h3>Tools &amp; DevOps</h3>
              <ul className="fsd-tech-tags">
                <li>Git</li>
                <li>GitHub</li>
                <li>Postman</li>
                <li>Deployment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 4  ADMISSION PROCESS ═══ */}
      <section className="fsd-section fsd-adm" aria-labelledby="fsd-admission-heading">
        <div className="fsd-section-inner fsd-adm-inner">
          <header className="fsd-adm-head">
            <p className="fsd-adm-eyebrow">From application to classroom</p>
            <h2 id="fsd-admission-heading" className="fsd-adm-title">
              <span className="fsd-adm-title-brand">Admission</span> <span>Process</span>
            </h2>
            <p className="fsd-adm-deck">
              A clear, three-step path: validate readiness, choose your track with a mentor, then start building with structure and support.
            </p>
          </header>

          <div className="fsd-adm-grid">
            <div className="fsd-adm-hero">
              <div className="fsd-adm-hero-blob" aria-hidden />
              <div className="fsd-adm-hero-frame">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
                  alt="Learner on a device during the Skilltrixa application journey"
                  loading="lazy"
                  width={800}
                  height={520}
                />
                <p className="fsd-adm-hero-badge" aria-label="Three simple steps in the process">
                  3 <span>simple steps</span>
                </p>
              </div>
            </div>

            <ol className="fsd-adm-track" aria-label="Admission steps in order">
              {FSD_ADMISSION_STEPS.map((step, i) => (
                <li key={step.n} className="fsd-adm-item">
                  <div className="fsd-adm-connector" aria-hidden>
                    <div className="fsd-adm-connector-nub" />
                    {i < FSD_ADMISSION_STEPS.length - 1 && <div className="fsd-adm-connector-join" />}
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

      {/* ═══ 5  PROGRAM STRUCTURE (Macro Only) ═══ */}
      <section className="fsd-section fsd-section--alt" aria-labelledby="fsd-structure-heading">
        <div className="fsd-section-inner">
          <div className="fsd-section-header">
            <p className="fsd-section-eyebrow">Program Details</p>
            <h2 id="fsd-structure-heading" className="fsd-section-title">
              Program Structure
            </h2>
            <p className="fsd-section-lead">
              A comprehensive, career-focused program designed to make you industry-ready.
            </p>
          </div>
          <div className="fsd-program-card">
            <span className="fsd-program-badge">Macro Program</span>
            <h3>Full Stack Development — Macro Program</h3>
            <div className="fsd-program-details">
              <div className="fsd-program-detail">
                <div className="fsd-program-detail-icon"><ClockIcon /></div>
                <div>
                  <p className="fsd-program-detail-label">Duration</p>
                  <p className="fsd-program-detail-value">6 Months</p>
                </div>
              </div>
              <div className="fsd-program-detail">
                <div className="fsd-program-detail-icon"><MonitorIcon /></div>
                <div>
                  <p className="fsd-program-detail-label">Mode</p>
                  <p className="fsd-program-detail-value">Offline / Online</p>
                </div>
              </div>
              <div className="fsd-program-detail">
                <div className="fsd-program-detail-icon"><LayersIcon /></div>
                <div>
                  <p className="fsd-program-detail-label">Projects</p>
                  <p className="fsd-program-detail-value">5+ Real Projects</p>
                </div>
              </div>
              <div className="fsd-program-detail">
                <div className="fsd-program-detail-icon"><UsersIcon /></div>
                <div>
                  <p className="fsd-program-detail-label">Batch Size</p>
                  <p className="fsd-program-detail-value">Small Batches</p>
                </div>
              </div>
            </div>
            <ul className="fsd-program-features">
              <li>
                <span className="check-icon"><CheckIcon /></span>
                Live instructor-led classes
              </li>
              <li>
                <span className="check-icon"><CheckIcon /></span>
                Hands-on project learning
              </li>
              <li>
                <span className="check-icon"><CheckIcon /></span>
                Placement assistance
              </li>
              <li>
                <span className="check-icon"><CheckIcon /></span>
                Interview preparation
              </li>
              <li>
                <span className="check-icon"><CheckIcon /></span>
                Certificate on completion
              </li>
              <li>
                <span className="check-icon"><CheckIcon /></span>
                1-on-1 mentorship
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ 6  COURSE FEATURES ═══ */}
      <section className="fsd-section" aria-labelledby="fsd-features-heading">
        <div className="fsd-section-inner">
          <div className="fsd-section-header">
            <p className="fsd-section-eyebrow">Why This Program</p>
            <h2 id="fsd-features-heading" className="fsd-section-title">
              Course Features
            </h2>
            <p className="fsd-section-lead">
              Everything you need to go from beginner to job-ready Full Stack Developer.
            </p>
          </div>
          <div className="fsd-features-grid">
            <div className="fsd-feature-item">
              <div className="fsd-feature-icon"><VideoIcon /></div>
              <div>
                <h3>Live Classes</h3>
                <p>Interactive, instructor-led sessions with real-time doubt solving and discussions.</p>
              </div>
            </div>
            <div className="fsd-feature-item">
              <div className="fsd-feature-icon"><CodeIcon /></div>
              <div>
                <h3>Practical Training</h3>
                <p>Learn by doing — every concept is reinforced through coding exercises and mini-projects.</p>
              </div>
            </div>
            <div className="fsd-feature-item">
              <div className="fsd-feature-icon"><BriefcaseIcon /></div>
              <div>
                <h3>Placement Support</h3>
                <p>End-to-end placement assistance including resume building, referrals, and mock interviews.</p>
              </div>
            </div>
            <div className="fsd-feature-item">
              <div className="fsd-feature-icon"><MessageCircleIcon /></div>
              <div>
                <h3>Interview Preparation</h3>
                <p>Dedicated sessions covering DSA, system design, HR rounds, and technical interview prep.</p>
              </div>
            </div>
            <div className="fsd-feature-item">
              <div className="fsd-feature-icon"><HeartIcon /></div>
              <div>
                <h3>1-on-1 Mentorship</h3>
                <p>Personalized guidance from experienced industry mentors throughout your learning journey.</p>
              </div>
            </div>
            <div className="fsd-feature-item">
              <div className="fsd-feature-icon"><GlobeIcon /></div>
              <div>
                <h3>Industry-Aligned Curriculum</h3>
                <p>Course content designed with inputs from hiring managers at leading tech companies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 7  CAREER SECTION ═══ */}
      <section className="fsd-section fsd-section--alt" aria-labelledby="fsd-career-heading">
        <div className="fsd-section-inner">
          <div className="fsd-section-header">
            <p className="fsd-section-eyebrow">Career Outcomes</p>
            <h2 id="fsd-career-heading" className="fsd-section-title">
              Real Skills. Real Results. Real Careers.
            </h2>
            <p className="fsd-section-lead">
              Our graduates land roles at top companies. Here are the career paths this program opens up.
            </p>
          </div>
          <div className="fsd-career-grid">
            <div className="fsd-career-card">
              <div className="fsd-career-card-icon"><CodeIcon /></div>
              <h3>Full Stack Developer</h3>
              <p>
                Build and maintain complete web applications, working across frontend and backend technologies.
              </p>
              <span className="fsd-career-salary">₹6–15 LPA</span>
            </div>
            <div className="fsd-career-card">
              <div className="fsd-career-card-icon"><LayersIcon /></div>
              <h3>Software Engineer</h3>
              <p>
                Design, develop, and deploy scalable software solutions for products used by millions.
              </p>
              <span className="fsd-career-salary">₹5–18 LPA</span>
            </div>
            <div className="fsd-career-card">
              <div className="fsd-career-card-icon"><MonitorIcon /></div>
              <h3>Web Developer</h3>
              <p>
                Create stunning, responsive websites and web applications with modern frameworks and tools.
              </p>
              <span className="fsd-career-salary">₹4–12 LPA</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 8  FEE STRUCTURE ═══ */}
      <section className="fsd-section" aria-labelledby="fsd-fee-heading">
        <div className="fsd-section-inner">
          <div className="fsd-section-header">
            <p className="fsd-section-eyebrow">Investment</p>
            <h2 id="fsd-fee-heading" className="fsd-section-title">
              Fee Structure
            </h2>
            <p className="fsd-section-lead">
              Invest in your future with our comprehensive Macro Program.
            </p>
          </div>
          <div className="fsd-fee-card">
            <div className="fsd-fee-card-header">
              <h3>Macro Program</h3>
              <p className="fsd-fee-price">
                ₹25,000 <span>/ full program</span>
              </p>
            </div>
            <div className="fsd-fee-card-body">
              <ul className="fsd-fee-includes">
                <li>
                  <span className="check-icon"><CheckIcon /></span>
                  6 months of live training
                </li>
                <li>
                  <span className="check-icon"><CheckIcon /></span>
                  5+ real-world projects
                </li>
                <li>
                  <span className="check-icon"><CheckIcon /></span>
                  Placement assistance
                </li>
                <li>
                  <span className="check-icon"><CheckIcon /></span>
                  Interview preparation
                </li>
                <li>
                  <span className="check-icon"><CheckIcon /></span>
                  1-on-1 mentorship
                </li>
                <li>
                  <span className="check-icon"><CheckIcon /></span>
                  Certificate of completion
                </li>
                <li>
                  <span className="check-icon"><CheckIcon /></span>
                  Lifetime access to resources
                </li>
              </ul>
              <button type="button" className="fsd-btn fsd-btn--primary">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 8.5 TESTIMONIALS ═══ */}
      <section className="fsd-section fsd-stories" aria-labelledby="fsd-testimonials-heading">
        <div className="fsd-section-inner">
          <div className="fsd-stories-header">
            <p className="fsd-stories-eyebrow">Student Outcomes</p>
            <h2 id="fsd-testimonials-heading" className="fsd-stories-title">
              Real <span>Results.</span> Real <span>Careers.</span>
            </h2>
            <p className="fsd-stories-lead">
              See how Skilltrixa learners turned skills into offers at product teams across India.
            </p>
          </div>

          {(() => {
            const t = FSD_TESTIMONIALS[activeTestimonial]

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
                    aria-label={`Slide ${activeTestimonial + 1} of ${FSD_TESTIMONIALS.length}`}
                    title={`Slide ${activeTestimonial + 1} of ${FSD_TESTIMONIALS.length}`}
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
            {FSD_TESTIMONIALS.map((t, i) => (
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
                <p className="fsd-faq-eyebrow">Help &amp; clarity</p>
                <h2 id="fsd-faq-heading" className="fsd-faq-title">
                  Frequently asked <span>questions</span>
                </h2>
                <p className="fsd-faq-deck">Straight answers for choosing the right track, schedules, and outcomes—before you apply.</p>
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
              <div
                className="fsd-faq-pills"
                role="tablist"
                aria-label="FAQ topic"
              >
                <button
                  type="button"
                  role="tab"
                  id="fsd-faq-tab-overview"
                  className={faqCategory === 'overview' ? 'is-active' : ''}
                  aria-selected={faqCategory === 'overview'}
                  tabIndex={faqCategory === 'overview' ? 0 : -1}
                  onClick={() => { setFaqCategory('overview'); setOpenFaq(0) }}
                >
                  Program overview
                </button>
                <button
                  type="button"
                  role="tab"
                  id="fsd-faq-tab-macro"
                  className={faqCategory === 'macro' ? 'is-active' : ''}
                  aria-selected={faqCategory === 'macro'}
                  tabIndex={faqCategory === 'macro' ? 0 : -1}
                  onClick={() => { setFaqCategory('macro'); setOpenFaq(0) }}
                >
                  Macro program
                </button>
              </div>
            </div>

            <div
              className="fsd-faq-list"
              role="region"
              aria-label={`${faqCategory === 'overview' ? 'Program overview' : 'Macro program'} questions`}
            >
              {FAQ_DATA[faqCategory].map((faq, index) => {
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
          <h2 id="fsd-cta-heading">
            Start Your Career as a Full Stack Developer
          </h2>
          <p>
            Join Skilltrixa's Full Stack Development Program and build the skills that top companies are looking for.
          </p>
          <button type="button" className="fsd-btn fsd-btn--primary">
            Apply Now <ArrowRightIcon />
          </button>
        </div>
      </section>
    </main>
  )
}
