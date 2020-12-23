const {requestCreator} = require('shvidko')

const getUserStatus = (id) => `SELECT status FROM users WHERE id = ${id};`
// const updateUserStatus = (id, newStatus) => `UPDATE users SET status = ${newStatus} WHERE id = ${id};`

const getStatus = requestCreator('get', '/status/:id', async (req, res) => {
    const data = await req.session.get()
    const id = data.id
    const status = await req.db.query(getUserStatus(id))
    res.send(status[0])
}, {useDB:true, useSessions:true})

// const getStatus = requestCreator('get', '/status/:id', async (req,res) => {
//     let data = await req.db.query(getUserStatus(req.params.id))
//     let sesData = await req.session.get()
//     sesData.data = data
//     await req.session.set(sesData)
//     let updateData = await req.session.get()
//     res.send(updateData)
// }, {useDB:true, useSessions:true})

const updateStatus = requestCreator('post', '/status', async (req, res) => {
    const data = await req.session.get()
    const id = data.id
    console.log(id)
    //const status = req.body.status
    //await req.db.query(updateUserStatus(id, status))
    res.send('ok')
}, {useDB:true, useSessions:true})

module.exports = [ updateStatus, getStatus]