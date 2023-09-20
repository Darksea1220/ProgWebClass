export default function App () {
  return (
    <div>
      <header>Gif Search App</header>
      <form className='body'>
        <label>Busca tu Gif</label>
        <input type='text' placeholder='Digita una palabra ej:"Anime"' />
        <button type='submit'>Buscar</button>
      </form>
      <div className='results'> <img src='https://media.giphy.com/media/naiatn5LxTOsU/giphy.gif' />
      </div>
    </div>
  )
}
