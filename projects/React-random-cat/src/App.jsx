import { useState, useEffect, useCallback } from 'react'
import './App.css'

function App() {
  const [cat, setCat] = useState(null)
  const [loading, setLoading] = useState(true)
  const [imgLoaded, setImgLoaded] = useState(false)

  const fetchCat = useCallback(async () => {
    setLoading(true)
    setImgLoaded(false)
    try {
      const res = await fetch('https://api.freeapi.app/api/v1/public/cats/cat/random')
      const data = await res.json()
      setCat(data.data)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { fetchCat() }, [fetchCat])

  return (
    <div className="app">
      <h1>🐱 Random Cat</h1>
      <div className="card">
        <div className="img-wrap">
          {(!imgLoaded || loading) && <div className="sk-img" />}
          {cat && (
            <img
              src={cat.image}
              alt={cat.name}
              onLoad={() => setImgLoaded(true)}
              style={{ display: imgLoaded ? 'block' : 'none' }}
            />
          )}
        </div>
        {cat && imgLoaded && (
          <div className="info">
            <h2>{cat.name}</h2>
            <p className="origin">{cat.origin} · Life span: {cat.life_span} yrs</p>
            <p className="temperament">{cat.temperament}</p>
            <p className="desc">{cat.description}</p>
          </div>
        )}
      </div>
      <button className="btn" onClick={fetchCat} disabled={loading}>
        {loading ? 'Loading...' : 'Next Cat →'}
      </button>
    </div>
  )
}

export default App
