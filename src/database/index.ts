import mongoose from "mongoose";

const connect = async () => {
  mongoose.set("strictQuery", false);
  
  const MONGODB_URI = process.env.MONGODB_URL || "mongodb://localhost:27017/giveaways";

  mongoose.connect(MONGODB_URI);

  const db = mongoose.connection;

  db.once("open", () => console.log("Connected to database!"));

  db.on("error", () => console.error.bind(console, "Connection error: "));
};

export default { connect };
