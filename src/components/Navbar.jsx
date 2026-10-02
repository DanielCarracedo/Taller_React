import './Navbar.css'

const enlaces = ['Inicio', 'Cursos', 'Nosotros']

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#inicio" className="navbar__logo">
        ReactAcademy
      </a>
      <ul className="navbar__links">
        {enlaces.map((enlace) => (
          <li key={enlace}>
            <a href={`#${enlace.toLowerCase()}`}>{enlace}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
