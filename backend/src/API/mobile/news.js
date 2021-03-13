const { requestCreator } = require('shvidko');
const redisClient = require('../helpers/redisLongTocken')
const SQL = require('../../database/authInterface');

const loadnewspost = requestCreator('get', '/mobile/loadnewspost/:start/:end', async (req, res) => {
    //send Array<{
        // id : number, uris : Array<{id : number, uri : string}>
        // name : string
        // likeCont : number
        // description : string
        // publicationTime : string
        // isLike : boolean
        // userUri : string
        // isAdded : boolean
        // useMenu : boolean //isMyPost
    // }>}>
})

const likepost = requestCreator('get', '/mobile/likepost/:postId', async (req, res) => {

})

const unlikepost = requestCreator('get', '/mobile/unlikepost/:postId', async (req, res) => {

})

const addyourselfpost = requestCreator('get', '/mobile/addyourselfpost/:postId', async (req, res) => {

})

const deleteyourselfpost = requestCreator('delete', '/mobile/deleteyourselfpost/:postId', async (req, res) => {

})

module.exports = [loadnewspost, likepost, unlikepost, addyourselfpost, deleteyourselfpost];