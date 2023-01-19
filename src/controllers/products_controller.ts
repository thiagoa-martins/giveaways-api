import { Request, Response } from "express";
import productsModel from "../models/products_model";
import AppError from "../utils/AppError";

const create = async (req: Request, res: Response) => {
  const { name, category, status, quantity } = req.body;

  if (!name || !category || !status || !quantity) {
    throw new AppError("Nome, categoria, status e quantidade são obrigatórios");
  }

  const productExists = await productsModel.find({ name });

  if (String(productExists)) {
    throw new AppError("Esse produto já existe!");
  }

  const register = new productsModel({
    name,
    category,
    status,
    quantity,
    created_at: new Date(),
    updated_at: new Date(),
    deleted_at: null,
  });

  register.save();

  res.status(201).json();
};

const index = async (req: Request, res: Response) => {
  const products = await productsModel.find();

  res.json(products);
};

const show = async (req: Request, res: Response) => {
  const { id } = req.params;

  const product = await productsModel.findById(id);

  if (!String(product)) {
    throw new AppError("Produto não encontrado");
  }

  res.json(product);
};

const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  let { name, category, status, quantity } = req.body;

  const productExists = await productsModel.findById(id);

  if (!String(productExists)) {
    throw new AppError("Produto não encontrado!");
  }

  const productByName = await productsModel.find({ name });

  if (
    String(productByName) &&
    productByName[0]?._id.valueOf() !== productExists?._id.valueOf()
  ) {
    throw new AppError("Este nome já está em uso.");
  }

  name = name ?? productExists?.name;
  category = category ?? productExists?.category;
  status = status ?? productExists?.status;
  quantity = quantity ?? productExists?.quantity;

  await productExists?.updateOne({
    name,
    category,
    status,
    quantity,
    updated_at: new Date(),
  });

  res.status(200).send({
    message: "sucess",
    productExists,
  });
};

const remove = async (req: Request, res: Response) => {
  const { id } = req.params;

  const product = await productsModel.findById(id);

  await product?.updateOne({
    deleted_at: new Date(),
  });

  res.status(200).json({
    message: "sucess",
    product,
  });
};

export default { create, index, show, update, remove };
