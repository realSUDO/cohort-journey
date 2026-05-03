import { useState, useEffect } from 'react'
import './App.css'

function UserCard({ user }) {
  return (
    <div className="card">
      <img src={user.picture.medium} alt={user.name.first} className="avatar" />
      <div className="card-body">
        <h2 className="name">{user.name.title} {user.name.first} {user.name.last}</h2>
        <p className="username">@{user.login.username}</p>
        <div className="details">
          <span>✉ {user.email}</span>
          <span>📞 {user.phone}</span>
          <span>📍 {user.location.city}, {user.location.country}</span>
          <span>🎂 Age {user.dob.age}</span>
        </div>
      </div>
    </div>
  )
}

function SkeletonCard() {
  return (
    <div className="card skeleton">
      <div className="sk-avatar" />
      <div className="card-body">
        <div className="sk-line w60" />
        <div className="sk-line w40" />
        <div className="sk-line w80" />
        <div className="sk-line w50" />
      </div>
    </div>
  )
}

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    setLoading(true)
    async function fetchUsers() {
      try {
        const res = await fetch(
          `https://api.freeapi.app/api/v1/public/randomusers?page=${page}&limit=12`
        )
        const data = await res.json()
        setUsers(data.data.data)
        setTotalPages(data.data.totalPages)
      } catch {
        setError('Failed to load users')
      } finally {
        setLoading(false)
      }
    }
    fetchUsers()
  }, [page])

  if (error) return <div className="status">{error}</div>

  return (
    <div className="app">
      <header className="header">
        <h1>Users</h1>
        <span className="page-info">Page {page} of {totalPages}</span>
      </header>

      <div className="grid">
        {loading
          ? Array.from({ length: 12 }).map((_, i) => <SkeletonCard key={i} />)
          : users.map(user => <UserCard key={user.login.uuid} user={user} />)
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
