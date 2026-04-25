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

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=85',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=85',
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=85',
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
  const [activeImage, setActiveImage] = useState(0)
  const [faqCategory, setFaqCategory] = useState('overview')
  const [openFaq, setOpenFaq] = useState(0)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index)
  }

  useEffect(() => {
    const id = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % HERO_IMAGES.length)
    }, 4000)
    return () => clearInterval(id)
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
            <p className="fsd-hero-eyebrow">Career-Ready Program</p>
            <h1 id="fsd-hero-heading" className="fsd-hero-title">
              Full Stack MERN Development <span>Program</span>
            </h1>
            <p className="fsd-hero-subtitle">
              Learn MongoDB, Express, React, and Node.js through structured training programs combined with hands-on internships, real project exposure, and mentor guidance designed to prepare you for real-world development roles.
            </p>
            <div className="fsd-hero-actions">
              <button type="button" className="fsd-btn fsd-btn--primary">
                Apply Now
              </button>
              <p className="fsd-hero-batch">
                Batch Starting on <strong>20th January, 2026</strong>
              </p>
            </div>

            <div className="fsd-hero-badges">
              <div className="fsd-hero-badge">
                <p className="fsd-hero-badge-title">Mentor Credibility</p>
                <p className="fsd-hero-badge-value">5+ Years Industry Experience</p>
              </div>
              <div className="fsd-hero-badge">
                <p className="fsd-hero-badge-title">Job-Focused Curriculum</p>
                <p className="fsd-hero-badge-value">90% Industry-Aligned Modules</p>
              </div>
              <div className="fsd-hero-badge">
                <p className="fsd-hero-badge-title">Internship Assurance</p>
                <p className="fsd-hero-badge-value">100% Internship Guarantee</p>
              </div>
              <div className="fsd-hero-badge">
                <p className="fsd-hero-badge-title">Live Mentor-Led Training</p>
                <p className="fsd-hero-badge-value">100+ Hours of Guided Sessions</p>
              </div>
              <div className="fsd-hero-badge">
                <p className="fsd-hero-badge-title">Real-World Projects</p>
                <p className="fsd-hero-badge-value">6–8 Real-World Apps</p>
              </div>
              <div className="fsd-hero-badge">
                <p className="fsd-hero-badge-title">Placement Preparation</p>
                <p className="fsd-hero-badge-value">50+ Mock Interviews</p>
              </div>
            </div>
          </div>

          <div className="fsd-hero-visual">
            <div className="fsd-hero-visual-circle" aria-hidden />
            <div className="fsd-hero-visual-placeholder" aria-hidden />
            {HERO_IMAGES.map((img, i) => (
              <img
                key={img}
                src={img}
                alt={`Full Stack Development student ${i + 1}`}
                width={600}
                height={720}
                className={`fsd-hero-img ${i === activeImage ? 'is-active' : ''}`}
                loading={i === 0 ? 'eager' : 'lazy'}
                fetchPriority={i === 0 ? 'high' : 'auto'}
              />
            ))}
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

      {/* ═══ 2  ABOUT THE PROGRAM (What makes VTS Different) ═══ */}
      <section className="fsd-section" aria-labelledby="fsd-about-heading">
        <div className="fsd-section-inner">
          <h2 id="fsd-about-heading" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            What makes <span className="fsd-vts-text">Skilltrixa</span> Different
          </h2>
          
          <div className="fsd-about-grid">
            <div className="fsd-about-collage">
              <div className="fsd-collage-col">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80" alt="Students learning" loading="lazy" />
              </div>
              <div className="fsd-collage-col">
                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&q=80" alt="Mentor teaching" loading="lazy" />
              </div>
              <div className="fsd-collage-col">
                <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=400&q=80" alt="Job interview" loading="lazy" />
              </div>
            </div>

            <div className="fsd-about-features">
              <div className="fsd-about-card">
                <h3>Industry-Focused Learning</h3>
                <p>We bridge the gap between academics and industry with a job-ready full stack curriculum built for real-world development roles.</p>
              </div>
              <div className="fsd-about-card">
                <h3>Expert-Led Training</h3>
                <p>Learn directly from experienced professionals working at top tech companies and building products at scale.</p>
              </div>
              <div className="fsd-about-card">
                <h3>Strong Placement Support</h3>
                <p>From career mentoring to industry connections and alumni support, we help you move from learning to earning.</p>
              </div>
            </div>
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
      <section className="fsd-section" aria-labelledby="fsd-admission-heading">
        <div className="fsd-section-inner">
          <div className="fsd-admission-header">
            <h2 id="fsd-admission-heading">
              <span className="fsd-vts-text">Admission</span> Process
            </h2>
          </div>
          <div className="fsd-about-grid fsd-admission-grid">
            <div className="fsd-admission-visual">
              <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80" alt="Student typing on laptop" loading="lazy" />
            </div>
            
            <div className="fsd-admission-features">
              <div className="fsd-admission-card">
                <div className="fsd-admission-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 11l3 3L22 4" />
                    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                  </svg>
                </div>
                <div className="fsd-admission-content">
                  <h3>Qualifier Test</h3>
                  <p>Appear for a short aptitude and programming readiness test to evaluate logical thinking and commitment.</p>
                </div>
              </div>

              <div className="fsd-admission-card">
                <div className="fsd-admission-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 4 23 10 17 10"></polyline>
                    <polyline points="1 20 1 14 7 14"></polyline>
                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                  </svg>
                </div>
                <div className="fsd-admission-content">
                  <h3>Complete Counselling</h3>
                  <p>Attend a one-on-one counselling session to understand your goals, choose the right program (Mini or Macro), and set clear career expectations.</p>
                </div>
              </div>

              <div className="fsd-admission-card">
                <div className="fsd-admission-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <div className="fsd-admission-content">
                  <h3>Start Learning</h3>
                  <p>Enroll in the selected program and begin your structured, mentor-led journey toward becoming a job-ready full-stack MERN developer.</p>
                </div>
              </div>
            </div>
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
      <section className="fsd-section" aria-labelledby="fsd-testimonials-heading">
        <div className="fsd-section-inner">
          <div className="fsd-section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 id="fsd-testimonials-heading" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', color: 'var(--color-black)', margin: '0 0 1rem', fontWeight: 700 }}>
              Real <span style={{ color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>Results</span> Real <span style={{ color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>Careers</span>
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text)', maxWidth: '600px', margin: '0 auto' }}>
              See how Skilltrixa learners transformed their skills into high-paying tech roles
            </p>
          </div>

          <div className="fsd-testimonials-wrapper">
            <button className="fsd-testimonial-nav fsd-testimonial-prev" aria-label="Previous testimonial">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>

            <div className="fsd-testimonials-grid">
              <div className="fsd-testimonial-card">
                <div className="fsd-testimonial-header">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80" alt="Riya Sharma" className="fsd-testimonial-avatar" />
                  <div className="fsd-testimonial-company">
                    <span>Placed at :</span>
                    <div className="fsd-company-logo">Rocket</div>
                  </div>
                </div>
                <div className="fsd-testimonial-body">
                  <p className="fsd-testimonial-quote">"The Mini Program was exactly what I needed to start my tech career. In just 3 months, I went from basic HTML and CSS to building full-stack MERN projects. The hands-on practice and DSA sessions helped me crack my first interview with confidence."</p>
                  <p className="fsd-testimonial-author">- Riya Sharma, Junior Full Stack Developer</p>
                </div>
              </div>

              <div className="fsd-testimonial-card">
                <div className="fsd-testimonial-header">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" alt="Rohit Verma" className="fsd-testimonial-avatar" />
                  <div className="fsd-testimonial-company">
                    <span>Placed at :</span>
                    <div className="fsd-company-logo">Microsoft</div>
                  </div>
                </div>
                <div className="fsd-testimonial-body">
                  <p className="fsd-testimonial-quote">"I had zero backend knowledge before joining VTS. The structured learning, live projects, and internship experience helped me understand real-world development. I secured a Frontend Developer role within weeks of completing the program."</p>
                  <p className="fsd-testimonial-author">- Rohit Verma, Frontend Developer</p>
                </div>
              </div>

              <div className="fsd-testimonial-card">
                <div className="fsd-testimonial-header">
                  <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80" alt="Chiya Pandey" className="fsd-testimonial-avatar" />
                  <div className="fsd-testimonial-company">
                    <span>Placed at :</span>
                    <div className="fsd-company-logo">Deloitte.</div>
                  </div>
                </div>
                <div className="fsd-testimonial-body">
                  <p className="fsd-testimonial-quote">"What stood out for me was the advanced curriculum and mentorship. From scalable backend systems to real-time features, everything was covered in detail. I moved from a fresher role to a mid-level MERN developer position."</p>
                  <p className="fsd-testimonial-author">- Chiya Pandey, Software Engineer (MERN)</p>
                </div>
              </div>
            </div>

            <button className="fsd-testimonial-nav fsd-testimonial-next" aria-label="Next testimonial">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </div>
      </section>

      {/* ═══ 8.7 FAQ ═══ */}
      <section className="fsd-section fsd-faq-section" aria-labelledby="fsd-faq-heading">
        <div className="fsd-section-inner">
          <div className="fsd-faq-container">
            {/* Left Column: Heading & Illustration */}
            <div className="fsd-faq-left">
              <h2 id="fsd-faq-heading">
                Frequently Asked <span className="fsd-vts-text">Questions</span>
              </h2>
              <p className="fsd-faq-subtitle">Got questions? We've got clear answers</p>
              
              <div className="fsd-faq-illustration">
                {/* SVG Illustration similar to the reference */}
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M70 120 C40 120, 40 70, 70 50 C100 30, 140 50, 130 90 C125 110, 100 115, 100 135" stroke="var(--color-primary)" strokeWidth="24" strokeLinecap="round" fill="none" />
                  <circle cx="100" cy="170" r="14" fill="var(--color-primary)" />
                  <path d="M110 95 C110 95, 120 70, 105 55 C90 40, 65 55, 65 75" stroke="#fff" strokeWidth="8" strokeLinecap="round" fill="none" />
                </svg>
              </div>
            </div>

            {/* Middle Column: Categories */}
            <div className="fsd-faq-categories">
              <button 
                className={`fsd-faq-tab ${faqCategory === 'overview' ? 'active' : ''}`}
                onClick={() => { setFaqCategory('overview'); setOpenFaq(0); }}
              >
                Program Overview
              </button>
              <button 
                className={`fsd-faq-tab ${faqCategory === 'macro' ? 'active' : ''}`}
                onClick={() => { setFaqCategory('macro'); setOpenFaq(0); }}
              >
                Macro Program
              </button>
            </div>

            {/* Right Column: Accordion */}
            <div className="fsd-faq-accordion">
              {FAQ_DATA[faqCategory].map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={index} className={`fsd-faq-item ${isOpen ? 'open' : ''}`}>
                    <button className="fsd-faq-question" onClick={() => toggleFaq(index)} aria-expanded={isOpen}>
                      <span>{faq.q}</span>
                      <div className="fsd-faq-toggle">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          {isOpen ? <line x1="5" y1="12" x2="19" y2="12" /> : <><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></>}
                        </svg>
                      </div>
                    </button>
                    <div className="fsd-faq-answer-wrapper" style={{ height: isOpen ? 'auto' : '0', overflow: 'hidden' }}>
                      <div className="fsd-faq-answer">
                        <p>{faq.a}</p>
                      </div>
                    </div>
                  </div>
                );
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
