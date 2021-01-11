const {requestCreator} = require('shvidko')
const SQL = require('../database/authInterface');
const { withDbSessions, withDb, withSessions } = require('./helper/settings');

//const getUserStatus = (id) => `SELECT status FROM users WHERE id = ${id};`

const test = requestCreator('get', '/user', async (req,res) => {
    // req.session.data.userId = 5
    // req.session.set(req.session.data)    
    // res.sendJSON({status: 'ok'})
    // const dialogs = await req.db.query(`SELECT * FROM dialogs`)
    // res.sendJSON(dialogs)
}, withDb)

const setTestUser = requestCreator('get', '/setTestUser', async (req, res) => {
    // const id = req.session.data.userId
    // let data = await req.db.query(getUserStatus(req.params.id))
    const sesData = await req.session.get()
    sesData.id = 5
    await req.session.set(sesData)
    // let updateData = await req.session.get()
    // console.log(sesData.id)
    res.send({id: sesData.id})
}, withDbSessions)

const authorise = requestCreator('post', '/authorise', async (req, res) => {
    const {email, password} = req.body
    const {db, session} = req
    const database = SQL(db)
    const isRemember = !!+req.body.isRemember //!!!!!!
    const [{truePassword}] = await database.getUserPassword(email)
    if (truePassword === password) {
        const [{id}] = await database.getUserId(email)
        const sesData = await session.get()
        await session.set({...sesData, id})
        const [{nickname}] = await database.getUserNickname(id)
        res.send({nickname, id}, 200)
    } else {
        res.send({message: 'Incorrect login or password'}, 400)
    }
}, withDbSessions)

const logOut = requestCreator('post', '/logOut', async (req, res) => {
    //req.session.delete()
    res.send('ok', 200)
}, withSessions)

module.exports = [test, setTestUser, authorise, logOut]