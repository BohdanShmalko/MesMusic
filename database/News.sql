Create table News
(
    id      SERIAL NOT NULL PRIMARY KEY,
    user_id INT    NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    post_id INT    NOT NULL REFERENCES posts (id) ON DELETE CASCADE,
    isLike  bool   NOT NULL DEFAULT false,
    isAdded bool   NOT NULL DEFAULT false
);