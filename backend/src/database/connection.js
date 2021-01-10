const { Pool } = require('pg');

module.exports = (host, port, database, user, password) => {
  const db = new Pool({
    host, port, database, user, password,
  });
  db.connect();

  return db;
};
