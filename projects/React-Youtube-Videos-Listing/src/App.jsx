import { useState, useEffect } from 'react'
import './App.css'

function formatViews(n) {
  const num = Number(n)
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + 'M'
  if (num >= 1_000) return (num / 1_000).toFixed(0) + 'K'
  return num.toString()
}

function SkeletonCard() {
  return (
    <div className="card skeleton">
      <div className="sk-thumb" />
      <div className="info">
        <div className="sk-line long" />
        <div className="sk-line medium" />
        <div className="sk-line short" />
      </div>
    </div>
  )
}

function VideoCard({ video }) {
  const { id, snippet, statistics } = video.items
  return (
    <a className="card" href={`https://youtube.com/watch?v=${id}`} target="_blank" rel="noreferrer">
      <div className="thumb-wrap">
        <img src={snippet.thumbnails.medium.url} alt={snippet.title} />
      </div>
      <div className="info">
        <p className="title">{snippet.title}</p>
        <p className="channel">{snippet.channelTitle}</p>
        <p className="meta">{formatViews(statistics.viewCount)} views</p>
      </div>
    </a>
  )
}

function App() {
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    setLoading(true)
    async function fetchVideos() {
      try {
        const res = await fetch(
          `https://api.freeapi.app/api/v1/public/youtube/videos?page=${page}&limit=12`
        )
        const data = await res.json()
        setVideos(data.data.data)
        setTotalPages(data.data.totalPages)
      } catch {
        setError('Failed to load videos')
      } finally {
        setLoading(false)
      }
    }
    fetchVideos()
  }, [page])

  if (error) return <div className="status">{error}</div>

  return (
    <>
      <nav className="navbar">
        <span className="logo"><img src="/tube.png" alt="logo" className="logo-img" /> KyuTube</span>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button>🔍</button>
        </div>
        <div className="nav-right">
          <div className="avatar">U</div>
        </div>
      </nav>

      <div className="app">
        <div className="grid">
          {loading
            ? Array.from({ length: 12 }).map((_, i) => <SkeletonCard key={i} />)
            : videos.map(video => <VideoCard key={video.items.id} video={video} />)
          }
        </div>

        <div className="pagination">
          <button onClick={() => setPage(p => p - 1)} disabled={page === 1 || loading}>← Prev</button>
          <span>Page {page} of {totalPages}</span>
          <button onClick={() => setPage(p => p + 1)} disabled={page === totalPages || loading}>Next →</button>
        </div>
      </div>
    </>
  )
}

export default App
