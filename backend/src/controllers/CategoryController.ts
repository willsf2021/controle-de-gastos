import { Request, Response } from "express";
import { AppDataSource } from "../ormconfig";
import { Category } from "../entities/Category";
import { CreateCategoryDto } from "../dtos/CreateCategoryDto";
import { validate } from "class-validator";
import { User } from "../entities/User";

export class CategoryController {
  async create(req: Request, res: Response) {
    const repo = AppDataSource.getRepository(Category);
    const userRepo = AppDataSource.getRepository(User);

    const { nome, usuarioId } = req.body;

    const dto = new CreateCategoryDto();
    dto.nome = nome;

    const errors = await validate(dto);
    if (errors.length > 0) {
      return res.status(400).json(errors);
    }

    const usuario = await userRepo.findOne({ where: { id: usuarioId } });
    if (!usuario) {
      return res.status(404).json({ message: "Usuário não encontrado." });
    }

    const categoria = repo.create({ nome, usuario });
    await repo.save(categoria);

    return res.status(201).json(categoria);
  }

  async list(req: Request, res: Response) {
    const repo = AppDataSource.getRepository(Category);
    const categorias = await repo.find();
    return res.json(categorias);
  }

  async update(req: Request, res: Response) {
    const repo = AppDataSource.getRepository(Category);
    const { id } = req.params;
    const { nome } = req.body;

    const categoria = await repo.findOne({ where: { id: Number(id) } });
    if (!categoria) {
      return res.status(404).json({ message: "Categoria não encontrada." });
    }

    categoria.nome = nome;
    await repo.save(categoria);

    return res.json(categoria);
  }

  async delete(req: Request, res: Response) {
    const repo = AppDataSource.getRepository(Category);
    const { id } = req.params;

    const categoria = await repo.findOne({ where: { id: Number(id) } });
    if (!categoria) {
      return res.status(404).json({ message: "Categoria não encontrada." });
    }

    await repo.remove(categoria);
    return res.status(204).send();
  }
}
