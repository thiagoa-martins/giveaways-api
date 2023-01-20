import { Router } from "express";
import productsRoutes from "./products_routes";
import countiesRoutes from "./counties_routes";

const routes = Router();

routes.use("/products", productsRoutes);
routes.use("/counties", countiesRoutes);

export default routes;
