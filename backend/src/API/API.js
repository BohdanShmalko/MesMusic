const authorization = require('./authorization');
const musics = require('./musics');
const profiles = require('./profiles');

module.exports = [...authorization, ...musics, ...profiles];
