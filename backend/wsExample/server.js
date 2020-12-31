const fs = require('fs'),
      {Shvidko, requestCreator} = require('shvidko'),
      ClasicWS = require('./webSocket'),
      {ShvidkoRedisClient} = require('shvidko-redis'),
      {Pool} = require('pg')

const index = fs.readFileSync('./web.html', 'utf-8')

const db = new Pool({
    host : '127.0.0.1',
    port : 5432,
    database : 'mesmusic', 
    user : 'mesuser',
    password : '1111'
})

const server = new Shvidko({
    sessions : {
        time : 60*60*3,
        client : ShvidkoRedisClient()
    }
})

let isFirst = true
server.compose(requestCreator('get', '/', async (req, res) => {
    if(isFirst){
        await req.session.set({userId : 82})
        isFirst = false
    }else await req.session.set({userId : 80})
    res.writeHead(200)
    res.end(index)
},{useSessions:true}))


server.listen(3001, () => console.log('server is start...'))

const ws = new ClasicWS({
    db, sessionClient : ShvidkoRedisClient(), httpServer : server.app, autoAcceptConnections : false
})