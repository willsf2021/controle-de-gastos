import { Router } from 'express';
import { CategoryController } from '../controllers/CategoryController';

const routes = Router();
const controller = new CategoryController();

routes.post('/', (req, res) => controller.create(req, res));
routes.get('/', (req, res) => controller.list(req, res));
routes.put('/:id', (req, res) => controller.update(req, res));
routes.delete('/:id', (req, res) => controller.delete(req, res));

export default routes;
