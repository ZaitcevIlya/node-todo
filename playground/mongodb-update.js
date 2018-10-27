const {MongoClient, ObjectID} = require('mongodb')

const url = 'mongodb://localhost:27017'

const dbname = 'TodoApp'

MongoClient.connect(url, { useNewUrlParser: true },  (err, client) => {
  if (err) {
    return console.log('Unable to connect ot MongoDB server')  
  }
  console.log('Connected to MongoDB')

  const db = client.db(dbname)

  db.collection('Users')
  .findOneAndUpdate({
    _id: new ObjectID('5bd476bac24444e7ee2183b1')
  }, {
    $set: {name: 'John'},
    $inc: {age: 10}
  }, {
    returnOriginal: false
  }).then(results => {
    console.log(results)
  })

  // client.close()
})
