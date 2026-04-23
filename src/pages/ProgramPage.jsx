import { Navigate, useParams, Link } from 'react-router-dom'
import { PROGRAMS } from '../data/programs'

export default function ProgramPage() {
  const { programId } = useParams()
  const program = PROGRAMS.find((p) => p.id === programId)

  if (!program) {
    return <Navigate to="/programs" replace />
  }

  return (
    <main>
      <div className="page-inner">
        <p style={{ marginBottom: '0.5rem' }}>
          <Link to="/programs" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
            ← All programs
          </Link>
        </p>
        <h1>{program.label}</h1>
        <p>
          This is the dedicated page for <strong>{program.label}</strong>. We will add
          modules, duration, fees, and FAQs here as per your next instructions.
        </p>
      </div>
    </main>
  )
}
