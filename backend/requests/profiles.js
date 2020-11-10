const {query} = require('../functions/DB')

const getUserStatus = (id) => `SELECT status FROM users WHERE id = ${id};`

const profiles =  [
    {
        method : 'get',
        url : '/status/:id',
        callback(req,res) {
            query(getUserStatus(req.params.id), data => {
                const response = JSON.stringify({
                    payload: data.rows[0],
                    meta: {
                        resultCode: 0
                    }
                })
                res.send(response)
            })
        }
    },
    {
        method : 'get',
        url : '/testProfile2',
        callback(req,res) {
            res.send('testProfile2')
        }
    }
]

module.exports = profiles