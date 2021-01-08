CREATE TABLE UsersMusics (
	id SERIAL NOT NULL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES Users(id),
    music_id INT NOT NULL REFERENCES Musics(id)
);