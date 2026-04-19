import express from "express";

const app = express();

app.use(express.json());

app.get("/menu", (req, res) => {
	return res.json({
		items: ["pizza", "burger"],
	});
});

app.post("/order", handler);

const handler = (req, res) => {
	let order = req.body;

	res.status(200).json({
		status: "received",
		order: req.body,
	});
};
