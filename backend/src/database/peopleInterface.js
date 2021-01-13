module.exports = (db) => ({
    getPeoples: (id) => db.query(
        `SELECT id, nickname, aboutMe, followed, mainPhoto
         FROM ((SELECT mainPhoto, users.id as "id", nickname, aboutMe, TRUE as "followed"
                FROM users
                         INNER JOIN usersfollows u on users.id = u.followed_id
                WHERE follower_id = $1::int)
               UNION ALL
               (SELECT mainPhoto, users.id as "id", nickname, aboutMe, FALSE as "followed"
                FROM users
                         LEFT JOIN
                     (SELECT users.id as "id"
                      FROM users
                               INNER JOIN usersfollows u on users.id = u.followed_id
                      WHERE follower_id = $1::int) as a ON a.id = users.id
                WHERE users.id != $1::int
                  AND a.id IS NULL)) as a
         ORDER BY nickname`,
        [id],
    ).then(data => data.rows),
    follow: (myId, followedId) => db.query(
        `INSERT INTO UsersFollows (follower_id, followed_id) VALUES ($1::int, $2::int)`,
        [myId, followedId],
    ).then(data => data.rows),
    disFollow: (myId, disFollowedId) => db.query(
        `DELETE FROM UsersFollows WHERE follower_id = $1::int AND followed_id = $2::int`,
        [myId, disFollowedId],
    ).then(data => data.rows),
});
