"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const index_1 = __importDefault(require("./routes/index"));
const index_2 = __importDefault(require("./database/index"));
const AppError_1 = __importDefault(require("./utils/AppError"));
const app = (0, express_1.default)();
index_2.default.connect();
app.use(express_1.default.json());
app.use(index_1.default);
app.use((err, req, res, next) => {
    if (err instanceof AppError_1.default) {
        return res.status(err.statusCode).json({
            status: "error",
            message: err.message,
        });
    }
    return res.status(500).json({
        status: "error",
        message: "Internal server error",
    });
});
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log("Server listening on PORT: ", PORT));
