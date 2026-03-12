const express = require("express");
const app = express();

app.use(express.json());

app.get("/menu", (req, res) =>
	res.json({
		items: ["thali", "biryani"],
	}),
);

app.post("/oder", myfun);

const myfun = (req, res) => {
	let order = req.body;

	res.status(200).json({
		status: "recieved",
		order: req.body,
	});
};
