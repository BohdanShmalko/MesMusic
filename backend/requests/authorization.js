const {requestCreator} = require('shvidko'),
      {authorizationSQL} = require('./SQL'),
      {complex} = require('./helpers/settings')

const test = requestCreator('get', '/user', async (req,res) => {
}, {useDB : true})

const setTestUser = requestCreator('get', '/setTestUser', async (req, res) => {
    const sesData = await req.session.get()
    sesData.id = 5
    await req.session.set(sesData)
    res.send({id: sesData.id})
}, {useDB: true, useSessions: true})

module.exports = [test, setTestUser]