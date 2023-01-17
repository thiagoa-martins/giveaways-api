"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const mongoose_1 = __importDefault(require("mongoose"));
const connect = () => {
    mongoose_1.default.set("strictQuery", false);
    mongoose_1.default.connect("mongodb://localhost:27017/givaways");
    const db = mongoose_1.default.connection;
    db.once("open", () => console.log("Connected to database!"));
    db.on("error", () => console.error.bind(console, "Connection error: "));
};
module.exports = { connect };
