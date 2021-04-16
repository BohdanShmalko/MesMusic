---------- INSERTS ------------

-- CREATE NEW USER WITH SETTINGS
INSERT INTO Users (name, lastName, mainPhoto, aboutMe, defaultPath, email, password, nickname)
VALUES ('testName', 'testLastName', '/testPhoto', 'testAboutMe', '/defPath', 'email@gmail.com', 'testPassword', 'test nick');

INSERT INTO Users (name, lastName, mainPhoto, aboutMe, defaultPath, email, password, nickname)
VALUES ('testName2', 'testLastName2', '/testPhoto2', 'testAboutMe2', '/defPath2', 'email2@gmail.com', 'testPassword2', 'test nick2');

INSERT INTO Settings (user_id) VALUES (1);

-- CREATE NEW POST
INSERT INTO Posts (user_id,name,description) VALUES (1, 'testPost', 'testDescription');
INSERT INTO Post_files (post_id,file_path,type) VALUES (1, '/someTestPath1', 'picture');
INSERT INTO Post_files (post_id,file_path,type) VALUES (1, '/someTestPath2', 'picture');
INSERT INTO Post_files (post_id,file_path,type) VALUES (1, '/someTestPath3', 'picture');

-- ADD POST TO USER PROFILE
INSERT INTO Profile (user_id,post_id) VALUES (1,1);

-- ADD POST TO USER NEWS
INSERT INTO News (user_id,post_id) VALUES (1,1);

-- ADD NEW COMMENT TO POST
INSERT INTO Comments (user_id,post_id,text) VALUES (1,1, 'some test comment');

-- COMPLAIN COMMENT
INSERT INTO Complains (user_id,comment_id) VALUES (1,1);

-- ADD LIKE HISTORY
INSERT INTO Likes (user_id,post_id,whoLike_id) VALUES (1,1,1);

-- ADD USER PHOTO
INSERT INTO Users_photos (user_id,photo_path) VALUES (1,'/somenewphoto');

-- NEW SUBSCRIBERS
INSERT INTO Subscribers (who_subscribe, whose_subscribe) VALUES (1,2);

-- BLOCK SOME USER
INSERT INTO Blocks_Uses (who_block, whos_block) VALUES (1,2);

-- BAN MUSIC FOR
INSERT INTO Forbid_Music (who_block, whos_block) VALUES (1,2);

-- BAN TRAININGS FOR
INSERT INTO Forbid_Trainings (who_block, whos_block) VALUES (1,2);

-- BAN COMMITS FOR
INSERT INTO Prohibit_Comments (who_block, whos_block) VALUES (1,2);

-- CREATE ROOM
INSERT INTO Rooms (uriAvatar,members_count,name) VALUES ('https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg', 2, 'testchat');

-- ADD USERS TO ROOM
INSERT INTO RoomMembers (user_id,room_id) VALUES (1,1);

-- ADD MESSAGE
INSERT INTO RoomMessages (user_id,room_id,message) VALUES (1,1, 'some test message');

---------- DELETE --------------

-- DELETE PHOTO FROM PROFILE
DELETE FROM Users_photos WHERE id = 1;

-- DELETE MUSIC FROM USER PLAYLIST
DELETE FROM User_musics WHERE id = 1;

-- DELETE TRAINING
DELETE FROM Trainings WHERE id = 1;

-- DELETE USER FROM TRAINING
DELETE FROM TrainingMembers WHERE id = 1;

-- UNSUBSCRIBED
DELETE FROM Subscribers WHERE who_subscribe = 1 AND whose_subscribe = 2;

-- DELETE CHAT ROOM
DELETE FROM Rooms WHERE id = 1;

-- DELETE MESSAGE
DELETE FROM RoomMessages WHERE id = 1;

-- DELETE USER FROM CHAT
DELETE FROM RoomMembers WHERE user_id = 1 AND room_id = 1;

-- UNBAN USER COMMENTS
DELETE FROM Prohibit_Comments WHERE who_block = 1 AND whos_block = 2;

-- UNBAN USER TRAININGS
DELETE FROM Forbid_Trainings WHERE who_block = 1 AND whos_block = 2;

-- UNBAN USER MUSIC
DELETE FROM Forbid_Music WHERE who_block = 1 AND whos_block = 2;

-- UNBAN USER BLOCK
DELETE FROM Blocks_Uses WHERE who_block = 1 AND whos_block = 2;

-- DELETE POST FROM PROFILE
DELETE FROM Profile WHERE user_id = 1 AND post_id = 2;

-- DELETE POST FROM NEWS
DELETE FROM News WHERE user_id = 1 AND post_id = 2;

-- DELETE MUSIC
DELETE FROM Musics WHERE id = 1;

-- UNLIKE POST
DELETE FROM Likes WHERE user_id = 1 AND post_id = 2;

-- CANCEL THE COMPLAINT
DELETE FROM Complains WHERE user_id = 1 AND comment_id = 2;


---------- UPDATE --------------

-- CHANGE USER PARAMETERS
UPDATE Users SET name = 'newUserName' WHERE id = 1;
UPDATE Users SET lastName = 'newLastName' WHERE id = 1;
UPDATE Users SET mainPhoto = '/newPathToMainPhoto' WHERE id = 1;
UPDATE Users SET aboutMe = 'newAboutMe' WHERE id = 1;
UPDATE Users SET password = 'newPassword' WHERE id = 1;
UPDATE Users SET nickname = 'newUniqueNick' WHERE id = 1;
UPDATE Users SET block_for_unsigned = true WHERE id = 1;

-- CHANGE CHAT PARAMETERS
UPDATE Users SET uriAvatar = '/newPathToRoomPhoto' WHERE id = 1;
UPDATE Users SET name = 'newRoomName' WHERE id = 1;
UPDATE Users SET members_count = 3 WHERE id = 1;

-- UPDATE MESSAGE
UPDATE RoomMessages SET message = 'new message' WHERE id = 1;

-- NEW LIKE IN POST
UPDATE Posts SET likeCont = 3 WHERE id = 1;

-- LIKE OR ADD YOURSELF POST
UPDATE News SET isLike = true WHERE id = 1;
UPDATE News SET isAdded = false WHERE id = 1;

-- LOAD MESSAGES FOR USER
UPDATE RoomMembers SET numbers = 20 WHERE id = 1;

---------- SELECTS -------------

