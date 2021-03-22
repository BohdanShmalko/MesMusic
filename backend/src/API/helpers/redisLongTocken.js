const redis = require('redis')

const TOKEN_LENGTH = 100,
      ALPHA_UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      ALPHA_LOWER = 'abcdefghijklmnopqrstuvwxyz',
      ALPHA = ALPHA_UPPER + ALPHA_LOWER,
      DIGIT = '0123456789',
      ALPHA_DIGIT = ALPHA + DIGIT

const generateToken = () => {
  const base = ALPHA_DIGIT.length;
  let key = '';
  for (let i = 0; i < TOKEN_LENGTH; i++) {
    const index = Math.floor(Math.random() * base);
    key += ALPHA_DIGIT[index];
  }
  return key;
}

const redisClient = redis.createClient()

const get = (token) => {
    return new Promise((resolve, reject) => {
        redisClient.get(token, (err, data) => {
            if(err) {
                reject(err)
                return
            }
            resolve(JSON.parse(data))
           })
      });
    }

// const checkToken = async () => {
//     let token = generateToken()
//     let err = false
//     const data = await get(token).catch(() => {err = true})
//     if (err || data === null) return checkToken()
//     return token
// }


const createToken = async () => {
    let token = generateToken()
    await redisClient.set(token, JSON.stringify({}), err => {
        if(err) throw err 
    })
    return token
}

const setFromReq = async (req, newData) => {
    const token = req.headers['x-access-token']
    await redisClient.set(token, JSON.stringify(newData), err => {
        if(err) throw err 
    })
}

const getFromReq = async (req) => {
    const token = req.headers['x-access-token']
    const data = await get(token)
    return data
}

const deleteToken = async (req) => {
    const token = req.headers['x-access-token']
    await redisClient.del(token, err => {
        if(err) throw err
    })
}

module.exports = {createToken, getFromReq, setFromReq, deleteToken}