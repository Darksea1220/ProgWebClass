import './Components/App.css'
import { useState, useEffect } from 'react'
import { Form, Header, Gifs } from './Components'

const API_KEY = 'Dv4tVndF9FXB0gVWih9JWPNbaqORHeJ5'
const BASE_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}`

export default function App () {
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  const [gifs, setGifs] = useState([])
  const handleFormSubmit = (query) => {
    setQuery(query)
  }

  // * Permite ejecutar funciones asincrónicas
  useEffect(() => {
    // * Hacemos fecthing de datos
    fetch(`${BASE_URL}&q=${query}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Error fetching data from API')
        }
        return res.json()
      })
      .then(({ data }) => {
        // seteamos el estado
        // TODO: Continuar con mapping & modeling
        console.log(data)
        const fetchedGifs = data.map((gif) => ({
          id: gif.id,
          title: gif.title,
          img: gif.images.downsized.url
        })
        )
        console.log(fetchedGifs)
        setGifs(fetchedGifs)
      })
      .catch((e) => {
        console.log(e)
        setError('Sorry, we had some issues over here!')
      })
  }, [query])

  return (
    <>
      <Header title='Gif Search App' />
      <main>
        <Form onSubmit={handleFormSubmit} />
        <Gifs gifs={gifs} error={error} />
      </main>
    </>
  )
}
