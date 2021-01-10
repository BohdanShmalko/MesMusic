const { requestCreator } = require('shvidko');
const SQL = require('../database/musicInterface');
const { withAll } = require('./helper/settings');

const getUserMusic = requestCreator('get', '/music/:userId', (req, res) => {
  res.send(`You enter ${req.params.userId} user id`);
}, withAll);

const loadMusic = requestCreator('post', '/loadmusic', (req, res) => {
}, withAll);

const addMusic = requestCreator('post', '/addmusic', (req, res) => {
}, withAll);

const deleteMusic = requestCreator('delete', '/music:/musicId', (req, res) => {

}, withAll);

const searchMusic = requestCreator('get', '/searchmusic/:musicName', (req, res) => {

});

module.exports = [getUserMusic, loadMusic, addMusic, deleteMusic, searchMusic];
