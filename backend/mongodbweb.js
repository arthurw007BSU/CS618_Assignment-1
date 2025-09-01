import { createServer } from 'node:http'
import { MongoClient } from 'mongodb'

//connect to mongodb
const url = 'mongodb://localhost:27017'
const dbName = 'mydb'
const client = new MongoClient(url)

try {
  await client.connect()
  console.log('Successfully connected to database!')
} catch (err) {
  console.error('Error to connect to database:', err)
}

//create server
const server = createServer(async (req, res) => {
  const db = client.db(dbName)
  const users = db.collection('users')
  const usersList = await users.find().toArray()

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(usersList))
})

//Running a server
const host = 'localhost'
const port = 3000
server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`)
})
