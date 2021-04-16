const redis = require("redis");
const generateToken = require("./generator")

const redisClient = redis.createClient();

const get = (token) => {
  return new Promise((resolve, reject) => {
    redisClient.get(token, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(JSON.parse(data));
    });
  });
};

// const checkToken = async () => {
//     let token = generateToken()
//     let err = false
//     const data = await get(token).catch(() => {err = true})
//     if (err || data === null) return checkToken()
//     return token
// }

const createToken = async () => {
  let token = generateToken();
  await redisClient.set(token, JSON.stringify({}), (err) => {
    if (err) throw err;
  });
  return token;
};

const setFromReq = async (req, newData) => {
  const token = req.headers["x-access-token"];
  await redisClient.set(token, JSON.stringify(newData), (err) => {
    if (err) throw err;
  });
};

const setFromToken = async (token, newData) => {
  await redisClient.set(token, JSON.stringify(newData), (err) => {
    if (err) throw err;
  });
};

const getFromReq = async (req) => {
  const token = req.headers["x-access-token"];
  const data = await get(token);
  return data;
};

const deleteToken = async (req) => {
  const token = req.headers["x-access-token"];
  await redisClient.del(token, (err) => {
    if (err) throw err;
  });
};

module.exports = {
  createToken,
  getFromReq,
  setFromReq,
  deleteToken,
  setFromToken,
};
