-- ta9afa 3ama 
-- 200 OK response represents success for GET, PUT or POST requests.

-- 201 Created for when a new instance is created. Creating a new instance, using POST method returns 201 status code.

-- 204 No Content response represents success but there is no content to be sent in the response. Use it when DELETE operation succeeds.

-- 304 Not Modified response is to minimize information transfer when the recipient already has cached representations.

-- 400 Bad Request for when the request was not processed, as the server could not understand what the client is asking for.

-- 401 Unauthorized for when the request lacks valid credentials and it should re-request with the required credentials.

-- 403 Forbidden means the server understood the request but refuses to authorize it.

-- 404 Not Found indicates that the requested resource was not found.

-- 500 Internal Server Error indicates that the request is valid, but the server could not fulfill it due to some unexpected condition.


CREATE DATABASE matcha;
USE matcha;

CREATE TABLE users (
    id MEDIUMINT NOT NULL AUTO_INCREMENT,
    email VARCHAR(50),
    username VARCHAR(50),
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    password VARCHAR(128),
    confirmed BOOLEAN DEFAULT false,
    PRIMARY KEY(id) 
);

CREATE TABLE refreshTokens (
    id MEDIUMINT NOT NULL AUTO_INCREMENT,
    token VARCHAR(50),
    userId MEDIUMINT UNIQUE NOT NULL,
    expiryDate TIMESTAMP,
    PRIMARY KEY(id),
    FOREIGN KEY (userId)
      REFERENCES users(id)
      ON DELETE CASCADE
);

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';