const {requestCreator} = require('shvidko');
const checkAuthorized = require('../helpers/checkAuthorized')
const redisClient = require('../helpers/redisLongTocken')
const SQL = require('../../database/authInterface');


const loadnewspost = requestCreator('get', '/mobile/loadnewspost/:start/:end', (req, res) => checkAuthorized(req, res, async (data) => {
    const { id } = data;
    const { start, end } = req.params
}))

const likepost = requestCreator('get', '/mobile/likepost/:postId', async (req, res) => {

})

const unlikepost = requestCreator('get', '/mobile/unlikepost/:postId', async (req, res) => {

})

const addyourselfpost = requestCreator('get', '/mobile/addyourselfpost/:postId', async (req, res) => {

})

const deleteyourselfpost = requestCreator('delete', '/mobile/deleteyourselfpost/:postId', async (req, res) => {

})

module.exports = [loadnewspost, likepost, unlikepost, addyourselfpost, deleteyourselfpost];