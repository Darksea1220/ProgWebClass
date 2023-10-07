import './App.css'
import { Form, Header, Gifs, Footer } from './Components'
import { GifsContextProvider } from './context/GifsContextProvider'

function App () {
  return (
    <>
      <Header title='Gif Search App with React Context API' />
      <GifsContextProvider>
        <main>
          <Form />
          <Gifs />
        </main>
        <Footer />
      </GifsContextProvider>
    </>
  )
}

export default App
