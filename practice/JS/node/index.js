// Seeing RAW HTTP server

const http = require("http");

const server = http.createServer((req, res) => {
	if (req.method === "GET" && req.url === "/dashboard") {
		res.writeHead(200, { "content-type": "application/json" });
		res.end(JSON.stringify({ items: ["Login", "User", "Logout"] }));
	} else if (req.method === "POST" && req.url === "/order") {
		let data = "";
		req.on("data", (chunk) => (data += chunk));
		req.on("end", () => {
			const order = JSON.parse(data);
			res.writeHead(200, { "content-type": "application/json" });
			res.end(JSON.stringify({
				status : 'recieved',
				order
			}));
		});
	}
});


// ye sab na karna pade.. isliye express me convert karein?
