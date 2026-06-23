import { Link } from 'react-router-dom'
import { CONTACT } from '../config/seo'
import './LegalPage.css'

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

export default function LegalPageLayout({
  eyebrow,
  title,
  intro,
  lastUpdated,
  toc,
  relatedLink,
  children,
}) {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <div className="legal-hero-inner page-inner">
          <p className="legal-eyebrow">{eyebrow}</p>
          <h1 className="legal-title">{title}</h1>
          <p className="legal-intro">{intro}</p>
          <div className="legal-meta">
            <span className="legal-meta-pill">Last updated {lastUpdated}</span>
            <span className="legal-meta-pill">Skilltrixa Ed Tech Solutions</span>
          </div>
        </div>
      </section>

      <section className="legal-body">
        <div className="legal-body-inner page-inner">
          <div className="legal-grid">
            <aside className="legal-sidebar" aria-label="On this page">
              <div className="legal-toc-card">
                <p className="legal-toc-title">On this page</p>
                <ul className="legal-toc">
                  {toc.map((item) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`}>{item.label}</a>
                    </li>
                  ))}
                </ul>
                {relatedLink ? (
                  <div className="legal-related">
                    <span className="legal-related-label">Related</span>
                    <Link to={relatedLink.to}>{relatedLink.label}</Link>
                  </div>
                ) : null}
              </div>
            </aside>

            <div className="legal-content">
              {children}

              <div className="legal-contact-card">
                <span className="legal-contact-ic" aria-hidden>
                  <MailIcon />
                </span>
                <div className="legal-contact-copy">
                  <h2>Questions about this page?</h2>
                  <p>Reach our team for clarifications on how we handle your data and use of our services.</p>
                  <div className="legal-contact-links">
                    <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                    <a href={`tel:${CONTACT.phoneE164}`}>{CONTACT.phone}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export function LegalSection({ id, title, children }) {
  return (
    <section id={id} className="legal-section" aria-labelledby={`${id}-heading`}>
      <h2 id={`${id}-heading`}>{title}</h2>
      {children}
    </section>
  )
}
