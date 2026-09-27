import { useLayoutEffect, useRef, useState } from 'react'
import Reveal from '../components/Reveal'
import './Contact.css'
import { developerContact } from '../data/developerContact'

const serviceOptions = ['Business Advisory', 'Financial Consulting', 'Risk & Compliance', 'Growth Strategy', 'Operational Improvement', 'Transformation Advisory', 'Not Sure Yet']
const initialValues = { name: '', email: '', company: '', role: '', service: 'Not Sure Yet', message: '', updates: false }
const fields = [
  { name: 'name', label: 'Full Name', required: true, autoComplete: 'name' },
  { name: 'email', label: 'Email Address', required: true, type: 'email', autoComplete: 'email' },
  { name: 'company', label: 'Company / Organisation', autoComplete: 'organization' },
  { name: 'role', label: 'Role / Position', autoComplete: 'organization-title' },
]
const contactDetails = [
  { title: 'General Enquiries', lines: ['hello@aurevia.example'], href: 'mailto:hello@aurevia.example' },
  { title: 'Location', lines: ['Kuala Lumpur, Malaysia'] },
  { title: 'Availability', lines: ['Monday – Friday', '9:00 AM – 5:30 PM'] },
  { title: 'Response', lines: ['Typically within 1–2 business days'] },
]
const steps = [
  ['Tell Us the Context', "Share the decision, challenge or opportunity you're currently considering."],
  ['Initial Conversation', 'We begin with a focused conversation to understand the situation and what a useful outcome would look like.'],
  ['Define the Next Step', 'If Aurevia can help, we outline an appropriate scope and way forward.'],
]
const faqs = [
  ['Do I need to know which service I need?', 'No. Many conversations begin with a business question rather than a specific service. We can help identify which perspective is most relevant.'],
  ['What information should I provide?', "A brief explanation of the situation, what you're trying to decide or achieve, and any important context is enough for an initial conversation."],
  ['Does Aurevia work with smaller businesses?', 'The template is designed to represent an advisory firm capable of supporting organisations at different stages, from emerging businesses to established companies.'],
  ['Can several advisory areas be combined?', 'Yes. Strategy, finance, risk, operations and transformation often overlap. The service structure is designed to allow multiple perspectives to be combined where appropriate.'],
  ['Is this form connected to a live advisory firm?', 'No. Aurevia Advisory is a fictional portfolio demonstration. The enquiry form does not transmit or store submitted information.'],
]

function validateEnquiry(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your full name.'
  if (!values.email.trim()) errors.email = 'Please enter your email address.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = 'Please enter a valid email address, such as name@example.com.'
  if (!values.message.trim()) errors.message = 'Please share a little context about your enquiry.'
  return errors
}

export default function Contact() {
  const [values, setValues] = useState({ ...initialValues })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const formRef = useRef(null)
  const successRef = useRef(null)
  const resetFocus = useRef(false)

  useLayoutEffect(() => {
    if (submitted) successRef.current?.focus()
    else if (resetFocus.current) {
      formRef.current?.elements.namedItem('name')?.focus()
      resetFocus.current = false
    }
  }, [submitted])

  function handleChange(event) {
    const { name, value, checked, type } = event.target
    setValues((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
    setErrors((current) => ({ ...current, [name]: undefined }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validateEnquiry(values)
    setErrors(nextErrors)
    const firstError = Object.keys(nextErrors)[0]
    if (firstError) {
      formRef.current?.elements.namedItem(firstError)?.focus()
      return
    }
    setValues({ ...initialValues })
    setSubmitted(true)
  }

  function handleReset() {
    setValues({ ...initialValues })
    setErrors({})
    resetFocus.current = true
    setSubmitted(false)
  }

  return (
    <div className="contact-page">
      <section className="contact-hero container" aria-labelledby="contact-title">
        <Reveal><p className="eyebrow">Contact</p><h1 id="contact-title">Let’s discuss <em>what comes next.</em></h1><p className="contact-lead">Every engagement begins with understanding the question. Tell us what you’re working through, and we’ll start with a conversation.</p><p className="contact-descriptor">Kuala Lumpur <span aria-hidden="true">•</span> Independent Advisory</p></Reveal>
        <Reveal delay={100}><div className="contact-cover" aria-hidden="true"><div className="contact-art-caption"><span>Aurevia / A starting point</span><span>01</span></div><div className="contact-cover-monogram">A<span>·</span></div><div className="contact-cover-steps"><p><span>01</span>Conversation</p><p><span>02</span>Context</p><p><span>03</span>Direction</p></div><div className="contact-art-caption"><span>Clarity begins here</span><span>KL / MY</span></div></div></Reveal>
      </section>

      <section className="contact-section contact-enquiry" aria-labelledby="enquiry-heading">
        <div className="container contact-enquiry-grid">
          <Reveal><p className="eyebrow">Request a Consultation</p><h2 id="enquiry-heading">Start with the question.</h2><p className="contact-body">You don’t need to have everything defined before contacting us. Share some context about the decision, challenge or opportunity you’re working through.</p><p className="contact-reassurance">No obligation. No prepared brief required.<em>Just enough context to begin a useful conversation.</em></p><p className="contact-demo-note">Aurevia is a fictional advisory firm. This form is a portfolio demonstration, not a live enquiry service.</p></Reveal>
          <Reveal delay={80}>
            <aside className="contact-developer" aria-label="Freelance website enquiries">
              <p>Looking for a website like this?</p>
              <a href={developerContact.whatsappHref} target="_blank" rel="noopener noreferrer">Contact the developer via WhatsApp <span>(opens in a new tab)</span></a>
            </aside>
            {submitted ? <div className="contact-success"><p className="contact-small-label">A considered first step</p><h3 ref={successRef} tabIndex={-1}>Demo enquiry received.</h3><p role="status">This portfolio template does not transmit or store submitted information.</p><button className="button button-primary" type="button" onClick={handleReset}>Send another enquiry <span aria-hidden="true">↗</span></button></div> :
              <form ref={formRef} className="contact-form" noValidate onSubmit={handleSubmit} aria-labelledby="enquiry-heading" aria-describedby="enquiry-demo">
                <p className="contact-required-note">Fields marked <span aria-hidden="true">*</span> are required.</p>
                <div className="contact-field-grid">{fields.map((field) => <div className="contact-field" key={field.name}><label htmlFor={`enquiry-${field.name}`}>{field.label}{field.required && <span aria-hidden="true"> *</span>}</label><input id={`enquiry-${field.name}`} name={field.name} type={field.type || 'text'} autoComplete={field.autoComplete} required={field.required} value={values[field.name]} onChange={handleChange} aria-invalid={Boolean(errors[field.name])} aria-describedby={errors[field.name] ? `error-${field.name}` : undefined} />{errors[field.name] && <p id={`error-${field.name}`} className="contact-error">{errors[field.name]}</p>}</div>)}</div>
                <div className="contact-field"><label htmlFor="enquiry-service">Service of Interest</label><select id="enquiry-service" name="service" value={values.service} onChange={handleChange}>{serviceOptions.map((service) => <option key={service} value={service}>{service}</option>)}</select></div>
                <div className="contact-field"><label htmlFor="enquiry-message">Message <span aria-hidden="true">*</span></label><p id="message-hint" className="contact-field-hint">Tell us briefly what you’re working through.</p><textarea id="enquiry-message" name="message" rows={5} required value={values.message} onChange={handleChange} aria-invalid={Boolean(errors.message)} aria-describedby={`message-hint${errors.message ? ' error-message' : ''}`} />{errors.message && <p id="error-message" className="contact-error">{errors.message}</p>}</div>
                <label className="contact-checkbox" htmlFor="enquiry-updates"><input id="enquiry-updates" name="updates" type="checkbox" checked={values.updates} onChange={handleChange} /><span>I’d also like to receive occasional Aurevia perspectives.</span></label>
                <p className="contact-error-summary" role="alert">{Object.values(errors).some(Boolean) ? 'Please review the highlighted fields. Your entries have been kept.' : ''}</p>
                <button className="button button-primary contact-submit" type="submit">Send Enquiry <span aria-hidden="true">↗</span></button>
                <p id="enquiry-demo" className="contact-demo-note">Demonstration only. No information is sent or saved, and selecting updates does not create a subscription.</p>
              </form>}
          </Reveal>
        </div>
      </section>

      <section className="contact-section contact-details" aria-labelledby="contact-details-heading">
        <div className="container"><h2 id="contact-details-heading" className="eyebrow">Contact Details</h2><dl className="contact-details-grid">{contactDetails.map((detail) => <div key={detail.title}><dt>{detail.title}</dt><dd>{detail.href ? <a href={detail.href}>{detail.lines[0]}</a> : detail.lines.map((line) => <span key={line}>{line}</span>)}</dd></div>)}</dl><p className="contact-demo-note">Example contact information for template demonstration.</p></div>
      </section>

      <section className="contact-section container" aria-labelledby="next-heading">
        <Reveal><p className="eyebrow">What Happens Next</p><h2 id="next-heading">A straightforward start.</h2></Reveal><ol className="contact-timeline">{steps.map(([title, description], index) => <li key={title}><Reveal delay={index * 60}><span className="contact-step-number">0{index + 1}</span><h3>{title}</h3><p className="contact-body">{description}</p></Reveal></li>)}</ol><Reveal><p className="contact-process-note">The first conversation is about understanding — not selling.</p></Reveal>
      </section>

      <section className="contact-section contact-faq" aria-labelledby="faq-heading">
        <div className="container contact-faq-grid"><Reveal><p className="eyebrow">Before You Get in Touch</p><h2 id="faq-heading">A few useful answers.</h2></Reveal><div className="contact-faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></div>
      </section>

      <section className="contact-section contact-closing" aria-labelledby="closing-heading"><div className="container"><Reveal><p className="eyebrow">Aurevia Advisory</p><h2 id="closing-heading">Clarity starts with a conversation.</h2><p>Bring the question. We’ll begin with the context.</p><p className="contact-closing-disciplines">Strategy • Finance • Risk • Growth • Operations • Transformation</p></Reveal></div></section>
    </div>
  )
}
