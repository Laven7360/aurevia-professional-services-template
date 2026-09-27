import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import './Insights.css'

const topics = ['All', 'Strategy', 'Finance', 'Risk', 'Growth', 'Operations', 'Transformation']
const articles = [
  { id: '01', category: 'Strategy', title: 'From strategic ambition to practical priorities', excerpt: 'Why narrowing the gap between long-term ambition and near-term priorities is often the most important part of strategy.', time: '5 min read', preview: 'Start with the decision that cannot wait. Define what progress would look like, then choose a small set of priorities that teams can translate into everyday action.' },
  { id: '02', category: 'Finance', title: 'What the numbers are really telling you', excerpt: 'Financial information becomes more useful when it is connected to the commercial decisions behind performance.', time: '4 min read', preview: 'Look beyond a single reporting period. Ask which changes reflect underlying demand, which reflect timing, and which suggest that business assumptions need another look.' },
  { id: '03', category: 'Risk', title: 'Risk is part of the decision, not a separate exercise', excerpt: 'A practical approach to considering uncertainty and exposure alongside opportunity.', time: '6 min read', preview: 'Consider the downside while evaluating the opportunity. Identify the assumptions that matter most and agree what evidence would trigger a change in direction.' },
  { id: '04', category: 'Growth', title: 'Growth creates choices before it creates scale', excerpt: 'Expansion decisions become stronger when organisations consider capability, economics and execution together.', time: '5 min read', preview: 'An attractive market is only one part of a growth decision. Examine what the organisation would need to deliver consistently, and where a smaller initial commitment could help test assumptions.' },
  { id: '05', category: 'Operations', title: 'When complexity becomes an operating problem', excerpt: 'Recognising the point where additional processes, structures and workarounds begin to constrain performance.', time: '7 min read', preview: 'Follow a decision or task across the organisation. Repeated handovers, unclear ownership and duplicate checks can reveal where complexity is adding effort without improving the outcome.' },
  { id: '06', category: 'Transformation', title: 'Why transformation needs fewer priorities, not more', excerpt: 'Large change programmes often gain momentum when organisations become more selective about what matters.', time: '6 min read', preview: 'Sequence change around the outcomes that matter most. Make dependencies visible, name the decisions each stage requires, and leave room to adjust as the organisation learns.' },
]
const principles = [
  ['Context', 'Understanding the environment around the issue.'],
  ['Evidence', 'Separating useful signals from unnecessary noise.'],
  ['Application', 'Connecting the analysis to practical business decisions.'],
]

function filterArticles(topic) {
  return topic === 'All' ? articles : articles.filter((article) => article.category === topic)
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

export default function Insights() {
  const [topic, setTopic] = useState('All')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [subscriptionMessage, setSubscriptionMessage] = useState('')
  const visibleArticles = filterArticles(topic)

  function handleSubscribe(event) {
    event.preventDefault()
    setSubscriptionMessage('')
    if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email address, such as name@example.com.')
      event.currentTarget.elements.namedItem('email').focus()
      return
    }
    setEmailError('')
    setEmail('')
    setSubscriptionMessage('Demo subscription received — no data has been sent.')
  }

  return (
    <div className="insights-page">
      <section className="insights-hero container" aria-labelledby="insights-title">
        <Reveal><p className="eyebrow">Insights</p><h1 id="insights-title">Perspectives for <em>better decisions.</em></h1><p className="insights-lead">Analysis and practical perspectives on the strategic, financial and operational questions shaping businesses today.</p><p className="insights-descriptor">Strategy • Finance • Risk • Growth • Operations • Transformation</p></Reveal>
        <Reveal delay={100}>
          <div className="insights-cover" aria-hidden="true"><div className="insights-art-caption"><span>The Aurevia Perspective</span><span>Issue 01</span></div><div className="insights-cover-grid"><span className="insights-cover-quote">“</span><span className="insights-cover-index">01</span><span className="insights-cover-label">The questions that matter</span></div><p>A wider perspective.<em>A clearer next move.</em></p><div className="insights-art-caption"><span>Independent thinking</span><span>KL / MY</span></div></div>
        </Reveal>
      </section>

      <section className="insights-section insights-feature" aria-labelledby="featured-insight-heading">
        <div className="container"><Reveal><p className="eyebrow">Featured Perspective</p></Reveal>
          <article className="insights-feature-grid">
            <Reveal><div className="insights-path-art" aria-hidden="true"><div className="insights-art-caption"><span>Strategy / Field notes</span><span>01</span></div><div className="insights-paths"><span /><span /><span /><i /></div><p>Consider the options.<br /><em>Find your direction.</em></p><div className="insights-art-caption"><span>Perspective into practice</span><span>↗</span></div></div></Reveal>
            <Reveal delay={80}><p className="insights-meta">6 min read <span aria-hidden="true">•</span> Strategy</p><h2 id="featured-insight-heading">Making confident decisions when the outlook is uncertain</h2><p className="insights-body">Uncertainty does not remove the need to make decisions. It changes the way leaders should frame options, evaluate risk and define the next move.</p><details className="insights-preview"><summary>Read Perspective <span aria-hidden="true">→</span></summary><div><p className="insights-preview-label">Perspective preview</p><p>Begin by separating what you know from what you are assuming. Frame a few plausible scenarios and consider how each would change the decision, rather than searching for a single reliable forecast.</p><p>Then identify the actions that remain useful across those scenarios. Agree which signals you will watch and when you will revisit the choice. Confidence can come from a clear process, even when the outlook remains uncertain.</p><p className="insights-demo-note">This is a short sample preview; a full article is not included in this template.</p></div></details><p className="insights-demo-note">Example editorial content</p></Reveal>
          </article>
        </div>
      </section>

      <section className="insights-topics container" aria-labelledby="topics-heading">
        <h2 id="topics-heading">Explore by topic</h2>
        <div className="insights-topic-buttons" role="group" aria-label="Filter perspectives by topic">{topics.map((item) => <button key={item} type="button" aria-pressed={topic === item} aria-controls="perspective-results" onClick={() => setTopic(item)}>{item}</button>)}</div>
      </section>

      <section className="insights-section container insights-latest" aria-labelledby="latest-heading">
        <Reveal><p className="eyebrow">Latest Perspectives</p><h2 id="latest-heading">Thinking beyond the immediate question.</h2><p className="insights-demo-note">Example editorial content for template demonstration. Read times illustrate full-length articles; the previews below are brief samples.</p></Reveal>
        <p className="insights-result-count" role="status" aria-atomic="true">{visibleArticles.length} {visibleArticles.length === 1 ? 'perspective' : 'perspectives'} <span aria-hidden="true">/</span> {topic === 'All' ? 'All topics' : topic}</p>
        <div id="perspective-results" className="insights-article-grid">
          {visibleArticles.map((article) => <Reveal key={`${topic}-${article.id}`}><article className="insights-entry" aria-labelledby={`insight-${article.id}`}><div className="insights-entry-top"><span className="insights-entry-number" aria-hidden="true">{article.id}</span><p className="insights-meta">{article.category}</p><span className="insights-entry-mark" aria-hidden="true" /></div><h3 id={`insight-${article.id}`}>{article.title}</h3><p className="insights-body">{article.excerpt}</p><div className="insights-entry-bottom"><span>{article.time}</span><details className="insights-preview"><summary aria-label={`Read preview: ${article.title}`}>Read <span aria-hidden="true">→</span></summary><div><p className="insights-preview-label">Perspective preview</p><p>{article.preview}</p></div></details></div></article></Reveal>)}
        </div>
      </section>

      <section className="insights-section insights-editorial" aria-labelledby="editorial-heading">
        <div className="container"><Reveal className="insights-editorial-heading"><div><p className="eyebrow">Our Perspective</p><h2 id="editorial-heading">Useful insight should change how you see the decision.</h2></div><p className="insights-body">We approach business topics the same way we approach advisory work: understand the context, examine the evidence and focus on what the information means for the decision ahead.</p></Reveal><div className="insights-principles">{principles.map(([title, description], index) => <Reveal key={title} delay={index * 60}><article><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article></Reveal>)}</div></div>
      </section>

      <section className="insights-section container insights-newsletter" aria-labelledby="briefing-heading">
        <Reveal><p className="eyebrow">Aurevia Briefing</p><h2 id="briefing-heading">Occasional perspectives, without the noise.</h2><p className="insights-body">A concise selection of Aurevia perspectives on strategy, performance, risk and business change.</p></Reveal>
        <Reveal delay={80}><form className="insights-subscribe" noValidate onSubmit={handleSubscribe}><label htmlFor="briefing-email">Email address</label><div className="insights-form-row"><input id="briefing-email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" value={email} aria-invalid={Boolean(emailError)} aria-describedby={`briefing-demo${emailError ? ' briefing-error' : ''}`} onChange={(event) => { setEmail(event.target.value); setEmailError(''); setSubscriptionMessage('') }} /><button className="button button-primary" type="submit">Subscribe <span aria-hidden="true">→</span></button></div><p id="briefing-demo" className="insights-demo-note">Template demonstration only. No email is sent, and your address is not saved or shared.</p><p id="briefing-error" className="insights-form-error" role="alert">{emailError}</p><p className="insights-form-status" role="status" aria-atomic="true">{subscriptionMessage}</p></form></Reveal>
      </section>

      <section className="insights-section insights-consultation" aria-labelledby="insights-consultation-heading">
        <div className="container insights-consultation-grid"><Reveal><p className="eyebrow">From Insight to Action</p><h2 id="insights-consultation-heading">Have a question that needs more than an article?</h2></Reveal><Reveal delay={80}><p>Every business situation has its own context. If you’re working through an important decision, start a conversation with Aurevia.</p><div className="insights-actions"><Link className="button insights-button-gold" to="/contact">Request a Consultation <span aria-hidden="true">↗</span></Link><Link className="insights-text-link" to="/services">Explore Our Services <span aria-hidden="true">→</span></Link></div></Reveal></div>
      </section>
    </div>
  )
}
