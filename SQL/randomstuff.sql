# Create a database
CREATE DATABASE my_database;

DROP DATABASE my_database;

USE my_database;

CREATE TABLE student (
	student_id INT,
    name VARCHAR(20),
    major VARCHAR(20),
    PRIMARY KEY(student_id)
);

DESCRIBE TABLE student;

ALTER TABLE student ADD gpa DECIMAL(3,2);

ALTER TABLE student DROP gpa;

DROP TABLE student;

INSERT INTO student VALUES(1, 'Jack', 'Biology');

SELECT * FROM student;








