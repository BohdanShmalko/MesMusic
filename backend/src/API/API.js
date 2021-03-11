const authorization = require('./authorization');
const musics = require('./musics');
const profiles = require('./profiles');
const peoples = require('./peoples');
const mobileAPI = require('./mobile/mobileAPI');

module.exports = [...authorization, ...musics, ...profiles, ...peoples, ...mobileAPI];
