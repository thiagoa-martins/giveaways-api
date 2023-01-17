"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    name: String,
    category: String,
    status: String,
    quantity: Number,
    created_at: Date,
    updated_at: Date,
    deleted_at: Date,
});
const Model = mongoose_1.default.model("products", schema);
module.exports = Model;
