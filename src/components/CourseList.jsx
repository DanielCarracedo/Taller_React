import CourseCard from './CourseCard'
import { courses } from '../data/courses'
import './CourseList.css'

function CourseList() {
  return (
    <section className="courses" id="cursos">
      <h2 className="courses__title">Nuestros Cursos</h2>
      <p className="courses__subtitle">
        Elige el camino que mejor se adapte a ti
      </p>
      <div className="courses__grid">
        {courses.map((curso) => (
          <CourseCard
            key={curso.id}
            icono={curso.icono}
            titulo={curso.titulo}
            descripcion={curso.descripcion}
            nivel={curso.nivel}
          />
        ))}
      </div>
    </section>
  )
}

export default CourseList
