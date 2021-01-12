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

module.exports = [getPeoples]