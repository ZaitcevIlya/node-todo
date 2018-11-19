const { ObjectID } = require('mongodb')

const { mongoose } = require('../server/db/mongoose')
const { Todo } = require('../server/models/todo')
const { User } = require('../server/models/user')
 
// Todo.remove({}).then((result) => {
//   console.log(result)
// })

// Todo.findByIdAndDelete('5bca4399c9da993602c9cee8').then((todo) => {
//   console.log(todo)
// })

Todo.findByIdAndDelete('5be4af60f9c5de6736b3a34a').then(todos => {
  console.log(todos)
})