import { Request, Response } from "express";

const index = (req: Request, res: Response) => {
  res.send("Counties get");
};

export default { index };
