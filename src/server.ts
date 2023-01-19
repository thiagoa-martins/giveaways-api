import express, { Request, Response } from "express";
require("express-async-errors");
import mongoose from "mongoose";
import routes from "./routes/index";
import db from "./database/index";
import AppError from "./utils/AppError";

const app = express();

db.connect();

app.use(express.json());
app.use(routes);
app.use((err: Error, req: Request, res: Response, next: Function) => {
	if (err instanceof AppError) {
		return res.status(err.statusCode).json({
			status: "error",
			message: err.message,
		});

		return res.status(500).json({
			status: "error",
			message: "Internal server error",
		});
	}
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log("Server listening on PORT: ", PORT));
