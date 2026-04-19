import { log } from "console"
import http from "http"
import fs from 'fs'

const myServer = http.createServer((req, res) => {
	const log = `${Date.now()}: ${req.url} New Req Received\n`;
	fs.appendFile('log.txt', log, (err, data) => {
		switch (req.url) {
			case "/":
				let myObj = {
					name: "Jaana",
					age: 23,
					city: "Tartu"
				}
				res.end(JSON.stringify(myObj))
// 				res.end(`
// <!DOCTYPE html>
// <html lang="en">
// <head>
// 	<meta charset="UTF-8">
// 	<meta name="viewport" content="width=device-width, initial-scale=1.0">
// 	<title>Document</title>
// </head>
// <body>
// 		<p> WOW </p>
// 	<button onclick="document.body.style.backgroundColor='blue'">Click Me</button>
//
// </body>
// </html>
// `);
				break;
			case "/home":
				res.end("Jaana")
				break;
			case "/lol":
				res.end("Moy Moy")
				break;
			default:
				res.end("Not found 404")
				break;
		}
	});
});

myServer.listen(4090, () => {
	log("Server started")
})
