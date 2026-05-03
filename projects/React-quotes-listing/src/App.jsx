import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
	const [quotes, setQuotes] = useState([]);
	const [current, setCurrent] = useState(null);
	const [loading, setLoading] = useState(true);
	const [fading, setFading] = useState(false);
	const recentAuthors = useRef([]);

	useEffect(() => {
		async function fetchQuotes() {
			const res = await fetch(
				"https://api.freeapi.app/api/v1/public/quotes?page=1&limit=100"
			);
			const data = await res.json();
			const all = data.data.data;
			setQuotes(all);
			setCurrent(all[Math.floor(Math.random() * all.length)]);
			setLoading(false);
		}
		fetchQuotes();
	}, []);

	function nextQuote() {
		setFading(true);
		setTimeout(() => {
			// filter out authors seen in last 5 turns
			const pool = quotes.filter(q => !recentAuthors.current.includes(q.author));
			const next = pool[Math.floor(Math.random() * pool.length)];
			recentAuthors.current = [...recentAuthors.current, next.author].slice(-5);
			setCurrent(next);
			setFading(false);
		}, 300);
	}

	return (
		<div className="center">
			<div className={`card ${fading || loading ? "fade-out" : "fade-in"}`}>
				{loading || !current ? (
					<div className="skeleton">
						<div className="sk-line long" />
						<div className="sk-line medium" />
						<div className="sk-line short" />
						<div className="sk-author" />
					</div>
				) : (
					<>
						<p className="content">"{current.content}"</p>
						<p className="author">— {current.author}</p>
					</>
				)}
			</div>
			<button className="btn" onClick={nextQuote} disabled={loading}>
				Next Quote
			</button>
		</div>
	);
}

export default App;
