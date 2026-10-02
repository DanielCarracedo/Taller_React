import './CourseCard.css'

function CourseCard({ icono, titulo, descripcion, nivel }) {
  return (
    <article className="card">
      <span className="card__icon">{icono}</span>
      <h3 className="card__title">{titulo}</h3>
      <p className="card__text">{descripcion}</p>
      <span className="card__badge">{nivel}</span>
    </article>
  )
}

export default CourseCard
