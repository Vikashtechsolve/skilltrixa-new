import SEO from '../components/SEO'
import { buildBreadcrumbsLd } from '../config/seo'
import LegalPageLayout, { LegalSection } from '../components/LegalPageLayout'

const TOC = [
  { id: 'acceptance', label: 'Acceptance of terms' },
  { id: 'about-skilltrixa', label: 'About Skilltrixa' },
  { id: 'eligibility', label: 'Eligibility' },
  { id: 'accounts', label: 'Accounts and access' },
  { id: 'use-of-services', label: 'Use of our services' },
  { id: 'enrolment', label: 'Program enrolment' },
  { id: 'intellectual-property', label: 'Intellectual property' },
  { id: 'user-conduct', label: 'User conduct' },
  { id: 'institutional-partners', label: 'Institutional partners' },
  { id: 'disclaimers', label: 'Disclaimers' },
  { id: 'liability', label: 'Limitation of liability' },
  { id: 'termination', label: 'Termination' },
  { id: 'governing-law', label: 'Governing law' },
  { id: 'terms-changes', label: 'Changes to these terms' },
  { id: 'contact', label: 'Contact us' },
]

export default function TermsOfServicePage() {
  return (
    <>
      <SEO
        title="Terms of Service | Skilltrixa"
        description="Read Skilltrixa’s Terms of Service covering website use, program enrolment, platform access, and your responsibilities as a user."
        keywords="Skilltrixa terms of service, user agreement, website terms, program enrolment"
        path="/terms-of-service"
        jsonLd={buildBreadcrumbsLd([
          { name: 'Home', path: '/' },
          { name: 'Terms of service', path: '/terms-of-service' },
        ])}
      />
      <LegalPageLayout
        eyebrow="Legal"
        title="Terms of Service"
        intro="These terms govern your use of the Skilltrixa website, learning platform, and related training and placement services. Please read them carefully before using our services."
        lastUpdated="June 2026"
        toc={TOC}
        relatedLink={{ to: '/privacy-policy', label: 'Privacy Policy' }}
      >
        <LegalSection id="acceptance" title="1. Acceptance of terms">
          <p>
            By accessing or using skilltrixa.com, our learning platform, or any Skilltrixa program,
            you agree to these Terms of Service and our Privacy Policy.
          </p>
          <p>
            If you are using our services on behalf of a university, college, or organisation, you
            confirm that you have authority to bind that organisation to these terms.
          </p>
        </LegalSection>

        <LegalSection id="about-skilltrixa" title="2. About Skilltrixa">
          <p>
            Skilltrixa Ed Tech Solutions provides training, assessments, mock interviews, and placement
            support for students and institutional partners across technology, data, and AI career tracks.
          </p>
          <p>
            Our services may include live classes, recorded content, coding tests, aptitude rounds,
            project reviews, mentor feedback, and placement assistance. Specific offerings depend on
            the program or partnership you join.
          </p>
        </LegalSection>

        <LegalSection id="eligibility" title="3. Eligibility">
          <p>
            You must be at least 16 years old to use our services independently. Users under 18 should
            use Skilltrixa with consent from a parent, guardian, or authorised institutional contact.
          </p>
          <p>
            You agree that the information you provide during registration or enquiry is accurate and
            kept up to date.
          </p>
        </LegalSection>

        <LegalSection id="accounts" title="4. Accounts and access">
          <p>
            Some features require an account. You are responsible for keeping your login credentials
            confidential and for all activity under your account.
          </p>
          <p>Notify us immediately if you suspect unauthorised access. We may suspend or reset accounts
            that appear compromised or misused.</p>
        </LegalSection>

        <LegalSection id="use-of-services" title="5. Use of our services">
          <p>You agree to use Skilltrixa only for lawful purposes. You must not:</p>
          <ul>
            <li>Attempt to hack, scrape, reverse engineer, or disrupt our platform or infrastructure</li>
            <li>Share test questions, answer keys, or proprietary materials without permission</li>
            <li>Impersonate another person or misrepresent your affiliation with an institution</li>
            <li>Upload malware, spam, or content that is abusive, discriminatory, or unlawful</li>
            <li>Use automated tools to access the site in ways that overload or damage our systems</li>
            <li>Circumvent access controls, proctoring rules, or assessment integrity measures</li>
          </ul>
          <p>
            We may monitor usage to maintain platform quality, security, and fair assessment practices.
          </p>
        </LegalSection>

        <LegalSection id="enrolment" title="6. Program enrolment and fees">
          <p>
            Program availability, schedules, fees, and refund terms are shared at the time of enrolment
            or through your institutional agreement. Skilltrixa reserves the right to modify batch
            timings, mentors, or delivery format when necessary, with reasonable notice where possible.
          </p>
          <p>
            Placement support, mock interviews, and career guidance are provided to help you prepare.
            Skilltrixa does not guarantee employment, salary levels, or selection at any specific
            company.
          </p>
        </LegalSection>

        <LegalSection id="intellectual-property" title="7. Intellectual property">
          <p>
            All content on the Skilltrixa website and platform, including logos, curriculum, videos,
            question banks, designs, and software, is owned by Skilltrixa or its licensors and
            protected by applicable intellectual property laws.
          </p>
          <p>
            You receive a limited, non transferable licence to access materials for personal learning
            during your enrolled program. You may not copy, resell, redistribute, or publish our
            content without written permission.
          </p>
        </LegalSection>

        <LegalSection id="user-conduct" title="8. User content and conduct">
          <p>
            You may submit projects, code, assignments, resumes, and messages through our platform.
            You retain ownership of your original work, but grant Skilltrixa a licence to use,
            review, and display it for training, assessment, and placement support purposes.
          </p>
          <p>
            You must not submit content that infringes third party rights or violates academic integrity
            rules agreed with your institution.
          </p>
        </LegalSection>

        <LegalSection id="institutional-partners" title="9. University and institutional partners">
          <p>
            Universities and training partners may access dashboards, reports, and batch management
            tools under separate agreements. Institutional administrators are responsible for ensuring
            student data shared with Skilltrixa is handled with appropriate consent and authority.
          </p>
          <p>
            In case of conflict between these general terms and a signed institutional MOU or service
            agreement, the signed agreement will prevail for that partnership.
          </p>
        </LegalSection>

        <LegalSection id="disclaimers" title="10. Disclaimers">
          <p>
            Our website and services are provided on an &quot;as is&quot; and &quot;as available&quot;
            basis. While we work to keep content accurate and up to date, we do not warrant that the
            platform will be uninterrupted, error free, or fit for every individual career outcome.
          </p>
          <p>
            Third party company names, logos, and hiring patterns referenced on our site are for
            preparation context only. They do not imply endorsement or guaranteed placement.
          </p>
        </LegalSection>

        <LegalSection id="liability" title="11. Limitation of liability">
          <p>
            To the fullest extent permitted by law, Skilltrixa and its directors, employees, and
            partners will not be liable for indirect, incidental, special, or consequential damages
            arising from your use of our services.
          </p>
          <p>
            Our total liability for any claim related to these terms or our services will not exceed
            the fees you paid to Skilltrixa for the program giving rise to the claim in the twelve
            months before the claim, or INR 10,000, whichever is greater.
          </p>
        </LegalSection>

        <LegalSection id="termination" title="12. Termination">
          <p>
            You may stop using our services at any time. We may suspend or terminate access if you
            breach these terms, misuse the platform, or if required for legal or operational reasons.
          </p>
          <p>
            Sections that by nature should survive termination, including intellectual property,
            disclaimers, and limitation of liability, will continue to apply.
          </p>
        </LegalSection>

        <LegalSection id="governing-law" title="13. Governing law">
          <p>
            These Terms of Service are governed by the laws of India. Any disputes will be subject to
            the exclusive jurisdiction of the courts in Vadodara, Gujarat, unless otherwise required
            by mandatory law.
          </p>
        </LegalSection>

        <LegalSection id="terms-changes" title="14. Changes to these terms">
          <p>
            We may update these Terms of Service from time to time. The revised version will be posted
            on this page with an updated date. Material changes may also be communicated through email
            or platform notice where appropriate.
          </p>
          <p>
            Continued use of our services after changes take effect constitutes acceptance of the
            updated terms.
          </p>
        </LegalSection>

        <LegalSection id="contact" title="15. Contact us">
          <p>
            If you have questions about these Terms of Service, contact Skilltrixa using the details on
            our contact page or the support block below.
          </p>
        </LegalSection>
      </LegalPageLayout>
    </>
  )
}
