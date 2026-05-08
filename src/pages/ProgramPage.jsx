import { Navigate, useParams, Link } from 'react-router-dom'
import { PROGRAMS } from '../data/programs'
import { useSeo } from '../hooks/useSeo'
import { buildBreadcrumbsLd } from '../config/seo'
import './ProgramPage.css'

export default function ProgramPage() {
  const { programId } = useParams()
  const program = PROGRAMS.find((p) => p.id === programId)

  useSeo({
    title: program ? `${program.label} | Skilltrixa` : 'Programs | Skilltrixa',
    description: program
      ? `Learn ${program.label} with Skilltrixa — career-focused training, projects and placement support.`
      : 'Explore Skilltrixa career-ready programs in Full Stack, Data Science, AI/ML and Generative AI.',
    path: program ? `/programs/${program.id}` : '/programs',
    noindex: !program,
    jsonLd: program
      ? buildBreadcrumbsLd([
          { name: 'Home', path: '/' },
          { name: 'Programs', path: '/programs' },
          { name: program.label, path: `/programs/${program.id}` },
        ])
      : undefined,
  })

  if (!program) {
    return <Navigate to="/programs" replace />
  }

  return (
    <main className="program-page">
      <div className="program-page-hero">
        <div className="program-page-inner">
          <p className="program-page-back">
            <Link to="/programs">← All programs</Link>
          </p>
          <h1 className="program-page-title">{program.label}</h1>
          <p className="program-page-lead">
            This is the dedicated page for <strong>{program.label}</strong>. We will add modules, duration,
            fees, and FAQs here as we build out the site.
          </p>
        </div>
      </div>
    </main>
  )
}
