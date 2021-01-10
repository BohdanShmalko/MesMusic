const { requestCreator } = require('shvidko');
const SQL = require('../database/authInterface');
const { withDbSessions, withSessions, withAll } = require('./helper/settings');

const loginUser = requestCreator('post', '/login', async (req, res) => {
  const { login, password } = req.body;
  const { db, session } = req;
  try {
    const { rows } = await SQL.getUserId(db, login, password);

    if (!rows.length) return res.send({ message: 'You entered an incorrect password or email', error: true }, 403);
    await session.set({ userId: rows[0].userId });
    res.send({ message: 'Welcome to your profile' }, 200);
  } catch (e) {
    console.log('\x1b[31m%s\x1b[0m', 'Error in login \n\n\n', e);
    res.send({ message: 'You enter bad data', error: true }, 400);
  }
}, withDbSessions);

const logout = requestCreator('post', '/logout', async (req, res) => {
  try {
    await req.session.delete();
    res.send({ message: 'Good Bye' }, 200);
  } catch (e) {
    console.log('\x1b[31m%s\x1b[0m', 'Error in logout \n\n\n', e);
    res.send({ message: 'Problem in server', error: true }, 500);
  }
}, withSessions);

// in future add SMS or EMAIL checker
const createuser = requestCreator('post', '/createuser', async (req, res) => {
  const {
    name, lastName, login, password,
  } = req.body;
  try {
    const { dirPath } = req.fs.set('new directory', 'firstFile');
    await SQL.addUser(req.db, name, lastName, login, password, dirPath);
  } catch (e) {
    console.log(e);
  }
  // set new user to database
  // set new user id to session storage
  // res.send({...}, 201)
}, withAll);

module.exports = [loginUser, logout, createuser];
