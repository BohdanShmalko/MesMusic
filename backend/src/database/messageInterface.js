module.exports = (db) => ({
  loadRoomsInf: (roomId) =>
    db
      .query(
        `SELECT id AS "dialogId", uriAvatar AS "groupUri", name FROM rooms WHERE id = $1;`,
        [roomId]
      )
      .then((data) => data.rows),
  loadUsersUris: (roomId) =>
    db
      .query(
        `SELECT users.id AS "id", users.mainPhoto AS "uri"
FROM users 
    INNER JOIN roomMembers ON roomMembers.user_id = users.id
    INNER JOIN rooms ON roomMembers.room_id = rooms.id
    WHERE rooms.id = $1;`,
        [roomId]
      )
      .then((data) => data.rows),
  lastAction: (roomId) =>
    db
      .query(
        `
    SELECT time AS "last_action" FROM roomMessages WHERE room_id = $1 ORDER BY id DESC LIMIT 1;
    `,
        [roomId]
      )
      .then((data) => data.rows),
  loadMessages: (roomId, start, end) =>
    db
      .query(
        `SELECT users.id AS "userId", roomMessages.id AS "id", roomMessages.message
        FROM users INNER JOIN roomMessages ON roomMessages.user_id = users.id
        WHERE roomMessages.room_id = $1 ORDER BY id DESC LIMIT $2 OFFSET $3;`,
        [roomId, end - start, start]
      )
      .then((data) => data.rows),
  getRoomMembers: (roodId) =>
    db
      .query(`SELECT user_id AS "id" FROM roomMembers WHERE room_id = $1;`, [
        roodId,
      ])
      .then((data) => data.rows),
  saveMessage: (roomId, message, userId) =>
    db
      .query(
        `INSERT INTO RoomMessages (user_id, room_id, message) VALUES ($1, $2, $3) RETURNING id;`,
        [userId, roomId, message]
      )
      .then((data) => data.rows),
  changeRoomPhoto: (roomId, path, dirPath) => db.query(`UPDATE rooms SET uriAvatar = $1, default_path = $2 WHERE id = $3;`, [path, dirPath, roomId]),
  getRoomPhoto: (roomId) =>
    db
      .query(`SELECT uriAvatar AS "uriAvatar", default_path AS "groupPath" FROM rooms WHERE id = $1;`, [
        roomId,
      ])
      .then((data) => data.rows),
  getUserPath: (userId) =>
    db
      .query(`SELECT defaultPath AS "defaultPath" FROM users WHERE id = $1`, [
        userId,
      ])
      .then((data) => data.rows),
});
