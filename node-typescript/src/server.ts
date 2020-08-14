import express from 'express'

const app = express()

app.get('/', (request, response) => {
  return response.json({
    message: 'Hello World',
    developer: 'Ebraim Carvalho Filho',
    company: 'Encontact',
    hired: 'true',
    ok: 'true'
  })
})

app.listen(3333, () => {
  console.log("Backend started on port 3333!")
})
