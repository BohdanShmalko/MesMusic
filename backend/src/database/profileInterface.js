module.exports = {
  getUserStatus: (id) => ({
    text: 'SELECT status FROM users WHERE id = $1',
    values: [id],
  }),

  updateUserStatus: (id, newStatus) => ({
    text: 'UPDATE users SET status = $1::varchar(50) WHERE id = $2::int8',
    values: [newStatus, id],
  }),
  getUserProfile: (id) => ({
    text: 'SELECT nickname, mainphoto, aboutMe FROM Users WHERE id = $1::int8',
    values: [id],
  }),
  getUserPhotos: (id) => ({
    text: 'SELECT path FROM Photos p INNER JOIN Users u ON u.id = p.users_id WHERE u.id = $1::int8',
    values: [id],
  }),
};
