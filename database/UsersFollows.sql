CREATE TABLE UsersFollows (
	id SERIAL NOT NULL PRIMARY KEY,
	status VARCHAR(50) DEFAULT 'follower',
	follower_id INT NOT NULL REFERENCES users(id),
	followed_id INT NOT NULL REFERENCES users(id)
);