import { Router } from 'express';
import { PessoaController, SessaoController } from './app/controllers';

const routes = new Router();

routes.post('/pessoas', PessoaController.post);

routes.post('/sessao', SessaoController.post);

export default routes;