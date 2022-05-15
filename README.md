# NodeJS e MySQL
 
 ## Comandos no terminal
Para se conectar ao MySQL no terminal
````
mysql -h localhost -u root -p
````

Mostrar as bancos de dados
````
SHOW DATABASES;
````

Criar um banco de dados
````
CREATE DATABASES <nome-do-banco>;
````

Entrar no banco de dados
````
USE <nome-do-banco>
````

Mostrar tabelas
````
SHOW TABLES
````

inserir dados em uma tabela
````
INSERT INTO <nome da tabela>(nome, apartamento, email, senha) VALUE(
  "nome",
  "apartamento",
  "email",
  "senha"
);
````



## Tipos de dados
- TEXT: textos
- CHAR: caracteres
- INT: inteiros
- FLOAT: números decimais
- DATE: para datas
- BLOB: para arquivos
