
--SCHEMA SETUP
CREATE DATABASE IF NOT EXISTS COLLECTIBILES_db;

USE COLLECTIBILES_db;

DROP TABLE IF EXISTS USERS;

CREATE TABLE USERS (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS COLLECTIONS;

-- Create Collections table
CREATE TABLE COLLECTIONS (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES USERS(id)
);

DROP TABLE IF EXISTS COLLECTION_IMAGES;

-- Create Colletion Images table
CREATE TABLE COLLECTION_IMAGES (
	id INT AUTO_INCREMENT PRIMARY KEY,
	image_url TEXT NOT NULL,
	collection_id INT,
	FOREIGN KEY (collection_id) REFERENCES COLLECTIONS(id)
);

DROP TABLE IF EXISTS BLOGPOSTS;

CREATE TABLE BLOGPOSTS (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    collection_id INT,
    user_id INT,
    FOREIGN KEY (collection_id) REFERENCES Collections(id),
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

DROP TABLE IF EXISTS COMMENTS;

CREATE TABLE COMMENTS (
    id INT AUTO_INCREMENT PRIMARY KEY,
    content TEXT NOT NULL,
    blogpost_id INT,
    user_id INT,
    FOREIGN KEY (blogpost_id) REFERENCES BlogPosts(id),
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

--SEED SCRIPTS
INSERT INTO USERS (username, email, password) VALUES ('jaclynb','jaclynbarcal@gmail.com','pass123'),
    ('groverthadawg','grovedog@gmail.com','pass123');

INSERT INTO COLLECTIONS (title, user_id) VALUES ('my collection', 1);

INSERT INTO COLLECTION_IMAGES (image_url, collection_id) VALUES ('https://storage.googleapis.com/www.krakenden.net/Collectibiles/20230809_232701.jpg', 1),
('https://storage.googleapis.com/www.krakenden.net/Collectibiles/20230809_232716.jpg', 1),
('https://storage.googleapis.com/www.krakenden.net/Collectibiles/20230809_232736.jpg', 1),
('https://storage.googleapis.com/www.krakenden.net/Collectibiles/20230809_232758.jpg', 1),
('https://storage.googleapis.com/www.krakenden.net/Collectibiles/20230809_232833.jpg', 1);

INSERT INTO BLOGPOSTS (title, content, collection_id, user_id) VALUES ('First post!', 'This is my first post!', 1, 1);

INSERT INTO COMMENTS (content, blogpost_id, user_id) VALUES ('that is really radical' 1, 2);

