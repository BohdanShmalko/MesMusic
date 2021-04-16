const redisClient = require("./redisLongTocken");

const checkAuthorized = async (req, res, next) => {
  const data = await redisClient.getFromReq(req);
  if (data && data.userId) return next(data);

  return res.send({ error: "not an authorized user" }, 401);
};

module.exports = checkAuthorized;
