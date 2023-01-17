import { Router } from "express";
import productsRoutes from "./products_routes";

const routes = Router();

routes.use("/", productsRoutes);

export = routes;
