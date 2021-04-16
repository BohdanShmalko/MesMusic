Create table Profile
(
    id      SERIAL NOT NULL PRIMARY KEY,
    user_id INT    NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    post_id INT    NOT NULL REFERENCES posts (id) ON DELETE CASCADE
);