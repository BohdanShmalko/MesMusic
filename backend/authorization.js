const {requestCreator} = require('shvidko')

//const getUserStatus = (id) => `SELECT status FROM users WHERE id = ${id};`

const test = requestCreator('get', '/user', async (req,res) => {
    // req.session.data.userId = 5
    // req.session.set(req.session.data)    
    // res.sendJSON({status: 'ok'})
    // const dialogs = await req.db.query(`SELECT * FROM dialogs`)
    // res.sendJSON(dialogs)
}, {useDB : true})

module.exports = [test]