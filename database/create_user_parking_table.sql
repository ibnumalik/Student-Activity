PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;

CREATE TABLE user_parking (
    id integer primary key,
    user_id integer not null,
    parking_id integer not null,
    receipt text,
    foreign key (user_id) references users(id),
    foreign key (parking_id) references parking(id)
);

COMMIT;