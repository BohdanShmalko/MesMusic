Create table Users_photos
(
    id         SERIAL NOT NULL PRIMARY KEY,
    user_id    INT    NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    photo_path Text   NOT NULL UNIQUE
);