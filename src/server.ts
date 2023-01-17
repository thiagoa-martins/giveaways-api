import express from "express";
import mongoose from "mongoose";
import routes from "./routes/index";
import db from "./database/index";

const app = express();

db.connect();

app.use(routes);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log("Server listening on PORT: ", PORT));
