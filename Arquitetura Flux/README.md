<p align="center">Arquitetura Flux</p>

# Introdução

Flux é uma arquitetura com intuito de trabalhar com um fluxo unidirecional de dados, de uma maneira mais simplista é uma forma de trabalharmos com states globais onde temos vários componentes que escutam e modificam um mesmo state. Como no exemplo desse repo

_Flux não é uma biblioteca ou um framework, compare ele como uma arquitetura no tipo MVC_

A arquitetura Flux é composta por :

- View : São nossos componentes
- Action: São ações disparadas pelo componente
- Dispatch: Funciona como uma central de responsável por registrar essas ações e enviar para o Store.
- Store funciona como a central de toda a arquitetura. Responsável por modificar o state global conforme a ação disparada, e enviar um evento a todos os componentes avisando que o componente mudou !

Redux é uma biblioteca que facilita a aplicação do conceito de arquitetura flux.

Aqui nesse repo usamos o exemplo de um carrinho de compras para aplicarmos o conceito de Flux e Redux. Para entender mais sobre flux e redux, acesse [meu blog](https://igorteixeira.com.br/)

# Projeto

Projeto nomeado como rocketshoes, é um carrinho de compra de tênis. A ideia do projeto é utilizar componentes que compartilhe e modifique os mesmos states. 

# ScreenShot

### Web

<p align="center">

<img src="https://user-images.githubusercontent.com/47749249/94564410-54de1300-023e-11eb-97d3-18a420a4533e.png" width="400px"/>

<img src="https://user-images.githubusercontent.com/47749249/94564415-56a7d680-023e-11eb-91ea-67e7a38658df.png" width="400px"/>

</p>


### Mobile
<p align="center">
<img src="https://user-images.githubusercontent.com/47749249/94565405-8efbe480-023f-11eb-806d-74f507d18f81.png" width="200px"/>
<img src="https://user-images.githubusercontent.com/47749249/94565408-902d1180-023f-11eb-9659-ea66046dbf42.png" width="200px"/>
</p>





# Como usar

```shell
git clone git@github.com:igorsteixeira94/mono-repo-gostack.git

cd mono-repo-gostack/Arquitetura\ Flux/rocketshoes/

# para testar o web:
cd web
yarn install
yarn start

# para rodar a fakeapi
yarn json-server server.json --p 3333 -w

# para testar o mobile
cd mobile
yarn install
yarn android
yarn start

# para rodar a fakeapi
yarn json-server server.json --p 3333 -w


```




