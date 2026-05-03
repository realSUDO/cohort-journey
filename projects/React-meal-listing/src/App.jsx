import { useState, useEffect } from 'react'
import './App.css'

function MealCard({ meal }) {
  const ingredients = Array.from({ length: 10 }, (_, i) => meal[`strIngredient${i + 1}`]).filter(Boolean)

  return (
    <div className="card">
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <div className="card-body">
        <h2 className="title">{meal.strMeal}</h2>
        <div className="tags">
          <span className="tag">{meal.strCategory}</span>
          <span className="tag">{meal.strArea}</span>
        </div>
        <p className="ingredients">{ingredients.slice(0, 6).join(', ')}{ingredients.length > 6 ? '...' : ''}</p>
        {meal.strYoutube && (
          <a className="yt-link" href={meal.strYoutube} target="_blank" rel="noreferrer">▶ Watch Recipe</a>
        )}
      </div>
    </div>
  )
}

function SkeletonCard() {
  return (
    <div className="card skeleton">
      <div className="sk-img" />
      <div className="card-body">
        <div className="sk-line w70" />
        <div className="sk-line w40" />
        <div className="sk-line w90" />
      </div>
    </div>
  )
}

function App() {
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    setLoading(true)
    async function fetchMeals() {
      try {
        const res = await fetch(`https://api.freeapi.app/api/v1/public/meals?page=${page}&limit=12`)
        const data = await res.json()
        setMeals(data.data.data)
        setTotalPages(data.data.totalPages)
      } catch {
        setError('Failed to load meals')
      } finally {
        setLoading(false)
      }
    }
    fetchMeals()
  }, [page])

  if (error) return <div className="status">{error}</div>

  return (
    <div className="app">
      <header className="header">
        <h1>🍽 Meals</h1>
        <span className="page-info">Page {page} of {totalPages}</span>
      </header>
      <div className="grid">
        {loading
          ? Array.from({ length: 12 }).map((_, i) => <SkeletonCard key={i} />)
          : meals.map(meal => <MealCard key={meal.idMeal} meal={meal} />)
        }
      </div>
      <div className="pagination">
        <button onClick={() => setPage(p => p - 1)} disabled={page === 1 || loading}>← Prev</button>
        <button onClick={() => setPage(p => p + 1)} disabled={page === totalPages || loading}>Next →</button>
      </div>
    </div>
  )
}

export default App
