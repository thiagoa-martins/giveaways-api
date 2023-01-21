import { Request, Response } from "express";
import { api } from "../services/api";
import countiesModel from "../models/counties_model";
import AppError from "../utils/AppError";

const create = async (req: Request, res: Response) => {
  try {
    const { data } = await api.get("");

    data.forEach(async (countie: any) => {
      const countieExists = await countiesModel.find({ name: countie.nome });

      if (String(countieExists)) {
        return;
      }

      const register = new countiesModel({
        _id: countie.id,
        name: countie.nome,
      });

      register.save();
    });
  } catch (err: any) {
    throw new AppError(err.message);
  }

  res.status(201).json({
    message: "sucess",
  });
};

const index = async (req: Request, res: Response) => {
  const counties = await countiesModel.find();

  return res.json(counties);
};

const show = async (req: Request, res: Response) => {
  const { id } = req.params;

  const countie = await countiesModel.findById(id);

  if (!countie) {
    throw new AppError("Município não encontrado.");
  }

  return res.json(countie);
};

export default { create, index, show };
