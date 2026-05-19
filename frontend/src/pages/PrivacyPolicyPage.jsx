import SEO from '../components/SEO'
import { buildBreadcrumbsLd } from '../config/seo'

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy | Skilltrixa"
        description="Read Skilltrixa’s Privacy Policy to understand how we collect, use, and protect information."
        keywords="Skilltrixa privacy policy, data protection, user information"
        path="/privacy-policy"
        jsonLd={buildBreadcrumbsLd([
          { name: 'Home', path: '/' },
          { name: 'Privacy policy', path: '/privacy-policy' },
        ])}
      />
    <main className="legal-page">
      <div className="page-inner">
        <h1>Privacy Policy</h1>
        <p>
          This page is provided for general information. If you need your privacy policy
          text finalized (including your exact data processing details), share it with the
          team and we will replace the placeholders.
        </p>

        <section>
          <h2>1. Information we collect</h2>
          <p>
            We may collect information you provide directly (for example, when you submit a
            contact form), as well as information collected automatically through your use of
            the website.
          </p>
        </section>

        <section>
          <h2>2. How we use information</h2>
          <p>
            We use collected information to respond to enquiries, improve our services,
            and maintain the security and integrity of our platform.
          </p>
        </section>

        <section>
          <h2>3. Contact</h2>
          <p>
            For privacy-related questions, contact us at{' '}
            <a href="mailto:support@skilltrixa.com">support@skilltrixa.com</a>.
          </p>
        </section>
      </div>
    </main>
    </>
  )
}

