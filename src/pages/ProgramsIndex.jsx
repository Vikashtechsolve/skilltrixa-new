import { Link } from 'react-router-dom'
import { PROGRAMS } from '../data/programs'

export default function ProgramsIndex() {
  return (
    <main>
      <div className="page-inner">
        <h1>Programs</h1>
        <p>
          Pick a track below. Each program page will get proper syllabus and details
          as we build the site step by step.
        </p>
        <ul className="program-list">
          {PROGRAMS.map((p) => (
            <li key={p.id}>
              <Link to={`/programs/${p.id}`}>{p.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
