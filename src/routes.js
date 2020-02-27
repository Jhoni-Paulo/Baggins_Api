import { Router } from 'express';

import multer from 'multer'
import multerConfig from './config/multer'

import { PersonController, SessionController, FileController } from './app/controllers';

import authMiddleware from './app/middlewares/auth'

const routes = new Router();
const upload = multer(multerConfig)

routes.post('/people', PersonController.post);
routes.post('/session', SessionController.post);

routes.use(authMiddleware)

routes.put('/people', PersonController.put)
routes.delete('/people', PersonController.delete)

routes.post('/files', upload.single('file'), FileController.post)

export default routes;
