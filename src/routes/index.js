"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = require("express");
const products_routes_1 = __importDefault(require("./products_routes"));
const routes = (0, express_1.Router)();
routes.use("/", products_routes_1.default);
module.exports = routes;
