import { Router } from 'express';
import multer from 'multer';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';

import authMiddleware from './app/middlewares/auth';
import FileController from './app/controllers/FileController';
import multerConfig from './config/multer';
import DeliverymanController from './app/controllers/DeliverymanController';
import ParcelController from './app/controllers/ParcelController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);

// Rotas dos destinatarios:
routes.get('/recipients', RecipientController.index);
routes.post('/recipients', RecipientController.store);
routes.use(authMiddleware);
routes.put('/recipients/:id', RecipientController.update);

routes.post('/files', upload.single('file'), FileController.store);

routes.post('/deliverymans', DeliverymanController.store);
routes.put('/deliverymans/:id', DeliverymanController.update);
routes.get('/deliverymans', DeliverymanController.index);
routes.delete('/deliverymans/:id', DeliverymanController.delete);

routes.post('/parcels', ParcelController.store);
routes.get('/parcels', ParcelController.index);
routes.get('/parcels/:id', ParcelController.show);
routes.put('/parcels/:id', ParcelController.update);
routes.delete('/parcels/:id', ParcelController.delete);

export default routes;
