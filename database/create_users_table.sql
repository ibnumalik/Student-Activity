PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE users (
    id integer primary key,
    email text not null,
    role text,
    password text not null,
    token text
);

INSERT INTO users VALUES(1,'admin@admin.com','admin','$2y$10$ZpkjBbu42DF12lC1L7i5ZOtH9VM/77tuMjiG50e9/vFWD6uaPXulq',NULL);
COMMIT;