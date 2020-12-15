const {requestCreator} = require('shvidko')

const getUserStatus = (id) => `SELECT status FROM users WHERE id = ${id};`

const getStatus = requestCreator('get', '/status/:id', async (req,res) => {
    let data = await req.db.query(getUserStatus(req.params.id))
    // query(getUserStatus(req.params.id), data => {
    //     res.sendJSON({
    //         payload: data.rows[0],
    //         meta: {
    //             resultCode: 0
    //         }
    //     })
    // })
    let sesData = await req.session.get()
    sesData.data = data
    await req.session.set(sesData)
    let updateData = await req.session.get()
    res.send(updateData)
}, {useDB:true, useSessions:true})

const setStatus = requestCreator('post', '/status', (req,res) => {
    console.dir(req.body)
    console.dir(req.headers.cookie)
    //res.send("ok")
    
    // query(getUserStatus(req.params.id), data => {
    //     res.sendJSON({
    //         payload: data.rows[0],
    //         meta: {
    //             resultCode: 0
    //         }
    //     })
    // })
})

module.exports = [ setStatus, getStatus]