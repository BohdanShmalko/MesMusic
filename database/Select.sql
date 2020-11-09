psql -U postgres
CREATE DATABASE mesMusic;
\c mesmusic
\d posts

SELECT addtime FROM posts;

SELECT nickname, postHeader, addTime FROM posts
INNER JOIN users ON posts.users_id = users.id;

SELECT nickname, postHeader, addTime FROM users
INNER JOIN posts ON posts.users_id = users.id ORDER BY addTime LIMIT 10;