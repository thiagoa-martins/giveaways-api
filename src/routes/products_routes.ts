import { Router } from "express";
import productsController from "../controllers/products_controller"; 

const routes = Router();

routes.get("/", productsController.index);
routes.post("/", productsController.create);

export = routes;
