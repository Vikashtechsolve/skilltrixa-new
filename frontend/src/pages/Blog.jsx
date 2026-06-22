import { useState, useMemo, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { API_BASE } from '../config/api'
import SEO from '../components/SEO'
import { buildBreadcrumbsLd, buildItemListLd } from '../config/seo'
import './Blog.css'

/* ── static categories (for backward compatibility) ── */
const STATIC_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'ai-ml', label: 'AI and Machine Learning' },
  { id: 'mern', label: 'MERN Stack' },
  { id: 'frontend', label: 'Frontend Frameworks' },
  { id: 'backend', label: 'Backend Technologies' },
  { id: 'devops', label: 'DevOps and Cloud' },
  { id: 'mobile', label: 'Mobile Development' },
  { id: 'web3', label: 'Web3 and Blockchain' },
  { id: 'database', label: 'Database Design' },
  { id: 'api', label: 'API Development' },
  { id: 'webdev', label: 'Web Development' },
]

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
  const [searchParams] = useSearchParams()

  const [allBlogs, setAllBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    setSearchQuery(searchParams.get('q')?.trim() ?? '')
  }, [searchParams])

  // Fetch blogs from API
  useEffect(() => {
    async function fetchBlogs() {
      try {
        setLoading(true)
        const res = await fetch(`${API_BASE}/blogs`)
        if (!res.ok) throw new Error('Failed to fetch blogs')
        const data = await res.json()
        setAllBlogs(data)
      } catch (err) {
        console.error('Blog fetch error:', err)
        setAllBlogs([])
      } finally {
        setLoading(false)
      }
    }
    fetchBlogs()
  }, [])

  // Dynamically compute categories from fetched blogs
  const dynamicCategories = useMemo(() => {
    const cats = new Set(allBlogs.map((b) => b.category).filter(Boolean))
    const categoriesList = [...STATIC_CATEGORIES]
    
    // Add any category that isn't in our static list
    Array.from(cats).forEach((c) => {
      if (!categoriesList.find((existing) => existing.id === c)) {
        categoriesList.push({ id: c, label: c })
      }
    })
    return categoriesList
  }, [allBlogs])

  function getCategoryLabel(id) {
    return dynamicCategories.find((c) => c.id === id)?.label ?? id
  }

  // Map API data shape: use `slug` as link id and `heroImage` as image
  const mappedBlogs = useMemo(
    () =>
      allBlogs.map((b) => ({
        ...b,
        id: b.slug,
        image: b.heroImage,
      })),
    [allBlogs],
  )

  const blogIndexJsonLd = [
    buildBreadcrumbsLd([
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blogs' },
    ]),
    buildItemListLd(
      'Skilltrixa Blog Posts',
      mappedBlogs.slice(0, 10).map((p) => ({
        name: p.title,
        path: `/blogs/${p.id}`,
        description: p.excerpt,
      })),
    ),
  ]

  const normalize = (str) =>
    str.toLowerCase().replace(/[-/:.]/g, ' ').replace(/\s+/g, ' ').trim()

  const filteredPosts = useMemo(() => {
    let posts = mappedBlogs
    if (activeCategory !== 'all') {
      posts = posts.filter((p) => p.category === activeCategory)
    }
    if (searchQuery.trim()) {
      const q = normalize(searchQuery)
      posts = posts.filter(
        (p) =>
          normalize(p.title).includes(q) ||
          normalize(p.excerpt).includes(q) ||
          (p.tags || []).some((tag) => normalize(tag).includes(q))
      )
    }
    return posts
  }, [activeCategory, searchQuery, mappedBlogs])

  const featuredBlog = mappedBlogs[0] || null
  const showFeatured =
    activeCategory === 'all' &&
    !searchQuery.trim() &&
    featuredBlog

  /* sidebar data */
  const recentPosts = mappedBlogs.slice(0, 4)
  const popularPosts = [...mappedBlogs]
    .sort((a, b) => a.title.localeCompare(b.title))
    .slice(0, 4)

  return (
    <>
      <SEO
        title="Skilltrixa Blog | Career Tips, Skills & Training Insights"
        description="Read Skilltrixa blogs on career growth, skill development, placement training and industry insights across Full Stack, Data Science, AI and ML and Generative AI."
        keywords="Skilltrixa blog, career blog, skill development blog, placement tips, training institute blog, full stack tutorials, AI ML blog"
        path="/blogs"
        jsonLd={blogIndexJsonLd}
      />
    <main className="blog-page">
      {/* ═══ 1  HERO ═══ */}
      <section className="blog-hero" aria-labelledby="blog-hero-heading">
        <div className="blog-hero-inner">
          <p className="blog-hero-eyebrow">Skilltrixa Blog</p>
          <h1 id="blog-hero-heading" className="blog-hero-title">
            Insights, Career Tips &amp; Industry Knowledge
          </h1>
          <p className="blog-hero-subtitle">
            Expert articles on technology, career growth, and skill development
            from the Skilltrixa team.
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
          {dynamicCategories.map((cat) => (
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

      {/* ═══ LOADING STATE ═══ */}
      {loading && (
        <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
          <p style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-display)', fontWeight: 500 }}>Loading blog posts...</p>
        </div>
      )}

      {/* ═══ CONTENT AREA with sidebar ═══ */}
      {!loading && (
      <div className="blog-content">
        <div>
          {/* ── 2  FEATURED BLOG ── */}
          {showFeatured && (
            <Link
              to={`/blogs/${featuredBlog.id}`}
              className="blog-featured"
              id="featured-blog"
              aria-label={`Read article: ${featuredBlog.title}`}
            >
              <div className="blog-featured-img">
                <img
                  src={featuredBlog.image}
                  alt={featuredBlog.title}
                  width={700}
                  height={420}
                  loading="eager"
                />
                <div className="blog-featured-img-overlay" aria-hidden />
              </div>
              <div className="blog-featured-body">
                <span className="blog-featured-tag">
                  {getCategoryLabel(featuredBlog.category)}
                </span>
                <h2 className="blog-featured-title">{featuredBlog.title}</h2>
                <p className="blog-featured-desc">
                  {featuredBlog.excerpt}
                </p>
                <div className="blog-featured-meta">
                  <span>
                    <CalendarIcon /> {formatDate(featuredBlog.date)}
                  </span>
                  <span>
                    <ClockIcon /> {featuredBlog.readTime}
                  </span>
                </div>
                <span className="blog-read-more">
                  Read More <ArrowRightIcon />
                </span>
              </div>
            </Link>
          )}

          {/* ── 3  BLOG GRID ── */}
          <div className="blog-grid">
            {filteredPosts.length === 0 && !loading && (
              <div className="blog-no-results">
                <p>No articles found. Try a different search or category.</p>
              </div>
            )}
            {filteredPosts.map((post) => (
              <Link
                key={post.id || post._id}
                to={`/blogs/${post.id}`}
                className="blog-card"
                aria-label={`Read article: ${post.title}`}
              >
                <div className="blog-card-img">
                  <img
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    loading="lazy"
                  />
                  <span className="blog-card-tag">
                    {getCategoryLabel(post.category)}
                  </span>
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-desc">{post.excerpt}</p>
                  <div className="blog-card-footer">
                    <span className="blog-card-date">
                      <CalendarIcon /> {formatDate(post.date)}
                    </span>
                    <span className="blog-card-read-more">
                      Read More <ArrowRightIcon />
                    </span>
                  </div>
                </div>
              </Link>
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
                <li key={p.id || p._id}>
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
                <li key={p.id || p._id}>
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
              {dynamicCategories.filter((c) => c.id !== 'all').map((cat) => (
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
      )}


      {/* ═══ 7  CTA ═══ */}
      <section className="blog-cta" aria-labelledby="blog-cta-heading">
        <div className="blog-cta-inner">
          <h2 id="blog-cta-heading">Boost Your Career with Skilltrixa</h2>
          <p>
            Ready to level up your skills? Explore our industry focused programs
            and start your journey today.
          </p>
          <Link to="/programs" className="blog-cta-btn">
            Explore Courses <ArrowRightIcon />
          </Link>
        </div>
      </section>
    </main>
    </>
  )
}
