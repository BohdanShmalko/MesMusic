const {requestCreator} = require('shvidko')

//const getUserStatus = (id) => `SELECT status FROM users WHERE id = ${id};`

const test = requestCreator('get', '/user', async (req,res) => {
    // req.session.data.userId = 5
    // req.session.set(req.session.data)    
    // res.sendJSON({status: 'ok'})
    // const dialogs = await req.db.query(`SELECT * FROM dialogs`)
    // res.sendJSON(dialogs)
}, {useDB : true})

const setTestUser = requestCreator('get', '/setTestUser', async (req, res) => {
    // const id = req.session.data.userId
    // let data = await req.db.query(getUserStatus(req.params.id))
    const sesData = await req.session.get()
    sesData.id = 5
    await req.session.set(sesData)
    // let updateData = await req.session.get()
    // console.log(sesData.id)
    res.send({id: sesData.id})
}, {useDB: true, useSessions: true})

module.exports = [test, setTestUser]