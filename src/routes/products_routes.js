"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = require("express");
const products_controller_1 = __importDefault(require("../controllers/products_controller"));
const routes = (0, express_1.Router)();
routes.get("/", products_controller_1.default.index);
routes.post("/", products_controller_1.default.create);
module.exports = routes;
