import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])
  const [index, setIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [fading, setFading] = useState(false)
  const recentIds = useRef([])

  useEffect(() => {
    async function fetchJokes() {
      try {
        const res = await fetch('https://api.freeapi.app/api/v1/public/randomjokes?page=1&limit=100')
        const data = await res.json()
        setJokes(data.data.data)
      } finally {
        setLoading(false)
      }
    }
    fetchJokes()
  }, [])

  function nextJoke() {
    setFading(true)
    setTimeout(() => {
      const pool = jokes.filter(j => !recentIds.current.includes(j.id))
      const pick = (pool.length ? pool : jokes)[Math.floor(Math.random() * (pool.length || jokes.length))]
      recentIds.current = [...recentIds.current, pick.id].slice(-5)
      setIndex(jokes.indexOf(pick))
      setFading(false)
    }, 250)
  }

  const joke = jokes[index]

  return (
    <div className="app">
      <h1>😂 Jokes</h1>
      <div className={`card ${fading || loading ? 'fade-out' : 'fade-in'}`}>
        {loading || !joke
          ? <div className="skeleton"><div className="sk-line w90" /><div className="sk-line w70" /><div className="sk-line w80" /></div>
          : <p className="joke">{joke.content}</p>
        }
      </div>
      <button className="btn" onClick={nextJoke} disabled={loading}>Next Joke →</button>
    </div>
  )
}

export default App
