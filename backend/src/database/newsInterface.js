module.exports = (db) => ({
  loadNews: (start, end, user_id) =>
    db.query(
      `SELECT 
       posts.id as "id", posts.name as "name", posts.likeCount as "likeCount",
       posts.description as "description", posts.publicationTime as "publicationTime",
       news.isLike as "isLike", users.mainPhoto as "userUri", news.isAdded as "isAdded"
       FROM news
       INNER JOIN posts ON news.post_id = posts.id
       INNER JOIN users ON posts.user_id = users.id
        WHERE news.user_id = $1 LIMIT $1 $2;`
    ),
  postUrls: (postId) => db.query(
      `SELECT id, file_path as "uri" FROM post_files`
  )
});
