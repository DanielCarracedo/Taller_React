import { useState } from 'react'
import './Login.css'

function Login() {
  const [correo, setCorreo] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [enviado, setEnviado] = useState(false)

  const hayCamposVacios = correo.trim() === '' || contrasena.trim() === ''

  const manejarEnvio = (e) => {
    e.preventDefault()
    setEnviado(true)
  }

  return (
    <section className="login">
      <form className="login__form" onSubmit={manejarEnvio}>
        <h2 className="login__title">Iniciar sesión</h2>

        <label className="login__label" htmlFor="correo">
          Correo
        </label>
        <input
          id="correo"
          type="email"
          className="login__input"
          placeholder="tu@correo.com"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          disabled={enviado}
        />

        <label className="login__label" htmlFor="contrasena">
          Contraseña
        </label>
        <input
          id="contrasena"
          type="password"
          className="login__input"
          placeholder="••••••••"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          disabled={enviado}
        />

        <button
          type="submit"
          className="login__button"
          disabled={hayCamposVacios || enviado}
        >
          {enviado ? 'Enviado' : 'Entrar'}
        </button>

        <p className="login__micro">
          Esto es solo una interfaz: no se valida nada ni se guarda ningún dato.
        </p>
      </form>
    </section>
  )
}

export default Login
