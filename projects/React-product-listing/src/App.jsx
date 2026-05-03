import { useState, useEffect } from 'react'
import './App.css'

function Stars({ rating }) {
  return (
    <span className="stars">
      {'★'.repeat(Math.round(rating))}{'☆'.repeat(5 - Math.round(rating))}
      <span className="rating-num">{rating}</span>
    </span>
  )
}

function ProductCard({ product }) {
  const discounted = (product.price * (1 - product.discountPercentage / 100)).toFixed(2)
  return (
    <div className="card">
      <div className="img-wrap">
        <img
            src={product.thumbnail}
            alt={product.title}
            onError={e => { e.target.src = `https://dummyjson.com/image/300x300/1a1a2e/ffffff?text=${encodeURIComponent(product.title)}&fontSize=14` }}
          />
        <span className="badge">-{Math.round(product.discountPercentage)}%</span>
      </div>
      <div className="card-body">
        <p className="brand">{product.brand}</p>
        <h2 className="title">{product.title}</h2>
        <Stars rating={product.rating} />
        <div className="price-row">
          <span className="price">${discounted}</span>
          <span className="original">${product.price}</span>
        </div>
        <p className="stock">{product.stock} in stock</p>
      </div>
    </div>
  )
}

function SkeletonCard() {
  return (
    <div className="card skeleton">
      <div className="sk-img" />
      <div className="card-body">
        <div className="sk-line w40" />
        <div className="sk-line w80" />
        <div className="sk-line w60" />
        <div className="sk-line w50" />
      </div>
    </div>
  )
}

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    setLoading(true)
    async function fetchProducts() {
      try {
        const res = await fetch(`https://api.freeapi.app/api/v1/public/randomproducts?page=${page}&limit=12`)
        const data = await res.json()
        setProducts(data.data.data)
        setTotalPages(data.data.totalPages)
      } catch {
        setError('Failed to load products')
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [page])

  if (error) return <div className="status">{error}</div>

  return (
    <div className="app">
      <header className="header">
        <h1>🛍 Products</h1>
        <span className="page-info">Page {page} of {totalPages}</span>
      </header>
      <div className="grid">
        {loading
          ? Array.from({ length: 12 }).map((_, i) => <SkeletonCard key={i} />)
          : products.map(p => <ProductCard key={p.id} product={p} />)
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
