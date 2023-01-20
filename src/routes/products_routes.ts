import { Router } from "express";
import productsController from "../controllers/products_controller";

const router = Router();

router.post("/", productsController.create);
router.get("/", productsController.index);
router.get("/:id", productsController.show);
router.put("/:id", productsController.update);
router.delete("/:id", productsController.remove);

export default router;
