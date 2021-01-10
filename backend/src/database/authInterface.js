module.exports = {
  getUserId: (db, login, password) => db.query(
    `SELECT user_id AS "userId" FROM UsersAuthentication 
      WHERE login = $1::varchar(255) AND password = $2::char(32)`,
    [login, password],
  ),

  addUser: async (db, name, lastName, login, password, defaultPath) => {
    const insertRes = await db.query(
      `INSET INTO Users (name, lastName, defaultPath) 
      VALUES ($1::varchar(50), $2::varchar(50), $3::varchar(255))`,
      [name, lastName, defaultPath],
    );
    console.log(insertRes);
  },
};
