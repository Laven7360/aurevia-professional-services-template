import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import EditorialPhoto from '../components/EditorialPhoto'
import advisoryMeeting from '../assets/images/advisory-meeting.webp'
import clientConsultation from '../assets/images/client-consultation.webp'
import './Home.css'

const statistics = [
  ['15+', 'Years of combined advisory experience'],
  ['40+', 'Strategic engagements'],
  ['6', 'Core advisory disciplines'],
  ['Malaysia', 'Regional business perspective'],
]

const services = [
  ['Business Advisory', 'Strategic guidance for complex commercial decisions, organisational priorities and long-term direction.'],
  ['Financial Consulting', 'Clear financial analysis, planning and decision support designed around business realities.'],
  ['Risk & Compliance', 'Practical frameworks that help organisations understand exposure, strengthen controls and respond confidently.'],
  ['Growth Strategy', 'Market, expansion and growth planning grounded in evidence and commercial opportunity.'],
  ['Operational Improvement', 'Identifying opportunities to simplify processes, improve performance and create more resilient operations.'],
  ['Transformation Advisory', 'Structured support for organisations navigating business, digital and operational change.'],
]

const principles = [
  ['Independent Perspective', 'We bring objective thinking to difficult decisions without unnecessary complexity.'],
  ['Commercially Grounded', 'Recommendations are shaped by practical business realities, not theory alone.'],
  ['Senior Attention', 'Every engagement is approached with focus, accountability and direct involvement.'],
  ['Clear Outcomes', 'We translate analysis into priorities, actions and decisions that teams can use.'],
]

const process = [
  ['Understand', 'We begin by defining the real question, context and priorities.'],
  ['Analyse', 'We examine the information, challenges, opportunities and trade-offs.'],
  ['Advise', 'We turn the analysis into clear recommendations and practical options.'],
  ['Advance', 'We help translate direction into an actionable path forward.'],
]

const industries = ['Financial Services', 'Professional Services', 'Technology', 'Consumer & Retail', 'Property & Infrastructure', 'Emerging Businesses']
const testimonials = [
  ['Aurevia brought structure to a decision that had become increasingly complex. The recommendations were clear, practical and easy to act on.', 'Managing Director', 'Regional Services Company'],
  ['What stood out was the ability to understand both the numbers and the wider commercial context. We left with a much clearer direction.', 'Finance Director', 'Growth-Stage Business'],
  ['The process was thoughtful, focused and refreshingly straightforward. Every discussion moved us closer to a decision.', 'Operations Lead', 'Professional Services Firm'],
]

const number = (index) => String(index + 1).padStart(2, '0')

function TextLink({ to, children }) {
  return <Link className="home-text-link" to={to}>{children}<span aria-hidden="true">→</span></Link>
}

export default function Home() {
  return (
    <div className="home">
      <section className="home-hero container" aria-labelledby="home-heading">
        <Reveal className="hero-copy">
          <p className="eyebrow">Independent Advisory <span aria-hidden="true">•</span> Kuala Lumpur</p>
          <h1 id="home-heading">Clarity for complex <em>business decisions.</em></h1>
          <p className="home-lead">Aurevia helps ambitious businesses navigate strategy, growth and transformation with practical advice, independent thinking and a clear path forward.</p>
          <div className="home-actions">
            <Link className="button button-primary" to="/contact">Request a Consultation <span aria-hidden="true">↗</span></Link>
            <TextLink to="/services">Explore Our Services</TextLink>
          </div>
          <p className="hero-disciplines">Strategy <span>•</span> Finance <span>•</span> Risk <span>•</span> Transformation</p>
        </Reveal>
        <Reveal className="hero-art-wrap" delay={100}>
          <div className="hero-art hero-art--photography">
            <div className="art-topline"><span>Aurevia / Perspectives</span><span>No. 01</span></div>
            <EditorialPhoto src={advisoryMeeting} alt="Four colleagues reviewing documents and discussing priorities around a boardroom table" width={1000} height={1333} priority className="editorial-photo--hero" caption="Strategy • Finance • Risk • Transformation" />
            <div className="art-caption"><span>See the whole picture.</span><span>Find the way forward.</span></div>
            <div className="art-bottomline"><span>Independent thinking</span><span>KL / MY</span></div>
          </div>
        </Reveal>
      </section>

      <section className="expertise-strip" aria-label="Advisory expertise — illustrative template statistics">
        <div className="container">
          <dl className="expertise-grid">
            {statistics.map(([value, label]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
          </dl>
          <p className="demo-note">Illustrative template figures. Aurevia is a fictional advisory firm; these are not verified client or experience claims.</p>
        </div>
      </section>

      <section className="home-section container about-preview" aria-labelledby="about-heading">
        <Reveal>
          <p className="eyebrow">About Aurevia</p>
          <h2 id="about-heading">Good advice starts with understanding the whole picture.</h2>
          <div className="home-body">
            <p>We work alongside business leaders to understand the decisions behind the numbers — the ambitions, constraints and risks that shape every organisation.</p>
            <p>Aurevia combines structured analysis with practical commercial thinking, helping clients move from uncertainty to informed action.</p>
          </div>
          <TextLink to="/about">Discover Our Approach</TextLink>
        </Reveal>
        <Reveal delay={100}>
          <div className="home-perspective-photo">
            <EditorialPhoto src={clientConsultation} alt="Two professionals discussing an open notebook and laptop at a meeting table" width={1100} height={733} caption="A considered perspective / 01" />
          <div className="about-panel about-panel--photography">
            <span className="panel-index">A considered perspective / 01</span>
            <span className="panel-monogram" aria-hidden="true">A</span>
            <p>Independent thinking.<br />Practical direction.</p>
            <span className="panel-signature">Aurevia Advisory</span>
          </div>
          </div>
        </Reveal>
      </section>

      <section className="home-section services-section" aria-labelledby="services-heading">
        <div className="container">
          <Reveal className="home-section-heading">
            <div><p className="eyebrow">What We Do</p><h2 id="services-heading">Expertise built around your ambitions.</h2></div>
            <p className="home-body">Focused advisory support for the decisions that shape performance, resilience and long-term growth.</p>
          </Reveal>
          <div className="services-grid">
            {services.map(([title, description], index) => (
              <Reveal key={title} delay={(index % 3) * 60}>
                <Link className="service-item" to="/services">
                  <span className="service-top"><span className="item-number">{number(index)}</span><span className="service-arrow" aria-hidden="true">↗</span></span>
                  <h3>{title}</h3><p>{description}</p>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="services-bottom"><TextLink to="/services">View All Services</TextLink></div>
        </div>
      </section>

      <section className="home-section why-section" aria-labelledby="why-heading">
        <div className="container why-layout">
          <Reveal><p className="eyebrow">Why Aurevia</p><h2 id="why-heading">Advice designed to move decisions forward.</h2><span className="why-rule" aria-hidden="true" /></Reveal>
          <div className="principles-grid">
            {principles.map(([title, description], index) => (
              <Reveal key={title} delay={(index % 2) * 60}>
                <div className="principle"><span className="item-number">{number(index)}</span><h3>{title}</h3><p>{description}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section container process-section" aria-labelledby="process-heading">
        <Reveal className="process-heading"><p className="eyebrow">How We Work</p><h2 id="process-heading">A clear process from question to action.</h2></Reveal>
        <ol className="process-grid">
          {process.map(([title, description], index) => (
            <li key={title}><Reveal delay={index * 60}><span className="process-number">{number(index)}</span><h3>{title}</h3><p>{description}</p></Reveal></li>
          ))}
        </ol>
      </section>

      <section className="home-section industries-section" aria-labelledby="industries-heading">
        <div className="container industries-layout">
          <Reveal><p className="eyebrow">Industry Perspective</p><h2 id="industries-heading">Experience across evolving industries.</h2><p className="home-body">Different operating environments call for different perspectives. Aurevia adapts its advisory approach to each organisation’s context, priorities and stage of business.</p><p className="light-demo-note">Illustrative sectors this advisory template could serve.</p></Reveal>
          <Reveal><ul className="industries-list">{industries.map((industry, index) => <li key={industry}><span className="item-number">{number(index)}</span><span>{industry}</span><span className="industry-mark" aria-hidden="true">—</span></li>)}</ul></Reveal>
        </div>
      </section>

      <section className="home-section container insight-section" aria-labelledby="insight-heading">
        <Reveal><p className="eyebrow">Featured Insight</p></Reveal>
        <article className="insight-layout">
          <Reveal>
            <div className="insight-art" aria-hidden="true">
              <div className="art-topline"><span>The Aurevia Perspective</span><span>01 / Strategy</span></div>
              <div className="insight-geometry"><span /><span /><span /><i /></div>
              <div className="insight-art-caption">A clearer<br /><em>point of view.</em></div>
              <div className="art-bottomline"><span>Ideas into direction</span><span>↗</span></div>
            </div>
          </Reveal>
          <Reveal className="insight-copy" delay={100}>
            <p className="article-meta"><span>Strategy</span><span>6 min read</span></p>
            <h2 id="insight-heading">Making confident decisions when the outlook is uncertain</h2>
            <p className="home-body">Uncertainty does not remove the need to make decisions. It changes the way leaders should frame options, evaluate risk and define the next move.</p>
            <TextLink to="/insights">Read the Insight</TextLink>
            <p className="light-demo-note">Sample editorial preview for this template.</p>
          </Reveal>
        </article>
      </section>

      <section className="home-section testimonials-section" aria-labelledby="testimonials-heading">
        <div className="container">
          <Reveal className="testimonial-heading"><p className="eyebrow">Client Perspective</p><h2 id="testimonials-heading">Trusted thinking. Practical outcomes.</h2><p className="light-demo-note">Example testimonials only. These fictional perspectives do not represent real clients or engagements.</p></Reveal>
          <div className="testimonials-grid">
            {testimonials.map(([quote, role, company], index) => (
              <Reveal key={role} delay={index * 60}>
                <figure className="testimonial"><span className="quote-mark" aria-hidden="true">“</span><blockquote><p>{quote}</p></blockquote><figcaption><strong>{role}</strong><span>{company}</span></figcaption></figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="consultation-section" aria-labelledby="consultation-heading">
        <div className="container consultation-layout">
          <Reveal><p className="eyebrow">Start a Conversation</p><h2 id="consultation-heading">Better decisions begin with the right conversation.</h2></Reveal>
          <Reveal delay={100}><p>Tell us what you’re working through. We’ll start by understanding the question, the context and what a useful outcome looks like.</p><div className="consultation-actions"><Link className="button button-gold" to="/contact">Request a Consultation <span aria-hidden="true">↗</span></Link><a className="consultation-email" href="mailto:hello@aurevia.example">hello@aurevia.example</a></div></Reveal>
        </div>
      </section>
    </div>
  )
}
