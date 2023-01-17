import { Request, Response } from "express";
import productsModel from "../models/products_model";
import AppError from "../utils/AppError";

const index = async (req: Request, res: Response) => {
	const products = await productsModel.find();

	res.send(products);
};

const create = async (req: Request, res: Response) => {
	const { name, category, status, quantity } = req.body;

	console.log(name, category, status, quantity);

	if (!name || !category || !status || !quantity) {
    throw new AppError("Nome, categoria, status e quantidade são obrigatórios");
	}

  const register = new productsModel({
	  name: "Smartphone Samsung Galaxy A13",
	  category: "Smartphone",
	  status: "ACTIVE",
	  quantity: 2,
	  created_at: new Date(),
	  updated_at: new Date(),
	  deleted_at: null
  });

	// register.save();

	res.status(201).json();
};

export = { create, index };


