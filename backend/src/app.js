import express from 'express'

import { userRoutes } from './routes/users.js'
import bodyParser from 'body-parser'
import cors from 'cors'
import { createServer } from 'node:http'
import { Server } from 'socket.io'

import { handleSocket } from './socket.js'

const app = express()
app.use(cors())
app.use(bodyParser.json())

userRoutes(app)

const server = createServer(app)
const io = new Server(server, {
  cors: {
    origin: '*',
  },
})
handleSocket(io)

app.get('/', (req, res) => {
  res.send('Hello from Express nodemon!')
})

export { server as app }
