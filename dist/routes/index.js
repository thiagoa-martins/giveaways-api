"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_routes_1 = __importDefault(require("./products_routes"));
const counties_routes_1 = __importDefault(require("./counties_routes"));
const routes = (0, express_1.Router)();
routes.use("/products", products_routes_1.default);
routes.use("/counties", counties_routes_1.default);
exports.default = routes;
