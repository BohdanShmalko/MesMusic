CREATE TABLE Users
(
    id          SERIAL       NOT NULL PRIMARY KEY,
    name        VARCHAR(50)  NOT NULL,
    lastName    VARCHAR(50)  NOT NULL,
    mainPhoto   text UNIQUE ,
    aboutMe     TEXT,
    defaultPath Text         NOT NULL UNIQUE ,
    email       VARCHAR(255) NOT NULL UNIQUE ,
    password    VARCHAR(255) NOT NULL,
    nickname    VARCHAR(255) NOT NULL UNIQUE,
    last_action TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    block_for_unsigned bool   NOT NULL DEFAULT false
);