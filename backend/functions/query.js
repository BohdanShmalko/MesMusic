const initializeDataBase = require('initializeDataBase')

const pool = initializeDataBase()

const query = (sql) => {
    let result;
    pool.query(sql, (err, res) => {
        if (err) {
          throw err;
        }
        result = res
    });

    return result
}

module.exports = query