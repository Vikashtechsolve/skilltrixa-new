import { useState, useEffect } from 'react'
import { API_BASE } from '../../config/api'
import './Admin.css'

export default function AdminApplications() {
  const [applications, setApplications] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchApplications() {
    try {
      const res = await fetch(`${API_BASE}/applications`)
      if (res.ok) setApplications(await res.json())
    } catch (err) {
      console.error('Fetch applications error:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchApplications() }, [])

  async function handleDelete(id) {
    if (!confirm('Are you sure you want to delete this application?')) return
    try {
      const res = await fetch(`${API_BASE}/applications/${id}`, { method: 'DELETE' })
      if (res.ok) fetchApplications()
    } catch (err) {
      alert('Delete failed: ' + err.message)
    }
  }

  function formatDate(iso) {
    return new Date(iso).toLocaleDateString('en-IN', {
      day: 'numeric', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit',
    })
  }

  return (
    <>
      <div className="admin-page-header">
        <h1 className="admin-page-title">Applications</h1>
        <p className="admin-page-subtitle">View submitted applications and contact form entries</p>
      </div>

      <div className="admin-card">
        {loading ? (
          <p style={{ color: 'var(--color-text-muted)', textAlign: 'center', padding: '2rem' }}>Loading applications...</p>
        ) : applications.length === 0 ? (
          <div className="admin-empty">
            <p>No applications received yet.</p>
          </div>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Program</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app) => (
                  <tr key={app._id}>
                    <td><strong>{app.fullName}</strong></td>
                    <td>{app.email}</td>
                    <td style={{ whiteSpace: 'nowrap' }}>{app.phone}</td>
                    <td>{app.program || app.city || '—'}</td>
                    <td style={{ whiteSpace: 'nowrap', fontSize: '0.8rem' }}>
                      {formatDate(app.createdAt)}
                    </td>
                    <td>
                      <button
                        className="admin-btn admin-btn-danger admin-btn-sm"
                        onClick={() => handleDelete(app._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  )
}
