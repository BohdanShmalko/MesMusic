const reqCreator = require('../functions/requestCreator')

const getUserStatus = (id) => `SELECT status FROM users WHERE id = ${id};`

// const getStatus = reqCreator('get', '/status/:id', (req,res) => {
//     query(getUserStatus(req.params.id), data => {
//         res.sendJSON({
//             payload: data.rows[0],
//             meta: {
//                 resultCode: 0
//             }
//         })
//     })
// })

const setStatus = reqCreator('post', '/status', (req,res) => {
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
}, true)

module.exports = [ setStatus]