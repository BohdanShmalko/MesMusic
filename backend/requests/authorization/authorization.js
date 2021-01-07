const {requestCreator} = require('shvidko'),
      SQL = require('./SQL'),
      {withDbSessions, withSessions} = require('../helpers/settings')

const setTestUser = requestCreator('get', '/setTestUser', async (req, res) => {
    const sesData = await req.session.get()
    sesData.id = 5
    await req.session.set(sesData)
    res.send({id: sesData.id})
}, {useDB: true, useSessions: true})

const login = requestCreator('post', '/login', async (req, res) => {
    //get user id from DB with login and password
    //if field is empty - res.send({error}, 403)
    //set user id to session storage
    //res.send({...}, 200)
}, withDbSessions)

const logout = requestCreator('post', '/logout', async (req, res) => {
    //session delete
    //res.send({...}, 200)
}, withSessions)

const createuser = requestCreator('post', '/createuser', async (req, res) => {
    //set new user to database
    //set new user id to session storage
    //res.send({...}, 201)
}, withDbSessions)

module.exports = [login, logout, createuser]