Create table Complains
(
    id         SERIAL    NOT NULL PRIMARY KEY,
    user_id    INT       NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    comment_id INT       NOT NULL REFERENCES comments (id) ON DELETE CASCADE,
    date       TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);