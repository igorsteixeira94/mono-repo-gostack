# Nodejs

Desafios para conhecer um pouco do funcionamento do NodeJS, conceitos de api rest, verbos do protocolo http, middleware, padrão de comunição via JSON.

# Projeto

Os dois desafios se baseiam em um to do, onde podemos cadastrar projetos e para cada projeto podemos cadastrar n-tarefas.

Baseado em uma api REST, comunicação por meio do protocolo HTTP, usando os verbos:

* POST: Para cadastro de projetos e tarefas
* GET: Para listar todos os projetos e suas tarefas
* PUT: Para alterar dados do projeto e/ou tarefa
* DELETE: Para deletar um projeto com base no id.

## Desafios:
* [Desafio 1](https://github.com/igorsteixeira94/mono-repo-gostack/tree/master/nodejs/Desafio%201) É a implementação do CRUD do projeto, utlizando um array como "base de dados".
* [Desafio 2](https://github.com/igorsteixeira94/mono-repo-gostack/tree/master/nodejs/Desafio%202) É a mesma implementação CRUD, porém utilizando o Postgres como base de dados.

## Como usar ?



```shell
##Para executar o projeto 1:
git clone git@github.com:igorsteixeira94/mono-repo-gostack.git
cd mono-repo-gostack/nodejs/Desafio\ 1/
yarn install
yarn dev:server

##Para executar o projeto 2:
git clone git@github.com:igorsteixeira94/mono-repo-gostack.git
cd mono-repo-gostack/nodejs/Desafio\ 2/

# instalar o postgres, se não tem ele instalado pode utilizar o docker para instalação.
# configurar o arquivo config/database.js, com usar credenciais.

#Por fim rodar as migrations do sequelize, para criar automaticamente as tabelas no banco de dados:

yarn sequelize db:migrate

yarn install
yarn dev:server


```

