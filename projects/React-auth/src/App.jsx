import { useState, useEffect } from 'react'
import './App.css'

const BASE = 'https://api.freeapi.app/api/v1/users'

function authHeaders() {
  const token = localStorage.getItem('token')
  return { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) }
}

function App() {
  const [view, setView] = useState('login')
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState(null)

  useEffect(() => {
    if (!localStorage.getItem('token')) return
    fetch(`${BASE}/current-user`, { headers: authHeaders() })
      .then(r => r.json())
      .then(d => { if (d.data) { setUser(d.data); setView('profile') } })
      .catch(() => {})
  }, [])

  function flash(type, text) {
    setMsg({ type, text })
    setTimeout(() => setMsg(null), 4000)
  }

  async function handleLogin(e) {
    e.preventDefault()
    setLoading(true)
    const { username, password } = Object.fromEntries(new FormData(e.target))
    try {
      const res = await fetch(`${BASE}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Login failed')
      localStorage.setItem('token', data.data.accessToken)
      setUser(data.data.user)
      setView('profile')
    } catch (err) {
      flash('error', err.message)
    } finally {
      setLoading(false)
    }
  }

  async function handleRegister(e) {
    e.preventDefault()
    setLoading(true)
    const { username, email, password } = Object.fromEntries(new FormData(e.target))
    try {
      const res = await fetch(`${BASE}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password, role: 'USER' }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Registration failed')
      flash('success', 'Account created! Please log in.')
      setView('login')
    } catch (err) {
      flash('error', err.message)
    } finally {
      setLoading(false)
    }
  }

  async function handleLogout() {
    setLoading(true)
    try {
      await fetch(`${BASE}/logout`, { method: 'POST', headers: authHeaders() })
    } finally {
      localStorage.removeItem('token')
      setUser(null)
      setView('login')
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <div className="box">
        <h1 className="logo">⬡ Auth</h1>

        {msg && <div className={`msg ${msg.type}`}>{msg.text}</div>}

        {view === 'profile' && user && (
          <div className="profile">
            <div className="avatar">{user.username?.[0]?.toUpperCase()}</div>
            <h2>{user.username}</h2>
            <p className="email">{user.email}</p>
            <p className="role">{user.role}</p>
            <button className="btn btn-outline" onClick={handleLogout} disabled={loading}>
              {loading ? 'Logging out...' : 'Logout'}
            </button>
          </div>
        )}

        {view === 'login' && (
          <form onSubmit={handleLogin}>
            <h2>Sign in</h2>
            <label>Username<input name="username" required autoComplete="username" /></label>
            <label>Password<input name="password" type="password" required autoComplete="current-password" /></label>
            <button className="btn" disabled={loading}>{loading ? 'Signing in...' : 'Sign in'}</button>
            <p className="switch">No account? <button type="button" onClick={() => setView('register')}>Register</button></p>
          </form>
        )}

        {view === 'register' && (
          <form onSubmit={handleRegister}>
            <h2>Create account</h2>
            <label>Username<input name="username" required autoComplete="username" /></label>
            <label>Email<input name="email" type="email" required autoComplete="email" /></label>
            <label>Password<input name="password" type="password" required autoComplete="new-password" /></label>
            <button className="btn" disabled={loading}>{loading ? 'Creating...' : 'Create account'}</button>
            <p className="switch">Have an account? <button type="button" onClick={() => setView('login')}>Sign in</button></p>
          </form>
        )}
      </div>
    </div>
  )
}

export default App
