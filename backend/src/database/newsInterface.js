module.exports = (db) => ({
    loadNews: (start, end, user_id) => db.query(
        `SELECT(SELECT post_id AS "post" FROM News WHERE user_id = $1 LIMIT $2, $3`, [user_id, start, end]).then(data => data.rows),

})