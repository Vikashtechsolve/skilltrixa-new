import { Link } from 'react-router-dom'
import { PROGRAMS } from '../data/programs'
import { useSeo } from '../hooks/useSeo'
import { buildBreadcrumbsLd, buildItemListLd } from '../config/seo'
import './ProgramsIndex.css'

function programHref(id) {
  return `/programs/${id}`
}

const PROGRAM_DESCRIPTIONS = {
  'full-stack':
    'MERN Full Stack Development program — frontend, backend, databases, real projects and placement support.',
  'data-science':
    'Data Science program — Python, Pandas, NumPy, statistics and machine learning fundamentals with capstone projects.',
  'ai-ml':
    'AI / Machine Learning program — classical ML, deep learning, neural networks and modern AI tooling.',
  'gen-ai':
    'Generative AI program — prompt engineering, LLM APIs, chatbots and AI automation projects.',
}

export default function ProgramsIndex() {
  useSeo({
    title: 'Programs | Skilltrixa — Full Stack, Data Science, AI/ML & Gen AI Courses',
    description:
      'Explore Skilltrixa career-ready programs: Full Stack Development, Data Science, AI / Machine Learning and Generative AI — with mentorship, projects and placement support.',
    keywords:
      'Skilltrixa programs, full stack development course, data science course, AI ML course, generative AI course, placement training',
    path: '/programs',
    jsonLd: [
      buildItemListLd(
        'Skilltrixa Programs',
        PROGRAMS.map((p) => ({
          name: p.label,
          path: programHref(p.id),
          description: PROGRAM_DESCRIPTIONS[p.id],
        })),
      ),
      buildBreadcrumbsLd([
        { name: 'Home', path: '/' },
        { name: 'Programs', path: '/programs' },
      ]),
    ],
  })

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
