Create table RoomMessages
(
    id      SERIAL    NOT NULL PRIMARY KEY,
    user_id INT       NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    room_id INT       NOT NULL REFERENCES rooms (id) ON DELETE CASCADE,
    message text      not null,
    time    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);