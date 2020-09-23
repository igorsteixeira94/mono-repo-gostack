import { Router } from 'express';
import multer from 'multer';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';

import authMiddleware from './app/middlewares/auth';
import FileController from './app/controllers/FileController';
import multerConfig from './config/multer';
import DeliverymanController from './app/controllers/DeliverymanController';
import ParcelController from './app/controllers/ParcelController';
import DeliveryController from './app/controllers/DeliveryController';
import DeliveryProblemsController from './app/controllers/DeliveryProblemsController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);

// Rotas dos destinatarios:
routes.get('/recipients', RecipientController.index);
routes.get('/recipients/:id', RecipientController.show);

routes.delete('/recipients/:id', RecipientController.delete);
routes.post('/recipients', RecipientController.store);

// Rota para entregadores
routes.get('/deliveryman/:deliveryman_id/deliveries', DeliveryController.index);
routes.put(
  '/deliveryman/:deliveryman_id/deliveries/:id',
  DeliveryController.update
);
routes.post(
  '/deliveryman/:deliveryman_id/deliveries/:id',
  DeliveryController.store
);
// Rota para entregadores indicar algum erro em uma entrega
routes.post('/delivery/:id/problems', DeliveryProblemsController.store);

// Middleware de autenticação
routes.use(authMiddleware);

routes.put('/recipients/:id', RecipientController.update);
routes.post('/files', upload.single('file'), FileController.store);

// Rota dos entregadores
routes.post('/deliverymans', DeliverymanController.store);
routes.put('/deliverymans/:id', DeliverymanController.update);
routes.get('/deliverymans', DeliverymanController.index);
routes.delete('/deliverymans/:id', DeliverymanController.delete);

// Rota das encomendas
routes.post('/parcels', ParcelController.store);
routes.get('/parcels', ParcelController.index);
routes.get('/parcels/:id', ParcelController.show);
routes.put('/parcels/:id', ParcelController.update);
routes.delete('/parcels/:id', ParcelController.delete);

// Rota para a distribuidora lidar com as entregas com problemas
routes.get('/problems/deliveries', DeliveryProblemsController.index);
routes.get('/delivery/:id/problems', DeliveryProblemsController.show);
routes.delete(
  '/problem/:id/cancel-delivery',
  DeliveryProblemsController.delete
);

export default routes;
