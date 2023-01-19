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
Object.defineProperty(exports, "__esModule", { value: true });
const products_model_1 = __importDefault(require("../models/products_model"));
const AppError_1 = __importDefault(require("../utils/AppError"));
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, category, status, quantity } = req.body;
    if (!name || !category || !status || !quantity) {
        throw new AppError_1.default("Nome, categoria, status e quantidade são obrigatórios");
    }
    const productExists = yield products_model_1.default.find({ name });
    if (String(productExists)) {
        throw new AppError_1.default("Esse produto já existe!");
    }
    const register = new products_model_1.default({
        name,
        category,
        status,
        quantity,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
    });
    register.save();
    res.status(201).json();
});
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield products_model_1.default.find();
    res.json(products);
});
const show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield products_model_1.default.findById(id);
    if (!String(product)) {
        throw new AppError_1.default("Produto não encontrado");
    }
    res.json(product);
});
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { id } = req.params;
    let { name, category, status, quantity } = req.body;
    const productExists = yield products_model_1.default.findById(id);
    if (!String(productExists)) {
        throw new AppError_1.default("Produto não encontrado!");
    }
    const productByName = yield products_model_1.default.find({ name });
    if (String(productByName) &&
        ((_a = productByName[0]) === null || _a === void 0 ? void 0 : _a._id.valueOf()) !== (productExists === null || productExists === void 0 ? void 0 : productExists._id.valueOf())) {
        throw new AppError_1.default("Este nome já está em uso.");
    }
    name = name !== null && name !== void 0 ? name : productExists === null || productExists === void 0 ? void 0 : productExists.name;
    category = category !== null && category !== void 0 ? category : productExists === null || productExists === void 0 ? void 0 : productExists.category;
    status = status !== null && status !== void 0 ? status : productExists === null || productExists === void 0 ? void 0 : productExists.status;
    quantity = quantity !== null && quantity !== void 0 ? quantity : productExists === null || productExists === void 0 ? void 0 : productExists.quantity;
    yield (productExists === null || productExists === void 0 ? void 0 : productExists.updateOne({
        name,
        category,
        status,
        quantity,
        updated_at: new Date(),
    }));
    res.status(200).send({
        message: "sucess",
        productExists,
    });
});
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield products_model_1.default.findById(id);
    yield (product === null || product === void 0 ? void 0 : product.updateOne({
        deleted_at: new Date(),
    }));
    res.status(200).json({
        message: "sucess",
        product,
    });
});
exports.default = { create, index, show, update, remove };
