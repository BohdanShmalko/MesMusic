const {requestCreator} = require('shvidko'),
      {musicSQL} = require('./SQL'),
      {complex} = require('./helpers/settings')

const loadMusic = requestCreator('get', '/loadMusic', (req, res) => {
})

const getMusic = requestCreator('get', '/getMusic', (req, res) => {
})

module.exports = [loadMusic, getMusic]