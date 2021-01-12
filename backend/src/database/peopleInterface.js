module.exports = (db) => ({
    getPeoples: (id) => db.query(
            `SELECT mainPhoto, id, nickname, aboutMe, followed
             FROM (SELECT mainPhoto, users.id as "id", nickname, aboutMe, FALSE as "followed"
                   FROM users
                            INNER JOIN usersfollows u on users.id != u.followed_id
                   WHERE users.id != $1::int) as a
             UNION ALL
             (SELECT mainPhoto, users.id as "id", nickname, aboutMe, TRUE as "followed"
              FROM users
                       INNER JOIN usersfollows u on users.id = u.followed_id
              WHERE users.id != $1::int)
             ORDER BY nickname;`,
        [id],
    ).then(data => data.rows),
});
