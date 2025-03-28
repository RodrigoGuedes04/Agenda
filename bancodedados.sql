create database crud;

use crud;

CREATE TABLE usuarios (
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    fone VARCHAR(45) NOT NULL,
    data_nascimento DATE NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO usuarios (nome, email, fone, data_nascimento) 
VALUES ('will', 'will@teste', '87384', '2004-03-02');

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';