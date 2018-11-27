const mongoose = require('mongoose')

const dbURI = 'mongodb://localhost:27017/TodoApp'


mongoose.Promise = global.Promise
mongoose.connect(dbURI, { useNewUrlParser: true })

module.exports = {mongoose} 