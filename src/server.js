"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const index_2 = __importDefault(require("./database/index"));
const app = (0, express_1.default)();
index_2.default.connect();
app.use(index_1.default);
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log("Server listening on PORT: ", PORT));
