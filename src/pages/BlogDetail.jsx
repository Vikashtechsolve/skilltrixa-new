import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ALL_BLOGS, BLOG_CATEGORIES } from '../data/blogPosts'
import SEO from '../components/SEO'
import { buildArticleLd, buildBreadcrumbsLd } from '../config/seo'
import './BlogDetail.css'

/* ── helpers ── */
function categoryLabel(id) {
  return BLOG_CATEGORIES.find((c) => c.id === id)?.label ?? id
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

/* ── icons ── */
function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.5 8h-9M7.5 4l-4 4 4 4" />
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

function UserIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="5" r="3" />
      <path d="M2 15a6 6 0 0112 0" />
    </svg>
  )
}

/* ── Content renderer ── */
function ContentBlock({ block }) {
  switch (block.type) {
    case 'heading':
      return <h2>{block.text}</h2>
    case 'subheading':
      return <h3>{block.text}</h3>
    case 'paragraph':
      return <p>{block.text}</p>
    case 'bold':
      return <p className="blog-bold-line">{block.text}</p>
    case 'list':
      return (
        <ul>
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )
    case 'code':
      return (
        <pre>
          <code>{block.text}</code>
        </pre>
      )
    default:
      return null
  }
}

export default function BlogDetail() {
  const { slug } = useParams()
  const blog = ALL_BLOGS.find((b) => b.id === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  const blogPath = `/blogs/${slug}`

  return (
    <>
      <SEO
        title={
          blog
            ? `${blog.title} | Skilltrixa Blog`
            : 'Blog Not Found | Skilltrixa'
        }
        description={
          blog
            ? blog.excerpt
            : "The article you're looking for doesn't exist or may have been moved."
        }
        keywords={blog && Array.isArray(blog.tags) ? blog.tags.join(', ') : undefined}
        path={blogPath}
        image={blog?.image}
        type={blog ? 'article' : 'website'}
        jsonLd={
          blog
            ? [
                buildArticleLd(blog, blogPath),
                buildBreadcrumbsLd([
                  { name: 'Home', path: '/' },
                  { name: 'Blog', path: '/blogs' },
                  { name: blog.title, path: blogPath },
                ]),
              ]
            : undefined
        }
        noindex={!blog}
      />
    {!blog ? (
      <main className="blog-not-found">
        <h1>Blog Not Found</h1>
        <p>The article you're looking for doesn't exist or may have been moved.</p>
        <Link to="/blogs" className="blog-detail-back-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none', padding: '0.7rem 1.5rem', borderRadius: 'var(--radius-sm)', background: 'var(--color-primary)', color: 'var(--color-white)' }}>
          <ArrowLeftIcon /> Back to Blog
        </Link>
      </main>
    ) : (
      <main className="blog-detail-page">
      {/* ═══ Header ═══ */}
      <header className="blog-detail-header">
        <div className="blog-detail-header-inner">
          <Link to="/blogs" className="blog-detail-back">
            <ArrowLeftIcon /> All Articles
          </Link>
          <span className="blog-detail-tag">{categoryLabel(blog.category)}</span>
          <h1 className="blog-detail-title">{blog.title}</h1>
          <div className="blog-detail-meta">
            <span><UserIcon /> {blog.author}</span>
            <span><CalendarIcon /> {formatDate(blog.date)}</span>
            <span><ClockIcon /> {blog.readTime}</span>
          </div>
        </div>
      </header>

      {/* ═══ Hero Image ═══ */}
      <div className="blog-detail-hero-img">
        <img
          src={blog.image}
          alt={blog.title}
          width={800}
          height={400}
          loading="eager"
        />
      </div>

      {/* ═══ Article Body ═══ */}
      <article className="blog-detail-body">
        {blog.content.map((block, i) => (
          <ContentBlock key={i} block={block} />
        ))}

        {/* ── Tags ── */}
        <div className="blog-detail-tags">
          <span className="blog-detail-tags-label">Tags:</span>
          {blog.tags.map((tag) => (
            <span key={tag} className="blog-detail-tag-pill">{tag}</span>
          ))}
        </div>
      </article>

      {/* ═══ Bottom CTA ═══ */}
      <div className="blog-detail-bottom-cta">
        <Link to="/blogs" className="blog-detail-back-btn">
          <ArrowLeftIcon /> Back to All Articles
        </Link>
      </div>
    </main>
    )}
    </>
  )
}
