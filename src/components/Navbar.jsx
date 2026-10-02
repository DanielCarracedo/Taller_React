import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const enlaces = [
  { to: '/', texto: 'Inicio' },
  { to: '/cursos', texto: 'Cursos' },
  { to: '/nosotros', texto: 'Nosotros' },
  { to: '/login', texto: 'Login' },
]

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        ReactAcademy
      </Link>
      <ul className="navbar__links">
        {enlaces.map((enlace) => (
          <li key={enlace.to}>
            <NavLink
              to={enlace.to}
              end
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {enlace.texto}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
