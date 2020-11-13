const reqCreator = require('../functions/requestCreator')

const loadMusic = reqCreator('get', '/loadMusic', (req, res) => {
    req.session.data.id = 100
    req.session.data.name = 'Karl'
    req.session.set(req.session.data)
    res.send('session save')
}, true)

const getMusic = reqCreator('get', '/getMusic', (req, res) => {
    res.send(req.session.data)
}, true)

module.exports = [loadMusic, getMusic]