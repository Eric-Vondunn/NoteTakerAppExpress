-- Drops the note_taker if it exists currently --
DROP DATABASE IF EXISTS note_taker_db;
-- Creates the "note_taker_db" database --
CREATE DATABASE note_taker_db;

-- Makes it so all of the following code will affect note_taker_db --
USE note_taker_db;


CREATE TABLE notes (
  id INTEGER NOT NULL AUTO_INCREMENT,
  note VARCHAR(100) NOT NULL,
  dates VARCHAR (30) NOT NULL,
  PRIMARY KEY (id)
);