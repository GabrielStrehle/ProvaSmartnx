# Prova para Estágio Back-end SmartNX

Este repositório contém exercícios e uma API back-end.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento de aplicativos server-side em JavaScript.
- **Express.js**: Framework web para Node.js que simplifica a criação de aplicativos web e APIs.
- **Sequelize**: ORM (Object-Relational Mapping) para Node.js baseado em Promises.
- **MySQL**: Sistema de gerenciamento de banco de dados relacional.

## Configuração do MySQL para a API

Para garantir o funcionamento adequado da API, é necessário ter o MySQL em execução localmente na sua máquina ou em um contêiner Docker. Se preferir utilizar um contêiner para o MySQL, siga as instruções abaixo.

### Passos para usar o MySQL via Docker

1. Execute o seguinte comando no seu terminal:

    ```
    docker container run --name nome-do-container -e MYSQL_ROOT_PASSWORD=sua_senha -d -p 3306:3306 mysql:8.0.29
    ```
Este comando criará e iniciará um contêiner com o MySQL.

2. O host será "localhost" ou "127.0.0.1".

3. A parte `MYSQL_ROOT_PASSWORD=sua_senha` define o usuário "root" com a senha "sua_senha". Se desejar alterar esses valores, sinta-se à vontade para fazê-lo.

4. O comando tentará executar na porta 3306 da sua máquina. Se preferir mudar essa porta, basta substituir o primeiro "3306" do comando pela porta desejada.

### Criando o banco de dados e iniciando o servidor Express

Com o MySQL configurado e em execução, siga os passos abaixo:

1. Para criar o banco de dados, execute o seguinte comando no terminal:


- `npx sequelize db:create`: responsável por criar o banco de dados.
- `npx sequelize db:migrate`: cria as tabelas do banco de dados.
- `npx sequelize db:seed:all`: popula as tabelas do banco de dados.

2. Após a criação do banco de dados, inicie o servidor Express executando o seguinte comando:


    ```
    node src/server.js
    ```

Agora, o banco de dados está configurado e o servidor Express está em execução. Você pode começar a usar a API conforme necessário.

## Endpoints Disponíveis na API

### Endpoints de Posts

- **Obter todos os posts**:
- Método: GET
- URL: `http://localhost:3001/posts`
- Descrição: Retorna todos os posts existentes no banco de dados.

- **Obter um post específico pelo ID**:
- Método: GET
- URL: `http://localhost:3001/posts/:postId`
- Descrição: Retorna o post com o ID especificado.

- **Cadastrar um novo post**:
- Método: POST
- URL: `http://localhost:3001/posts`
- Descrição: Cadastra um novo post no banco de dados.
- Corpo da Requisição (JSON):
 ```json
 {
     "title": "string",
     "body": "string"
 }
 ```
 Nota: Todas as chaves (`title` e `body`) são obrigatórias.

- **Excluir um post pelo ID**:
- Método: DELETE
- URL: `http://localhost:3001/posts/:postId`
- Descrição: Exclui o post com o ID especificado.

### Endpoints de Comentários

#### Cadastrar um novo comentário em um post específico:

1. Entre na pasta `seeders` e localize o arquivo `20240406213250-comments.js`.
2. Abra o arquivo `20240406213250-comments.js` em um editor de texto.
3. Modifique o conteúdo da seed data para refletir o novo comentário que você deseja inserir, incluindo o `postId` correspondente ao post onde você quer adicionar o comentário.
4. Salve as alterações no arquivo.
5. No terminal, execute o comando `npx sequelize db:seed:all` para executar todos os seeders, incluindo o seeder de comentários recém-atualizado.

#### Excluir um comentário de um post:

1. Entre na pasta `seeders` e localize o arquivo `20240406213250-comments.js`.
2. No terminal, execute o comando para excluir o comentário desejado, substituindo `id` pelo ID do comentário que você quer excluir:

   ```bash
   COMMENT_ID_TO_DELETE=id npx sequelize db:seed:undo:all


Cada exercício pode ser executado individualmente usando o Node.js. Siga as instruções:

- **E.1 Maior String**: `node E1.js`
- **E.2 Aplicar Função**: `node E2.js`
- **E.3 Imprimir Strings**: `node E3.js`
- **E.4 Substituir Números**: `node E4.js`
- **E.5 Substituir Números por Valores**: `node E5.js`
- **E.6 até E.11 Exercícios com Arrays**: `node E6.js`, `node E7.js`, `node E8.js`, `node E9.js`, `node E10.js`, `node E11.js`
- **E.12 Remover Documento**: `node E12.js`

## Exemplos de Uso

- E.1 Maior String:

  - Entrada: "banana", "maçã"
  - Saída: "banana"

- E.2 Aplicar Função:
  - Entrada: "Olá", "Mundo", toUpperCase
  - Saída: "OLÁ MUNDO"

...

## Contato

Se você tiver alguma dúvida ou sugestão, entre em contato:

Email: gabrielstrehle@gmail.com
GitHub: GabrielStrehle
