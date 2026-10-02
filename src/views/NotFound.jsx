import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
    <section className="notfound">
      <h1 className="notfound__code">404</h1>
      <p className="notfound__text">Esta página no existe.</p>
      <Link to="/" className="notfound__button">
        Volver al inicio
      </Link>
    </section>
  )
}

export default NotFound
