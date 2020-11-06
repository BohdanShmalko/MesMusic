const {Pool} = require('pg')

const initializeDataBase = (database, user, password) => {
  const host = '127.0.0.1'
  const port = 5432

    const pool = new Pool({ 
      host, port, database, user, password
      });
    return pool
}

module.exports = initializeDataBase