CREATE TABLE Users (
	id SERIAL NOT NULL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	lastName VARCHAR(50) NOT NULL,
	mainPhoto VARCHAR(255),
	status VARCHAR(100),
	aboutMe TEXT,
	defaultPath VARCHAR(255) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    nickname VARCHAR(50) NOT NULL
);

INSERT INTO Users (name, lastName, mainPhoto, status, aboutMe, email, password, defaultPath, nickname)
VALUES ('name1', 'lastName1', 'https://gravatar.com/avatar/78b9510bf6078235108c6f53ef0b7f6e?s=400&d=robohash&r=x',
        'status1', 'aboutMe1aboutMe1aboutMe1', 'email1@gmail.com', 'password1', '/', 'nickname1');
INSERT INTO Users (name, lastName, mainPhoto, status, aboutMe, email, password, defaultPath, nickname)
VALUES ('name2', 'lastName2', 'https://gravatar.com/avatar/b9d1a4a0bd6016e03ada4e09bf55d1b3?s=400&d=robohash&r=x',
        'status2', 'aboutMe2aboutMe2aboutMe2', 'email2@gmail.com', 'password2', '/', 'nickname2');
INSERT INTO Users (name, lastName, mainPhoto, status, aboutMe, email, password, defaultPath, nickname)
VALUES ('name3', 'lastName3', 'https://gravatar.com/avatar/a514a95b984e759d00a0d387901be7e7?s=400&d=robohash&r=x',
        'status3', 'aboutMe3aboutMe3aboutMe3', 'email@gmail.com3', 'password3', '/', 'nickname3');