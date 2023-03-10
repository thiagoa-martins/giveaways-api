"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const counties_controller_1 = __importDefault(require("../controllers/counties_controller"));
const router = (0, express_1.Router)();
router.post("/", counties_controller_1.default.create);
router.get("/", counties_controller_1.default.index);
router.get("/:id", counties_controller_1.default.show);
exports.default = router;
