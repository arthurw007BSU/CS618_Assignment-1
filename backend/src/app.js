import express from 'express'
import { postsRoutes } from './routes/posts.js'
import { userRoutes } from './routes/users.js'
import bodyParser from 'body-parser'
import cors from 'cors'
import { createServer } from 'node:http'
import { Server } from 'socket.io'

import { handleSocket } from './socket.js'

const app = express()
app.use(cors())
app.use(bodyParser.json())

postsRoutes(app)
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

//app.get('/posts', (req, res) => {
//  res.send('These are your posts')
//})
// export{ app }
export { server as app }
