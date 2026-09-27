import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import EditorialPhoto from '../components/EditorialPhoto'
import leadershipMeeting from '../assets/images/leadership-meeting.webp'
import './About.css'

const principles = [
  ['Clarity', 'We simplify complex information without oversimplifying the decision.'],
  ['Independence', "Our perspective is shaped by the client's objectives and evidence, not by a predetermined answer."],
  ['Practicality', 'Recommendations must work in the realities of an organisation, not only on paper.'],
  ['Accountability', 'We approach every engagement with focus, transparency and responsibility for the quality of our thinking.'],
]

const perspectives = [
  ['Business Context', 'Understanding the organisation, its objectives, market environment and constraints.'],
  ['Evidence', 'Examining the financial, operational and strategic information behind the decision.'],
  ['Judgement', 'Bringing evidence and context together to define practical options and a clear direction.'],
]

const team = [
  { name: 'Adrian Vale', initials: 'AV', role: 'Managing Partner', discipline: 'Strategy & Transformation', description: 'Focuses on corporate strategy, transformation and complex decision support.' },
  { name: 'Maya Chen', initials: 'MC', role: 'Partner', discipline: 'Finance & Performance', description: 'Works across financial planning, performance improvement and commercial decision-making.' },
  { name: 'Daniel Rahman', initials: 'DR', role: 'Director', discipline: 'Risk & Operations', description: 'Advises organisations on operational resilience, risk and organisational improvement.' },
]

const statistics = [
  ['15+', 'Years of combined advisory experience'],
  ['40+', 'Strategic engagements'],
  ['6', 'Core advisory disciplines'],
  ['4', 'Integrated perspectives'],
]

const expectations = [
  ['Direct Communication', 'Clear conversations, straightforward advice and visibility throughout the engagement.'],
  ['Focused Collaboration', 'We work closely with decision-makers and the teams closest to the issue.'],
  ['Structured Thinking', 'Complex questions are broken into manageable decisions, priorities and actions.'],
  ['Useful Outcomes', 'Every engagement is designed to leave clients with clearer direction and practical next steps.'],
]

const number = (index) => String(index + 1).padStart(2, '0')

export default function About() {
  return (
    <div className="about-page">
      <section className="about-hero container" aria-labelledby="about-title">
        <Reveal>
          <p className="eyebrow">About Aurevia</p>
          <h1 id="about-title">Independent thinking.<em>Practical direction.</em></h1>
          <p className="about-lead">Aurevia is an independent advisory firm built around a simple belief: complex business decisions deserve clear thinking, commercial perspective and advice that can be acted on.</p>
          <p className="about-descriptor">Kuala Lumpur <span>•</span> Strategy <span>•</span> Finance <span>•</span> Risk <span>•</span> Transformation</p>
        </Reveal>
        <Reveal delay={100}>
          <div className="about-cover" aria-hidden="true">
            <div className="about-art-caption"><span>The firm / Our perspective</span><span>01</span></div>
            <div className="about-cover-grid"><span className="about-cover-letter">A</span><span className="about-cover-axis" /><span className="about-cover-label">A considered direction</span></div>
            <div className="about-cover-signature"><span>Independent by perspective.</span><em>Practical by design.</em></div>
            <div className="about-art-caption"><span>Kuala Lumpur, Malaysia</span><span>KL / MY</span></div>
          </div>
        </Reveal>
      </section>

      <section className="about-section about-overview" aria-labelledby="perspective-heading">
        <div className="container about-overview-grid">
          <Reveal><p className="eyebrow">Our Perspective</p><h2 id="perspective-heading">We look beyond the immediate question.</h2>
            <div className="about-body"><p>Business decisions rarely exist in isolation. A growth opportunity can create operational pressure. A financial decision can reshape strategic priorities. A transformation programme can introduce new risks.</p><p>That is why Aurevia approaches advisory work by understanding the wider picture — connecting strategy, finance, operations and risk before defining a path forward.</p></div>
          </Reveal>
          <Reveal className="about-statement" delay={100}>
            <span className="about-small-label">From perspective to progress</span>
            <EditorialPhoto src={leadershipMeeting} alt="Three professionals exchanging perspectives during an office conversation" width={1100} height={734} className="editorial-photo--perspective" caption="Connecting the wider picture" />
            <p>The objective is not more analysis.<em>It is better-informed action.</em></p>
            <span className="about-statement-rule" aria-hidden="true" />
          </Reveal>
        </div>
      </section>

      <section className="about-section container" aria-labelledby="principles-heading">
        <Reveal className="about-section-intro"><p className="eyebrow">What Guides Us</p><h2 id="principles-heading">Principles behind every engagement.</h2></Reveal>
        <div className="about-principles-grid">
          {principles.map(([title, description], index) => <Reveal key={title} delay={index * 50}><article className="about-principle"><span className="about-number">{number(index)}</span><h3>{title}</h3><p>{description}</p></article></Reveal>)}
        </div>
      </section>

      <section className="about-section about-thinking" aria-labelledby="thinking-heading">
        <div className="container">
          <Reveal className="about-thinking-heading"><p className="eyebrow">How We Think</p><h2 id="thinking-heading">Good advice connects the details to the bigger picture.</h2></Reveal>
          <ol className="about-perspectives">
            {perspectives.map(([title, description], index) => <li key={title}><Reveal delay={index * 70}><span className="about-perspective-number">{number(index)}</span><h3>{title}</h3><p>{description}</p></Reveal></li>)}
          </ol>
          <Reveal><p className="about-equation"><span>Context</span><span className="about-operator">+</span><span>Evidence</span><span className="about-operator">+</span><span>Judgement</span><span className="about-operator">→</span><em>Direction</em></p></Reveal>
        </div>
      </section>

      <section className="about-section container" aria-labelledby="leadership-heading">
        <Reveal className="about-leadership-heading"><div><p className="eyebrow">Leadership</p><h2 id="leadership-heading">Experienced perspectives, focused attention.</h2></div><div><p className="about-body">Aurevia is designed around senior involvement and direct collaboration throughout every engagement.</p><p className="about-demo-note">Example leadership profiles — all names and biographies are fictional.</p></div></Reveal>
        <div className="about-team-grid">
          {team.map((member, index) => <Reveal key={member.name} delay={index * 70}>
            <article className="about-profile">
              <div className={`about-profile-art about-profile-art-${index + 1}`} aria-hidden="true"><span className="about-profile-index">Aurevia / {number(index)}</span><span className="about-profile-initials">{member.initials}</span><span className="about-profile-art-label">Independent perspectives</span></div>
              <p className="about-profile-discipline">{member.discipline}</p><h3>{member.name}</h3><p className="about-profile-role">{member.role}</p><p className="about-body">{member.description}</p>
            </article>
          </Reveal>)}
        </div>
      </section>

      <section className="about-credibility" aria-label="Illustrative advisory figures">
        <div className="container">
          <div className="about-credibility-heading"><p className="about-small-label">A broader perspective</p><p className="about-demo-note">Illustrative figures for template demonstration.</p></div>
          <dl className="about-statistics">{statistics.map(([value, label]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
        </div>
      </section>

      <section className="about-section container about-expectations" aria-labelledby="expectations-heading">
        <Reveal><p className="eyebrow">Working With Aurevia</p><h2 id="expectations-heading">What clients can expect.</h2><p className="about-expectation-statement">No unnecessary complexity.<br />No one-size-fits-all answers.<em>Just considered advice built around the decision in front of you.</em></p></Reveal>
        <div className="about-expectation-list">{expectations.map(([title, description], index) => <Reveal key={title} delay={index * 40}><article><span className="about-number">{number(index)}</span><div><h3>{title}</h3><p className="about-body">{description}</p></div></article></Reveal>)}</div>
      </section>

      <section className="about-section about-consultation" aria-labelledby="about-consultation-heading">
        <div className="container about-consultation-grid">
          <Reveal><p className="eyebrow">Start a Conversation</p><h2 id="about-consultation-heading">Bring us the decision you’re working through.</h2></Reveal>
          <Reveal delay={100}><p>Whether you’re evaluating an opportunity, addressing a challenge or planning what comes next, the first step is understanding the question.</p><div className="about-actions"><Link className="button about-button-gold" to="/contact">Request a Consultation <span aria-hidden="true">↗</span></Link><Link className="about-secondary-link" to="/services">Explore Our Services <span aria-hidden="true">→</span></Link></div></Reveal>
        </div>
      </section>
    </div>
  )
}
