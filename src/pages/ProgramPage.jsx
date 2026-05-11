import { Navigate, useParams, Link } from 'react-router-dom'
import { PROGRAMS } from '../data/programs'
import SEO from '../components/SEO'
import { buildBreadcrumbsLd } from '../config/seo'
import './ProgramPage.css'

export default function ProgramPage() {
  const { programId } = useParams()
  const program = PROGRAMS.find((p) => p.id === programId)

  if (!program) {
    return (
      <>
        <SEO
          title="Programs | Skilltrixa"
          description="Explore Skilltrixa career-ready programs in Full Stack, Data Science, AI/ML and Generative AI."
          path="/programs"
          noindex
        />
        <Navigate to="/programs" replace />
      </>
    )
  }

  return (
    <>
      <SEO
        title={`${program.label} | Skilltrixa`}
        description={`Learn ${program.label} with Skilltrixa — career-focused training, projects and placement support.`}
        path={`/programs/${program.id}`}
        jsonLd={buildBreadcrumbsLd([
          { name: 'Home', path: '/' },
          { name: 'Programs', path: '/programs' },
          { name: program.label, path: `/programs/${program.id}` },
        ])}
      />
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
    </>
  )
}
