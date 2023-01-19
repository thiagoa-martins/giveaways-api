import { Router } from "express";
import productsController from "../controllers/products_controller"; 

const routes = Router();

routes.post("/", productsController.create);
routes.get("/", productsController.index);
routes.get("/:id", productsController.show);
routes.put("/:id", productsController.update);
routes.delete("/:id", productsController.remove);

export = routes;
