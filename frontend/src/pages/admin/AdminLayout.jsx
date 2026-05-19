import { useEffect } from 'react'
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom'
import './Admin.css'

export default function AdminLayout() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (sessionStorage.getItem('skilltrixa_admin') !== 'true') {
      navigate('/admin/login', { replace: true })
    }
  }, [navigate])

  function handleLogout() {
    sessionStorage.removeItem('skilltrixa_admin')
    navigate('/admin/login')
  }

  const isActive = (path) => location.pathname === path

  return (
    <div className="admin-layout">
      <header className="admin-topbar">
        <Link to="/admin/dashboard" className="admin-topbar-brand">
          Skill<span>trixa</span>&nbsp;Admin
        </Link>
        <div className="admin-topbar-actions">
          <Link
            to="/admin/dashboard"
            className="admin-topbar-link"
            style={isActive('/admin/dashboard') ? { color: '#fff' } : {}}
          >
            Dashboard
          </Link>
          <Link
            to="/admin/blogs"
            className="admin-topbar-link"
            style={isActive('/admin/blogs') ? { color: '#fff' } : {}}
          >
            Blogs
          </Link>
          <Link
            to="/admin/applications"
            className="admin-topbar-link"
            style={isActive('/admin/applications') ? { color: '#fff' } : {}}
          >
            Applications
          </Link>
          <Link to="/" className="admin-topbar-link" target="_blank">
            View Site ↗
          </Link>
          <button className="admin-topbar-logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>
      <div className="admin-body">
        <Outlet />
      </div>
    </div>
  )
}
