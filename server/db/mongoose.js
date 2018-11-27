const mongoose = require('mongoose')

const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp'


mongoose.Promise = global.Promise
mongoose.connect(dbURI, { useNewUrlParser: true })

module.exports = {mongoose} 