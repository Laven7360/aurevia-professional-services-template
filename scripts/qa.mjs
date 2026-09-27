import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import vm from 'node:vm'
import { createServer } from 'vite'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import { developerContact } from '../src/data/developerContact.js'

const read = (file) => fs.readFileSync(file, 'utf8')
const routes = ['/', '/about', '/services', '/insights', '/contact']
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' })
// Navbar's initial scroll state reads the browser position; rendering needs only this value.
globalThis.window = { scrollY: 0 }
try {
  const { default: App } = await server.ssrLoadModule('/src/App.jsx')
  for (const route of [...routes, '/missing-page', '/missing/nested']) {
    const html = renderToStaticMarkup(React.createElement(MemoryRouter, { initialEntries: [route] }, React.createElement(App)))
    assert.equal((html.match(/<h1\b/g) || []).length, 1, route)
    assert.ok(html.includes('primary-navigation') && html.includes('site-footer'), route)
    for (const [, href] of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
      const decodedHref = href.replaceAll('&#x27;', "'").replaceAll('&amp;', '&')
      assert.ok(routes.includes(href) || href === '#main-content' || href.startsWith('mailto:') || decodedHref === developerContact.whatsappHref, `${route}: ${href}`)
    }
    for (const [tag] of html.matchAll(/<a\b[^>]*href="https:\/\/wa\.me\/[^>]+>/g)) {
      assert.ok(tag.includes('target="_blank"') && tag.includes('rel="noopener noreferrer"'))
    }
    if (!routes.includes(route)) assert.ok(html.includes('Return Home'))
    else assert.ok(html.includes('aria-current="page"'), `Active navigation: ${route}`)
    const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1])
    assert.equal(ids.length, new Set(ids).size, `Duplicate IDs: ${route}`)
    for (const [, refs] of html.matchAll(/aria-(?:labelledby|describedby|controls)="([^"]+)"/g)) {
      for (const id of refs.split(' ')) assert.ok(ids.includes(id), `Missing ${id}: ${route}`)
    }
    for (const [tag] of html.matchAll(/<img\b[^>]+>/g)) {
      assert.ok(/alt="[^"]{20,}"/.test(tag))
      assert.ok(/width="\d+"/.test(tag) && /height="\d+"/.test(tag))
    }
  }
} finally {
  delete globalThis.window
  await server.close()
}

const insight = read('src/pages/Insights.jsx')
const whatsapp = new URL(developerContact.whatsappHref)
assert.equal(whatsapp.origin, 'https://wa.me')
assert.equal(whatsapp.pathname, '/60167938894')
assert.equal(whatsapp.searchParams.get('text'), "Hi Laven, I saw your Aurevia Advisory website template and I'm interested in a website for my business.")
assert.equal(developerContact.emailHref, 'mailto:s.lavenraj2002@gmail.com?subject=Aurevia%20Website%20Template%20Enquiry')
for (const file of ['src/components/Footer.jsx', 'src/pages/Home.jsx', 'src/pages/Contact.jsx']) assert.ok(read(file).includes('hello@aurevia.example'))
const ic = vm.createContext({})
vm.runInContext(insight.slice(insight.indexOf('const topics'), insight.indexOf('export default')) + '\nthis.api = {topics,filterArticles,isValidEmail};', ic)
assert.equal(ic.api.filterArticles('All').length, 6)
for (const topic of ic.api.topics.slice(1)) {
  assert.equal(ic.api.filterArticles(topic).length, 1)
  assert.equal(ic.api.filterArticles(topic)[0].category, topic)
}
for (const email of ['', 'bad', 'a@b', 'a@@b.com', 'a b@example.com']) assert.equal(ic.api.isValidEmail(email), false)
assert.ok(ic.api.isValidEmail(' reader+demo@example.com '))
let subscriptionMessage, subscriptionError, clearedEmail, newsletterFocus = false
Object.assign(ic, { setEmailError: value => { subscriptionError = value }, setSubscriptionMessage: value => { subscriptionMessage = value }, setEmail: value => { clearedEmail = value } })
vm.runInContext(insight.slice(insight.indexOf('  function handleSubscribe'), insight.indexOf('\n  return (')) + '\nthis.submit = handleSubscribe;', ic)
const newsletterEvent = { preventDefault() {}, currentTarget: { elements: { namedItem: () => ({ focus() { newsletterFocus = true } }) } } }
ic.email = 'invalid'; ic.submit(newsletterEvent)
assert.ok(subscriptionError && newsletterFocus)
ic.email = 'reader@example.com'; ic.submit(newsletterEvent)
assert.equal(subscriptionError, '')
assert.equal(clearedEmail, '')
assert.ok(subscriptionMessage.includes('no data has been sent'))

const contact = read('src/pages/Contact.jsx')
const cc = vm.createContext({})
vm.runInContext(contact.slice(contact.indexOf('const serviceOptions'), contact.indexOf('export default')) + '\nthis.api = {initialValues,validateEnquiry,faqs};', cc)
const { initialValues, validateEnquiry, faqs } = cc.api
assert.equal(Object.keys(validateEnquiry(initialValues)).length, 3)
const valid = { ...initialValues, name: 'Demo Reader', email: 'reader@example.com', message: 'A strategy question.' }
assert.equal(Object.keys(validateEnquiry(valid)).length, 0)
assert.ok(validateEnquiry({ ...valid, email: 'bad' }).email)
let values = { ...initialValues }, errors = {}, submitted = false, focused = '', prevented = false
Object.assign(cc, {
  values, resetFocus: { current: false },
  setValues: next => { values = typeof next === 'function' ? next(values) : next; cc.values = values },
  setErrors: next => { errors = typeof next === 'function' ? next(errors) : next },
  setSubmitted: value => { submitted = value },
  formRef: { current: { elements: { namedItem: name => ({ focus() { focused = name } }) } } },
})
vm.runInContext(contact.slice(contact.indexOf('  function handleChange'), contact.indexOf('\n  return (')) + '\nthis.handlers = {handleChange,handleSubmit,handleReset};', cc)
const event = { preventDefault() { prevented = true } }
cc.handlers.handleSubmit(event)
assert.ok(prevented && focused === 'name' && !submitted)
cc.values = values = { ...valid, email: 'invalid' }
cc.handlers.handleSubmit(event)
assert.equal(focused, 'email')
assert.equal(values.message, valid.message)
for (const target of [{ name: 'service', type: 'select-one', value: 'Growth Strategy' }, { name: 'updates', type: 'checkbox', checked: true }, { name: 'email', type: 'email', value: valid.email }]) cc.handlers.handleChange({ target })
assert.equal(values.service, 'Growth Strategy')
assert.equal(values.updates, true)
cc.handlers.handleSubmit(event)
assert.ok(submitted)
assert.equal(values.name, '')
assert.equal(values.updates, false)
cc.handlers.handleReset()
assert.ok(!submitted && cc.resetFocus.current)
assert.equal(Object.keys(errors).length, 0)
assert.equal(faqs.length, 5)
assert.ok(contact.includes('<details key={question}><summary>'))
for (const source of [contact, insight]) assert.ok(!/fetch\(|localStorage|sessionStorage|XMLHttpRequest|sendBeacon/.test(source))

const titleSource = read('src/components/PageTitle.jsx')
const tc = vm.createContext({ document: {}, useEffect: fn => fn(), useLocation: () => ({ pathname: tc.route }) })
vm.runInContext(titleSource.slice(titleSource.indexOf('const titles')).replace('export default ', '') + '\nthis.run = PageTitle;', tc)
for (const route of [...routes, '/ABOUT/', '/missing']) {
  tc.route = route; tc.run()
  assert.ok(tc.document.title.includes('Aurevia Advisory'))
  if (route === '/missing') assert.equal(tc.document.title, 'Page Not Found | Aurevia Advisory')
  if (route === '/ABOUT/') assert.equal(tc.document.title, 'About | Aurevia Advisory')
}
for (const name of fs.readdirSync('src/assets/images').filter(name => name.endsWith('.webp'))) {
  const data = fs.readFileSync(path.join('src/assets/images', name))
  assert.equal(data.toString('ascii', 0, 4), 'RIFF')
  assert.equal(data.toString('ascii', 8, 12), 'WEBP')
}
assert.ok(read('index.html').includes('href="/favicon.svg"'))
assert.ok(fs.existsSync('public/favicon.svg'))
console.log('PASS: all routes render; unknown routes show 404; links, active states, IDs and ARIA references resolve.')
console.log('PASS: filters, newsletter invalid/valid submission, enquiry errors/preservation/select/checkbox/success/reset, titles and WebP assets.')
console.log('FAQ/preview controls use native details/summary. Visual, keyboard and screen-reader browser checks remain manual.')
