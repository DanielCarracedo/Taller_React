import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="inicio">
      <h1 className="hero__title">
        Aprende <span>React</span> desde cero
      </h1>
      <p className="hero__text">
        Domina la librería más popular del frontend con proyectos prácticos y
        reales.
      </p>
      <a href="#cursos" className="hero__button">
        Ver Cursos
      </a>
    </section>
  )
}

export default Hero
