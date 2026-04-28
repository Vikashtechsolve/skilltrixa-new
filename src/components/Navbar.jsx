import { useEffect, useRef, useState, startTransition } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { SKILLTRIXA_LOGIN_URL } from '../config/links'
import { PROGRAMS } from '../data/programs'
import './Navbar.css'

function ChevronDown({ className = '' }) {
  return (
    <svg
      className={`nav-chevron ${className}`.trim()}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden
    >
      <path
        d="M2.5 4.5L6 8L9.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Navbar() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false)
  const closeBtnRef = useRef(null)

  useEffect(() => {
    startTransition(() => {
      setMobileOpen(false)
      setMobileProgramsOpen(false)
    })
  }, [location.pathname])

  useEffect(() => {
    if (!mobileOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [mobileOpen])

  useEffect(() => {
    if (mobileOpen) closeBtnRef.current?.focus()
  }, [mobileOpen])

  const navLinkClass = ({ isActive }) =>
    `nav-link${isActive ? ' nav-link--active' : ''}`

  return (
    <header className="site-header">
      <div className="navbar-shell">
        <Link to="/" className="brand">
          <img
            src="/skilltrixa.png"
            alt="Skilltrixa"
            className="brand-logo"
            width={180}
            height={48}
            decoding="async"
            fetchPriority="high"
          />
          <span className="brand-text">
            <span className="brand-tagline">
              <span className="brand-tagline-line">Learn skills.</span>
              <span className="brand-tagline-line">Get placed.</span>
            </span>
          </span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={mobileOpen}
          aria-controls="primary-navigation"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span className="sr-only">{mobileOpen ? 'Close menu' : 'Open menu'}</span>
          <span className={`menu-icon${mobileOpen ? ' menu-icon--open' : ''}`} />
        </button>

        <div
          className={`nav-backdrop${mobileOpen ? ' nav-backdrop--visible' : ''}`}
          aria-hidden
          onClick={() => setMobileOpen(false)}
        />

        <nav
          id="primary-navigation"
          className={`nav-main${mobileOpen ? ' nav-main--open' : ''}`}
          aria-label="Primary"
        >
          <button
            type="button"
            ref={closeBtnRef}
            className="nav-close"
            onClick={() => setMobileOpen(false)}
          >
            Close
          </button>

          <ul className="nav-links">
            <li>
              <NavLink to="/" end className={navLinkClass}>
                Home
              </NavLink>
            </li>

            <li className="nav-dropdown">
              <div className="nav-dropdown-row">
                <NavLink to="/programs" className={navLinkClass}>
                  Programs
                </NavLink>
                <button
                  type="button"
                  className="nav-dropdown-mobile-toggle"
                  aria-expanded={mobileProgramsOpen}
                  onClick={() => setMobileProgramsOpen((v) => !v)}
                >
                  <span className="sr-only">Programs submenu</span>
                  <ChevronDown
                    className={mobileProgramsOpen ? 'nav-chevron--open' : ''}
                  />
                </button>
              </div>
              <ul
                className={`dropdown-panel${
                  mobileProgramsOpen ? ' dropdown-panel--mobile-open' : ''
                }`}
              >
                {PROGRAMS.map((p) => (
                  <li key={p.id}>
                    <Link to={`/programs/${p.id}`} className="dropdown-link">
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <NavLink to="/universities" className={navLinkClass}>
                Universities
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs" className={navLinkClass}>
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navLinkClass}>
                About us
              </NavLink>
            </li>
          </ul>

          <div className="nav-actions">
            <a
              href={SKILLTRIXA_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Login
            </a>
            <Link to="/contact-us" className="btn btn-primary">
              Contact us
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
