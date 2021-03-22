Create table Post_files
(
    id        SERIAL       NOT NULL PRIMARY KEY,
    post_id   INT          NOT NULL REFERENCES posts (id) ON DELETE CASCADE,
    file_path Text         NOT NULL UNIQUE,
    type      varchar(255) NOT NULL
);