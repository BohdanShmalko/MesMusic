module.exports = (db) => ({
  createRoom: (uriAvatar, membersCount, name) =>
    db
      .query(
        `INSERT INTO rooms (uriAvatar, members_count, name) VALUES ($1, $2, $3) RETURNING id`,
        [uriAvatar, membersCount, name]
      )
      .then((data) => data.rows),
  addMember: (memberId, roomId) =>
    db
      .query(`INSERT INTO RoomMembers (user_id, room_id) VALUES ($1, $2);`, [
        memberId,
        roomId,
      ])
      .then((data) => data.rows),
  getUserName: (userId) =>
    db
      .query(`SELECT name From users WHERE id = $1;`, [userId])
      .then((data) => data.rows),
  loadDialogs: (start, end, userId) =>
    db
      .query(
        `SELECT rooms.id, rooms.uriAvatar AS "uriAvatar", rooms.name, roomMembers.numbers AS "howManyNotRead"
        FROM rooms
        INNER JOIN roomMembers ON rooms.id = roomMembers.room_id
        WHERE roomMembers.user_id = $1 ORDER BY rooms.id DESC LIMIT $2 OFFSET $3;`,
        [userId, end - start, start]
      )
      .then((data) => data.rows),
  lastMessage: (room_id) =>
    db
      .query(
        `SELECT message AS "lastMessage", time AS "lastMessageTime"
                FROM roomMessages
                WHERE room_id = $1 ORDER BY id DESC LIMIT 1;`,
        [room_id]
      )
      .then((data) => data.rows),
});
