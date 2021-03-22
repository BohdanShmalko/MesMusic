Create table Comments
(
    id      SERIAL    NOT NULL PRIMARY KEY,
    user_id INT       NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    post_id INT       NOT NULL REFERENCES posts (id) ON DELETE CASCADE,
    text    text      NOT NULL,
    date    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);