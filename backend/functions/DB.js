const initializeDataBase = require('./initializeDataBase')

const pool = initializeDataBase('mesmusic', 'postgres', '0000') //database, user, password

const query = (sql, callback) => pool.query(sql, (err, res) => {
    if(err) throw err
    callback(res)
})

module.exports = {query}