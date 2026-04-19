const express = require("express");

function block_1_basicServer() {
	return new Promise((resolve) => {
		const app = express();
		app.use(express.json());

		app.get("/menu", (_, res) => {
			res.json({
				items: ["thali", "biryani"],
				// res.json will give serialized object
			});
		});

		app.get("/search", (req, res) => {
			const { q, limit } = req.query;
			res.json({
				query: q,
				limit: limit || "10",
			});
		});

		// route paramter.. or path parameter
		app.get("/menu/:id", (req, res) => {
			const { id } = req.params;
			res.json({
				items: id,
				price: 149,
			});
		});

		app.post("/order", (req, res) => {
			const order = req.body;
			res.status(201).json({
				status: "created",
				order,
			});
		});

		// 0 is signal to assign any free port
		const server = app.listen(0, async () => {
			const port = server.address().port;
			const base = `127.0.0.1:${port}`;

			console.log(`Listening on ${base}`);

			try {
				const result = await fetch(`http://${base}/menu`);
				const menuData = result.json();
				console.log("GET /menu", JSON.stringify(menuData));

				console.log("__________________________");

				const searchRes = await fetch(
					`http://${base}/search?q=biryani&limit=5`,
				);
				const searchData = await searchRes.json();
				console.log("GET /search", JSON.stringify(searchData));

				console.log("__________________________");
				const menuItemRes = await fetch(`http://${base}/menu/123`);
				const menuItemData = await menuItemRes.json();
				console.log("POST /menu", JSON.stringify(menuItemData));

				console.log("__________________________");

				const orderRes = await fetch(`http://${base}/order`, {
					method: "POST",
					headers: {
						"Content-type": "application/json",
					},
					body: JSON.stringify({
						dish: "biryani",
						quantity: 2,
					}),
				});
				const orderData = await orderRes.json();
				console.log("POST /order", JSON.stringify(orderData));
				console.log("__________________________");
			} catch (err) {
				console.error(err);
			} finally {
				server.close(resolve);
			}

			server.close(() => {
				console.log("Block 1 server closed");
				resolve();
			});
		});
	});
}

function block_2_response() {
	return new Promise((resolve) => {
		const app = express();

		app.get("/text", (req, res) => {
			res.send("text response from sudo");
		});
		app.get("/json", (req, res) => {
			res.json({
				framework: "express",
				version: "7.6.x",
			});
		});

		app.get("/not-found", (req, res) => {
			res.status(404).json({
				error: "Page not found",
			});
		});

		app.get("/bruh", (_, res) => {
			res.status(201).send(`
			<!DOCTYPE html>
			<html lang="en">
			<style>
				body {
					background-color: #303030;		
					color: white;
                    font-family: sans-serif;
				}
                .dark-theme-toggle {
                    background-color : #505050;
					color: white;
					border: none;
				}
					</style>
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Document</title>
			</head>
			<body>
				<h1>Bruh</h1>
                <button style="padding: 10px 20px; background-color: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">Click Me</button>
			</body>
           <script>
                const body = document.body;
				const button = document.querySelector("button");
				const counterText = document.createElement("textNode");
				let counter = 0;
				button.addEventListener("click", () => {
                     body.classList.toggle("dark-theme-toggle");
					 counter++;
                     if(counter < 30){
                       counterText.textContent = "Clicked " + counter + " times";

                    }
                    else if ( counter < 50)  {
						counterText.textContent = "Clicked " + counter + " times.. yeah you're doing good"; 
                    }
					else if (counter < 70) {
						counterText.textContent = "Clicked " + counter + " times.. faster!! yeah faster!!";
					}
                    else if (counter < 83) {
						counterText.textContent = "Clicked " + counter + " times.. yeah.. ahh.. keep going!! ahh faster yeah fasterr!!!";
					}
					else if (counter < 95) {
						counterText.textContent = "Clicked " + counter + " times.. ahh stop clicking! I'll come!!";
					}
					else if (counter < 100 ) {
						counterText.textContent = "Clicked " + counter + " times.. stop plz ahh.. faster.. I'm about to ahh..";;
					}
                    else {
                        counterText.textContent = "Ahh.. I Came";
						for (let i = 1; i < 5; i++) {
							let size = 50 + (i*3)
							counterText.style.fontSize = size + "px";
                        };
					}
                       body.appendChild(counterText);
					 // button.textContent = "Clicked " + counter + " times";
				});
			</script>
			</html>	
`);
		});

		app.get("/old-route" , (_,res) =>{
			// entry in db of how many users visiting old route
			res.redirect("/bruh")
		})

		app.listen(3090, () => {
			console.log("Block 2 server is listening on 3090");
			resolve();
		});
	});
}

async function main() {
	await block_1_basicServer();
	await block_2_response();

	// process.exit(0);
}

main();
