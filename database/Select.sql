--\cd G:/3_cource/Shems/MesMusic/database
\ir mesDBstart.sql

----------------------------------------

SELECT addtime FROM posts;

SELECT nickname, postHeader, addTime FROM users
INNER JOIN posts ON posts.users_id = users.id ORDER BY addTime DESC LIMIT 10;



SELECT * FROM dialogmembers;

SELECT createDate, dialogName, users_id FROM dialogs
INNER JOIN dialogMembers ON dialogs.id = dialogMembers.dialogs_id ORDER BY createDate DESC LIMIT 10;

SELECT createDate, dialogName, nickname, isPrivate FROM dialogMembers
INNER JOIN dialogs ON dialogs.id = dialogMembers.dialogs_id
INNER JOIN users ON users.id = dialogMembers.users_id
ORDER BY createDate DESC LIMIT 10;

--DELETE FROM () WHERE

SELECT dialogName, COUNT(*), isPrivate FROM dialogMembers
INNER JOIN dialogs ON dialogs.id = dialogMembers.dialogs_id
INNER JOIN users ON users.id = dialogMembers.users_id
GROUP BY dialogName, isPrivate
HAVING (isPrivate AND (COUNT(*) >= 3));



SELECT * FROM dialogMessages;

SELECT dialogName, nickname, dialogMessages.createDate FROM dialogMessages
INNER JOIN dialogs ON dialogs.id = dialogMessages.dialogs_id
INNER JOIN users ON users.id = dialogMessages.users_id
ORDER BY createDate DESC LIMIT 10;



SELECT a.follower, b.followed FROM follows
INNER JOIN (SELECT nickname as follower, users.id as i FROM follows
INNER JOIN users ON users.id = follows.follower_id) as a ON a.i = follows.follower_id
INNER JOIN (SELECT nickname as followed, users.id as i FROM follows
INNER JOIN users ON users.id = follows.followed_id) as b ON b.i = follows.followed_id
WHERE follows.isFollowOnGroup = false
GROUP BY a.follower, b.followed LIMIT 10;

SELECT nickname as follower FROM follows
INNER JOIN users ON users.id = follows.follower_id
WHERE followed_id = 10 AND follows.isFollowOnGroup = false LIMIT 10;