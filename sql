CREATE DATABASE meu_banco;

USE meu_banco;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(50),
  email VARCHAR(200),
  idade INT,
  telefone VARCHAR(20)
);
ALTER TABLE usuarios
ADD COLUMN alterado DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

select * from usuarios;