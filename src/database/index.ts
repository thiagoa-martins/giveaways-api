import mongoose from "mongoose";

const connect = () => {
	mongoose.set("strictQuery", false);

	mongoose.connect("mongodb://localhost:27017/givaways");

	const db = mongoose.connection;

	db.once("open", () => console.log("Connected to database!"));

	db.on("error", () => console.error.bind(console, "Connection error: "));
};

export = { connect };
