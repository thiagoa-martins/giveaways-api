import { Router } from "express";
import countiesController from "../controllers/counties_controller";

const router = Router();

router.post("/", countiesController.create);
router.get("/", countiesController.index);
router.get("/:id", countiesController.show);

export default router;
