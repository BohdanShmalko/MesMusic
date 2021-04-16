const authorization = require('./authorization');
const musics = require('./musics');
const profiles = require('./profiles');
const peoples = require('./peoples');
const files = require('./files');
const mobileAPI = require('./mobile/mobileAPI');

module.exports = [...authorization, ...musics, ...profiles, ...peoples, ...mobileAPI, ...files];
