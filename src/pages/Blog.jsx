import { useEffect, useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  BLOG_CATEGORIES,
  FEATURED_BLOG,
  BLOG_POSTS,
} from '../data/blogPosts'
import './Blog.css'

/* ── helpers ── */
function categoryLabel(id) {
  return BLOG_CATEGORIES.find((c) => c.id === id)?.label ?? id
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

/* ── Inline SVG icons ── */
function SearchIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="8" r="6" />
      <path d="M16 16l-3.5-3.5" />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.5 8h9M8.5 4l4 4-4 4" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="12" height="11" rx="2" />
      <path d="M5 1v3M11 1v3M2 7h12" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="8" r="6.5" />
      <path d="M8 4.5V8l2.5 1.5" />
    </svg>
  )
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    document.title = 'Skilltrixa Blog | Career Tips, Skills & Training Insights'
    const meta = document.querySelector('meta[name="description"]')
    if (meta)
      meta.setAttribute(
        'content',
        'Read Skilltrixa blogs on career growth, skill development, placement training, and industry insights.'
      )

    const metaKw = document.querySelector('meta[name="keywords"]')
    if (!metaKw) {
      const el = document.createElement('meta')
      el.name = 'keywords'
      el.content =
        'career blog, skill development blog, placement tips, training institute blog, global careers'
      document.head.appendChild(el)
    }

    return () => {
      document.title = 'Skilltrixa — Learn skills. Get job-ready.'
    }
  }, [])

  const filteredPosts = useMemo(() => {
    let posts = BLOG_POSTS
    if (activeCategory !== 'all') {
      posts = posts.filter((p) => p.category === activeCategory)
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      )
    }
    return posts
  }, [activeCategory, searchQuery])

  const showFeatured =
    activeCategory === 'all' &&
    !searchQuery.trim() 

  /* sidebar data */
  const recentPosts = BLOG_POSTS.slice(0, 4)
  const popularPosts = [...BLOG_POSTS]
    .sort((a, b) => a.title.localeCompare(b.title))
    .slice(0, 4)

  return (
    <main className="blog-page">
      {/* ═══ 1  HERO ═══ */}
      <section className="blog-hero" aria-labelledby="blog-hero-heading">
        <div className="blog-hero-inner">
          <p className="blog-hero-eyebrow">Skilltrixa Blog</p>
          <h1 id="blog-hero-heading" className="blog-hero-title">
            Insights, Career Tips &amp; Industry Knowledge
          </h1>
          <p className="blog-hero-subtitle">
            Stay ahead of the curve with expert-written articles on technology,
            career growth, and skill development.
          </p>
          <div className="blog-search">
            <SearchIcon />
            <input
              type="search"
              className="blog-search-input"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search blog posts"
            />
          </div>
        </div>
      </section>

      {/* ═══ 4  CATEGORY FILTER ═══ */}
      <div className="blog-filters" role="navigation" aria-label="Blog categories">
        <div className="blog-filters-inner">
          {BLOG_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`blog-filter-btn${
                activeCategory === cat.id ? ' blog-filter-btn--active' : ''
              }`}
              onClick={() => setActiveCategory(cat.id)}
              aria-pressed={activeCategory === cat.id}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* ═══ CONTENT AREA with sidebar ═══ */}
      <div className="blog-content">
        <div>
          {/* ── 2  FEATURED BLOG ── */}
          {showFeatured && (
            <article className="blog-featured" id="featured-blog">
              <div className="blog-featured-img">
                <img
                  src={FEATURED_BLOG.image}
                  alt={FEATURED_BLOG.title}
                  width={700}
                  height={420}
                  loading="eager"
                />
                <div className="blog-featured-img-overlay" aria-hidden />
              </div>
              <div className="blog-featured-body">
                <span className="blog-featured-tag">
                  {categoryLabel(FEATURED_BLOG.category)}
                </span>
                <h2 className="blog-featured-title">{FEATURED_BLOG.title}</h2>
                <p className="blog-featured-desc">
                  {FEATURED_BLOG.description}
                </p>
                <div className="blog-featured-meta">
                  <span>
                    <CalendarIcon /> {formatDate(FEATURED_BLOG.date)}
                  </span>
                  <span>
                    <ClockIcon /> {FEATURED_BLOG.readTime}
                  </span>
                </div>
                <Link
                  to={`/blogs/${FEATURED_BLOG.id}`}
                  className="blog-read-more"
                >
                  Read More <ArrowRightIcon />
                </Link>
              </div>
            </article>
          )}

          {/* ── 3  BLOG GRID ── */}
          <div className="blog-grid">
            {filteredPosts.length === 0 && (
              <div className="blog-no-results">
                <p>No articles found. Try a different search or category.</p>
              </div>
            )}
            {filteredPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-card-img">
                  <img
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    loading="lazy"
                  />
                  <span className="blog-card-tag">
                    {categoryLabel(post.category)}
                  </span>
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-desc">{post.description}</p>
                  <div className="blog-card-footer">
                    <span className="blog-card-date">
                      <CalendarIcon /> {formatDate(post.date)}
                    </span>
                    <Link
                      to={`/blogs/${post.id}`}
                      className="blog-card-read-more"
                    >
                      Read More <ArrowRightIcon />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ═══ 5  SIDEBAR ═══ */}
        <aside className="blog-sidebar" aria-label="Blog sidebar">
          {/* Recent Posts */}
          <div className="sidebar-card">
            <h3>Recent Posts</h3>
            <ul className="sidebar-list">
              {recentPosts.map((p) => (
                <li key={p.id}>
                  <Link to={`/blogs/${p.id}`} className="sidebar-list-link">
                    {p.title}
                    <span className="sidebar-list-link-meta">
                      {formatDate(p.date)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Blogs */}
          <div className="sidebar-card">
            <h3>Popular Blogs</h3>
            <ul className="sidebar-list">
              {popularPosts.map((p) => (
                <li key={p.id}>
                  <Link to={`/blogs/${p.id}`} className="sidebar-list-link">
                    {p.title}
                    <span className="sidebar-list-link-meta">
                      {p.readTime}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="sidebar-card">
            <h3>Categories</h3>
            <div className="sidebar-categories">
              {BLOG_CATEGORIES.filter((c) => c.id !== 'all').map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className="sidebar-cat-tag"
                  onClick={() => {
                    setActiveCategory(cat.id)
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* ═══ 6  NEWSLETTER ═══ */}
      <section className="blog-newsletter" aria-labelledby="newsletter-heading">
        <div className="blog-newsletter-inner">
          <h2 id="newsletter-heading">Stay Updated with Career Insights</h2>
          <p className="blog-newsletter-text">
            Get the latest articles on career growth, skill development, and
            placement tips delivered straight to your inbox.
          </p>
          <form
            className="newsletter-form"
            onSubmit={(e) => {
              e.preventDefault()
              alert('Thank you for subscribing!')
            }}
          >
            <input
              type="email"
              className="newsletter-input"
              placeholder="Enter your email"
              required
              aria-label="Email address"
            />
            <button type="submit" className="newsletter-btn">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* ═══ 7  CTA ═══ */}
      <section className="blog-cta" aria-labelledby="blog-cta-heading">
        <div className="blog-cta-inner">
          <h2 id="blog-cta-heading">Boost Your Career with Skilltrixa</h2>
          <p>
            Ready to level up your skills? Explore our industry-focused programs
            and start your journey today.
          </p>
          <Link to="/programs" className="blog-cta-btn">
            Explore Courses <ArrowRightIcon />
          </Link>
        </div>
      </section>
    </main>
  )
}
