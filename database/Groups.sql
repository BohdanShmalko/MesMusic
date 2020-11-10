DROP TABLE groups;

create table Groups (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	groupName VARCHAR(50) NOT NULL,
	mainPhoto VARCHAR(100),
	status VARCHAR(100),
	groupInfo VARCHAR(500)
);
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (1, 'Stamm, West and Glover', null, null, null);
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (2, 'Tremblay LLC', 'https://robohash.org/nobisquamdistinctio.jpg?size=50x50&set=set1', 'nulla sed vel enim sit', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (3, 'Spencer-McGlynn', 'https://robohash.org/illumconsequaturofficia.bmp?size=50x50&set=set1', 'eleifend pede libero', 'Vivamus vestibulum sagittis sapien.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (4, 'Howe and Sons', 'https://robohash.org/quasipossimusexplicabo.png?size=50x50&set=set1', 'vel nisl duis ac nibh fusce', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (5, 'Schmeler Group', null, null, null);
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (6, 'Hackett and Sons', null, null, null);
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (7, 'Paucek, O''Keefe and Hartmann', null, null, null);
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (8, 'Rippin and Sons', 'https://robohash.org/optioeosnihil.jpg?size=50x50&set=set1', 'augue vestibulum rutrum rutrum neque aenean auctor', 'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (9, 'Borer Inc', 'https://robohash.org/utofficiisminus.bmp?size=50x50&set=set1', 'sapien a libero nam dui proin leo', 'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (10, 'McKenzie and Sons', null, null, null);
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (11, 'Volkman, Russel and Cremin', 'https://robohash.org/itaqueidodit.jpg?size=50x50&set=set1', 'nam ultrices libero', 'Duis consequat dui nec nisi volutpat eleifend.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (12, 'Lockman Group', 'https://robohash.org/sedexcepturiiste.jpg?size=50x50&set=set1', 'congue eget semper rutrum nulla nunc', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (13, 'Pfannerstill and Sons', null, null, null);
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (14, 'Kirlin and Sons', null, null, null);
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (15, 'Emmerich and Sons', 'https://robohash.org/voluptatenisinulla.png?size=50x50&set=set1', 'velit nec nisi vulputate nonummy maecenas tincidunt', 'Nunc purus.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (16, 'Champlin-Brown', 'https://robohash.org/utilloneque.bmp?size=50x50&set=set1', 'in faucibus orci luctus et', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (17, 'Nienow, West and Schulist', 'https://robohash.org/quisquiapraesentium.bmp?size=50x50&set=set1', 'nulla suscipit ligula in lacus curabitur', 'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (18, 'Carter Group', null, null, null);
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (19, 'Deckow, Franecki and Cole', null, null, null);
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (20, 'Kunde-Doyle', 'https://robohash.org/ipsaveritatisaccusantium.bmp?size=50x50&set=set1', 'nullam varius nulla facilisi cras non', 'Aliquam quis turpis eget elit sodales scelerisque.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (21, 'Bergstrom, Fay and Thiel', 'https://robohash.org/doloremquecupiditateexercitationem.bmp?size=50x50&set=set1', 'natoque penatibus et magnis dis parturient montes', 'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (22, 'Zieme, Spencer and Langworth', 'https://robohash.org/doloresutaccusamus.bmp?size=50x50&set=set1', 'pede posuere nonummy integer non', 'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (23, 'Thiel, Stracke and Langworth', 'https://robohash.org/autquilaboriosam.png?size=50x50&set=set1', 'montes nascetur ridiculus mus vivamus', 'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (24, 'Skiles Inc', 'https://robohash.org/doloreconsequaturquis.png?size=50x50&set=set1', 'libero nam dui proin leo odio', 'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (25, 'Pacocha-Feest', 'https://robohash.org/rerumnonquasi.jpg?size=50x50&set=set1', 'justo in blandit ultrices', 'In congue. Etiam justo.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (26, 'Hartmann-Lowe', 'https://robohash.org/vitaeofficiissed.png?size=50x50&set=set1', 'sodales scelerisque mauris sit amet eros', 'Morbi non quam nec dui luctus rutrum. Nulla tellus.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (27, 'Yost, Lueilwitz and Collier', 'https://robohash.org/quiarerumillo.jpg?size=50x50&set=set1', 'eros vestibulum ac est lacinia', 'Morbi quis tortor id nulla ultrices aliquet.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (28, 'Muller, Prosacco and Breitenberg', 'https://robohash.org/placeatquipraesentium.bmp?size=50x50&set=set1', 'sed vel enim', 'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (29, 'Wyman, Runte and Bernhard', null, null, null);
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (30, 'Hegmann-Roob', 'https://robohash.org/accusamusquisquamillum.jpg?size=50x50&set=set1', 'nibh in hac habitasse platea', 'Mauris ullamcorper purus sit amet nulla.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (31, 'Kutch-Runolfsson', 'https://robohash.org/sintomnisqui.jpg?size=50x50&set=set1', 'aliquam quis turpis eget', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (32, 'Upton Group', 'https://robohash.org/exercitationemsitcorrupti.jpg?size=50x50&set=set1', 'nibh in quis justo maecenas rhoncus', 'Praesent blandit. Nam nulla.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (33, 'Denesik-Feil', 'https://robohash.org/ipsumnihilvel.jpg?size=50x50&set=set1', 'erat curabitur gravida nisi', 'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (34, 'Ruecker, Conroy and Funk', 'https://robohash.org/velquiadipisci.jpg?size=50x50&set=set1', 'duis bibendum morbi non quam', 'In quis justo. Maecenas rhoncus aliquam lacus.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (35, 'Mann and Sons', 'https://robohash.org/sedsequivoluptatibus.jpg?size=50x50&set=set1', 'amet lobortis sapien sapien non mi', 'Vestibulum ac est lacinia nisi venenatis tristique.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (36, 'Cassin, Lindgren and Hauck', 'https://robohash.org/nostrumillosimilique.png?size=50x50&set=set1', 'volutpat eleifend donec', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (37, 'Bernhard, Hodkiewicz and Larson', 'https://robohash.org/sintquosqui.png?size=50x50&set=set1', 'platea dictumst etiam faucibus cursus urna ut', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (38, 'Monahan, Lowe and Powlowski', 'https://robohash.org/fuganihileaque.jpg?size=50x50&set=set1', 'blandit lacinia erat', 'Maecenas tincidunt lacus at velit.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (39, 'Zulauf-Okuneva', 'https://robohash.org/voluptasasperiorestenetur.jpg?size=50x50&set=set1', 'vivamus in felis', 'In quis justo.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (40, 'Smitham, Mante and Breitenberg', 'https://robohash.org/inventoresedaut.jpg?size=50x50&set=set1', 'lorem id ligula suspendisse ornare consequat lectus', 'Etiam faucibus cursus urna.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (41, 'Kulas LLC', 'https://robohash.org/quidemofficiaadipisci.bmp?size=50x50&set=set1', 'nunc viverra dapibus nulla suscipit ligula', 'Maecenas pulvinar lobortis est.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (42, 'Kub, Ledner and Little', null, null, null);
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (43, 'Abbott, Hauck and Koss', 'https://robohash.org/utautiusto.bmp?size=50x50&set=set1', 'nam congue risus semper porta volutpat quam', 'Donec dapibus. Duis at velit eu est congue elementum.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (44, 'Mueller-Gislason', 'https://robohash.org/expeditanemofacere.png?size=50x50&set=set1', 'ullamcorper augue a', 'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (45, 'Reichel-Parisian', 'https://robohash.org/quiamolestiaserror.jpg?size=50x50&set=set1', 'sed tristique in tempus sit amet', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (46, 'Rippin, Koepp and Champlin', 'https://robohash.org/necessitatibuseumsimilique.png?size=50x50&set=set1', 'at vulputate vitae nisl aenean', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (47, 'Lebsack LLC', 'https://robohash.org/quidoloremqueveritatis.bmp?size=50x50&set=set1', 'et commodo vulputate justo in', 'Donec dapibus. Duis at velit eu est congue elementum.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (48, 'Schmitt, Breitenberg and Morissette', 'https://robohash.org/laudantiumreiciendisfacilis.jpg?size=50x50&set=set1', 'justo sollicitudin ut suscipit a feugiat', 'Curabitur gravida nisi at nibh.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (49, 'Streich, Jerde and Ernser', 'https://robohash.org/utsitatque.jpg?size=50x50&set=set1', 'vestibulum sit amet cursus', 'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (50, 'Leannon Group', 'https://robohash.org/sintquiavoluptate.jpg?size=50x50&set=set1', 'varius ut blandit non interdum', 'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (51, 'White-Ward', 'https://robohash.org/voluptatibusetlaborum.bmp?size=50x50&set=set1', 'donec odio justo sollicitudin ut suscipit a', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (52, 'Labadie, Harvey and Durgan', 'https://robohash.org/exercitationempossimusassumenda.bmp?size=50x50&set=set1', 'sit amet lobortis sapien sapien non mi', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (53, 'Lowe-Hermiston', 'https://robohash.org/omnistotamcorporis.png?size=50x50&set=set1', 'vestibulum ante ipsum primis in', 'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (54, 'Ritchie Inc', null, null, null);
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (55, 'Hirthe-Nolan', 'https://robohash.org/voluptateinrerum.bmp?size=50x50&set=set1', 'nonummy maecenas tincidunt lacus at', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (56, 'Stokes, Hirthe and Spinka', 'https://robohash.org/temporaconsectetureum.png?size=50x50&set=set1', 'luctus et ultrices posuere', 'Vestibulum rutrum rutrum neque.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (57, 'Ondricka-Gaylord', 'https://robohash.org/etipsamolestiae.bmp?size=50x50&set=set1', 'augue quam sollicitudin vitae consectetuer eget rutrum', 'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (58, 'Hackett, West and White', 'https://robohash.org/quamvoluptatemexercitationem.png?size=50x50&set=set1', 'id luctus nec molestie sed', 'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (59, 'Mayert Inc', 'https://robohash.org/magniquovoluptas.jpg?size=50x50&set=set1', 'est quam pharetra magna ac consequat metus', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (60, 'Predovic, Windler and Tromp', 'https://robohash.org/veroatmagni.jpg?size=50x50&set=set1', 'sagittis nam congue', 'Pellentesque ultrices mattis odio. Donec vitae nisi.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (61, 'Reynolds-Bartoletti', 'https://robohash.org/voluptatemplaceateos.png?size=50x50&set=set1', 'ac lobortis vel dapibus at', 'Vivamus tortor. Duis mattis egestas metus.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (62, 'Hansen Inc', null, null, null);
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (63, 'Emmerich LLC', null, null, null);
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (64, 'Marquardt-Kuhlman', null, null, null);
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (65, 'Feest Group', 'https://robohash.org/nonrerumin.jpg?size=50x50&set=set1', 'ultrices posuere cubilia', 'Suspendisse potenti.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (66, 'Bergnaum Inc', null, null, null);
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (67, 'Pfeffer-Beier', 'https://robohash.org/doloreaspernaturet.jpg?size=50x50&set=set1', 'dignissim vestibulum vestibulum ante ipsum primis in', 'Aliquam erat volutpat.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (68, 'Dooley Group', 'https://robohash.org/laboriosamhicet.png?size=50x50&set=set1', 'ut massa volutpat convallis morbi', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (69, 'Steuber LLC', null, null, null);
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (70, 'Hermann Group', 'https://robohash.org/aliquamdolorplaceat.jpg?size=50x50&set=set1', 'potenti in eleifend quam a', 'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (71, 'Shields, Weimann and Zboncak', 'https://robohash.org/etinautem.bmp?size=50x50&set=set1', 'diam neque vestibulum eget vulputate', 'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (72, 'Mitchell, Green and Waters', 'https://robohash.org/doloresatquelibero.jpg?size=50x50&set=set1', 'ligula suspendisse ornare consequat', 'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (73, 'Ullrich, Bernier and Krajcik', 'https://robohash.org/etautemsaepe.png?size=50x50&set=set1', 'nunc viverra dapibus nulla', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (74, 'Feeney-Johnson', 'https://robohash.org/occaecatiinciduntcorrupti.bmp?size=50x50&set=set1', 'maecenas pulvinar lobortis est phasellus sit', 'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (75, 'Ferry and Sons', 'https://robohash.org/laborumetnihil.jpg?size=50x50&set=set1', 'donec ut dolor', 'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (76, 'Konopelski, Kessler and Kuhlman', 'https://robohash.org/porrodistinctioiusto.png?size=50x50&set=set1', 'justo in blandit ultrices enim lorem', 'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (77, 'Bradtke-Jast', 'https://robohash.org/eaquequiquae.bmp?size=50x50&set=set1', 'quisque ut erat curabitur gravida', 'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (78, 'Baumbach-Wyman', 'https://robohash.org/eumquianimi.png?size=50x50&set=set1', 'pede justo lacinia eget tincidunt eget tempus', 'Pellentesque ultrices mattis odio.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (79, 'Aufderhar, Halvorson and Sawayn', 'https://robohash.org/nobisullamrerum.jpg?size=50x50&set=set1', 'sed sagittis nam congue risus semper', 'Curabitur in libero ut massa volutpat convallis.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (80, 'Hudson-Anderson', null, null, null);
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (81, 'Reinger-Lemke', 'https://robohash.org/autsuntquidem.bmp?size=50x50&set=set1', 'est phasellus sit', 'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (82, 'Abbott, Schaden and Considine', 'https://robohash.org/iddoloresin.jpg?size=50x50&set=set1', 'suspendisse accumsan tortor quis turpis sed', 'Suspendisse potenti. In eleifend quam a odio.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (83, 'Swaniawski, Feeney and Barton', null, null, null);
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (84, 'Wilderman LLC', 'https://robohash.org/utducimusillo.bmp?size=50x50&set=set1', 'lectus in quam fringilla rhoncus', 'Suspendisse potenti. In eleifend quam a odio.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (85, 'Bruen Group', null, null, null);
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (86, 'Price and Sons', 'https://robohash.org/nobiscumqueillo.bmp?size=50x50&set=set1', 'mauris lacinia sapien quis libero nullam sit', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (87, 'Pagac Inc', 'https://robohash.org/doloremnihilaspernatur.jpg?size=50x50&set=set1', 'integer aliquet massa', 'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (88, 'Rath, Windler and Fisher', 'https://robohash.org/sinttemporibuseum.bmp?size=50x50&set=set1', 'mauris eget massa tempor', 'Vivamus in felis eu sapien cursus vestibulum.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (89, 'Hammes-Veum', null, null, null);
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (90, 'Wiegand LLC', 'https://robohash.org/voluptateminconsequatur.bmp?size=50x50&set=set1', 'tristique est et', 'Curabitur at ipsum ac tellus semper interdum.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (91, 'Franecki-Balistreri', 'https://robohash.org/temporeeosautem.png?size=50x50&set=set1', 'libero non mattis pulvinar nulla', 'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (92, 'Okuneva-Metz', 'https://robohash.org/velitautemtemporibus.png?size=50x50&set=set1', 'aliquet pulvinar sed nisl nunc rhoncus dui', 'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (93, 'Bahringer, Schuster and Bosco', null, null, null);
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (94, 'Prohaska and Sons', null, null, null);
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (95, 'Heller LLC', 'https://robohash.org/natusquoslabore.bmp?size=50x50&set=set1', 'amet sem fusce consequat', 'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (96, 'Kuvalis, Witting and Osinski', 'https://robohash.org/etundequi.png?size=50x50&set=set1', 'leo rhoncus sed vestibulum sit', 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (97, 'Fay, Collier and Hills', 'https://robohash.org/quiadaccusamus.png?size=50x50&set=set1', 'luctus et ultrices posuere cubilia curae', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (98, 'Schulist LLC', 'https://robohash.org/commodisitamet.jpg?size=50x50&set=set1', 'pulvinar lobortis est phasellus sit amet', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (99, 'Durgan-Wunsch', 'https://robohash.org/etconsequaturvel.png?size=50x50&set=set1', 'consequat ut nulla sed', 'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.');
insert into Groups (id, groupName, mainPhoto, status, groupInfo) values (100, 'Larson-West', null, null, null);
