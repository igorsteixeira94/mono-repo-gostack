<img src="https://raw.githubusercontent.com/igorsteixeira94/mono-repo-gostack/7a1a9a7bb2ba2eb805c48a3ccf761cf6bc8fddc0/goBarber/web/src/assets/logo-purple.svg" width="200"/>

<h1 align="center">GoBarber</h1>
<p align="center"><i>Plataforma de agendamento para salões de beleza.</i></p>

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=gobarber&uri=https%3A%2F%2Fgithub.com%2Figorsteixeira94%2Fmono-repo-gostack%2Fblob%2Fmaster%2FgoBarber%2Fapi%2Fsrc%2Fconfig%2Finsomnia)



## :rocket: Tecnologias

* BackEnd (Api):
  * NodeJs;
  * Express;
  * Postgres com Sequelize;
  * Bcrypt;
  * JWT
  * Nodemailer
  * Mongo com Mongoose;
  * Redis;
  * BackgroundJobs com Bee-Queue;
  * Cors;
* FrontEnd (Web):
  * ReacJs;
  * React Router DOM;
  * Redux
  * Redux-Saga;
  * Redux-Persist
  * Consumo de api com axios.
* Mobile (Expo):
  * React-Native-CLI com react-navigation v5;
  * Redux;
  * Redux-Saga;
  * Redux-Persist;
  * Consumo de api com axios.



##  👨‍💻️  Como Usar

##### Executar a api

```shell
git clone git@github.com:igorsteixeira94/mono-repo-gostack.git
cd mono-repo-gostack/goBarber

#Api utiliza os bancos de dados postgres, mongo e redis.
#Iniciando o Servidor localhost:3333
cd api
yarn install
yarn dev:server

#Iniciando o background jobs
yarn queue
```

##### Executar o web

```shell
git clone git@github.com:igorsteixeira94/mono-repo-gostack.git
cd mono-repo-gostack/goBarber

#Iniciando a aplicação web localhost:3000
cd web
yarn install
yarn start

```

##### Executar o mobile

```shell
git clone git@github.com:igorsteixeira94/mono-repo-gostack.git
cd mono-repo-gostack/goBarber

# Iniciando a aplicação mobile.
# Configurar o host no arquivo src/services/api.js ! Instruções dentro do arquivo.
cd mobile
yarn android
yarn start

```
