module.exports = (db) => ({
  // getUserId: (login, password) => db.query(
  //   `SELECT user_id AS "userId" FROM UsersAuthentication
  //     WHERE login = $1::varchar(255) AND password = $2::char(32)`,
  //   [login, password],
  // ).then(data => data.rows),
  getUserPassword: (email) => db.query(
    `SELECT password AS "truePassword" FROM Users WHERE email = $1::VARCHAR(50)`,
    [email],
  ).then(data => data.rows),
  getUserId: (email) => db.query(
    `SELECT id FROM Users WHERE email = $1::VARCHAR(50)`,
    [email],
  ).then(data => data.rows),
  getUserNickname: (id) => db.query(
    `SELECT nickname FROM Users WHERE id = $1::int`,
    [id],
  ).then(data => data.rows),


  addUser: async (name, lastName, login, password, defaultPath) => {
    const insertRes = await db.query(
      `INSET INTO Users (name, lastName, defaultPath) 
      VALUES ($1::varchar(50), $2::varchar(50), $3::varchar(255))`,
      [name, lastName, defaultPath],
    ).then(data => data.rows);
    console.log(insertRes);
  },
});
