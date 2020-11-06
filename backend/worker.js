const createAppWithSettings = require('./functions/createAppWithSettings')
const getJSON = require('./functions/getJSON')
//const query = require('./functions/query')
const {Pool} = require('pg')

const app = createAppWithSettings()
const PORT = 3001


const pool = new Pool({
  host: '127.0.0.1',
  port: 5432,
  database: 'avecoder',
  user: 'postgres',
  password: '0000',
})

const testDanil = getJSON('test')

app.get('/gradebook/:number', (req, res) => {
  const sql = 'SELECT * FROM employee;';
  pool.query(sql)
      .then((res1) => res.send(JSON.stringify(res1.rows)))
      .then(err => {if(err) throw err})
})

app.post('/saveMarks', (req, res) => {
  const data = req.body
  console.log(data)
  res.send(JSON.stringify({status : 200}))
})

app.listen(PORT);
