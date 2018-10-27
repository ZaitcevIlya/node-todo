const {MongoClient, ObjectID} = require('mongodb')

const url = 'mongodb://localhost:27017'

const dbname = 'TodoApp'

MongoClient.connect(url, { useNewUrlParser: true },  (err, client) => {
  if (err) {
    return console.log('Unable to connect ot MongoDB server')  
  }
  console.log('Connected to MongoDB')

  const db = client.db(dbname)

  // db.collection('Todos').find({
  //   _id: new ObjectID('5bd37a48228a7cdb6c740615')
  // }).toArray().then((docs) => {
  //   console.log('Todos')
  //   console.log(JSON.stringify(docs, undefined, 2))
  // }, (err) => {
  //   console.log('Unable to fetch todos', err)
  // })

  db.collection('Users').find({
    name: "Olya"
  }).count().then((count) => {
    console.log(`Todos count: ${count}`)
  }, (err) => {
    console.log('Unable to fetch todos', err)
  })

  // client.close()
})
