import './App.css'
import { Cat, Header, Fact, Button } from './Components'
import { fetchFact } from './services/fetchFact'
import { fetchPicture } from './services/fetchPicture'
import { useState, useEffect } from 'react'

function App () {
  const [fact, setFact] = useState('')
  const [pic, setPic] = useState('')
  const [words, setWords] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // no voy a mentir, se quedaba pending promise y GPT me dijo que con async se solucionaba
    const fetchQuote = async () => {
      try {
        const fact = await fetchFact()
        setFact(fact)
        setWords(fact.split(' ').slice(0, 4).join(' '))
        console.log(words)
      } catch (error) {
        console.error('Error fetching data from API:', error)
      }
    }
    fetchQuote()
  }, [])

  useEffect(() => {
    console.log(words)
    if (words) {
      const fetchPic = async () => {
        try {
          const pic = await fetchPicture({ fact: words })
          setPic(pic)
          setIsLoading(false)
        } catch (error) {
          console.error('Error fetching data from API:', error)
        }
      }
      fetchPic()
    }
  }, [words])
  return (
    <>
      <Header title='The Cat Fact APP' />
      <main>
        {isLoading ? (<div className='loader'>Loading...</div>) : (<Cat src={pic} />)}
        <Fact fact={fact} />
      </main>
      <Button text='Another one' />
    </>
  )
}

export default App
