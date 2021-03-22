Create table Subscribers
(
    id      SERIAL NOT NULL PRIMARY KEY,
    who_subscribe INT    NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    whose_subscribe INT    NOT NULL REFERENCES users (id) ON DELETE CASCADE
);