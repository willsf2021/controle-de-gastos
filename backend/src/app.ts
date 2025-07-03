import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./ormconfig";
import userRoutes from "./routes/user.routes";
import incomeRoutes from "./routes/income.routes";
import expenseRoutes from "./routes/expense.routes";
import categoryRoutes from "./routes/category.routes";

const app = express();

app.use(express.json());
app.use("/users", userRoutes);
app.use("/incomes", incomeRoutes);
app.use("/expenses", expenseRoutes);
app.use("/categories", categoryRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log("📦 Banco conectado com sucesso!");
    app.listen(3000, () => {
      console.log("🚀 Servidor rodando na porta 3000");
    });
  })
  .catch((err) => console.error("Erro ao conectar banco:", err));

export default app;
