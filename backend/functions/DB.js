const initializeDataBase = require('./initializeDataBase')

const pool = initializeDataBase('gradebook', 'postgres', '1234') //database, user, password

const query = (sql, callback) => pool.query(sql, (err, res) => {
    if(err) throw err
    callback(res)
})

module.exports = {query}