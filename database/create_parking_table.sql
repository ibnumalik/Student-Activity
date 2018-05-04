PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE parking (
    id integer primary key,
    block_name text not null,
    space_number integer,
    rented text
);

INSERT INTO parking VALUES(1,'A',1,'false');
INSERT INTO parking VALUES(2,'A',2,'false');
INSERT INTO parking VALUES(3,'A',3,'false');
INSERT INTO parking VALUES(4,'A',4,'false');
INSERT INTO parking VALUES(5,'A',5,'false');
INSERT INTO parking VALUES(6,'A',6,'false');
INSERT INTO parking VALUES(7,'A',7,'false');
INSERT INTO parking VALUES(8,'A',8,'false');
INSERT INTO parking VALUES(9,'A',9,'false');
INSERT INTO parking VALUES(10,'A',10,'false');

INSERT INTO parking VALUES(11,'B',1,'false');
INSERT INTO parking VALUES(12,'B',2,'false');
INSERT INTO parking VALUES(13,'B',3,'false');
INSERT INTO parking VALUES(14,'B',4,'false');
INSERT INTO parking VALUES(15,'B',5,'false');
INSERT INTO parking VALUES(16,'B',6,'false');
INSERT INTO parking VALUES(17,'B',7,'false');
INSERT INTO parking VALUES(18,'B',8,'false');
INSERT INTO parking VALUES(19,'B',9,'false');
INSERT INTO parking VALUES(20,'B',10,'false');

INSERT INTO parking VALUES(21,'C',1,'false');
INSERT INTO parking VALUES(22,'C',2,'false');
INSERT INTO parking VALUES(23,'C',3,'false');
INSERT INTO parking VALUES(24,'C',4,'false');
INSERT INTO parking VALUES(25,'C',5,'false');
INSERT INTO parking VALUES(26,'C',6,'false');
INSERT INTO parking VALUES(27,'C',7,'false');
INSERT INTO parking VALUES(28,'C',8,'false');
INSERT INTO parking VALUES(29,'C',9,'false');
INSERT INTO parking VALUES(30,'C',10,'false');

INSERT INTO parking VALUES(31,'D',1,'false');
INSERT INTO parking VALUES(32,'D',2,'false');
INSERT INTO parking VALUES(33,'D',3,'false');
INSERT INTO parking VALUES(34,'D',4,'false');
INSERT INTO parking VALUES(35,'D',5,'false');
INSERT INTO parking VALUES(36,'D',6,'false');
INSERT INTO parking VALUES(37,'D',7,'false');
INSERT INTO parking VALUES(38,'D',8,'false');
INSERT INTO parking VALUES(39,'D',9,'false');
INSERT INTO parking VALUES(40,'D',10,'false');
COMMIT;