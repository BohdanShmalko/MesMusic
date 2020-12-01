create table DialogMembers (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	dialogs_id BIGSERIAL NOT NULL REFERENCES dialogs(id),
	users_id BIGSERIAL NOT NULL REFERENCES users(id)
);
insert into DialogMembers (id, users_id, dialogs_id) values (1, 1, 25);
insert into DialogMembers (id, users_id, dialogs_id) values (2, 93, 40);
insert into DialogMembers (id, users_id, dialogs_id) values (3, 76, 32);
insert into DialogMembers (id, users_id, dialogs_id) values (4, 46, 18);
insert into DialogMembers (id, users_id, dialogs_id) values (5, 80, 13);
insert into DialogMembers (id, users_id, dialogs_id) values (6, 45, 50);
insert into DialogMembers (id, users_id, dialogs_id) values (7, 33, 49);
insert into DialogMembers (id, users_id, dialogs_id) values (8, 58, 59);
insert into DialogMembers (id, users_id, dialogs_id) values (9, 72, 7);
insert into DialogMembers (id, users_id, dialogs_id) values (10, 79, 77);
insert into DialogMembers (id, users_id, dialogs_id) values (11, 61, 80);
insert into DialogMembers (id, users_id, dialogs_id) values (12, 71, 85);
insert into DialogMembers (id, users_id, dialogs_id) values (13, 8, 44);
insert into DialogMembers (id, users_id, dialogs_id) values (14, 54, 94);
insert into DialogMembers (id, users_id, dialogs_id) values (15, 12, 18);
insert into DialogMembers (id, users_id, dialogs_id) values (16, 45, 29);
insert into DialogMembers (id, users_id, dialogs_id) values (17, 86, 27);
insert into DialogMembers (id, users_id, dialogs_id) values (18, 95, 86);
insert into DialogMembers (id, users_id, dialogs_id) values (19, 89, 4);
insert into DialogMembers (id, users_id, dialogs_id) values (20, 95, 8);
insert into DialogMembers (id, users_id, dialogs_id) values (21, 19, 36);
insert into DialogMembers (id, users_id, dialogs_id) values (22, 35, 19);
insert into DialogMembers (id, users_id, dialogs_id) values (23, 30, 37);
insert into DialogMembers (id, users_id, dialogs_id) values (24, 34, 99);
insert into DialogMembers (id, users_id, dialogs_id) values (25, 61, 38);
insert into DialogMembers (id, users_id, dialogs_id) values (26, 44, 99);
insert into DialogMembers (id, users_id, dialogs_id) values (27, 44, 46);
insert into DialogMembers (id, users_id, dialogs_id) values (28, 19, 7);
insert into DialogMembers (id, users_id, dialogs_id) values (29, 19, 47);
insert into DialogMembers (id, users_id, dialogs_id) values (30, 95, 12);
insert into DialogMembers (id, users_id, dialogs_id) values (31, 82, 13);
insert into DialogMembers (id, users_id, dialogs_id) values (32, 72, 99);
insert into DialogMembers (id, users_id, dialogs_id) values (33, 17, 24);
insert into DialogMembers (id, users_id, dialogs_id) values (34, 76, 80);
insert into DialogMembers (id, users_id, dialogs_id) values (35, 87, 66);
insert into DialogMembers (id, users_id, dialogs_id) values (36, 24, 80);
insert into DialogMembers (id, users_id, dialogs_id) values (37, 87, 34);
insert into DialogMembers (id, users_id, dialogs_id) values (38, 5, 38);
insert into DialogMembers (id, users_id, dialogs_id) values (39, 78, 10);
insert into DialogMembers (id, users_id, dialogs_id) values (40, 59, 16);
insert into DialogMembers (id, users_id, dialogs_id) values (41, 26, 22);
insert into DialogMembers (id, users_id, dialogs_id) values (42, 33, 90);
insert into DialogMembers (id, users_id, dialogs_id) values (43, 74, 35);
insert into DialogMembers (id, users_id, dialogs_id) values (44, 23, 50);
insert into DialogMembers (id, users_id, dialogs_id) values (45, 4, 24);
insert into DialogMembers (id, users_id, dialogs_id) values (46, 31, 3);
insert into DialogMembers (id, users_id, dialogs_id) values (47, 40, 38);
insert into DialogMembers (id, users_id, dialogs_id) values (48, 83, 47);
insert into DialogMembers (id, users_id, dialogs_id) values (49, 83, 96);
insert into DialogMembers (id, users_id, dialogs_id) values (50, 100, 57);
insert into DialogMembers (id, users_id, dialogs_id) values (51, 25, 65);
insert into DialogMembers (id, users_id, dialogs_id) values (52, 92, 81);
insert into DialogMembers (id, users_id, dialogs_id) values (53, 49, 81);
insert into DialogMembers (id, users_id, dialogs_id) values (54, 71, 99);
insert into DialogMembers (id, users_id, dialogs_id) values (55, 71, 60);
insert into DialogMembers (id, users_id, dialogs_id) values (56, 66, 9);
insert into DialogMembers (id, users_id, dialogs_id) values (57, 73, 90);
insert into DialogMembers (id, users_id, dialogs_id) values (58, 57, 3);
insert into DialogMembers (id, users_id, dialogs_id) values (59, 63, 64);
insert into DialogMembers (id, users_id, dialogs_id) values (60, 20, 96);
insert into DialogMembers (id, users_id, dialogs_id) values (61, 78, 48);
insert into DialogMembers (id, users_id, dialogs_id) values (62, 72, 73);
insert into DialogMembers (id, users_id, dialogs_id) values (63, 56, 75);
insert into DialogMembers (id, users_id, dialogs_id) values (64, 84, 96);
insert into DialogMembers (id, users_id, dialogs_id) values (65, 37, 33);
insert into DialogMembers (id, users_id, dialogs_id) values (66, 94, 4);
insert into DialogMembers (id, users_id, dialogs_id) values (67, 39, 54);
insert into DialogMembers (id, users_id, dialogs_id) values (68, 62, 1);
insert into DialogMembers (id, users_id, dialogs_id) values (69, 9, 48);
insert into DialogMembers (id, users_id, dialogs_id) values (70, 69, 75);
insert into DialogMembers (id, users_id, dialogs_id) values (71, 93, 50);
insert into DialogMembers (id, users_id, dialogs_id) values (72, 3, 73);
insert into DialogMembers (id, users_id, dialogs_id) values (73, 5, 53);
insert into DialogMembers (id, users_id, dialogs_id) values (74, 100, 34);
insert into DialogMembers (id, users_id, dialogs_id) values (75, 92, 82);
insert into DialogMembers (id, users_id, dialogs_id) values (76, 55, 42);
insert into DialogMembers (id, users_id, dialogs_id) values (77, 21, 10);
insert into DialogMembers (id, users_id, dialogs_id) values (78, 98, 46);
insert into DialogMembers (id, users_id, dialogs_id) values (79, 13, 39);
insert into DialogMembers (id, users_id, dialogs_id) values (80, 25, 2);
insert into DialogMembers (id, users_id, dialogs_id) values (81, 11, 59);
insert into DialogMembers (id, users_id, dialogs_id) values (82, 76, 98);
insert into DialogMembers (id, users_id, dialogs_id) values (83, 6, 33);
insert into DialogMembers (id, users_id, dialogs_id) values (84, 13, 43);
insert into DialogMembers (id, users_id, dialogs_id) values (85, 76, 24);
insert into DialogMembers (id, users_id, dialogs_id) values (86, 41, 9);
insert into DialogMembers (id, users_id, dialogs_id) values (87, 53, 64);
insert into DialogMembers (id, users_id, dialogs_id) values (88, 4, 31);
insert into DialogMembers (id, users_id, dialogs_id) values (89, 69, 60);
insert into DialogMembers (id, users_id, dialogs_id) values (90, 19, 61);
insert into DialogMembers (id, users_id, dialogs_id) values (91, 68, 61);
insert into DialogMembers (id, users_id, dialogs_id) values (92, 72, 69);
insert into DialogMembers (id, users_id, dialogs_id) values (93, 45, 88);
insert into DialogMembers (id, users_id, dialogs_id) values (94, 99, 77);
insert into DialogMembers (id, users_id, dialogs_id) values (95, 46, 44);
insert into DialogMembers (id, users_id, dialogs_id) values (96, 84, 49);
insert into DialogMembers (id, users_id, dialogs_id) values (97, 37, 70);
insert into DialogMembers (id, users_id, dialogs_id) values (98, 59, 74);
insert into DialogMembers (id, users_id, dialogs_id) values (99, 45, 88);
insert into DialogMembers (id, users_id, dialogs_id) values (100, 62, 17);
