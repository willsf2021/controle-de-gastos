import { Request, Response } from "express";
import { AppDataSource } from "../ormconfig";
import { User } from "../entities/User";
import { CreateUserDto } from "../dtos/CreateUserDto";
import { validate } from "class-validator";

export class UserController {
  async create(req: Request, res: Response) {
    const repo = AppDataSource.getRepository(User);
    const { nome, email, senha } = req.body as CreateUserDto;

    const dto = new CreateUserDto();
    dto.nome = nome;
    dto.email = email;
    dto.senha = senha;

    const errors = await validate(dto);
    if (errors.length > 0) {
      return res.status(400).json(errors);
    }

    const userExists = await repo.findOne({ where: { email } });
    if (userExists) {
      return res.status(400).json({ message: "E-mail já cadastrado." });
    }

    const user = repo.create({ nome, email, senha });
    await repo.save(user);

    return res.status(201).json(user);
  }

  async list(req: Request, res: Response) {
    const repo = AppDataSource.getRepository(User);
    const users = await repo.find();
    return res.json(users);
  }
}
