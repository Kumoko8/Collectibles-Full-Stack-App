-- Create Users table
CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Create Collections table
CREATE TABLE Collections (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

-- Create BlogPosts table
-- CREATE TABLE BlogPosts (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     title VARCHAR(255) NOT NULL,
--     content TEXT NOT NULL,
--     collection_id INT,
--     user_id INT,
--     FOREIGN KEY (collection_id) REFERENCES Collections(id),
--     FOREIGN KEY (user_id) REFERENCES Users(id)
-- );

-- Create Comments table
-- CREATE TABLE Comments (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     content TEXT NOT NULL,
--     blogpost_id INT,
--     user_id INT,
--     FOREIGN KEY (blogpost_id) REFERENCES BlogPosts(id),
--     FOREIGN KEY (user_id) REFERENCES Users(id)
-- );