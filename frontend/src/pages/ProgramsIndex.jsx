import { Link } from 'react-router-dom'
import { PROGRAM_OVERVIEW } from '../data/programOverview'
import { HERO_STATS } from '../data/heroStats'
import { TESTIMONIALS } from '../data/testimonials'
import PlacementMarquee from '../components/PlacementMarquee'
import SEO from '../components/SEO'
import { buildBreadcrumbsLd, buildItemListLd } from '../config/seo'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import './ProgramsIndex.css'

function programHref(id) {
  return `/programs/${id}`
}

const IMPACT_STATS = HERO_STATS.map((stat) =>
  stat.id === 'tracks'
    ? {
        ...stat,
        value: '6',
        label: 'Job ready tracks: dev, data, AI and placement prep',
      }
    : stat,
)

const TRUST_PILLARS = [
  {
    id: 'mentors',
    title: 'Mentor led cohorts',
    text: 'Industry practitioners review your code, guide projects, and stay with you through placement season.',
  },
  {
    id: 'projects',
    title: 'Real portfolio work',
    text: 'Capstone apps and case studies you can demo in interviews: not just tutorial clones.',
  },
  {
    id: 'placement',
    title: 'End to end placement prep',
    text: 'Resume clinics, mock interviews, aptitude drills, and hiring test practice built into every track.',
  },
  {
    id: 'partners',
    title: '35+ university partners',
    text: 'Trusted on campuses across India: the same structured training universities rely on for their students.',
  },
]

const PROGRAM_INCLUDES = [
  'Live mentor sessions every week',
  'Assessments mapped to hiring rounds',
  'GitHub ready project portfolio',
  'Placement support until you get an offer',
]

const FEATURED_STORIES = TESTIMONIALS.slice(0, 3)

function TrustIcon({ id }) {
  const props = {
    className: 'programs-index-trust-icon',
    'aria-hidden': true,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }

  switch (id) {
    case 'mentors':
      return (
        <svg {...props}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    case 'projects':
      return (
        <svg {...props}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6M10 13h4M10 17h7" />
        </svg>
      )
    case 'placement':
      return (
        <svg {...props}>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <path d="M22 4 12 14.01l-3-3" />
        </svg>
      )
    case 'partners':
      return (
        <svg {...props}>
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <path d="M9 22V12h6v10" />
        </svg>
      )
    default:
      return null
  }
}

export default function ProgramsIndex() {
  const reduceMotion = usePrefersReducedMotion()

  return (
    <>
      <SEO
        title="Programs | Skilltrixa | Full Stack, Data Science, AI and ML, Gen AI"
        description="Explore Skilltrixa career ready programs in Full Stack Development, Data Science, AI and Machine Learning, Generative AI, Aptitude Training, and Competitive Coding, with mentors, projects, and placement support."
        keywords="Skilltrixa programs, full stack development course, data science course, AI ML course, generative AI course, aptitude training, competitive coding, placement training"
        path="/programs"
        jsonLd={[
          buildItemListLd(
            'Skilltrixa Programs',
            PROGRAM_OVERVIEW.map((p) => ({
              name: p.title,
              path: programHref(p.id),
              description: p.tagline,
            })),
          ),
          buildBreadcrumbsLd([
            { name: 'Home', path: '/' },
            { name: 'Programs', path: '/programs' },
          ]),
        ]}
      />
      <main className="programs-index">
        <section className="programs-index-hero" aria-labelledby="programs-index-heading">
          <div className="programs-index-inner">
            <p className="programs-index-eyebrow">Our programmes</p>
            <h1 id="programs-index-heading" className="programs-index-title">
              Build skills that get you hired
            </h1>
            <p className="programs-index-lead">
              Industry aligned courses with live projects, mentor guidance, and placement support.
              Pick a track below to explore the curriculum, career paths, and how to apply.
            </p>
            <ul className="programs-index-stats" aria-label="Skilltrixa impact">
              {IMPACT_STATS.map((stat) => (
                <li key={stat.id}>
                  <span className="programs-index-stat-index" aria-hidden>
                    {stat.index}
                  </span>
                  <span className="programs-index-stat-value">
                    {stat.value}
                    {stat.suffix}
                  </span>
                  <span className="programs-index-stat-label">{stat.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="programs-index-trust" aria-labelledby="programs-trust-heading">
          <div className="programs-index-inner">
            <header className="programs-index-trust-head">
              <p className="programs-index-eyebrow">Why students trust Skilltrixa</p>
              <h2 id="programs-trust-heading" className="programs-index-section-title">
                Training built for outcomes, not just certificates
              </h2>
              <p className="programs-index-section-lead">
                Every programme follows the same proven model: structured learning, hands on practice,
                and support that continues until you are interview ready.
              </p>
            </header>
            <ul className="programs-index-trust-grid">
              {TRUST_PILLARS.map((pillar) => (
                <li key={pillar.id} className="programs-index-trust-card">
                  <span className="programs-index-trust-icon-wrap">
                    <TrustIcon id={pillar.id} />
                  </span>
                  <h3 className="programs-index-trust-title">{pillar.title}</h3>
                  <p className="programs-index-trust-text">{pillar.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="programs-index-list-wrap" aria-label="Program tracks">
          <div className="programs-index-inner">
            <header className="programs-index-list-head">
              <h2 className="programs-index-section-title">Choose your career track</h2>
              <p className="programs-index-section-lead">
                Six specialised programmes, from full stack development to placement prep. Each one
                includes a clear curriculum, projects, and mentor support.
              </p>
            </header>

            <ul className="programs-index-includes" aria-label="Included in every programme">
              {PROGRAM_INCLUDES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <ul className="programs-index-grid">
              {PROGRAM_OVERVIEW.map((program, index) => (
                <li key={program.id} className="programs-index-cell">
                  <article className="programs-index-card">
                    <Link
                      to={programHref(program.id)}
                      className="programs-index-card-link"
                      aria-label={`${program.title}: view programme details`}
                    >
                      <div className="programs-index-card-media">
                        <img
                          src={program.imageUrl}
                          alt=""
                          loading="lazy"
                          decoding="async"
                          width="800"
                          height="360"
                          className="programs-index-card-img"
                        />
                        <span className="programs-index-card-category">{program.category}</span>
                        <span className="programs-index-card-index" aria-hidden>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      <div className="programs-index-card-body">
                        <h3 className="programs-index-card-title">{program.title}</h3>
                        <p className="programs-index-card-tagline">{program.tagline}</p>

                        <ul className="programs-index-card-highlights">
                          {program.highlights.map((line, i) => (
                            <li key={`${program.id}-h-${i}`}>{line}</li>
                          ))}
                        </ul>

                        <ul className="programs-index-card-skills" aria-label="Key skills">
                          {program.skills.map((skill) => (
                            <li key={`${program.id}-${skill}`}>{skill}</li>
                          ))}
                        </ul>

                        <div className="programs-index-card-meta">
                          <div className="programs-index-meta-item">
                            <span className="programs-index-meta-label">Duration</span>
                            <span className="programs-index-meta-value">{program.durationLabel}</span>
                          </div>
                          <div className="programs-index-meta-item">
                            <span className="programs-index-meta-label">Mode</span>
                            <span className="programs-index-meta-value">{program.mode}</span>
                          </div>
                          <div className="programs-index-meta-item">
                            <span className="programs-index-meta-label">Level</span>
                            <span className="programs-index-meta-value">{program.level}</span>
                          </div>
                        </div>

                        <span className="programs-index-card-cta">
                          Explore programme
                          <span className="programs-index-card-cta-arrow" aria-hidden>
                            →
                          </span>
                        </span>
                      </div>
                    </Link>
                  </article>
                </li>
              ))}
            </ul>

            <p className="programs-index-note">
              Intake dates and weekly schedule depend on your batch. We confirm the exact plan when you
              enquire.
            </p>
          </div>
        </section>

        <PlacementMarquee reduceMotion={reduceMotion} sectionClassName="programs-index-placement" />

        <section className="programs-index-stories" aria-labelledby="programs-stories-heading">
          <div className="programs-index-inner">
            <header className="programs-index-stories-head">
              <p className="programs-index-eyebrow">Student stories</p>
              <h2 id="programs-stories-heading" className="programs-index-section-title">
                Real outcomes from real learners
              </h2>
              <p className="programs-index-section-lead">
                Hear from students who turned structured training into offers at top product and service
                companies.
              </p>
            </header>

            <ul className="programs-index-stories-grid">
              {FEATURED_STORIES.map((story) => (
                <li key={story.id}>
                  <figure className="programs-index-story-card">
                    <blockquote className="programs-index-story-quote">
                      <p>&ldquo;{story.quote}&rdquo;</p>
                    </blockquote>
                    <figcaption className="programs-index-story-meta">
                      <img
                        src={story.image}
                        srcSet={story.imageSrcSet}
                        sizes="(max-width: 640px) 56px, 64px"
                        alt={story.imageAlt}
                        width="64"
                        height="64"
                        loading="lazy"
                        decoding="async"
                        className="programs-index-story-avatar"
                      />
                      <div className="programs-index-story-copy">
                        <cite className="programs-index-story-name">{story.name}</cite>
                        <span className="programs-index-story-role">
                          {story.role} · {story.company}
                        </span>
                        <span className="programs-index-story-campus">{story.campus}</span>
                      </div>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="programs-index-cta-wrap" aria-label="Get counselling">
          <div className="programs-index-inner">
            <div className="programs-index-cta-band">
              <div className="programs-index-cta-copy">
                <h2 className="programs-index-cta-title">Not sure which track fits you?</h2>
                <p className="programs-index-cta-text">
                  Talk to our counsellors: we will help you pick the right programme based on your
                  background and career goals.
                </p>
              </div>
              <Link to="/contact-us" className="programs-index-cta-btn">
                Get free counselling
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
