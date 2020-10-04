const http = require('http');

const PORT = 3001
const PID = process.pid

http
  .createServer((req,res) => {
    res.end(`this is node.js page`)
  })
  .listen(PORT, () => {
    console.log(`Server start in port ${PORT}, PID : ${PID}`);
  })
