--\cd G:/3_cource/Shems/MesMusic/database
--\cd D:/Study/Shems/MesMusic/database
\ir mesDBstart.sql

----------------------------------------

SELECT name, postHeader, addTime FROM users
INNER JOIN posts ON posts.users_id = users.id ORDER BY addTime DESC LIMIT 10;

SELECT mainPhoto, nickname, aboutMe FROM users
FULL JOIN usersfollows u on users.id = u.followed_id
WHERE users.id != 1 AND NOT u.follower_id = 1;

SELECT mainPhoto, nickname, aboutMe, followed FROM
(SELECT mainPhoto, nickname, aboutMe, FALSE as "followed" FROM users
INNER JOIN usersfollows u on users.id != u.followed_id WHERE users.id != 1) as a
UNION ALL
(SELECT mainPhoto, nickname, aboutMe, TRUE as "followed" FROM users
INNER JOIN usersfollows u on users.id = u.followed_id WHERE users.id != 1)
ORDER BY nickname;

SELECT mainPhoto, nickname, aboutMe FROM users
FULL JOIN usersfollows u on users.id = u.followed_id
WHERE users.id != 1 AND u.follower_id = 1;

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



SELECT a.follower, b.followed FROM usersfollows
INNER JOIN (SELECT nickname as follower, users.id as i FROM usersfollows
INNER JOIN users ON users.id = usersfollows.follower_id) as a ON a.i = usersfollows.follower_id
INNER JOIN (SELECT nickname as followed, users.id as i FROM usersfollows
INNER JOIN users ON users.id = usersfollows.followed_id) as b ON b.i = usersfollows.followed_id

GROUP BY a.follower, b.followed LIMIT 10;

SELECT nickname as follower FROM usersfollows
INNER JOIN users ON users.id = usersfollows.follower_id
WHERE followed_id = 10 AND usersfollows.isFollowOnGroup = false LIMIT 10;



SELECT status FROM users WHERE id = 5;
UPDATE users SET status = '{newStatus}' WHERE id = 5;