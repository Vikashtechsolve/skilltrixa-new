import { Routes, Route } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import ProgramsIndex from './pages/ProgramsIndex'
import ProgramPage from './pages/ProgramPage'
import About from './pages/About'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'
import PlaceholderPage from './pages/PlaceholderPage'

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<ProgramsIndex />} />
        <Route path="/programs/:programId" element={<ProgramPage />} />
        <Route
          path="/universities"
          element={
            <PlaceholderPage
              title="Universities"
              subtitle="Partnerships that take your students from classroom to company — we will fill this section properly in the next step."
            />
          }
        />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:slug" element={<BlogDetail />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/login"
          element={
            <PlaceholderPage
              title="Login"
              subtitle="Your login flow will connect to the backend when we wire the MERN stack."
            />
          }
        />
        <Route
          path="/signup"
          element={
            <PlaceholderPage
              title="Sign up"
              subtitle="Create your Skilltrixa account — form and API integration will follow."
            />
          }
        />
      </Route>
    </Routes>
  )
}
