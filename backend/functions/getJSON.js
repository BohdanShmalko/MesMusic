const path = require('path');
const fs = require("fs");

const getJSON = fileName => JSON.parse(fs.readFileSync(`${__dirname}/../json/${fileName}.json`, "utf8"))

module.exports = getJSON
