<p align="center"><img src="https://user-images.githubusercontent.com/47749249/95515669-63da6900-0994-11eb-8809-e0459fc5ff2f.png" width="400"/></p>


<h1 align="center">FastFeet</h1>
<p align="center"><i>Sua plataforma de entregas!</i></p>


## :rocket: Tecnologias

* BackEnd (Api):
  * NodeJs;
  * Express;
  * Postgres com Sequelize;
  * Bcrypt;
  * JWT
  * Nodemailer
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
