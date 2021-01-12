const { requestCreator } = require('shvidko');
const SQL = require('../database/musicInterface');

const getUserMusic = requestCreator('get', '/music/:userId', (req, res) => {
  res.send(`You enter ${req.params.userId} user id`);
});

const loadMusic = requestCreator('post', '/loadmusic', (req, res) => {
});

const addMusic = requestCreator('post', '/addmusic', (req, res) => {
});

const deleteMusic = requestCreator('delete', '/music:/musicId', (req, res) => {

});

const searchMusic = requestCreator('get', '/searchmusic/:musicName', (req, res) => {

});

module.exports = [getUserMusic, loadMusic, addMusic, deleteMusic, searchMusic];
