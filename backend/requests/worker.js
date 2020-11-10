const createAppWithSettings = require('../functions/createAppWithSettings'),
      compose = require('../functions/compose'),
      profiles = require('./profiles'),
      musics = require('./musics')

const app = createAppWithSettings(3001) 
compose(app, [profiles, musics])
