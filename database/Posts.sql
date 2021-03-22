Create table Posts
(
    id              SERIAL    NOT NULL PRIMARY KEY,
    user_id         INT       NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    name            text,
    likeCont        int       not null default 0,
    description     text,
    publicationTime TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);