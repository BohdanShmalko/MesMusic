const {requestCreator} = require('shvidko')
const SQL = require('../database/authInterface');
const { withDbSessions, withDb } = require('./helper/settings');

//const getUserStatus = (id) => `SELECT status FROM users WHERE id = ${id};`
const getUserPassword = (email) => `SELECT password FROM Users WHERE email = '${email}';`
const getUserId = (email) => `SELECT id FROM Users WHERE email = '${email}';`
const getUserNickname = (id) => `SELECT nickname FROM Users WHERE id = '${id}';`

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
    const email = req.body.email
    const password = req.body.password
    const isRemember = !!+req.body.isRemember
    const truePassword = (await req.db.query(getUserPassword(email)))[0].password
    if (truePassword == password) {
        const id = (await req.db.query(getUserId(email)))[0].id
        // console.log({email, password, isRemember, id})
        const sesData = await req.session.get()
        sesData.id = id
        await req.session.set(sesData)
        const nickname = (await req.db.query(getUserNickname(id)))[0].nickname
        res.send({nickname: nickname})
        // res.send({email, password, isRemember, id})
    } else {
        res.send({error: 'Incorrect login or password'})
    }
}, withDbSessions)

module.exports = [test, setTestUser, authorise]