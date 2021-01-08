CREATE TABLE UsersPhotos (
	id SERIAL NOT NULL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES Users(id),
    photo_id INT NOT NULL REFERENCES Photos(id)
);