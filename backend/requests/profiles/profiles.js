const {requestCreator} = require('shvidko'),
      SQL = require('./SQL'),
      {withDbSessions, withAll} = require('../helpers/settings')

      //DELETE IN FUTURE
const getStatus = requestCreator('get', '/status/:id', async (req, res) => {
    const data = await req.session.get()
    const id = data.id
    const {getUserStatus} = SQL
    const [status] = await req.db.query(getUserStatus(id)).then(data => data.rows).catch(e => {throw e})

    res.send(status)
}, withDbSessions)

//learn chank technology
const getProfile = requestCreator('get', '/getprofile/:userId', (req, res) => {
    //get user inf from db where id = params.userId
    //if userId from session storage = params.userId res.send({full inf}, 202)
    //if userId from session storage != params.userId res.send({not full inf}, 202)
}, withAll)

const changeMainPhoto = requestCreator('put', '/mainphoto', (req, res) => {
    //get user id from session
    //add new photo to file storage
    //update path to main photo in database
    //res.send('all good', 200)
}, withAll)

const deleteMainPhoto = requestCreator('delete', '/mainphoto', (req, res) => {
    //get user id from session
    //add file path from db
    //delete photo from file storage
    //delete path from db
    //res.send('all good', 205)
}, withAll)

const addPhoto = requestCreator('post', '/photo', (req, res) => {
    //
}, withAll)

const deletePhoto = requestCreator('delete', '/photo/:photoId', (req, res) => {

}, withAll)

const changeName = requestCreator('put', '/name', (req, res) => {

}, withDbSessions)

const changeAboutMe = requestCreator('put', '/aboutme', (req, res) => {

}, withDbSessions)

const addNewPost = requestCreator('post', '/newpost', (req, res) => {

}, withDbSessions)

const deletePost = requestCreator('delete', '/post/:postId', (req, res) => {

}, withDbSessions)


//rename in future
const updateStatus = requestCreator('post', '/status', async (req, res) => {
    const data = await req.session.get()
    const id = data.id
    const {status} = req.body
    const {updateUserStatus} = SQL

    await req.db.query(updateUserStatus(id, status))
    .then(() => res.send('ok', 200))
    .catch((e) => {
        res.send('error', 400)
        throw e
    })
}, withDbSessions)

module.exports = [updateStatus, getProfile, changeMainPhoto, deleteMainPhoto,
    deletePhoto, changeName, changeAboutMe, addNewPost, deletePost, addPhoto,
    getStatus]