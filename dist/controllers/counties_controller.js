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
const api_1 = require("../services/api");
const counties_model_1 = __importDefault(require("../models/counties_model"));
const AppError_1 = __importDefault(require("../utils/AppError"));
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data } = yield api_1.api.get("");
        data.forEach((countie) => __awaiter(void 0, void 0, void 0, function* () {
            const countieExists = yield counties_model_1.default.find({ name: countie.nome });
            if (String(countieExists)) {
                return;
            }
            const register = new counties_model_1.default({
                _id: countie.id,
                name: countie.nome,
            });
            register.save();
        }));
    }
    catch (err) {
        throw new AppError_1.default(err.message);
    }
    res.status(201).json({
        message: "sucess",
    });
});
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const counties = yield counties_model_1.default.find();
    return res.json(counties);
});
const show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const countie = yield counties_model_1.default.findById(id);
    if (!countie) {
        throw new AppError_1.default("Município não encontrado.");
    }
    return res.json(countie);
});
exports.default = { create, index, show };
