const {requestCreator} = require('shvidko')
const SQL = require('../database/peopleInterface');
const { withDbSessions } = require('./helper/settings');

const getPeoples = requestCreator('get', '/getPeoples', async (req, res) => {
    const {db, session} = req
    const sesData = await session.get()
    const database = SQL(db)
    let peoples = await database.getPeoples(sesData.id)
    res.send(peoples)
}, withDbSessions)

const follow = requestCreator('post', '/follow', async (req, res) => {
    const {db, session, body} = req
    const sesData = await session.get()
    const database = SQL(db)
    await database.follow(sesData.id, body.followedId)
    res.send('ok')
}, withDbSessions)

const disFollow = requestCreator('delete', '/disFollow/:disFollowedId', async (req, res) => {
    const {db, session, params} = req
    const sesData = await session.get()
    const database = SQL(db)
    await database.disFollow(sesData.id, params.disFollowedId)
    res.send('ok')
}, withDbSessions)

module.exports = [getPeoples, follow, disFollow]