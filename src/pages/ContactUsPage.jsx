import { useState } from 'react'
import SEO from '../components/SEO'
import { buildBreadcrumbsLd } from '../config/seo'
import './ContactUsPage.css'

const INITIAL_FORM = {
  fullName: '',
  email: '',
  phone: '',
  institution: '',
  role: '',
  message: '',
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.62a2 2 0 0 1-.45 2.11L8 9.99a16 16 0 0 0 6 6l1.54-1.29a2 2 0 0 1 2.11-.45c.84.3 1.72.51 2.62.63A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3.5 8h9M8.5 4l4 4-4 4" />
    </svg>
  )
}

export default function ContactUsPage() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [submitted, setSubmitted] = useState(false)

  function onChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function onSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
    // Frontend-only capture for now. Hook this to API when backend is ready.
    console.info('Contact form submission', form)
    setForm(INITIAL_FORM)
  }

  return (
    <>
      <SEO
        title="Contact Skilltrixa | Talk to our Training & Placement Team"
        description="Get in touch with Skilltrixa for student programs, university partnerships, training and placement support. Email, phone and office details for our Vadodara team."
        keywords="contact Skilltrixa, Skilltrixa support, training enquiry, university partnership enquiry, placement training contact"
        path="/contact-us"
        jsonLd={buildBreadcrumbsLd([
          { name: 'Home', path: '/' },
          { name: 'Contact us', path: '/contact-us' },
        ])}
      />
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-inner page-inner">
          <div className="contact-hero-grid">
            <div className="contact-hero-copy">
              <p className="contact-eyebrow">Contact us</p>
              <h1 className="contact-title">Let’s build job-ready outcomes together</h1>
              <p className="contact-lead">
                Whether you are a student, university partner, or placement team, reach out and we will
                help you with programs, onboarding, and support.
              </p>
              <ul className="contact-hero-points">
                <li>Quick response from our team</li>
                <li>Guidance for students and campuses</li>
                <li>Clear rollout and support process</li>
              </ul>
            </div>

            <div className="contact-hero-visual" aria-hidden>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85"
                alt=""
                loading="lazy"
                width={760}
                height={520}
              />
              <div className="contact-hero-visual-overlay" />
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-wrap" aria-labelledby="contact-form-heading">
        <div className="contact-inner page-inner">
          <div className="contact-layout">
            <aside className="contact-details" aria-labelledby="contact-details-heading">
              <h2 id="contact-details-heading" className="contact-details-title">
                Contact details
              </h2>

              <div className="contact-detail-card">
                <span className="contact-detail-icon"><MailIcon /></span>
                <div>
                  <p className="contact-detail-label">Email</p>
                  <a href="mailto:support@skilltrixa.com">support@skilltrixa.com</a>
                </div>
              </div>

              <div className="contact-detail-card">
                <span className="contact-detail-icon"><PhoneIcon /></span>
                <div>
                  <p className="contact-detail-label">Phone</p>
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </div>
              </div>

              <div className="contact-detail-card contact-detail-card--address">
                <span className="contact-detail-icon"><MapPinIcon /></span>
                <div>
                  <p className="contact-detail-label">Office Address</p>
                  <p>
                    423, Floor 4, Phoenix Resicom, Waghodia Rd, Near Vaikunth Char
                    Rasta, Madhavpura, Vadodara - 390019
                  </p>
                </div>
              </div>

              <div className="contact-detail-card">
                <span className="contact-detail-icon"><ClockIcon /></span>
                <div>
                  <p className="contact-detail-label">Working hours</p>
                  <p>Mon - Sat · 10:00 AM - 7:00 PM</p>
                </div>
              </div>
            </aside>

            <div className="contact-card">
              <h2 id="contact-form-heading" className="contact-card-title">
                Tell us about your requirements
              </h2>

              {submitted ? (
                <p className="contact-success" role="status">
                  Thanks! We captured your details and will reach out soon.
                </p>
              ) : null}

              <form className="contact-form" onSubmit={onSubmit}>
                <label className="contact-field">
                  <span>Full name</span>
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={onChange}
                    required
                    autoComplete="name"
                    placeholder="Your full name"
                  />
                </label>

                <label className="contact-field">
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                  />
                </label>

                <label className="contact-field">
                  <span>Phone number</span>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    required
                    autoComplete="tel"
                    placeholder="+91 ..."
                  />
                </label>

                <label className="contact-field">
                  <span>Institution name</span>
                  <input
                    type="text"
                    name="institution"
                    value={form.institution}
                    onChange={onChange}
                    required
                    placeholder="College / University"
                  />
                </label>

                <label className="contact-field">
                  <span>Your role</span>
                  <select name="role" value={form.role} onChange={onChange} required>
                    <option value="" disabled>
                      Select role
                    </option>
                    <option value="training-and-placement">Training & Placement Cell</option>
                    <option value="dean">Dean / Director</option>
                    <option value="hod">HOD / Faculty Lead</option>
                    <option value="operations">Operations</option>
                    <option value="other">Other</option>
                  </select>
                </label>

                <label className="contact-field contact-field--full">
                  <span>How can we help?</span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    rows={5}
                    placeholder="Tell us about your batch size, goals, and timeline."
                    required
                  />
                </label>

                <button className="btn btn-primary contact-submit" type="submit">
                  Submit details <ArrowRightIcon />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
