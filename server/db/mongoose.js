const mongoose = require('mongoose')

const dbURI =  process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp'
// 'mongodb://<dbuser>:<dbpassword>@ds155833.mlab.com:55833/todo_app'


mongoose.Promise = global.Promise
mongoose.connect(dbURI, { useNewUrlParser: true })

module.exports = {mongoose} 