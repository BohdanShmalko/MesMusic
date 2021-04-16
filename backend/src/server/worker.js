const shvidko = require('shvidko');
// const ClasicWS = require('../webSocket/webSocket');
const messageSocket = require('../webSocket/messageSocket')
const API = require('../API/API');
const options = require('./options');

const app = shvidko.createServer(options);
app.listen(options.port, () => console.log('start server'), options.host);

messageSocket(require('socket.io')(app.server))

app.compose(...API);

