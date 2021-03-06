const { requestCreator } = require('shvidko');
const SQL = require('../database/profileInterface');

// DELETE IN FUTURE
const getStatus = requestCreator('get', '/status/:id', async (req, res) => {
  const data = await req.params;
  const { id } = data;
  const { getUserStatus } = SQL;
  const [status] = await req.db.query(getUserStatus(id))
    .then((dbData) => dbData.rows).catch((e) => { throw e; });
  res.send(status);
});

// learn chank technology
const getProfile = requestCreator('get', '/getProfile/:userId', async (req, res) => {
  const data = await req.params;
  const { userId } = data;
  const { getUserProfile } = SQL;
  const [profile] = await req.db.query(getUserProfile(userId)).then((data) => data.rows);
  res.send(profile);
  // get user inf from db where id = params.userId
  // if userId from session storage = params.userId res.send({full inf}, 202)
  // if userId from session storage != params.userId res.send({not full inf}, 202)
});

const getUserPhotos = requestCreator('get', '/getUserPhotos/:userId', async (req, res) => {
  const data = await req.params;
  const { userId } = data;
  const { getUserPhotos } = SQL;
  let photos = await req.db.query(getUserPhotos(userId)).then((data) => data.rows);
  photos = photos.map((val) => val.path);
  res.send(photos);
});

const changeMainPhoto = requestCreator('put', '/mainphoto', (req, res) => {
  // get user id from session
  // add new photo to file storage
  // update path to main photo in database
  // res.send('all good', 200)
});

const deleteMainPhoto = requestCreator('delete', '/mainphoto', (req, res) => {
  // get user id from session
  // add file path from db
  // delete photo from file storage
  // delete path from db
  // res.send('all good', 205)
});

const addPhoto = requestCreator('post', '/photo', (req, res) => {
  //
});

const deletePhoto = requestCreator('delete', '/photo/:photoId', (req, res) => {

});

const changeName = requestCreator('put', '/name', (req, res) => {

});

const changeAboutMe = requestCreator('put', '/aboutme', (req, res) => {

});

const addNewPost = requestCreator('post', '/newpost', (req, res) => {

});

const deletePost = requestCreator('delete', '/post/:postId', (req, res) => {

});

// rename in future
const updateStatus = requestCreator('post', '/status', async (req, res) => {
  const data = await req.session.get();
  const { id } = data;
  const { status } = req.body;
  const { updateUserStatus } = SQL;

  await req.db.query(updateUserStatus(id, status))
    .then(() => res.send('ok', 200))
    .catch((e) => {
      res.send('error', 400);
      throw e;
    });
});

module.exports = [updateStatus, getProfile, changeMainPhoto, deleteMainPhoto,
  deletePhoto, changeName, changeAboutMe, addNewPost, deletePost, addPhoto,
  getStatus, getUserPhotos];
