import { Link } from 'react-router-dom'
import { developerContact } from '../data/developerContact'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link className="brand" to="/" aria-label="Aurevia Advisory home">
              <span className="monogram" aria-hidden="true">A<span>·</span></span>
              <span className="brand-wordmark">Aurevia<span>Advisory</span></span>
            </Link>
            <p>Clear thinking. Considered advice. A confident path forward for ambitious businesses.</p>
            <span className="template-label">Professional-services website template</span>
          </div>
          <nav aria-label="Company navigation">
            <h2 className="footer-heading">Company</h2>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Aurevia</Link></li>
              <li><Link to="/insights">Insights</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
          <nav aria-label="Services navigation">
            <h2 className="footer-heading">Services</h2>
            <ul>
              <li><Link to="/services">Business strategy</Link></li>
              <li><Link to="/services">Growth advisory</Link></li>
              <li><Link to="/services">Transformation</Link></li>
            </ul>
          </nav>
          <div>
            <h2 className="footer-heading">Get in touch</h2>
            <address>
              <p>Kuala Lumpur, Malaysia</p>
              <a href="mailto:hello@aurevia.example">hello@aurevia.example</a>
            </address>
            <p className="footer-note">Fictional brand. Placeholder contact details.</p>
          </div>
        </div>
        <section className="footer-developer" aria-labelledby="developer-heading">
          <div>
            <h2 id="developer-heading" className="footer-heading">Need a website like this?</h2>
            <p>This is a portfolio website template. For a custom website for your business, contact the developer.</p>
          </div>
          <div className="footer-developer-actions">
            <a href={developerContact.emailHref}>Email Developer</a>
            <a href={developerContact.whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp Developer <span className="developer-new-tab">(opens in a new tab)</span></a>
          </div>
        </section>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Aurevia Advisory. All rights reserved.</p>
          <p>A foundation for thoughtful business.</p>
        </div>
      </div>
    </footer>
  )
}
