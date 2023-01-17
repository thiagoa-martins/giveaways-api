"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const products_model_1 = __importDefault(require("../models/products_model"));
const AppError_1 = __importDefault(require("../utils/AppError"));
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield products_model_1.default.find();
    res.send(products);
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, category, status, quantity } = req.body;
    console.log(name, category, status, quantity);
    if (!name || !category || !status || !quantity) {
        throw new AppError_1.default("Nome, categoria, status e quantidade são obrigatórios");
    }
    const register = new products_model_1.default({
        name: "Smartphone Samsung Galaxy A13",
        category: "Smartphone",
        status: "ACTIVE",
        quantity: 2,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
    });
    // register.save();
    res.status(201).json();
});
module.exports = { create, index };
