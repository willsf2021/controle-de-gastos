import { Request, Response } from "express";
import { AppDataSource } from "../ormconfig";
import { Income } from "../entities/Income";
import { User } from "../entities/User";

export class IncomeController {
  async create(req: Request, res: Response) {
    const repo = AppDataSource.getRepository(Income);
    const userRepo = AppDataSource.getRepository(User);

    const { valor, data, usuarioId } = req.body;

    const usuario = await userRepo.findOne({ where: { id: usuarioId } });
    if (!usuario)
      return res.status(404).json({ message: "Usuário não encontrado." });

    const receita = repo.create({ valor, data, usuario });
    await repo.save(receita);

    return res.status(201).json(receita);
  }

  async list(req: Request, res: Response) {
    const repo = AppDataSource.getRepository(Income);
    const receitas = await repo.find();
    return res.json(receitas);
  }

  async update(req: Request, res: Response) {
    const repo = AppDataSource.getRepository(Income);
    const { id } = req.params;
    const { valor, data } = req.body;

    const receita = await repo.findOne({ where: { id: Number(id) } });
    if (!receita)
      return res.status(404).json({ message: "Receita não encontrada." });

    if (valor !== undefined) receita.valor = valor;
    if (data !== undefined) receita.data = data;

    await repo.save(receita);
    return res.json(receita);
  }

  async delete(req: Request, res: Response) {
    const repo = AppDataSource.getRepository(Income);
    const { id } = req.params;

    const receita = await repo.findOne({ where: { id: Number(id) } });
    if (!receita)
      return res.status(404).json({ message: "Receita não encontrada." });

    await repo.remove(receita);
    return res.status(204).send();
  }
}
