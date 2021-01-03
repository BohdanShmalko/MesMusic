const {requestCreator} = require('shvidko'),
      {profileSQL} = require('./SQL'),
      {complex} = require('./helpers/settings')

const getStatus = requestCreator('get', '/status/:id', async (req, res) => {
    const data = await req.session.get()
    const id = data.id
    const {getUserStatus} = profileSQL
    const [status] = await req.db.query(getUserStatus(id)).then(data => data.rows).catch(e => {throw e})

    res.send(status)
}, complex)

const updateStatus = requestCreator('post', '/status', async (req, res) => {
    const data = await req.session.get()
    const id = data.id
    const {status} = req.body
    const {updateUserStatus} = profileSQL

    await req.db.query(updateUserStatus(id, status))
    .then(() => res.send('ok', 200))
    .catch((e) => {
        res.send('error', 400)
        throw e
    })
}, complex)

module.exports = [updateStatus, getStatus]