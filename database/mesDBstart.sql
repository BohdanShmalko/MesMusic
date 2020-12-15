--CREATE USER mesuser PASSWORD '1111';
--ALTER ROLE mesuser createrole createdb;

\c postgres
DROP DATABASE mesmusic;
CREATE DATABASE mesmusic OWNER mesuser;
\c mesmusic

\ir Users.sql
\ir Posts.sql
\ir Groups.sql
\ir Follows.sql
\ir Dialogs.sql
\ir DialogMessages.sql
\ir DialogMembers.sql