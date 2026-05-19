import { Helmet } from 'react-helmet-async'
import { buildCourseLd } from '../config/seo'

/** Course JSON-LD for program detail pages (rich results). Uses shared buildCourseLd (provider → Organization @id). */
export default function CourseSchema({ program, path }) {
  const schema = buildCourseLd(program, path)
  if (!schema) return null
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}
