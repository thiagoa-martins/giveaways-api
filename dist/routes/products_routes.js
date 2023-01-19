"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_controller_1 = __importDefault(require("../controllers/products_controller"));
const routes = (0, express_1.Router)();
routes.post("/", products_controller_1.default.create);
routes.get("/", products_controller_1.default.index);
routes.get("/:id", products_controller_1.default.show);
routes.put("/:id", products_controller_1.default.update);
routes.delete("/:id", products_controller_1.default.remove);
exports.default = routes;
