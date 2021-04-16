const { requestCreator } = require('shvidko');
const checkAuthorized = require('../helpers/checkAuthorized')
const redisClient = require('../helpers/redisLongTocken')
const SQL = require('../../database/peopleInterface');
const {toUri} = require('../helpers/images')

const loadAllUsers = requestCreator('get', '/mobile/loadallusers/:start/:end', (req, res) => checkAuthorized(req, res, async (data) => {
    const { userId } = data;
    const { start, end } = req.params
    const database = SQL(req.db)

    const allUsers = await database.getAllUsers(start,end,userId)
    const finalResult = []
    for (let i = 0; i < allUsers.length; i++) {
        const {id, name, defaultpath, mainphoto, about} = allUsers[i]
        const isFriend = await database.isFriend(userId, id)
        let fixAbout = about || ''
        finalResult.push({id : id.toString(), name, photoUri : toUri(defaultpath, mainphoto), about : fixAbout, isFriend : !!isFriend.length})
    }

    res.send(finalResult, 200)

}))

const loadFriends = requestCreator('get', '/mobile/loadfriends/:start/:end', (req, res) => checkAuthorized(req, res, async (data) => {
    const { userId } = data;
    const { start, end } = req.params
    const database = SQL(req.db)

    const allUsers = await database.getAllowsUsers(start,end,userId)
    const finalResult = []
    for (let i = 0; i < allUsers.length; i++) {
        const {id, name, defaultpath, mainphoto, about} = allUsers[i]
        const isFriend = await database.isFriend(userId, id)
        let fixAbout = about || ''
        finalResult.push({id : id.toString(), name, photoUri : toUri(defaultpath, mainphoto), about : fixAbout, isFriend : !!isFriend.length})
    }

    res.send(finalResult, 200)

}))

const subscribe = requestCreator('post', '/mobile/subscribe', (req, res) => checkAuthorized(req, res, async (data) => {
    const { userId } = data;
    const { whose_subscribe } = req.body
    const database = SQL(req.db)

    await database.subscribe(userId, whose_subscribe)

    res.send({}, 200)

}))

module.exports = [loadAllUsers, subscribe, loadFriends];