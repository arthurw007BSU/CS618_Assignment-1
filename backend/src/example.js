import { initDatabase } from './db/init.js'

import { Post } from './db/models/post.js'

await initDatabase()

const post = new Post({
  title: 'Hello Mongoose',
  author: 'Arthur Williamson',
  contents: 'this post is stored in MongoDB using Mongoose',
  tags: ['mongoose', 'Mongodb', 'nodejs'],
})

const createdPost = await post.save()

await Post.findByIdAndUpdate(createdPost._id, {
  $set: { title: 'Hello again, Mongoose!' },
})

const posts = await Post.find()
console.log(posts)
