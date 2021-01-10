CREATE TABLE DialogMembers (
	id SERIAL NOT NULL PRIMARY KEY,
	dialogs_id INT NOT NULL REFERENCES dialogs(id),
	users_id INT NOT NULL REFERENCES users(id)
);