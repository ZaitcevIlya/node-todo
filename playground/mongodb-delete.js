const {MongoClient, ObjectID} = require('mongodb')

const url = 'mongodb://localhost:27017'

const dbname = 'TodoApp'

MongoClient.connect(url, { useNewUrlParser: true },  (err, client) => {
  if (err) {
    return console.log('Unable to connect ot MongoDB server')  
  }
  console.log('Connected to MongoDB')

  const db = client.db(dbname)

  db.collection('Users').deleteMany({$or: [{name: 'Tim'}, {name: 'Olya'}]}).then(result => {
    console.log(result)
  })

  db.collection('Users').findOneAndDelete({_id: new ObjectID('5bca74e7481a8a767d18f6e2')})
  .then(results => {
    console.log(results)
  })

  // client.close()
})
