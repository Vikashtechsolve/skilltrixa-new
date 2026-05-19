import { useState, useEffect } from 'react'
import { API_BASE } from '../../config/api'
import './Admin.css'

const EMPTY_BLOG = {
  title: '',
  category: '',
  excerpt: '',
  author: 'SkillTrixa',
  date: new Date().toISOString().slice(0, 10),
  readTime: '5 min read',
  tags: '',
  heroImage: '',
  content: [], // Changed to array
  status: 'published',
}

export default function AdminBlogs() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editing, setEditing] = useState(null)
  const [form, setForm] = useState(EMPTY_BLOG)
  const [imageFile, setImageFile] = useState(null)
  const [saving, setSaving] = useState(false)
  const [markdown, setMarkdown] = useState('')

  // Markdown Parser
  function parseMarkdownToBlocks(text) {
    const lines = text.split('\n')
    const blocks = []
    let currentList = null
    let currentCode = null

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      const trimmed = line.trim()
      
      if (currentCode !== null) {
        if (trimmed === '```') {
          blocks.push({ type: 'code', text: currentCode.text, language: currentCode.language })
          currentCode = null
        } else {
          currentCode.text += (currentCode.text ? '\n' : '') + line // Keep exact indentation
        }
        continue
      }

      if (trimmed.startsWith('```')) {
        currentCode = { language: trimmed.slice(3).trim() || 'text', text: '' }
        continue
      }

      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        if (!currentList) {
          currentList = { type: 'list', items: [] }
          blocks.push(currentList)
        }
        currentList.items.push(trimmed.slice(2).trim())
        continue
      } else {
        currentList = null
      }

      if (!trimmed) continue

      if (trimmed.startsWith('# ')) {
        blocks.push({ type: 'heading', text: trimmed.slice(2).trim() })
      } else if (trimmed.startsWith('## ') || trimmed.startsWith('### ')) {
        blocks.push({ type: 'subheading', text: trimmed.replace(/^#+\s/, '').trim() })
      } else if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
        blocks.push({ type: 'bold', text: trimmed.slice(2, -2).trim() })
      } else {
        blocks.push({ type: 'paragraph', text: trimmed })
      }
    }

    // Flush any unclosed code block at the end of the document
    if (currentCode !== null) {
      blocks.push({ type: 'code', text: currentCode.text, language: currentCode.language })
    }

    return blocks
  }

  function convertBlocksToMarkdown(blocks) {
    if (!Array.isArray(blocks)) return ''
    return blocks.map(block => {
      if (block.type === 'heading') return `# ${block.text}`
      if (block.type === 'subheading') return `### ${block.text}`
      if (block.type === 'paragraph') return `${block.text}`
      if (block.type === 'bold') return `**${block.text}**`
      if (block.type === 'list') return block.items.map(item => `- ${item}`).join('\n')
      if (block.type === 'code') return `\`\`\`${block.language || ''}\n${block.text}\n\`\`\``
      return ''
    }).join('\n\n')
  }

  async function fetchBlogs() {
    try {
      const res = await fetch(`${API_BASE}/blogs/all`)
      if (res.ok) setBlogs(await res.json())
    } catch (err) {
      console.error('Fetch blogs error:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchBlogs() }, [])

  function openCreate() {
    setEditing(null)
    setForm(EMPTY_BLOG)
    setImageFile(null)
    setMarkdown('')
    setShowModal(true)
  }

  function openEdit(blog) {
    setEditing(blog._id)
    setForm({
      title: blog.title || '',
      category: blog.category || '',
      excerpt: blog.excerpt || '',
      author: blog.author || 'SkillTrixa',
      date: blog.date || '',
      readTime: blog.readTime || '',
      tags: (blog.tags || []).join(', '),
      heroImage: blog.heroImage || '',
      status: blog.status || 'published',
    })
    setImageFile(null)
    setMarkdown(convertBlocksToMarkdown(blog.content || []))
    setShowModal(true)
  }

  async function handleSave(e) {
    e.preventDefault()
    setSaving(true)
    try {
      const formData = new FormData()
      formData.append('title', form.title)
      formData.append('category', form.category)
      formData.append('excerpt', form.excerpt)
      formData.append('author', form.author)
      formData.append('date', form.date)
      formData.append('readTime', form.readTime)
      formData.append('tags', form.tags)
      
      const blocks = parseMarkdownToBlocks(markdown)
      formData.append('content', JSON.stringify(blocks))
      
      formData.append('status', form.status)

      if (imageFile) {
        formData.append('heroImage', imageFile)
      } else if (form.heroImage && !editing) {
        formData.append('heroImage', form.heroImage)
      }

      const url = editing ? `${API_BASE}/blogs/${editing}` : `${API_BASE}/blogs`
      const method = editing ? 'PUT' : 'POST'

      const res = await fetch(url, { method, body: formData })
      if (!res.ok) {
        const err = await res.json()
        alert(err.error || 'Failed to save blog')
        return
      }

      setShowModal(false)
      fetchBlogs()
    } catch (err) {
      alert('Error saving blog: ' + err.message)
    } finally {
      setSaving(false)
    }
  }

  async function handleDelete(id) {
    if (!confirm('Are you sure you want to delete this blog?')) return
    try {
      const res = await fetch(`${API_BASE}/blogs/${id}`, { method: 'DELETE' })
      if (res.ok) fetchBlogs()
    } catch (err) {
      alert('Delete failed: ' + err.message)
    }
  }

  function formatDate(iso) {
    return new Date(iso).toLocaleDateString('en-IN', {
      day: 'numeric', month: 'short', year: 'numeric',
    })
  }

  // --- Live Preview Component ---
  function LivePreview({ markdownText }) {
    const blocks = parseMarkdownToBlocks(markdownText)
    return (
      <div className="admin-live-preview" style={{ padding: '1.5rem', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '8px', minHeight: '500px', maxHeight: '600px', overflowY: 'auto' }}>
        {blocks.map((block, i) => {
           if (block.type === 'heading') return <h2 key={i} style={{fontSize: '1.6rem', fontWeight: 700, margin: '1.5rem 0 1rem', color: 'var(--color-text)'}}>{block.text}</h2>
           if (block.type === 'subheading') return <h3 key={i} style={{fontSize: '1.3rem', fontWeight: 600, margin: '1.25rem 0 0.75rem', color: 'var(--color-text)'}}>{block.text}</h3>
           if (block.type === 'paragraph') return <p key={i} style={{fontSize: '1rem', lineHeight: 1.7, color: 'var(--color-text-muted)', marginBottom: '1.25rem'}}>{block.text}</p>
           if (block.type === 'bold') return <p key={i} style={{fontSize: '1.05rem', fontWeight: 600, color: 'var(--color-primary)', margin: '1.25rem 0 1rem'}}>{block.text}</p>
           if (block.type === 'list') return <ul key={i} style={{listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>{block.items.map((item, j) => <li key={j} style={{position: 'relative', paddingLeft: '1.25rem', color: 'var(--color-text-muted)'}}><span style={{position: 'absolute', left: 0, color: 'var(--color-primary)'}}>•</span>{item}</li>)}</ul>
           if (block.type === 'code') return <pre key={i} style={{background: '#1a1b26', color: '#a9b1d6', padding: '1rem', borderRadius: '0.5rem', overflowX: 'auto', margin: '1.25rem 0', fontSize: '0.9rem', border: '1px solid rgba(255,255,255,0.1)'}}><code>{block.text}</code></pre>
           return null
        })}
        {blocks.length === 0 && <p style={{ color: 'var(--color-text-muted)', textAlign: 'center', marginTop: '2rem' }}>Start typing to see the preview...</p>}
      </div>
    )
  }
  // ------------------------------------

  return (
    <>
      <div className="admin-page-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 className="admin-page-title">Blogs</h1>
          <p className="admin-page-subtitle">Manage your blog posts</p>
        </div>
        <button className="admin-btn admin-btn-primary" onClick={openCreate}>
          + New Blog
        </button>
      </div>

      <div className="admin-card">
        {loading ? (
          <p style={{ color: 'var(--color-text-muted)', textAlign: 'center', padding: '2rem' }}>Loading blogs...</p>
        ) : blogs.length === 0 ? (
          <div className="admin-empty">
            <p>No blogs yet. Create your first blog post.</p>
          </div>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog) => (
                  <tr key={blog._id}>
                    <td style={{ maxWidth: '280px' }}>
                      <strong>{blog.title}</strong>
                    </td>
                    <td>{blog.category}</td>
                    <td>
                      <span className={`admin-badge admin-badge--${blog.status}`}>
                        {blog.status}
                      </span>
                    </td>
                    <td style={{ whiteSpace: 'nowrap' }}>{formatDate(blog.date)}</td>
                    <td>
                      <div className="admin-table-actions">
                        <button className="admin-btn admin-btn-secondary admin-btn-sm" onClick={() => openEdit(blog)}>
                          Edit
                        </button>
                        <button className="admin-btn admin-btn-danger admin-btn-sm" onClick={() => handleDelete(blog._id)}>
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ── Blog Form Modal ── */}
      {showModal && (
        <div className="admin-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="admin-modal" style={{ maxWidth: '1400px', width: '95%' }} onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h2 className="admin-modal-title">
                {editing ? 'Edit Blog' : 'Create New Blog'}
              </h2>
              <button className="admin-modal-close" onClick={() => setShowModal(false)}>
                ×
              </button>
            </div>

            <form className="admin-form" onSubmit={handleSave}>
              <div className="admin-field">
                <label>Title</label>
                <input
                  value={form.title}
                  onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                  placeholder="Blog post title"
                  required
                />
              </div>

              <div className="admin-form-row">
                <div className="admin-field">
                  <label>Category</label>
                  <input
                    type="text"
                    list="category-options"
                    value={form.category}
                    onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
                    placeholder="e.g. AI / Machine Learning"
                    required
                  />
                  <datalist id="category-options">
                    <option value="ai-ml">AI / Machine Learning</option>
                    <option value="mern">MERN Stack</option>
                    <option value="frontend">Frontend Frameworks</option>
                    <option value="backend">Backend Technologies</option>
                    <option value="devops">DevOps / Cloud</option>
                    <option value="mobile">Mobile Development</option>
                    <option value="web3">Web3 / Blockchain</option>
                    <option value="database">Database Design</option>
                    <option value="api">API Development</option>
                    <option value="webdev">Web Development</option>
                    {Array.from(new Set(blogs.map(b => b.category).filter(Boolean))).map(c => {
                      const isStatic = ['ai-ml', 'mern', 'frontend', 'backend', 'devops', 'mobile', 'web3', 'database', 'api', 'webdev'].includes(c)
                      return !isStatic ? <option key={c} value={c}>{c}</option> : null
                    })}
                  </datalist>
                </div>
                <div className="admin-field">
                  <label>Status</label>
                  <select
                    value={form.status}
                    onChange={(e) => setForm((f) => ({ ...f, status: e.target.value }))}
                  >
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                  </select>
                </div>
              </div>

              <div className="admin-field">
                <label>Excerpt</label>
                <textarea
                  value={form.excerpt}
                  onChange={(e) => setForm((f) => ({ ...f, excerpt: e.target.value }))}
                  placeholder="Short description for blog cards"
                  rows={3}
                  required
                />
              </div>

              <div className="admin-form-row">
                <div className="admin-field">
                  <label>Author</label>
                  <input
                    value={form.author}
                    onChange={(e) => setForm((f) => ({ ...f, author: e.target.value }))}
                    placeholder="Author name"
                  />
                </div>
                <div className="admin-field">
                  <label>Read Time</label>
                  <input
                    value={form.readTime}
                    onChange={(e) => setForm((f) => ({ ...f, readTime: e.target.value }))}
                    placeholder="e.g. 7 min read"
                  />
                </div>
              </div>

              <div className="admin-form-row">
                <div className="admin-field">
                  <label>Date</label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                    required
                  />
                </div>
                <div className="admin-field">
                  <label>Tags (comma separated)</label>
                  <input
                    value={form.tags}
                    onChange={(e) => setForm((f) => ({ ...f, tags: e.target.value }))}
                    placeholder="React, Node.js, skilltrixa"
                  />
                </div>
              </div>

              <div className="admin-field">
                <label>Hero Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImageFile(e.target.files[0])}
                />
                {form.heroImage && !imageFile && (
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', margin: '0.25rem 0 0' }}>
                    Current: {form.heroImage.substring(0, 60)}...
                  </p>
                )}
              </div>

              <div className="admin-field" style={{ display: 'flex', gap: '2rem' }}>
                
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <label style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
                    <span>Markdown Editor</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Use # for Heading, - for Lists, ** for Bold</span>
                  </label>
                  <textarea
                    value={markdown}
                    onChange={(e) => setMarkdown(e.target.value)}
                    rows={20}
                    style={{ width: '100%', padding: '1rem', fontFamily: 'monospace', fontSize: '0.95rem', border: '1px solid var(--color-border)', borderRadius: '8px', minHeight: '500px', maxHeight: '600px', resize: 'vertical' }}
                    placeholder="Write your blog post here using Markdown...&#10;&#10;# Introduction&#10;This is a paragraph.&#10;&#10;**Important Notice**&#10;&#10;- First item&#10;- Second item"
                  />
                  
                  {/* Markdown Guide */}
                  <div style={{ marginTop: '1rem', padding: '1rem', background: 'var(--color-surface-hover)', borderRadius: '8px', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                    <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--color-text)' }}>Markdown Guide</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                      <div><code># Text</code> ➔ Heading</div>
                      <div><code>## Text</code> ➔ Subheading</div>
                      <div><code>- Text</code> ➔ Bullet List</div>
                      <div><code>**Text**</code> ➔ Bold Text</div>
                      <div style={{ gridColumn: '1 / -1', marginTop: '0.5rem' }}>
                        <code>```javascript</code><br />
                        <code>const api = "test";</code><br />
                        <code>```</code> ➔ Code Block
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <label style={{ marginBottom: '0.5rem' }}>Live Preview</label>
                  <LivePreview markdownText={markdown} />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
                <button type="button" className="admin-btn admin-btn-secondary" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="admin-btn admin-btn-primary" disabled={saving}>
                  {saving ? 'Saving...' : editing ? 'Update Blog' : 'Create Blog'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
