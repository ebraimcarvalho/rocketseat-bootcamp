import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({
    message: 'Hello World',
    developer: 'Ebraim Carvalho Filho',
    company: 'Encontact',
    hired: 'true',
    ok: 'true'
  })
})

export default routes;
