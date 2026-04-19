const express = require("express");

function block_1_basicServer() {
	return new Promise((res) => {
		const app = express();
		app.use(express.json());

		// if something is not in use.. put _ .. e.g req here..
		app.get("/menu", (_, res) => {
			// res.json is doing two things..
			// 1 : it sets content-Type : 'application.json'
			// 2 : serialize the object
			res.json({
				items: ["thali", "biryani", "maggie"],
			});
		});

		app.get("/search", (req, res) => {
			const { q, limit } = req.query;
			res.json({
				query: q,
				limit: limit || "10",
			});
		});

		app.get("/menu/:id", (req, res) => {
			const { id } = req.params;
			res.json({
				item: id,
				price: 159,
			});
		});

		app.post("/order", (req, res) => {
			const order = req.body;
			res.status(201).json({
				status: "created",
				order,
			});
		});

		// this 0 means give me any free port
		// const port = process.env.PORT

		// server ko console.log karke dekho
		const server = app.listen(0, async () => {
			const port = server.address().port;
			const base = `127.0.0.1:${port}`;

			try {
				const menuRes = await fetch(`${base}/menu`);
				const menuData = await menuRes.json();

				console.log("GET /menu", JSON.stringify(menuData));
				console.log("_________________");

				const searchRes = await fetch(`${base}/search?q=biryani&limit=5`);
				const searchData = await searchRes.json();
				console.log("GET /search", JSON.stringify(searchData));

				const menuItemsRes = await fetch(`${base}/menu/42`);
				const menuItemDAta = await menuItemsRes.json();
				console.log(`POSE /menu`, JSON.stringify(menuItemDAta));
				console.log("_________________");

				const orderRes = await fetch(`${base}/order`, {
					method: `POST`,
					headers: {
						"Content-type": "application/json",
						body: JSON.stringify({
							dish: "briyani",
							quantity: 2,
						}),
					},
				});
				const orderData = await orderRes.json();
				console.log("POST /order", JSON.stringify(orderData));
				console.log("=====================");
			} catch (error) {
				console.error(error);
			}
		});
	});
}

function block_2_response() {
	return new Promise((res) => {
		const app = express();

		app.get("/text", (req, res) => {
			res.send("hello from chaicode");
		});

		app.get("/json", (req, res) => {
			res.json({
				framework: "express",
				version: "7.6.x",
			});
		});

		app.get("/not-Found", (req, res) => {
			res.status(404).json({
				error: "Page not found",
			});
		});

		// could be /ping too
		app.get("/health", (req, res) => {
			res.sendStatus(200);
		});

		app.get("/old-menu", (req, res) => {
			// add entry in db to see how many users are still visiting old route..
			res.redirect(301, "/new-menu");
		});

		app.get("/xml", (req, res) => {
			res.type("applications/xml").send("<dish> <name>Briyani</name></dish>");
		});

	});
}

async function main() {
	await block_1_basicServer();
	await block_2_response();
	process.exit(0);
}
