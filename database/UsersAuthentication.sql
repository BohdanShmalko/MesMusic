CREATE TABLE UsersAuthentication (
	id SERIAL NOT NULL PRIMARY KEY,
    login VARCHAR(255) NOT NULL,
    password CHAR(32) NOT NULL, --in MD5
    user_id INT NOT NULL REFERENCES users(id)
);