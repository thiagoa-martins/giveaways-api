import { Router } from "express";
import countiesController from "../controllers/counties_controller";

const router = Router();

router.get("/", countiesController.index);

export default router;
