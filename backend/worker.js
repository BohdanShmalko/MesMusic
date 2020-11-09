const createAppWithSettings = require('./functions/createAppWithSettings')
const getJSON = require('./functions/getJSON')
const {query} = require('./functions/DB')

const app = createAppWithSettings() 
const PORT = 3001

const testDanil = getJSON('test')

app.get('/gradebook/:number', (req, res) => {
  const sql = `SELECT * FROM hours`
  query(sql, data => res.send(JSON.stringify(data.rows)))
})

app.post('/saveMarks', (req, res) => {
  const data = req.body
  console.log(data)
  res.send(JSON.stringify({status : 200}))
})

app.listen(PORT);
