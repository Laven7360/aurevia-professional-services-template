import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  return (
    <section className="not-found container" aria-labelledby="not-found-heading">
      <p className="eyebrow">404</p>
      <h1 id="not-found-heading">This page isn’t part of the conversation.</h1>
      <p>The page you’re looking for may have moved or no longer exists.</p>
      <Link className="button button-primary" to="/">Return Home <span aria-hidden="true">↗</span></Link>
    </section>
  )
}
