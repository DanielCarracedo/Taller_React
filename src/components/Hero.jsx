import { Link } from 'react-router-dom'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <h1 className="hero__title">
        Aprende <span>React</span> desde cero
      </h1>
      <p className="hero__text">
        Domina la librería más popular del frontend con proyectos prácticos y
        reales.
      </p>
      <Link to="/cursos" className="hero__button">
        Ver Cursos
      </Link>
    </section>
  )
}

export default Hero
