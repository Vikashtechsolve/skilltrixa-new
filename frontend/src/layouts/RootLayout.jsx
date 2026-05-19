import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import HomepageSchema from '../components/HomepageSchema'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppFloatButton from '../components/WhatsAppFloatButton'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default function RootLayout() {
  return (
    <>
      <HomepageSchema />
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
      <WhatsAppFloatButton />
    </>
  )
}
