const { requestCreator } = require('shvidko');
const validate = require('../helpers/validate');
const passwordSecure = require('../helpers/passwordSecure');
const redisClient = require('../helpers/redisLongTocken')
const SQL = require('../../database/authInterface');

const createUser = requestCreator('post', '/mobile/createuser', async (req, res) => {
  const userData = {...req.body}
  //validate data (if error 400...)
  const validateError = validate(userData)
  if(validateError) {
    res.send({error : validateError}, 422)
    return
  }
  

  //create dir
  const {dirPath} = req.fs.set('new user')

  //encript password
  userData.password = passwordSecure.encript(userData.password)

  //add to database (if error 500...)
  const database = SQL(req.db)
  const rows = await database.addUser({...userData, defaultPath : dirPath})
  if (!rows.length) {
    res.send({error : 'server database error'}, 500)
    return
  }

  //add to redis, get tocken (if error 500...)
  const token = await redisClient.createToken()
  await redisClient.setFromReq(req, {id : rows[0].id})

  //send tocken 200...
  
  res.send({token}, 201)
})

const login = requestCreator('post', '/mobile/login', async (req, res) => {
  //check data from db (if error 400 or 500)
  const {email, password} = req.body
  const database = SQL(req.db)
  const pwdObj = await database.getUserPassword(email)
  if (pwdObj.length && passwordSecure.decript(pwdObj[0].truePassword) === password) {
    const token = await redisClient.createToken()
    await redisClient.setFromReq(req, {id : pwdObj[0].id})
    res.send({token}, 200)
    return
  }
  res.send({error : 'incorrect email or password'}, 401)
  //add to redis, get tocken (if error 500...)
  //send tocken 200...
})

const logout = requestCreator('put', '/mobile/logout', async (req, res) => {
  await redisClient.deleteToken(req)
  res.send({}, 200)
})

const forgetPassword = requestCreator('post', '/mobile/forgetpassword', (req, res) => {
  //check email from db (if error 400 or 500)
  //send to email link to change password (if error 500) + web page in changing password
  //send tocken 200...
})

module.exports = [createUser, login, forgetPassword, logout];
