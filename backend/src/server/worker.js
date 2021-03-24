const shvidko = require('shvidko');
const ClasicWS = require('../webSocket/webSocket');
const API = require('../API/API');
const options = require('./options');

const app = shvidko.createServer(options);
app.listen(3001, () => console.log('start server'), '192.168.0.104');

app.compose(...API);

const ws = new ClasicWS({
  httpServer: app.server, autoAcceptConnections: false,
});
