const {query} = require('../functions/DB')
const reqCreator = require('../functions/requestCreator')

const getUserStatus = (id) => `SELECT status FROM users WHERE id = ${id};`

const getStatus = reqCreator('get', '/status/:id', (req,res) => {
    query(getUserStatus(req.params.id), data => {
        res.sendJSON({
            payload: data.rows[0],
            meta: {
                resultCode: 0
            }
        })
    })
})

const testPage = reqCreator('get', '/testProfile2', (req, res) => {
    res.send('testProfile2')
})

module.exports = [getStatus, testPage]