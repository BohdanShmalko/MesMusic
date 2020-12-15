const express = require('express')
const bodyParser = require('body-parser')

const createAppWithSettings = (port = 3001, callback = null, host = 'localhost') => {
  const app = express()
  app.use((req, res, next) => {
     res.header('Access-Control-Allow-Origin', '*');
    // res.setHeader("Access-Control-Allow-Methods", "*");
    // res.setHeader("Access-Control-Allow-Headers", "X-Request-With, content-type");

    //res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, X-Requested-With");
		res.setHeader("Access-Control-Allow-Methods","PUT, POST, GET, DELETE");
    next();
  });
  
  app.use(bodyParser.json());
  app.listen(port, host, callback)
  return app
}

module.exports = createAppWithSettings
