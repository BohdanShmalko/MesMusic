const { Shvidko } = require('shvidko');
const ClasicWS = require('../webSocket/webSocket');
const API = require('../API/API');
const options = require('./options');

const app = new Shvidko(options).listen(3001, () => console.log('start server'));

app.compose(...API);

const ws = new ClasicWS({
  httpServer: app.server, autoAcceptConnections: false,
});
