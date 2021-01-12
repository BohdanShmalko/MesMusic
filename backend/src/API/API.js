const authorization = require('./authorization');
const musics = require('./musics');
const profiles = require('./profiles');
const peoples = require('./peoples');

module.exports = [...authorization, ...musics, ...profiles, ...peoples];
