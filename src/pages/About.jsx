import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './About.css'

/* ── Inline SVG icons ── */
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

function TargetIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function GraduationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" />
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

function BookOpenIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
      <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
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

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  )
}

function AwardIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7" />
      <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
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

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
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

function StarIcon() {
  return (
    <svg viewBox="0 0 14 14" fill="currentColor" aria-hidden>
      <path d="M7 0l2.16 4.38L14 5.1l-3.5 3.42L11.33 14 7 11.68 2.67 14l.83-5.48L0 5.1l4.84-.72z" />
    </svg>
  )
}

export default function About() {
  useEffect(() => {
    document.title =
      'Skilltrixa | Global Training Institute for Skill Development & Placement'
    const meta = document.querySelector('meta[name="description"]')
    if (meta)
      meta.setAttribute(
        'content',
        'Skilltrixa offers global training programs, placement preparation, and career-focused skill development courses.'
      )

    const metaKw = document.querySelector('meta[name="keywords"]')
    if (!metaKw) {
      const el = document.createElement('meta')
      el.name = 'keywords'
      el.content =
        'training institute, skill development institute, placement training, global career training, job-ready programs'
      document.head.appendChild(el)
    }

    return () => {
      document.title = 'Skilltrixa — Learn skills. Get job-ready.'
    }
  }, [])

  return (
    <main className="about-page">
      {/* ═══ 1  HERO ═══ */}
      <section className="about-hero" aria-labelledby="about-hero-heading">
        <div className="about-hero-inner">
          <p className="about-hero-eyebrow">About Skilltrixa</p>
          <h1 id="about-hero-heading" className="about-hero-title">
            Empowering Students with Industry-Ready Skills for Global Careers
          </h1>
          <p className="about-hero-subtitle">
            We bridge the gap between education and employment by delivering
            world-class training experiences built for the modern workforce.
          </p>
          <p className="about-hero-text">
            At Skilltrixa, we believe every learner deserves access to
            career-focused education that is practical, globally aligned and
            prepares them for real industry challenges.
          </p>
          <Link to="/programs" className="about-hero-btn">
            Explore Programs <ArrowRightIcon />
          </Link>
        </div>
      </section>

      {/* ═══ 2  ABOUT INTRO ═══ */}
      <section className="about-section" aria-labelledby="about-intro-heading">
        <div className="about-section-inner">
          <div className="about-intro-grid">
            <div className="about-intro-text">
              <h2 id="about-intro-heading">
                Building Careers Through Practical Learning
              </h2>
              <p>
                Skilltrixa is a globally focused training institute committed to
                empowering students and professionals with industry-relevant
                skills, practical knowledge, and career-ready expertise.
              </p>
              <p>
                In today's rapidly evolving job market, theoretical knowledge
                alone isn't enough. We emphasize hands-on, practical learning
                that mirrors real workplace challenges — ensuring our learners
                are ready from day one.
              </p>
              <p>
                With a career-focused approach aligned to global standards, we
                prepare students not just for local opportunities but for roles
                anywhere in the world.
              </p>
            </div>
            <div className="about-intro-visual">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=85"
                alt="Team collaborating on a project in a modern workspace"
                width={900}
                height={675}
                loading="lazy"
              />
              <div className="about-intro-visual-accent" aria-hidden />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3  WHO WE ARE ═══ */}
      <section
        className="about-section about-section--alt"
        aria-labelledby="who-heading"
      >
        <div className="about-section-inner">
          <div className="about-section-header">
            <p className="about-section-eyebrow">Our Identity</p>
            <h2 id="who-heading" className="about-section-title">
              Who We Are
            </h2>
            <p className="about-section-lead">
              Skilltrixa is a modern skill development and placement training
              institute focused on real-world skills and global opportunities.
            </p>
          </div>
          <div className="who-we-are-content">
            <p>
              We partner with colleges and institutions to deliver training
              programs that produce confident, industry-ready professionals. Our
              curriculum is constantly updated to match the most in-demand skills
              worldwide.
            </p>
            <ul className="who-we-are-bullets">
              <li>
                <span className="bullet-icon"><CheckIcon /></span>
                Offline training programs
              </li>
              <li>
                <span className="bullet-icon"><CheckIcon /></span>
                College training partnerships
              </li>
              <li>
                <span className="bullet-icon"><CheckIcon /></span>
                Career-focused skill courses
              </li>
              <li>
                <span className="bullet-icon"><CheckIcon /></span>
                Placement preparation programs
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ 4  MISSION & VISION ═══ */}
      <section className="about-section" aria-labelledby="mv-heading">
        <div className="about-section-inner">
          <div className="about-section-header">
            <p className="about-section-eyebrow">Purpose & Direction</p>
            <h2 id="mv-heading" className="about-section-title">
              Our Mission &amp; Vision
            </h2>
          </div>
          <div className="mission-vision-grid">
            <div className="mission-vision-card">
              <div className="mv-card-icon mv-card-icon--mission">
                <TargetIcon />
              </div>
              <h3>Our Mission</h3>
              <ul className="mv-list">
                <li>
                  Deliver high-quality training aligned with global industry
                  standards
                </li>
                <li>
                  Create job-ready professionals through practical, real-world
                  learning
                </li>
                <li>
                  Bridge the gap between formal education and real employment
                  opportunities
                </li>
              </ul>
            </div>
            <div className="mission-vision-card">
              <div className="mv-card-icon mv-card-icon--vision">
                <EyeIcon />
              </div>
              <h3>Our Vision</h3>
              <ul className="mv-list">
                <li>
                  Become a globally recognized training institute that sets new
                  benchmarks
                </li>
                <li>
                  Pursue excellence in skill development across every discipline
                  we teach
                </li>
                <li>
                  Pioneer industry-ready education that transforms careers
                  worldwide
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 5  WHAT WE OFFER ═══ */}
      <section
        className="about-section about-section--alt"
        aria-labelledby="offer-heading"
      >
        <div className="about-section-inner">
          <div className="about-section-header">
            <p className="about-section-eyebrow">Our Programs</p>
            <h2 id="offer-heading" className="about-section-title">
              What We Offer
            </h2>
            <p className="about-section-lead">
              Comprehensive training programs designed to meet diverse learning
              needs and career goals.
            </p>
          </div>
          <div className="offer-grid">
            <div className="offer-card">
              <div className="offer-card-icon"><GraduationIcon /></div>
              <h3>College Training Programs</h3>
              <p>
                Partnership-based training delivered directly within university
                campuses.
              </p>
            </div>
            <div className="offer-card">
              <div className="offer-card-icon"><UsersIcon /></div>
              <h3>Offline Training</h3>
              <p>
                Instructor-led, classroom-based sessions for immersive, focused
                learning.
              </p>
            </div>
            <div className="offer-card">
              <div className="offer-card-icon"><BriefcaseIcon /></div>
              <h3>Placement Training</h3>
              <p>
                Interview prep, resume building and soft skills to land your
                dream job.
              </p>
            </div>
            <div className="offer-card">
              <div className="offer-card-icon"><BookOpenIcon /></div>
              <h3>Skill Development Courses</h3>
              <p>
                Practical courses across tech, business and creative domains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 6  WHY CHOOSE SKILLTRIXA ═══ */}
      <section className="about-section" aria-labelledby="why-heading">
        <div className="about-section-inner">
          <div className="about-section-header">
            <p className="about-section-eyebrow">Why Us</p>
            <h2 id="why-heading" className="about-section-title">
              Why Choose Skilltrixa
            </h2>
            <p className="about-section-lead">
              Six pillars that make Skilltrixa the trusted choice for
              career-focused education.
            </p>
          </div>
          <div className="why-grid">
            <div className="why-item">
              <div className="why-item-icon"><GlobeIcon /></div>
              <div>
                <h3>Globally Aligned Curriculum</h3>
                <p>
                  Our course content maps to international industry standards and
                  expectations.
                </p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-item-icon"><AwardIcon /></div>
              <div>
                <h3>Industry-Experienced Trainers</h3>
                <p>
                  Learn from professionals with years of real industry practice.
                </p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-item-icon"><CodeIcon /></div>
              <div>
                <h3>Hands-On Learning</h3>
                <p>
                  Every concept is reinforced through practical labs and
                  exercises.
                </p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-item-icon"><LayersIcon /></div>
              <div>
                <h3>Real-World Projects</h3>
                <p>
                  Build portfolio-ready projects that showcase your abilities.
                </p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-item-icon"><BriefcaseIcon /></div>
              <div>
                <h3>Placement-Focused Training</h3>
                <p>
                  End-to-end placement support from mock interviews to referrals.
                </p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-item-icon"><HeartIcon /></div>
              <div>
                <h3>Personalized Mentorship</h3>
                <p>
                  One-on-one guidance tailored to your unique career path.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 7  OUR APPROACH (Timeline) ═══ */}
      <section
        className="about-section about-section--alt"
        aria-labelledby="approach-heading"
      >
        <div className="about-section-inner">
          <div className="about-section-header">
            <p className="about-section-eyebrow">How We Teach</p>
            <h2 id="approach-heading" className="about-section-title">
              Our Approach
            </h2>
            <p className="about-section-lead">
              A structured, five-step methodology that takes you from
              fundamentals to placement.
            </p>
          </div>
          <div className="approach-timeline">
            <div className="approach-step">
              <span className="approach-step-dot">1</span>
              <h3>Concept Mastery</h3>
              <p>
                Build a rock-solid foundation with clear, structured learning of
                core concepts and fundamentals.
              </p>
            </div>
            <div className="approach-step">
              <span className="approach-step-dot">2</span>
              <h3>Practical Implementation</h3>
              <p>
                Apply theory to practice through guided labs, coding exercises,
                and hands-on assignments.
              </p>
            </div>
            <div className="approach-step">
              <span className="approach-step-dot">3</span>
              <h3>Real-World Projects</h3>
              <p>
                Work on industry-grade projects that simulate actual work
                environments and challenges.
              </p>
            </div>
            <div className="approach-step">
              <span className="approach-step-dot">4</span>
              <h3>Career Preparation</h3>
              <p>
                Polish your resume, practice mock interviews, and develop
                professional communication skills.
              </p>
            </div>
            <div className="approach-step">
              <span className="approach-step-dot">5</span>
              <h3>Placement Support</h3>
              <p>
                Get connected with hiring partners and receive dedicated
                placement assistance until you land your role.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 8  OUR COMMITMENT ═══ */}
      <section className="about-section" aria-labelledby="commit-heading">
        <div className="about-section-inner">
          <div className="about-section-header">
            <p className="about-section-eyebrow">Our Promise</p>
            <h2 id="commit-heading" className="about-section-title">
              Our Commitment
            </h2>
            <p className="about-section-lead">
              Every program we design, every session we conduct, and every
              student we guide is driven by these core commitments.
            </p>
          </div>
          <div className="commitment-content">
            <div className="commitment-pills">
              <span className="commitment-pill">
                <StarIcon /> High-Quality Education
              </span>
              <span className="commitment-pill">
                <StarIcon /> Career-Focused Training
              </span>
              <span className="commitment-pill">
                <StarIcon /> Continuous Skill Development
              </span>
              <span className="commitment-pill">
                <StarIcon /> Student Success First
              </span>
              <span className="commitment-pill">
                <StarIcon /> Industry Partnerships
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 9  CTA ═══ */}
      <section className="about-cta" aria-labelledby="about-cta-heading">
        <div className="about-cta-inner">
          <h2 id="about-cta-heading">
            Start Your Global Career Journey Today
          </h2>
          <p>
            Learn Skills. Build Confidence. Get Placed Anywhere.
          </p>
          <Link to="/signup" className="about-cta-btn">
            Join Now <ArrowRightIcon />
          </Link>
        </div>
      </section>
    </main>
  )
}
