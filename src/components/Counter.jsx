import { useState } from 'react'
import './Counter.css'

function Counter() {
  const [estudiantes, setEstudiantes] = useState(0)

  return (
    <section className="counter">
      <h2 className="counter__title">Cuántos estudiantes van a inscribirse?</h2>
      <p className="counter__subtitle">Usa los botones para ajustar el número</p>

      <div className="counter__box">
        <button
          className="counter__btn"
          onClick={() => setEstudiantes(estudiantes - 1)}
          disabled={estudiantes === 0}
          aria-label="Restar"
        >
          −
        </button>
        <span className="counter__value">{estudiantes}</span>
        <button
          className="counter__btn"
          onClick={() => setEstudiantes(estudiantes + 1)}
          aria-label="Sumar"
        >
          +
        </button>
      </div>

      <p className="counter__label">estudiantes inscritos</p>
    </section>
  )
}

export default Counter
