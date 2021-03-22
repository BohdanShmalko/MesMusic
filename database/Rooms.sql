Create table Rooms
(
    id            SERIAL NOT NULL PRIMARY KEY,
    uriAvatar     text   null UNIQUE ,
    members_count int    not null,
    name          text   not null

);