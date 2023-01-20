"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_controller_1 = __importDefault(require("../controllers/products_controller"));
const router = (0, express_1.Router)();
router.post("/", products_controller_1.default.create);
router.get("/", products_controller_1.default.index);
router.get("/:id", products_controller_1.default.show);
router.put("/:id", products_controller_1.default.update);
router.delete("/:id", products_controller_1.default.remove);
exports.default = router;
