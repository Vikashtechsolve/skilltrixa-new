import SEO from '../components/SEO'
import { buildBreadcrumbsLd } from '../config/seo'

export default function TermsOfServicePage() {
  return (
    <>
      <SEO
        title="Terms of Service | Skilltrixa"
        description="Read Skilltrixa’s Terms of Service to understand the rules for using our website and services."
        keywords="Skilltrixa terms of service, user agreement, website terms"
        path="/terms-of-service"
        jsonLd={buildBreadcrumbsLd([
          { name: 'Home', path: '/' },
          { name: 'Terms of service', path: '/terms-of-service' },
        ])}
      />
    <main className="legal-page">
      <div className="page-inner">
        <h1>Terms of Service</h1>
        <p>
          By using the Skilltrixa website, you agree to these Terms of Service.
          Contact us if you have questions about your use of the site.
        </p>

        <section>
          <h2>1. Acceptance</h2>
          <p>
            By accessing or using the Skilltrixa website, you agree to comply with these
            Terms of Service.
          </p>
        </section>

        <section>
          <h2>2. Use of the Website</h2>
          <p>
            You agree to use the site only for lawful purposes and to avoid actions that
            may disrupt or harm the service.
          </p>
        </section>

        <section>
          <h2>3. Contact</h2>
          <p>
            If you have questions about these Terms, contact us at{' '}
            <a href="mailto:support@skilltrixa.com">support@skilltrixa.com</a>.
          </p>
        </section>
      </div>
    </main>
    </>
  )
}

