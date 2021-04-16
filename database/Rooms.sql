Create table Rooms
(
    id            SERIAL NOT NULL PRIMARY KEY,
    uriAvatar     text   null ,
    members_count int    not null,
    name          text   not null,
    default_path text

);