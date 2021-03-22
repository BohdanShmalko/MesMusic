Create table RoomMembers
(
    id      SERIAL NOT NULL PRIMARY KEY,
    user_id INT    NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    room_id INT    NOT NULL REFERENCES rooms (id) ON DELETE CASCADE,
    numbers int    not null default 0
);