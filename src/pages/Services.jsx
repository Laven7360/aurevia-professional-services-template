import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import EditorialPhoto from '../components/EditorialPhoto'
import strategyDiscussion from '../assets/images/strategy-discussion.webp'
import './Services.css'

const services = [
  { title: 'Business Advisory', positioning: 'Clarity for complex commercial decisions.', description: 'We help leadership teams evaluate priorities, assess options and make better-informed decisions when the path forward is not immediately clear.', support: ['Strategic decision support', 'Business planning and prioritisation', 'Commercial assessment'] },
  { title: 'Financial Consulting', positioning: 'Financial insight connected to business reality.', description: 'We translate financial information into practical insight, helping organisations understand performance, evaluate options and plan with greater confidence.', support: ['Financial planning and analysis', 'Performance assessment', 'Investment and decision support'] },
  { title: 'Risk & Compliance', positioning: 'Understanding exposure before it becomes disruption.', description: 'We help organisations identify important risks, evaluate existing controls and develop practical approaches to resilience and compliance.', support: ['Risk assessment', 'Control and governance review', 'Resilience planning'] },
  { title: 'Growth Strategy', positioning: 'Turning ambition into a considered growth path.', description: 'We support organisations evaluating new markets, opportunities and commercial directions with structured analysis and practical planning.', support: ['Market and opportunity assessment', 'Growth planning', 'Expansion strategy'] },
  { title: 'Operational Improvement', positioning: 'Better performance through clearer operations.', description: 'We examine processes, priorities and operating structures to identify opportunities for greater efficiency, resilience and effectiveness.', support: ['Process improvement', 'Operating model review', 'Performance optimisation'] },
  { title: 'Transformation Advisory', positioning: 'Helping change move from intention to execution.', description: 'We provide structured support for organisations navigating significant business, operational or digital change.', support: ['Transformation planning', 'Change prioritisation', 'Implementation roadmap'] },
]

const disciplines = ['Strategy', 'Finance', 'Risk', 'Growth', 'Operations', 'Transformation']
const engagements = [
  ['Focused Advisory', 'For a defined decision or challenge requiring independent analysis and clear recommendations.'],
  ['Strategic Project', 'For broader questions requiring structured assessment across several business areas.'],
  ['Ongoing Advisory', 'For organisations that benefit from continued independent perspective as priorities evolve.'],
]
const scenarios = [
  'We need to decide where to grow next.',
  'We understand the numbers, but the direction is unclear.',
  'Our organisation needs to change, but we need a practical roadmap.',
  'We want an independent view before making a major decision.',
  'Our operations are becoming more complex as the business grows.',
  'We need to understand the risks behind an opportunity.',
]
const number = (index) => String(index + 1).padStart(2, '0')

export default function Services() {
  return (
    <div className="services-page">
      <section className="services-hero container" aria-labelledby="services-title">
        <Reveal>
          <p className="eyebrow">Our Services</p>
          <h1 id="services-title">Expertise for the decisions <em>that shape what comes next.</em></h1>
          <p className="services-lead">From strategic direction to operational improvement, Aurevia provides focused advisory support for organisations navigating important decisions, change and growth.</p>
          <p className="services-descriptor">Strategy • Finance • Risk • Operations • Growth • Transformation</p>
        </Reveal>
        <Reveal delay={100}>
          <div className="services-cover" aria-hidden="true">
            <div className="services-art-caption"><span>Aurevia / Advisory disciplines</span><span>01—06</span></div>
            <div className="services-cover-grid">{disciplines.map((discipline, index) => <div key={discipline}><span>{number(index)}</span><span>{discipline}</span></div>)}</div>
            <p>Distinct perspectives.<em>Connected thinking.</em></p>
            <div className="services-art-caption"><span>One business picture</span><span>KL / MY</span></div>
          </div>
        </Reveal>
      </section>

      <section className="services-section-space services-introduction" aria-labelledby="services-intro-heading">
        <div className="container services-intro-grid">
          <Reveal><p className="eyebrow">Advisory, Connected</p><h2 id="services-intro-heading">Business challenges rarely fit neatly into one category.</h2></Reveal>
          <Reveal delay={80}><div className="services-body"><p>Strategy affects finance. Growth creates operational demands. Transformation introduces risk. The most useful advice considers these connections rather than treating every challenge in isolation.</p><p>Our services are designed to work independently or together, depending on the question in front of the client.</p></div><p className="services-intro-statement">One question can involve several perspectives.<em>Our job is to connect them.</em></p></Reveal>
          <Reveal className="services-workshop-photo"><EditorialPhoto src={strategyDiscussion} alt="Colleagues discussing ideas around a table beside a wall of planning notes" width={1100} height={733} className="editorial-photo--wide" caption="Independent perspectives. Connected advisory." /></Reveal>
        </div>
      </section>

      <section className="services-details" aria-label="Six advisory service areas">
        {services.map((service, index) => <article className="services-detail-row" key={service.title} aria-labelledby={`service-title-${index}`}>
          <Reveal className="container services-detail-grid">
            <div className="services-detail-number" aria-hidden="true"><span>{number(index)}</span><i /></div>
            <div className="services-detail-copy"><h2 id={`service-title-${index}`}>{service.title}</h2><p className="services-positioning">{service.positioning}</p><p className="services-body">{service.description}</p></div>
            <div className="services-support"><h3>Example areas of support</h3><ul>{service.support.map((area) => <li key={area}>{area}</li>)}</ul></div>
          </Reveal>
        </article>)}
      </section>

      <section className="services-section-space services-integrated" aria-labelledby="integrated-heading">
        <div className="container services-integrated-grid">
          <Reveal><p className="eyebrow">Integrated Perspective</p><h2 id="integrated-heading">Six disciplines. One business picture.</h2><p className="services-body">The right answer rarely comes from looking at one dimension alone. Aurevia brings relevant perspectives together around the decision that matters.</p><p className="services-integrated-note">Different lenses. A shared direction.</p></Reveal>
          <Reveal delay={100}>
            <div className="services-model" role="img" aria-label="Strategy, Finance, Risk, Growth, Operations and Transformation connect around a central business decision.">
              <div className="services-model-ring" aria-hidden="true" />
              <div className="services-model-center" aria-hidden="true"><span>The question</span><strong>Decision</strong></div>
              {disciplines.map((discipline, index) => <div className={`services-model-node services-model-node-${index + 1}`} key={discipline} aria-hidden="true"><span>{number(index)}</span>{discipline}</div>)}
              <span className="services-model-line services-model-line-1" aria-hidden="true" /><span className="services-model-line services-model-line-2" aria-hidden="true" /><span className="services-model-line services-model-line-3" aria-hidden="true" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="services-section-space container" aria-labelledby="engagement-heading">
        <Reveal className="services-heading"><p className="eyebrow">Engagement Approach</p><h2 id="engagement-heading">Support shaped around the question.</h2></Reveal>
        <div className="services-engagement-grid">{engagements.map(([title, description], index) => <Reveal key={title} delay={index * 60}><article><span className="services-small-number">{number(index)}</span><h3>{title}</h3><p className="services-body">{description}</p></article></Reveal>)}</div>
        <Reveal><p className="services-scope-note">The scope should fit the decision — not the other way around.</p></Reveal>
      </section>

      <section className="services-section-space services-scenarios" aria-labelledby="scenarios-heading">
        <div className="container services-scenarios-grid">
          <Reveal><p className="eyebrow">When We Help</p><h2 id="scenarios-heading">Often, the starting point is simply a difficult question.</h2></Reveal>
          <div><ul className="services-question-list">{scenarios.map((scenario, index) => <li key={scenario}><Reveal delay={(index % 2) * 40}><span className="services-small-number" aria-hidden="true">{number(index)}</span><p>“{scenario}”</p></Reveal></li>)}</ul><Reveal><p className="services-body services-question-closing">You do not need to know which service you need before speaking with us. Start with the question.</p><Link className="services-text-link" to="/contact">Start a Conversation <span aria-hidden="true">→</span></Link></Reveal></div>
        </div>
      </section>

      <section className="services-section-space services-consultation" aria-labelledby="services-consultation-heading">
        <div className="container services-consultation-grid">
          <Reveal><p className="eyebrow">Discuss Your Priorities</p><h2 id="services-consultation-heading">Start with the decision in front of you.</h2></Reveal>
          <Reveal delay={80}><p>Tell us what you’re evaluating, changing or trying to understand. We’ll begin by defining the question and identifying where our perspective may be useful.</p><div className="services-actions"><Link className="button services-button-gold" to="/contact">Request a Consultation <span aria-hidden="true">↗</span></Link><Link className="services-text-link" to="/about">Learn About Aurevia <span aria-hidden="true">→</span></Link></div></Reveal>
        </div>
      </section>
    </div>
  )
}
