import './Nosotros.css'

const datos = [
  { id: 1, numero: '+5.000', texto: 'estudiantes' },
  { id: 2, numero: '4', texto: 'cursos' },
  { id: 3, numero: '100%', texto: 'proyectos prácticos' },
]

function Nosotros() {
  return (
    <section className="nosotros">
      <h2 className="nosotros__title">Sobre Nosotros</h2>
      <p className="nosotros__text">
        En ReactAcademy creemos que se aprende React construyendo. Por eso
        cada curso gira alrededor de proyectos reales, desde tu primer
        componente hasta la arquitectura de aplicaciones grandes.
      </p>
      <div className="nosotros__stats">
        {datos.map((dato) => (
          <div key={dato.id} className="nosotros__stat">
            <strong>{dato.numero}</strong>
            <span>{dato.texto}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Nosotros
