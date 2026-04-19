import http from "http";

const server = http.createServer((req, res) => {
	if (req.method === "GET" && req.url === "/menu") {
		res.writeHead(200, { "content-type": "application/json" });
		res.end(JSON.stringify({ items: ["Pizza", "Pasta", "Salad"] }));
	} else if (req.method === "POST" && req.url === "/order") {
		let body = "";
		req.on("data", (chunk) => {
			body += chunk.toString();
		});
		req.on("end", () => {
			const order = JSON.parse(body);
			console.log("Received order:", order);
			res.writeHead(200, { "content-type": "application/json" });
			res.end(JSON.stringify({ message: "Order received", order }));
		});
	}
});
