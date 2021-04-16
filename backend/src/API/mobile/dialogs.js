const { requestCreator } = require("shvidko");
const redisClient = require("../helpers/redisLongTocken");
const SQL = require("../../database/dialogsInterface");
const { stringToUri } = require("../helpers/images");
const checkAuthorized = require("../helpers/checkAuthorized");

const createRoom = requestCreator("post", "/mobile/createroom", (req, res) =>
  checkAuthorized(req, res, async (data) => {
    const { userId } = data;
    const { members } = req.body;
    const database = SQL(req.db);
    const defaultAvatar = "common/group";
    const defaultName = "please change dialog name";

    const [{ id: roomId }] = await database.createRoom(
      defaultAvatar,
      members.length + 1,
      defaultName
    );
    console.log(roomId);
    await database.addMember(userId, roomId);
    for (let i = 0; i < members.length; i++) {
      await database.addMember(members[i], roomId);
    }

    res.send(
      {
        id: roomId.toString(),
        uriAvatar: stringToUri(defaultAvatar),
        name: defaultName,
        lastMessage: "write something",
        lastMessageTime: new Date().toDateString(),
        howManyNotRead: 0,
      },
      200
    );
  })
);

const loadDialogs = requestCreator(
  "get",
  "/mobile/loaddialogs/:start/:end",
  (req, res) =>
    checkAuthorized(req, res, async (data) => {
      const { userId } = data;
      const { start, end } = req.params;
      const database = SQL(req.db);

      const rooms = await database.loadDialogs(start, end, userId);
      const result = [];
      for (let i = 0; i < rooms.length; i++) {
        const message = await database.lastMessage(rooms[i].id);
        if (!message.length) {
          message[0] = {
            lastMessage: "write something",
            lastMessageTime: new Date().toDateString(),
          };
        }
        result.push({
          ...rooms[i], id : rooms[i].id.toString(),
          uriAvatar: stringToUri(rooms[i].uriAvatar),
          ...message[0],
        });
      }

      res.send(result, 200);
    })
);

module.exports = [createRoom, loadDialogs];
