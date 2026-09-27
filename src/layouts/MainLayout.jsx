import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import PageTitle from '../components/PageTitle'

export default function MainLayout() {
  const { pathname } = useLocation()
  return (
    <div className="site-layout">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <ScrollToTop />
      <PageTitle />
      <Navbar key={pathname} />
      <main id="main-content" tabIndex={-1}><Outlet /></main>
      <Footer />
    </div>
  )
}
