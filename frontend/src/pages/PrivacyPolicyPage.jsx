import SEO from '../components/SEO'
import { buildBreadcrumbsLd } from '../config/seo'
import LegalPageLayout, { LegalSection } from '../components/LegalPageLayout'

const TOC = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'information-we-collect', label: 'Information we collect' },
  { id: 'how-we-use-information', label: 'How we use information' },
  { id: 'sharing-information', label: 'Sharing of information' },
  { id: 'cookies', label: 'Cookies and analytics' },
  { id: 'data-retention', label: 'Data retention' },
  { id: 'data-security', label: 'Data security' },
  { id: 'your-rights', label: 'Your rights' },
  { id: 'children', label: "Children's privacy" },
  { id: 'third-party-links', label: 'Third party links' },
  { id: 'policy-changes', label: 'Changes to this policy' },
  { id: 'contact', label: 'Contact us' },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy | Skilltrixa"
        description="Read Skilltrixa’s Privacy Policy to understand how we collect, use, store, and protect your personal information."
        keywords="Skilltrixa privacy policy, data protection, personal information, cookies, user data"
        path="/privacy-policy"
        jsonLd={buildBreadcrumbsLd([
          { name: 'Home', path: '/' },
          { name: 'Privacy policy', path: '/privacy-policy' },
        ])}
      />
      <LegalPageLayout
        eyebrow="Legal"
        title="Privacy Policy"
        intro="This policy explains what information Skilltrixa collects, why we collect it, how we use it, and the choices you have. We aim to be clear and practical, not vague."
        lastUpdated="June 2026"
        toc={TOC}
        relatedLink={{ to: '/terms-of-service', label: 'Terms of Service' }}
      >
        <LegalSection id="introduction" title="1. Introduction">
          <p>
            Skilltrixa Ed Tech Solutions (&quot;Skilltrixa&quot;, &quot;we&quot;, &quot;us&quot;) operates
            skilltrixa.com and related training, assessment, and placement support services for students,
            universities, and institutional partners.
          </p>
          <p>
            By using our website or submitting information through our forms, you agree to the practices
            described in this Privacy Policy. If you do not agree, please do not use our services.
          </p>
        </LegalSection>

        <LegalSection id="information-we-collect" title="2. Information we collect">
          <p>We collect information in the following ways:</p>
          <p><strong>Information you provide directly</strong></p>
          <ul>
            <li>Name, email address, phone number, and city or institution when you enquire or apply</li>
            <li>Program interest, role, batch details, and messages you send through contact forms</li>
            <li>Account details if you register for our learning platform or admin portals</li>
            <li>Resume, academic, or placement related details when you share them for training support</li>
          </ul>
          <p><strong>Information collected automatically</strong></p>
          <ul>
            <li>Device type, browser, operating system, and general location (city or region level)</li>
            <li>Pages visited, time spent, referral source, and interaction with site features</li>
            <li>IP address and technical logs used for security, debugging, and performance</li>
          </ul>
          <p><strong>Information from partners</strong></p>
          <p>
            If you join through a university or institutional tie up, we may receive basic enrolment
            details shared by your institution to run batches, tests, and placement activities.
          </p>
        </LegalSection>

        <LegalSection id="how-we-use-information" title="3. How we use information">
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to enquiries and process program applications</li>
            <li>Deliver training, assessments, mock interviews, and placement support</li>
            <li>Manage batches, attendance, scores, and progress reports for students and TPO teams</li>
            <li>Send service updates, schedule reminders, and placement related alerts you opt into</li>
            <li>Improve our website, curriculum, and platform experience</li>
            <li>Prevent fraud, abuse, and unauthorised access to our systems</li>
            <li>Meet legal, regulatory, and contractual obligations</li>
          </ul>
          <p>
            We do not sell your personal information to third parties for their own marketing purposes.
          </p>
        </LegalSection>

        <LegalSection id="sharing-information" title="4. Sharing of information">
          <p>We may share information only when necessary:</p>
          <ul>
            <li>
              <strong>With your university or institution</strong> when you are part of a campus batch
              and reporting is part of the programme
            </li>
            <li>
              <strong>With service providers</strong> who help us host our website, send emails, run
              analytics, or operate our learning platform, under confidentiality obligations
            </li>
            <li>
              <strong>With recruiters or hiring partners</strong> only when you have given consent or
              are participating in a placement drive that requires profile sharing
            </li>
            <li>
              <strong>For legal reasons</strong> if required by law, court order, or to protect the
              rights and safety of Skilltrixa, our users, or the public
            </li>
          </ul>
        </LegalSection>

        <LegalSection id="cookies" title="5. Cookies and analytics">
          <p>
            Our website may use cookies and similar technologies to remember preferences, keep sessions
            secure, and understand how visitors use the site.
          </p>
          <p>Types of cookies we may use include:</p>
          <ul>
            <li><strong>Essential cookies</strong> required for basic site functionality and security</li>
            <li><strong>Analytics cookies</strong> to measure traffic and improve content</li>
            <li><strong>Preference cookies</strong> to remember choices such as language or region</li>
          </ul>
          <p>
            You can control cookies through your browser settings. Disabling certain cookies may affect
            how some parts of the site work.
          </p>
        </LegalSection>

        <LegalSection id="data-retention" title="6. Data retention">
          <p>
            We keep personal information only as long as needed for the purposes described in this
            policy, unless a longer period is required by law or a valid institutional agreement.
          </p>
          <p>
            Enquiry and application records are typically retained while your request is active and for
            a reasonable period afterward for follow up and reporting. Training and assessment data may
            be retained for the duration of your programme and for institutional reporting cycles.
          </p>
        </LegalSection>

        <LegalSection id="data-security" title="7. Data security">
          <p>
            We use reasonable technical and organisational measures to protect your information,
            including access controls, secure hosting, and staff training on data handling.
          </p>
          <p>
            No method of transmission over the internet is completely secure. While we work to protect
            your data, we cannot guarantee absolute security.
          </p>
        </LegalSection>

        <LegalSection id="your-rights" title="8. Your rights">
          <p>Depending on applicable law, you may have the right to:</p>
          <ul>
            <li>Request access to the personal information we hold about you</li>
            <li>Ask us to correct inaccurate or incomplete information</li>
            <li>Request deletion of information where it is no longer needed, subject to legal limits</li>
            <li>Withdraw consent for optional communications such as marketing messages</li>
            <li>Raise a concern with us before contacting a data protection authority</li>
          </ul>
          <p>
            To exercise these rights, contact us using the details at the end of this policy. We may
            need to verify your identity before processing certain requests.
          </p>
        </LegalSection>

        <LegalSection id="children" title="9. Children's privacy">
          <p>
            Our services are intended for students and adults participating in higher education or
            professional training programmes. We do not knowingly collect personal information from
            children under 13 without appropriate parental or institutional consent.
          </p>
          <p>
            If you believe we have collected information from a child without proper consent, contact
            us and we will take steps to review and remove it where appropriate.
          </p>
        </LegalSection>

        <LegalSection id="third-party-links" title="10. Third party links">
          <p>
            Our website may link to third party sites such as social media, payment gateways, or
            partner tools. We are not responsible for the privacy practices of those sites. We encourage
            you to read their policies before sharing information with them.
          </p>
        </LegalSection>

        <LegalSection id="policy-changes" title="11. Changes to this policy">
          <p>
            We may update this Privacy Policy from time to time. When we make material changes, we will
            post the updated version on this page and revise the &quot;Last updated&quot; date above.
          </p>
          <p>
            Continued use of our website after changes are posted means you accept the updated policy.
          </p>
        </LegalSection>

        <LegalSection id="contact" title="12. Contact us">
          <p>
            For privacy related questions, data access requests, or concerns about how your information
            is handled, contact Skilltrixa using the details on our contact page or the support block
            below.
          </p>
        </LegalSection>
      </LegalPageLayout>
    </>
  )
}
