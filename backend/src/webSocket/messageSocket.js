const { ShvidkoRedisClient } = require("shvidko-redis");
const dbConnection = require("../database/connection");
const SQL = require("../database/messageInterface");
const db = dbConnection("127.0.0.1", 5432, "mesmusic", "mesuser", "1111");
const database = SQL(db);
const usersSockets = {
  //roomId : {
  //  "id number" : {"token" : socket}
  //}
};

const getSessionInf = (token) => ShvidkoRedisClient().get(token);

module.exports = async (io) => {
  io.on("connection", async (socket) => {
    const { roomId } = socket.handshake.query;
    const { token } = socket.handshake.auth;
    console.log(`user ${token} is connect`);
    const { userId } = await getSessionInf(token);
    if (!usersSockets[roomId]) usersSockets[roomId] = {};
    if (!usersSockets[roomId][userId]) usersSockets[roomId][userId] = {};
    usersSockets[roomId][userId][token] = socket;
    socket.on("message", async (msg) => {
      const [{ id: msgId }] = await database.saveMessage(roomId, msg, userId);
      for (let member in usersSockets[roomId]) {
        for (let token in usersSockets[roomId][member]) {
          usersSockets[roomId][member][token].send(
            JSON.stringify({
              userId: userId.toString(),
              message: msg,
              id: msgId.toString(),
              isMyMessage: member == userId,
              status: "sent",
            })
          );
        }
      }
    });
    socket.on("close", (msg) => {
      console.log("user is disconnect");
      delete usersSockets[roomId][userId][token];
    });
  });
};
