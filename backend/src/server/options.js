const { ShvidkoRedisClient } = require('shvidko-redis');
const fs = require('fs');
const dbConnection = require('../database/connection');

const db = dbConnection('127.0.0.1', 5432, 'mesmusic', 'mesuser', '1111');

module.exports = {
  db,
  standartHeaders: {
    'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS, PUT',
    'Access-Control-Allow-Headers': 'Accept, Content-Type',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  },
  sessions: {
    time: 60 * 60 * 3,
    client: ShvidkoRedisClient(),
  },
  fileStorage: {
    deffaultPath: `${__dirname}/../../fileStorrage`,
  },
  // secure: {
  //   key: fs.readFileSync(`${__dirname}/cert/key.pem`),
  //   cert: fs.readFileSync(`${__dirname}/cert/cert.pem`),
  // },
};
