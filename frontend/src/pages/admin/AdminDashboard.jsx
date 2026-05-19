import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { API_BASE } from '../../config/api'
import './Admin.css'

export default function AdminDashboard() {
  const [blogCount, setBlogCount] = useState(0)
  const [appCount, setAppCount] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchStats() {
      try {
        const [blogsRes, appsRes] = await Promise.all([
          fetch(`${API_BASE}/blogs/all`),
          fetch(`${API_BASE}/applications`),
        ])
        if (blogsRes.ok) {
          const blogs = await blogsRes.json()
          setBlogCount(blogs.length)
        }
        if (appsRes.ok) {
          const apps = await appsRes.json()
          setAppCount(apps.length)
        }
      } catch (err) {
        console.error('Dashboard stats error:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchStats()
  }, [])

  return (
    <>
      <div className="admin-page-header">
        <h1 className="admin-page-title">Dashboard</h1>
        <p className="admin-page-subtitle">Welcome back to Skilltrixa Admin Panel</p>
      </div>

      <div className="admin-stats-grid">
        <div className="admin-stat-card">
          <p className="admin-stat-value">{loading ? '...' : blogCount}</p>
          <p className="admin-stat-label">Total Blogs</p>
        </div>
        <div className="admin-stat-card">
          <p className="admin-stat-value">{loading ? '...' : appCount}</p>
          <p className="admin-stat-label">Applications</p>
        </div>
      </div>

      <div className="admin-card">
        <h2 style={{ margin: '0 0 1rem', fontFamily: 'var(--font-display)', fontSize: '1.1rem' }}>
          Quick Actions
        </h2>
        <div className="admin-quick-actions">
          <Link to="/admin/blogs" className="admin-btn admin-btn-primary">
            Manage Blogs
          </Link>
          <Link to="/admin/applications" className="admin-btn admin-btn-secondary">
            View Applications
          </Link>
        </div>
      </div>
    </>
  )
}
