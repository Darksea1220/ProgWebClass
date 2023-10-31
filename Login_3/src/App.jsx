import React from 'react'
// import { Login } from './components'
// import { AppRouter } from './AppRouter'

function App () {
  return (
    <>
      <h1>¡Hola!</h1>
      <h3>Bienvenido de nuevo</h3>
      <form>
        <label>Nombre</label>
        <input type='text' />
        <label>Contraseña</label>
        <input type='password' />
        <button type='submit'>Entrar</button>
      </form>
      {/* <AppRouter /> */}
    </>
  )
}

export default App
