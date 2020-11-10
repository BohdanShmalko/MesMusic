DROP TABLE follows;

create table Follows (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	follower_id BIGSERIAL NOT NULL REFERENCES users(id),
	followed_id BIGSERIAL NOT NULL, --REFERENCES (users(id), groups(id))
	isFollowOnGroup BOOLEAN NOT NULL
);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (1, 20, 74, true);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (2, 87, 56, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (3, 18, 92, true);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (4, 86, 28, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (5, 35, 24, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (6, 46, 65, true);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (7, 44, 68, true);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (8, 4, 81, true);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (9, 9, 9, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (10, 93, 51, true);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (11, 42, 97, true);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (12, 79, 81, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (13, 85, 25, true);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (14, 1, 11, true);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (15, 92, 2, true);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (16, 34, 19, true);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (17, 83, 71, true);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (18, 84, 38, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (19, 77, 42, true);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (20, 87, 23, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (21, 29, 73, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (22, 73, 93, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (23, 56, 11, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (24, 66, 33, true);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (25, 61, 30, true);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (26, 47, 40, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (27, 99, 64, true);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (28, 4, 43, true);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (29, 88, 54, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (30, 46, 88, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (31, 22, 95, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (32, 27, 14, true);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (33, 8, 45, true);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (34, 88, 56, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (35, 52, 39, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (36, 97, 92, true);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (37, 79, 24, true);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (38, 14, 80, true);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (39, 39, 99, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (40, 13, 46, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (41, 1, 54, true);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (42, 60, 3, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (43, 17, 61, true);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (44, 28, 8, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (45, 42, 99, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (46, 44, 79, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (47, 25, 43, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (48, 88, 21, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (49, 16, 100, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (50, 18, 76, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (51, 35, 67, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (52, 81, 93, true);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (53, 37, 91, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (54, 82, 35, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (55, 100, 61, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (56, 81, 58, true);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (57, 84, 24, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (58, 18, 33, true);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (59, 11, 1, true);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (60, 46, 93, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (61, 6, 51, true);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (62, 75, 60, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (63, 97, 100, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (64, 63, 92, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (65, 97, 8, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (66, 61, 62, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (67, 94, 73, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (68, 94, 92, true);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (69, 57, 33, true);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (70, 15, 45, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (71, 16, 67, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (72, 53, 39, true);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (73, 49, 77, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (74, 80, 23, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (75, 36, 17, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (76, 51, 10, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (77, 68, 11, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (78, 28, 19, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (79, 14, 10, true);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (80, 53, 9, true);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (81, 87, 95, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (82, 3, 56, true);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (83, 96, 90, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (84, 46, 28, true);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (85, 45, 40, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (86, 55, 21, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (87, 9, 46, true);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (88, 88, 17, true);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (89, 57, 30, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (90, 82, 61, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (91, 85, 99, true);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (92, 85, 79, true);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (93, 41, 62, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (94, 35, 53, true);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (95, 10, 28, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (96, 93, 9, true);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (97, 28, 40, true);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (98, 77, 61, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (99, 58, 71, false);
insert into Follows (id, follower_id, followed_id, isFollowOnGroup ) values (100, 13, 46, false);
