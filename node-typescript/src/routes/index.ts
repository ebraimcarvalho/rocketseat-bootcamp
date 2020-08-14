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
});

routes.post('/users', (request, response) => {
  const { name } = request.query;
  console.log(name)
  const user = {
    name,
    developer: "true"
  }
  response.json(user)
})

export default routes;
