Create table Blocks_Uses
(
    id         SERIAL NOT NULL PRIMARY KEY,
    who_block  INT    NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    whos_block INT    NOT NULL REFERENCES users (id) ON DELETE CASCADE
);