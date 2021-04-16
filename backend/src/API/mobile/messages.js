const { requestCreator } = require("shvidko");
const redisClient = require("../helpers/redisLongTocken");
const SQL = require("../../database/messageInterface");
const { toUri, stringToUri } = require("../helpers/images");
const checkAuthorized = require("../helpers/checkAuthorized");
const saveFileBase64 = require("../helpers/saveFileBase64");
const generateName = require("../helpers/generator");

const loadMessagePage = requestCreator(
  "get",
  "/mobile/loadmessagepage/:roomId",
  (req, res) =>
    checkAuthorized(req, res, async (data) => {
      const { userId } = data;
      const { roomId } = req.params;
      const database = SQL(req.db);

      const [result] = await database.loadRoomsInf(roomId);
      const rowUris = await database.loadUsersUris(roomId);
      let [{ last_action }] = await database.lastAction(roomId);
      const rowMessages = await database.loadMessages(roomId, 0, 100);
      const usersUris = rowUris.map((obj) => ({
        id: obj.id.toString(),
        uri: stringToUri(obj.uri),
      }));
      const messages = rowMessages.map((msg) => ({
        ...msg,
        id: msg.id.toString(),
        isMyMessage: userId == msg.userId,
        status: "revised",
        userId: msg.userId.toString(),
      }));
      if (!last_action) last_action = new Date().toDateString();

      res.send(
        {
          ...result,
          dialogId: result.dialogId.toString(),
          groupUri: stringToUri(result.groupUri),
          last_action,
          usersUris,
          messages,
          myId: userId.toString(),
        },
        200
      );
    })
);

const changeRoomPhoto = requestCreator(
  "post",
  "/mobile/changeroomphoto",
  (req, res) =>
    checkAuthorized(req, res, async (data) => {
      const { userId } = data;
      const { photo, roomId } = req.body;
      const database = SQL(req.db);
      const [{ uriAvatar, groupPath }] = await database.getRoomPhoto(roomId);
      const fileName = generateName();
      if (uriAvatar === "common/group") {
        const { dirPath } = req.fs.set("new dir");
        saveFileBase64(`${dirPath}/${fileName}`, photo);
        const photoUri = dirPath.split("/fileStorrage/")[1] + "/" + fileName;
        await database.changeRoomPhoto(roomId, photoUri, dirPath);
        return res.send({ uriAvatar: stringToUri(photoUri) });
      }
      saveFileBase64(`${groupPath}/${fileName}`, photo);
      const photoUri = groupPath.split("/fileStorrage/")[1] + "/" + fileName;
      await database.changeRoomPhoto(roomId, photoUri, groupPath);
      req.fs.delete(groupPath + '/' + uriAvatar.split('/')[1])
      return res.send({ uriAvatar: stringToUri(photoUri) });
    })
);

module.exports = [loadMessagePage, changeRoomPhoto];
