const {Shvidko} = require('shvidko'),
      {ShvidkoRedisClient} = require('shvidko-redis')
      profiles = require('./profiles'),
      musics = require('./musics'),
      authorization = require('./authorization'),
      {Pool} = require('pg'),
      easyDB = require('./easyDB')

const db =  new Pool({ 
    host : '127.0.0.1',
    port : 5432,
    database : 'mesmusic', 
    user : 'mesuser',
    password : '1111'
})

db.connect()
const options = {
    db : easyDB(db),
    standartHeaders : {
        'Access-Control-Allow-Methods' : 'GET, POST, DELETE, OPTIONS, PUT',
        'Access-Control-Allow-Headers': 'Accept, Content-Type',
        'Access-Control-Allow-Origin': '*'
    },
    sessions : {
        time : 100,
        client : ShvidkoRedisClient()
    }
}

const app = new Shvidko(options) 

app.listen(3001, () => console.log("start server"))

app.compose(...profiles, ...musics, ...authorization)