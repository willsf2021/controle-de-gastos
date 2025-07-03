import { Router } from "express";
import { UserController } from "../controllers/UserController";

const routes = Router();
const controller = new UserController();

routes.post("/", (req, res) => controller.create(req, res));
routes.get("/", (req, res) => controller.list(req, res));

export default routes;
