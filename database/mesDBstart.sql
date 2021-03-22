--CREATE USER mesuser PASSWORD '1111';
--ALTER ROLE mesuser createrole createdb;

\c postgres
DROP DATABASE mesmusic;
CREATE DATABASE mesmusic OWNER mesuser;
\c mesmusic

\ir Users.sql
\ir Posts.sql
\ir Rooms.sql
\ir RoomMessages.sql
\ir RoomMembers.sql
\ir Profile.sql
\ir News.sql
\ir Likes.sql
\ir Post_files.sql
\ir Comments.sql
\ir Complains.sql
\ir Subscribers.sql
\ir Users_photos.sql
\ir Blocks_Uses.sql
\ir Forbid_Music.sql
\ir Forbid_Trainings.sql
\ir Prohibit_Comments.sql
\ir TrainingMembers.sql
\ir Trainings.sql
\ir Musics.sql
\ir User_musics.sql

-- http://erdraw.com/graphs/129025641609/edit