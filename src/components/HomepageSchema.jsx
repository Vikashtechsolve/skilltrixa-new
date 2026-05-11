import { Helmet } from 'react-helmet-async'
import { ORGANIZATION_LD, WEBSITE_LD } from '../config/seo'

/**
 * Site-wide Organization + WebSite JSON-LD (canonical www, public sameAs only).
 * Mounted from RootLayout so prerendered HTML includes the graph on every route.
 */
export default function HomepageSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(ORGANIZATION_LD)}</script>
      <script type="application/ld+json">{JSON.stringify(WEBSITE_LD)}</script>
    </Helmet>
  )
}
