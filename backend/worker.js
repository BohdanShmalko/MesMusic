const createAppWithSettings = require('./functions/createAppWithSettings')
const getJSON = require('./functions/getJSON')
const query = require('./functions/query')

const app = createAppWithSettings()
const PORT = 3001

const testDanil = getJSON('test')

app.get('/gradebook/:number', (req, res) => {

  res.send(JSON.stringify(testDanil.messages[req.params.number]))
})

app.post('/saveMarks', (req, res) => {
  const data = req.body
  console.log(data)
  res.send(JSON.stringify({status : 200}))
})

app.listen(PORT);
