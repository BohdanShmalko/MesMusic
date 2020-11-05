const {Pool} = require('pg')

class DB {
  constructor(pool) {
    this.pool = pool
  }
  query(sql) {
    let result;
    this.pool.query(sql, (err, res) => {
        if (err) {
          throw err;
        }
        result = res
    });

    return result
  }
}

const initializeDataBase = () => {
    const pool = new Pool({
        host: '127.0.0.1',
        port: 5432,
        database: 'mesMusic',
        user: 'musicWorker',
        password: '666',
      });
      
    //   pool.query(``, (err, res) => {
    //     if (err) {
    //       throw err;
    //     }
    //     console.dir({ res });
    //     console.table(res.fields);
    //     console.table(res.rows);
    //     pool.end();
    //   });
    return pool
}

const pgDB = new DB(initializeDataBase())

module.exports = pgDB