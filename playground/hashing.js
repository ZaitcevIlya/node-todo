const {SHA256} = require('crypto-js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

var password = '123abc!'

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash)
//   })
// })

var hashedPassword = '$2a$10$0TZOLgYAJZH6SQlQoA1UuOPqy4qVpMY7o4lSXKRqZbC1rVI6Kr71W'

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res)
})