import mongoose from "mongoose";

const connectDB = async () => {
	await mongoose.connect(process.env.MONGODB_URI);
	// what is inside this connection?
	console.log(`MongoDB connected : ${conn.connection.host}`);
};

export default connectDB;
