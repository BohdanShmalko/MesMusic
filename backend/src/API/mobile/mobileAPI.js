const authorization = require('./authorization');
const comments = require('./comments');
const dialogs = require('./dialogs');
const likes = require('./likes');
const messages = require('./messages');
const news = require('./news');
const profile = require('./profile');
const settings = require('./settings');
const users = require('./users');

module.exports = [...authorization, ...comments, ...dialogs, ...likes, ...messages, ...news, ...profile, ...settings, ...users];
