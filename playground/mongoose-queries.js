const { ObjectID } = require('mongodb')

const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')
const { User } = require('./../server/models/user')
 
const id = '5be3650db469502b52413b0'

if(!ObjectID.isValid(id)) {
  console.log('ID not valid')
}

User.findById(id).then((user) => {
  if(!user) {
    return console.log('User not found')
  }
  console.log('User: ', user)
}).catch((e) => console.log(e))

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos)
// })

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo)
// })

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found')
//   }
//   console.log('Todo by ID', todo)
// }).catch((e) => console.log(e))