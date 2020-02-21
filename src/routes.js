import { Router } from 'express';
import { PessoaController, SessaoController } from './app/controllers';
import authMiddleware from './app/middlewares/auth'

const routes = new Router();

routes.post('/pessoas', PessoaController.post);
routes.post('/sessao', SessaoController.post);

routes.use(authMiddleware)

routes.put('/pessoas', PessoaController.put)

export default routes;
