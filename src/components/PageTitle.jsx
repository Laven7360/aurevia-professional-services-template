import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const titles = {
  '/': 'Aurevia Advisory | Strategic Business Advisory',
  '/about': 'About | Aurevia Advisory',
  '/services': 'Services | Aurevia Advisory',
  '/insights': 'Insights | Aurevia Advisory',
  '/contact': 'Contact | Aurevia Advisory',
}

export default function PageTitle() {
  const { pathname } = useLocation()
  useEffect(() => {
    const normalizedPath = pathname.replace(/\/+$/, '').toLowerCase() || '/'
    document.title = titles[normalizedPath] || 'Page Not Found | Aurevia Advisory'
  }, [pathname])
  return null
}
