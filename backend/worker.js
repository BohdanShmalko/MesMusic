const {Shvidko} = require('shvidko'),
      {ShvidkoRedisClient} = require('shvidko-redis'),
      profiles = require('./requests/profiles'),
      musics = require('./requests/musics'),
      authorization = require('./requests/authorization'),
      {Pool} = require('pg'),
      ClasicWS = require('./webSocket'),
      shwidkoOptions = require('./shvidkoOptions')

const db =  new Pool({ 
    host : '127.0.0.1',
    port : 5432,
    database : 'mesmusic', 
    user : 'mesuser',
    password : '1111'
})

db.connect()
const options = shwidkoOptions(db, ShvidkoRedisClient)

const app = new Shvidko(options).listen(3001, () => console.log("start server"))

app.compose(...profiles, ...musics, ...authorization)

const ws = new ClasicWS({
    db, sessionClient : ShvidkoRedisClient(), httpServer : app.server, autoAcceptConnections : false
})