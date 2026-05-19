import { useEffect } from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import { SKILLTRIXA_LOGIN_URL } from './config/links'
import Home from './pages/Home'
import ProgramsIndex from './pages/ProgramsIndex'
import ProgramPage from './pages/ProgramPage'
import FullStackDev from './pages/FullStackDev'
import DataScience from './pages/DataScience'
import AIML from './pages/AIML'
import GenAI from './pages/GenAI'
import AptitudeTraining from './pages/AptitudeTraining'
import CompetitiveCoding from './pages/CompetitiveCoding'
import About from './pages/About'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'
import UniversitiesPage from './pages/UniversitiesPage'
import ContactUsPage from './pages/ContactUsPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsOfServicePage from './pages/TermsOfServicePage'

// Admin pages
import AdminLogin from './pages/admin/AdminLogin'
import AdminLayout from './pages/admin/AdminLayout'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminBlogs from './pages/admin/AdminBlogs'
import AdminApplications from './pages/admin/AdminApplications'

function LoginRedirect() {
  useEffect(() => {
    window.location.replace(SKILLTRIXA_LOGIN_URL)
  }, [])
  return (
    <main className="page-inner" style={{ paddingTop: '2rem' }}>
      <p style={{ margin: 0, color: 'var(--color-text-muted)' }}>Opening Skilltrixa…</p>
    </main>
  )
}

export default function App() {
  return (
    <Routes>
      {/* ── Main site (with navbar + footer) ── */}
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<ProgramsIndex />} />
        <Route path="/programs/full-stack" element={<FullStackDev />} />
        <Route path="/programs/data-science" element={<DataScience />} />
        <Route path="/programs/ai-ml" element={<AIML />} />
        <Route path="/programs/gen-ai" element={<GenAI />} />
        <Route path="/programs/aptitude-training" element={<AptitudeTraining />} />
        <Route path="/programs/competitive-coding" element={<CompetitiveCoding />} />
        <Route path="/programs/:programId" element={<ProgramPage />} />
        <Route path="/universities" element={<UniversitiesPage />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:slug" element={<BlogDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="/login" element={<LoginRedirect />} />
        <Route
          path="/signup"
          element={<Navigate to="/contact-us" replace />}
        />
      </Route>

      {/* ── Admin panel (no main navbar/footer) ── */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route element={<AdminLayout />}>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/blogs" element={<AdminBlogs />} />
        <Route path="/admin/applications" element={<AdminApplications />} />
      </Route>
    </Routes>
  )
}
