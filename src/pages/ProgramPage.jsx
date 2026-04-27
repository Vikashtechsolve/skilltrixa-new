import { Navigate, useParams, Link } from 'react-router-dom'
import { PROGRAMS } from '../data/programs'
import './ProgramPage.css'

export default function ProgramPage() {
  const { programId } = useParams()
  const program = PROGRAMS.find((p) => p.id === programId)

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
