const {requestCreator} = require('shvidko')

const loadMusic = requestCreator('get', '/loadMusic', (req, res) => {
    // req.session.data.id = 100
    // req.session.data.name = 'Karl'
    // req.session.set(req.session.data)
    // res.send('session save')
})

const getMusic = requestCreator('get', '/getMusic', (req, res) => {
    // res.send(req.session.data)
})

module.exports = [loadMusic, getMusic]