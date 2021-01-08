CREATE TABLE GroupsFollows (
	id SERIAL NOT NULL PRIMARY KEY,
    group_id INT NOT NULL REFERENCES Groups(id),
    user_id INT NOT NULL REFERENCES users(id),
    status VARCHAR(50) DEFAULT 'follower'
);