import "dotenv/config";
import myApp from "./src/app.js";

const PORT = process.env.PORT || 5000;

const start = async () => {
	await connect
	// connect to the database
	myApp.listen(PORT, () => {
		console.log(`Server is running at localhost:${PORT} in ${process.env.NODE_ENV} mode`);
	});
};

start().catch((e)=>{
	console.error("failed to start server ", e)
	process.exit(1)
})


