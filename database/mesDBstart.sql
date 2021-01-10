--CREATE USER mesuser PASSWORD '1111';
--ALTER ROLE mesuser createrole createdb;

\c postgres
DROP DATABASE mesmusic;
CREATE DATABASE mesmusic OWNER mesuser;
\c mesmusic

\ir Users.sql
\ir Groups.sql
\ir Dialogs.sql
\ir Photos.sql
\ir Musics.sql

\ir Posts.sql
\ir UsersFollows.sql
\ir UsersPhotos.sql
\ir UsersAuthentication.sql
\ir UsersMusics.sql
\ir DialogMembers.sql
\ir DialogMessages.sql
\ir GroupsFollows.sql