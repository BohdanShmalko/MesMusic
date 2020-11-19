const createAppWithSettings = require('../functions/createAppWithSettings'),
      compose = require('../functions/compose'),
      profiles = require('./profiles'),
      musics = require('./musics'),
      authorization = require('./authorization'),
      {Pool} = require('pg')

const app = createAppWithSettings(3001) 

const composeOptions = {
    app,
    DBconnections : new Pool({ 
        host : '127.0.0.1',
        port : 5432,
        database : 'mesmusic', 
        user : 'postgres', 
        password : '1234'
    })
}

compose(composeOptions, [profiles, musics, authorization])
