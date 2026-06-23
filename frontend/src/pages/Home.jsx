import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PlacementMarquee from '../components/PlacementMarquee'
import PlacementAssistanceSection from '../components/PlacementAssistanceSection'
import ProgramsOverview from '../components/ProgramsOverview'
import WhyChooseUs from '../components/WhyChooseUs'
import TestPlatformShowcase from '../components/TestPlatformShowcase'
import Testimonials from '../components/Testimonials'
import PartnerWithUs from '../components/PartnerWithUs'
import { HERO_SLIDES } from '../data/heroSlides'
import { HERO_STATS } from '../data/heroStats'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import SEO from '../components/SEO'
import { buildItemListLd } from '../config/seo'
import './Home.css'

const SLIDE_MS = 5200;

const HOME_PROGRAMS_LD = buildItemListLd('Skilltrixa Programs', [
  { name: 'Full Stack Development', path: '/programs/full-stack', description: 'MERN based full stack program with real projects and placement support.' },
  { name: 'Data Science', path: '/programs/data-science', description: 'Python, Pandas, statistics, and ML basics with capstone projects.' },
  { name: 'AI and Machine Learning', path: '/programs/ai-ml', description: 'Machine learning, deep learning, neural networks, and modern AI tools.' },
  { name: 'Generative AI', path: '/programs/gen-ai', description: 'Prompt engineering, LLMs, chatbots, and AI automation.' },
])

export default function Home() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduceMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (paused || reduceMotion || HERO_SLIDES.length <= 1) return
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % HERO_SLIDES.length)
    }, SLIDE_MS)
    return () => window.clearInterval(id)
  }, [paused, reduceMotion])

  return (
    <>
      <SEO
        title="Skilltrixa | Learn Skills. Get Job Ready. Training and Placement"
        description="Skilltrixa offers practical training in Full Stack Development, Data Science, AI and ML, and Generative AI, with mentors, real projects, and placement support."
        keywords="Skilltrixa, training institute, placement training, full stack course, data science course, AI ML course, generative AI course, university partnership"
        path="/"
        jsonLd={HOME_PROGRAMS_LD}
      />
    <main className="home">
      <section
        className="home-hero"
        aria-labelledby="home-hero-heading"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false)
        }}
      >
        <div className="home-hero-grid page-inner">
          <div className="home-hero-copy">
            <p className="home-hero-eyebrow">For students and universities</p>
            <h1 id="home-hero-heading" className="home-hero-title">
              From Campus to Corporate, We Make Students Job Ready
            </h1>

            <div
              className="hero-slider"
              role="region"
              aria-label="How we make students job ready"
            >
              <div className="hero-slider-track">
                {HERO_SLIDES.map((slide, i) => (
                  <p
                    key={slide.id}
                    className={`hero-slider-slide${i === active ? ' is-active' : ''}`}
                    aria-hidden={i !== active}
                  >
                    {slide.text}
                  </p>
                ))}
              </div>
              <div className="hero-slider-dots">
                {HERO_SLIDES.map((slide, i) => (
                  <button
                    key={slide.id}
                    type="button"
                    className={`hero-slider-dot${i === active ? ' is-active' : ''}`}
                    aria-label={`Show message ${i + 1} of ${HERO_SLIDES.length}`}
                    aria-pressed={i === active}
                    onClick={() => setActive(i)}
                  />
                ))}
              </div>
            </div>

            <div className="home-hero-actions">
              <Link to="/programs" className="home-hero-btn home-hero-btn--primary">
                Explore programs
              </Link>
              <Link to="/our-promise" className="home-hero-btn home-hero-btn--ghost">
                Our Promise
              </Link>
            </div>
          </div>

          <div className="home-hero-visual">
            <div className="home-hero-visual-frame">
              <img
                className="home-hero-img"
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=88"
                srcSet="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=640&q=82 640w, https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=960&q=85 960w, https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=88 1400w, https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1800&q=88 1800w"
                sizes="(max-width: 880px) 92vw, (max-width: 1200px) 45vw, 520px"
                alt="Diverse group of students working together with laptops in a bright, modern study space"
                width={720}
                height={900}
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              <div className="home-hero-img-accent" aria-hidden />
            </div>
          </div>
        </div>

        <div className="home-hero-stats-shell">
          <ul className="home-hero-stats" aria-label="Skilltrixa at a glance">
            {HERO_STATS.map((stat) => (
              <li key={stat.id} className="hero-stat-card">
                <span className="hero-stat-index" aria-hidden>
                  {stat.index}
                </span>
                <div className="hero-stat-body">
                  <p className="hero-stat-value">
                    <span className="hero-stat-number">{stat.value}</span>
                    {stat.suffix ? (
                      <span className="hero-stat-suffix">{stat.suffix}</span>
                    ) : null}
                  </p>
                  <p className="hero-stat-label">{stat.label}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PlacementMarquee reduceMotion={reduceMotion} />

      <ProgramsOverview />

      <WhyChooseUs />

      <TestPlatformShowcase />

      <PlacementAssistanceSection />

      <Testimonials />

      <PartnerWithUs />
    </main>
    </>
  )
}
