import { DataSource } from "typeorm";
import { User } from "./entities/User";
import { Category } from "./entities/Category";
import { Expense } from "./entities/Expense";
import { Income } from "./entities/Income";
import * as dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true, // cuidado em produção!
  logging: false,
  entities: [User, Category, Expense, Income],
});
