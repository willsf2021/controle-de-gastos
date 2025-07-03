import { Request, Response } from "express";
import { AppDataSource } from "../ormconfig";
import { Expense } from "../entities/Expense";
import { Category } from "../entities/Category";
import { User } from "../entities/User";
import { validate } from "class-validator";

export class ExpenseController {
  async create(req: Request, res: Response) {
    const repo = AppDataSource.getRepository(Expense);
    const userRepo = AppDataSource.getRepository(User);
    const categoryRepo = AppDataSource.getRepository(Category);

    const { valor, data, usuarioId, categoriaId } = req.body;

    const usuario = await userRepo.findOne({ where: { id: usuarioId } });
    if (!usuario)
      return res.status(404).json({ message: "Usuário não encontrado." });

    let categoria = null;
    if (categoriaId) {
      categoria = await categoryRepo.findOne({ where: { id: categoriaId } });
      if (!categoria)
        return res.status(404).json({ message: "Categoria não encontrada." });
    }

    const despesa = repo.create({
      valor,
      data,
      usuario,
      categoria: categoria ?? undefined,
    });
    await repo.save(despesa);

    return res.status(201).json(despesa);
  }

  async list(req: Request, res: Response) {
    const repo = AppDataSource.getRepository(Expense);
    const despesas = await repo.find();
    return res.json(despesas);
  }

  async update(req: Request, res: Response) {
    const repo = AppDataSource.getRepository(Expense);
    const { id } = req.params;
    const { valor, data, categoriaId } = req.body;

    const despesa = await repo.findOne({ where: { id: Number(id) } });
    if (!despesa)
      return res.status(404).json({ message: "Despesa não encontrada." });

    if (valor !== undefined) despesa.valor = valor;
    if (data !== undefined) despesa.data = data;

    if (categoriaId !== undefined) {
      const categoriaRepo = AppDataSource.getRepository(Category);
      const categoria = await categoriaRepo.findOne({
        where: { id: categoriaId },
      });
      if (!categoria)
        return res.status(404).json({ message: "Categoria não encontrada." });
      despesa.categoria = categoria;
    }

    await repo.save(despesa);
    return res.json(despesa);
  }

  async delete(req: Request, res: Response) {
    const repo = AppDataSource.getRepository(Expense);
    const { id } = req.params;

    const despesa = await repo.findOne({ where: { id: Number(id) } });
    if (!despesa)
      return res.status(404).json({ message: "Despesa não encontrada." });

    await repo.remove(despesa);
    return res.status(204).send();
  }
}
