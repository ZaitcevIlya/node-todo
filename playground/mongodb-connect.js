const {MongoClient, ObjectID} = require('mongodb')

const url = 'mongodb://localhost:27017'

const dbname = 'TodoApp'

MongoClient.connect(url, { useNewUrlParser: true },  (err, client) => {
  if (err) {
    return console.log('Unable to connect ot MongoDB server')  
  }
  console.log('Connected to MongoDB')

  const db = client.db(dbname)

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert document', err)
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // })

  db.collection('Users').insertMany([{
    name: 'Ilya',
    age: 28,
    location: 'Toronto'
  },
  {
    name: 'Olya',
    age: 28,
    location: 'Toronto'
  }], (err, result) => {
    if (err) {
      return console.log('Unable to insert document', err)
    }
    console.log(`${result.insertedCount} ${result.insertedCount === 1 ? 'note' : 'notes'} ${result.insertedCount === 1 ? 'was' : 'were'} added to list`)
  })

  client.close()
})
