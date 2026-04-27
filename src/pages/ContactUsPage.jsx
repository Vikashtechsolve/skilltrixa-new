import { useState } from 'react'
import './ContactUsPage.css'

const INITIAL_FORM = {
  fullName: '',
  email: '',
  phone: '',
  institution: '',
  role: '',
  message: '',
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
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-inner page-inner">
          <p className="contact-eyebrow">Contact us</p>
          <h1 className="contact-title">Partner with Skilltrixa and transform your campus</h1>
          <p className="contact-lead">
            Share your institution details and goals. Our team will connect with you to plan outcomes,
            rollout model, and timelines.
          </p>
        </div>
      </section>

      <section className="contact-form-wrap" aria-labelledby="contact-form-heading">
        <div className="contact-inner page-inner">
          <div className="contact-card">
            <h2 id="contact-form-heading" className="contact-card-title">
              Tell us about your campus needs
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
                Submit details
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
