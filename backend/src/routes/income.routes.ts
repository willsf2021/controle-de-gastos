import { Router } from "express";
import { IncomeController } from "../controllers/IncomeController";

const routes = Router();
const controller = new IncomeController();

routes.post("/", (req, res) => controller.create(req, res));
routes.get("/", (req, res) => controller.list(req, res));
routes.put("/:id", (req, res) => controller.update(req, res));
routes.delete("/:id", (req, res) => controller.delete(req, res));

export default routes;
