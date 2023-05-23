import 'dotenv/config'
import fastify from 'fastify'
import jwt from '@fastify/jwt';
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'
import cors from '@fastify/cors'

const app = fastify()

app.register(cors, {
  origin: true, // all URLs are allowed. other example - origin: ['http://localhost:3000']
})

app.register(jwt, {
  secret: 'spacetime',
})

app.register(memoriesRoutes)
app.register(authRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 HTTP server running on http://localhost:3333')
  })
