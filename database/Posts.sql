DROP TABLE posts;

create table Posts (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	postHeader VARCHAR(50) NOT NULL,
	postFit VARCHAR(500) NOT NULL,
	addTime DATE NOT NULL,
	users_id INT NOT NULL REFERENCES users(id)
);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (1, 'mi pede malesuada', 'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.', '2020-03-15 14:14:42', 8);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (2, 'erat tortor sollicitudin', 'In hac habitasse platea dictumst.', '2020-09-11 18:40:07', 6);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (3, 'at dolor quis', 'In congue. Etiam justo. Etiam pretium iaculis justo.', '2020-01-07 04:46:56', 60);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (4, 'nec', 'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.', '2020-07-31 08:32:19', 43);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (5, 'maecenas rhoncus aliquam lacus', 'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.', '2020-09-22 22:24:34', 15);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (6, 'tincidunt eget tempus', 'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '2020-05-01 08:50:15', 20);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (7, 'lacus purus aliquet at feugiat', 'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.', '2020-09-12 01:48:13', 48);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (8, 'lorem quisque ut erat', 'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.', '2020-04-11 23:05:39', 61);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (9, 'integer aliquet massa id lobortis', 'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '2020-05-29 23:57:41', 72);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (10, 'quis', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.', '2020-08-15 15:04:32', 27);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (11, 'phasellus id sapien', 'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.', '2020-01-14 12:25:14', 65);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (12, 'enim', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.', '2020-01-05 23:02:10', 10);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (13, 'ac enim in tempor turpis', 'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.', '2020-06-11 21:27:45', 37);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (14, 'orci luctus et ultrices posuere', 'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.', '2020-09-20 02:14:39', 39);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (15, 'pede justo', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '2020-01-31 15:21:03', 98);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (16, 'habitasse', 'Maecenas rhoncus aliquam lacus.', '2020-04-03 23:55:40', 75);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (17, 'rutrum nulla', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.', '2019-12-09 17:54:33', 54);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (18, 'amet nulla', 'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.', '2020-05-02 04:54:38', 83);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (19, 'ut', 'Sed ante. Vivamus tortor.', '2019-11-30 18:50:23', 86);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (20, 'vestibulum quam sapien', 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '2019-11-21 21:22:15', 29);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (21, 'rutrum at lorem', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.', '2020-09-28 22:08:40', 49);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (22, 'nec sem duis aliquam', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', '2020-09-04 14:46:14', 61);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (23, 'orci vehicula condimentum curabitur', 'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.', '2020-01-06 11:08:12', 72);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (24, 'elit ac nulla', 'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.', '2020-08-23 16:08:25', 58);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (25, 'lacinia erat vestibulum sed magna', 'Morbi a ipsum. Integer a nibh. In quis justo.', '2020-06-29 00:52:33', 83);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (26, 'viverra eget congue eget', 'Mauris lacinia sapien quis libero.', '2020-07-24 22:49:16', 75);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (27, 'sapien sapien non', 'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.', '2020-10-05 04:37:24', 96);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (28, 'rutrum rutrum', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.', '2020-03-26 17:54:21', 45);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (29, 'luctus et ultrices', 'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.', '2019-12-25 19:53:36', 73);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (30, 'blandit mi in porttitor', 'Pellentesque eget nunc.', '2020-03-27 18:02:51', 84);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (31, 'orci luctus', 'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '2020-02-21 23:01:26', 51);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (32, 'in tempus', 'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.', '2020-04-16 14:43:30', 85);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (33, 'at', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.', '2020-09-11 04:26:34', 20);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (34, 'nullam sit', 'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.', '2019-12-08 04:00:31', 98);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (35, 'orci pede venenatis non sodales', 'Integer a nibh.', '2020-05-16 12:33:52', 57);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (36, 'consequat varius integer ac', 'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '2019-11-07 14:50:23', 18);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (37, 'nisl aenean lectus pellentesque', 'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.', '2020-07-08 00:24:53', 47);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (38, 'ut erat id mauris', 'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.', '2020-06-13 15:36:12', 77);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (39, 'donec semper sapien', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.', '2019-11-14 21:27:37', 50);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (40, 'morbi ut odio cras', 'Etiam faucibus cursus urna.', '2020-09-19 02:31:50', 73);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (41, 'maecenas rhoncus', 'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.', '2020-06-16 18:44:57', 91);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (42, 'sagittis', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.', '2020-04-15 20:02:56', 25);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (43, 'faucibus orci luctus et ultrices', 'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.', '2020-06-01 22:37:48', 26);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (44, 'id turpis integer', 'Etiam justo.', '2020-06-11 18:13:30', 75);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (45, 'neque libero convallis eget', 'Phasellus sit amet erat.', '2020-05-20 18:40:29', 7);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (46, 'bibendum imperdiet nullam orci pede', 'Nulla ut erat id mauris vulputate elementum.', '2020-09-15 14:03:02', 11);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (47, 'eget massa tempor', 'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.', '2020-01-10 01:27:15', 20);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (48, 'cum sociis natoque', 'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.', '2020-09-16 08:21:37', 45);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (49, 'vulputate justo in', 'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.', '2020-06-04 18:59:26', 75);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (50, 'faucibus', 'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.', '2019-11-17 10:31:42', 65);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (51, 'tellus nisi eu orci mauris', 'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.', '2019-11-13 15:02:02', 55);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (52, 'viverra diam', 'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.', '2020-01-13 09:21:34', 16);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (53, 'in imperdiet et', 'Etiam justo.', '2019-11-08 09:00:16', 42);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (54, 'imperdiet sapien', 'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.', '2020-04-13 03:35:57', 31);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (55, 'risus', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.', '2020-11-01 07:49:59', 66);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (56, 'pede malesuada', 'Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.', '2020-10-04 04:23:47', 43);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (57, 'odio odio elementum', 'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '2020-05-02 00:19:17', 9);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (58, 'turpis enim blandit mi in', 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.', '2020-04-03 14:02:47', 53);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (59, 'enim leo rhoncus sed vestibulum', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.', '2020-04-01 03:05:56', 32);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (60, 'suspendisse potenti cras in purus', 'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.', '2020-06-30 01:52:39', 32);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (61, 'tincidunt nulla mollis molestie', 'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '2020-03-27 06:27:01', 30);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (62, 'morbi', 'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.', '2019-11-08 11:56:21', 89);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (63, 'augue', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '2020-01-20 10:27:13', 94);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (64, 'suspendisse accumsan tortor quis', 'Quisque porta volutpat erat.', '2020-06-15 05:36:58', 77);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (65, 'id massa id nisl venenatis', 'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', '2020-06-01 16:06:26', 40);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (66, 'libero convallis', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '2019-11-15 09:09:50', 3);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (67, 'vel lectus', 'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.', '2020-07-28 18:07:40', 21);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (68, 'at diam nam tristique tortor', 'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.', '2020-04-29 05:47:36', 13);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (69, 'pretium iaculis diam erat fermentum', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis.', '2020-08-21 18:51:01', 19);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (70, 'in magna bibendum imperdiet nullam', 'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.', '2020-01-01 17:13:55', 96);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (71, 'ut at dolor quis odio', 'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '2020-10-24 07:48:07', 29);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (72, 'bibendum felis sed interdum venenatis', 'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '2020-01-30 23:11:31', 28);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (73, 'lorem vitae mattis nibh ligula', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '2020-05-03 04:56:55', 3);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (74, 'felis ut at dolor', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.', '2020-09-01 01:42:37', 90);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (75, 'magna bibendum imperdiet nullam', 'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.', '2020-09-03 19:42:14', 94);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (76, 'ornare', 'Integer ac leo. Pellentesque ultrices mattis odio.', '2020-09-02 22:53:32', 96);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (77, 'pede ac diam', 'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.', '2020-02-04 10:46:50', 28);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (78, 'non mattis', 'Pellentesque viverra pede ac diam.', '2019-12-22 13:39:18', 67);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (79, 'vel ipsum praesent blandit lacinia', 'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.', '2020-08-25 15:28:53', 32);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (80, 'aenean fermentum donec ut mauris', 'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.', '2020-06-09 02:50:06', 95);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (81, 'nulla suspendisse potenti cras', 'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.', '2020-09-17 15:28:18', 21);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (82, 'enim', 'Maecenas tincidunt lacus at velit.', '2020-09-16 09:12:49', 21);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (83, 'ultrices posuere cubilia curae mauris', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.', '2020-08-15 20:57:33', 43);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (84, 'ultrices', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '2020-05-02 14:37:54', 44);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (85, 'quis turpis sed ante', 'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.', '2020-06-15 09:00:01', 1);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (86, 'sapien', 'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.', '2019-12-24 10:11:16', 98);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (87, 'justo eu massa donec dapibus', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', '2020-05-27 23:53:18', 5);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (88, 'ac leo', 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.', '2020-07-12 08:17:28', 33);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (89, 'nulla tellus in', 'Duis bibendum.', '2020-10-14 05:02:14', 57);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (90, 'maecenas tincidunt lacus', 'Duis mattis egestas metus.', '2020-03-25 08:08:32', 46);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (91, 'elit sodales scelerisque mauris', 'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', '2020-10-17 23:07:02', 57);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (92, 'eu tincidunt in leo', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.', '2020-09-21 05:06:47', 37);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (93, 'dui luctus rutrum', 'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.', '2019-11-09 15:36:09', 77);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (94, 'est phasellus sit amet erat', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '2020-07-29 22:54:49', 59);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (95, 'dolor sit', 'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.', '2019-12-29 02:32:46', 13);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (96, 'dolor sit', 'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.', '2020-08-22 00:12:12', 43);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (97, 'suscipit', 'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '2020-06-07 21:50:36', 69);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (98, 'ante vel ipsum praesent', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.', '2020-09-06 02:00:07', 23);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (99, 'sit', 'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '2020-01-18 07:03:31', 30);
insert into Posts (id, postHeader , postFit, addTime, users_id) values (100, 'luctus tincidunt nulla mollis', 'Ut tellus. Nulla ut erat id mauris vulputate elementum.', '2020-06-30 08:41:57', 29);
