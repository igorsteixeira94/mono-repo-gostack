# GoGithub Mobile

Diferente do GoGithub Web essa é uma versão que busca por usuários do github e mostrar alguns dos repositórios. Feito em React Native.

- React Native é a versão React para desenvolvimento mobile
  - Multiplataforma, interface nativa e código não transpilado.

Sua arquitetura difere um pouco da web. O código JS para pelo metro bundle (especie de webpack da web),  depois do bundle gerado o React Native usa um conceito chamado Bridge para fazer com que o JavaScript "converse" com o código nativo e o código native renderiza as informações no aparelho.



## Projeto 

O projeto é um app para buscar usuários do github e mostrar alguns repositórios. Ao clicar no repositório, abre uma WebView com as informações completas do respositório.



## Como usar 

```shell
git clone git@github.com:igorsteixeira94/mono-repo-gostack.git
cd mono-repo-gostack/react-native/mobile/
yarn install
yarn start
yarn android #para rodar no android
yarn ios #para rodar no ios
```



## ScreenShots

<p align="center">
<img src="https://user-images.githubusercontent.com/47749249/94609748-9938d580-0275-11eb-95f9-5adfc185af3e.png" width="400px"/>

<img src="https://user-images.githubusercontent.com/47749249/94609754-9b9b2f80-0275-11eb-8ec1-f5e6eaaf9cf8.png" width="400px"/>

<img src="https://user-images.githubusercontent.com/47749249/94609766-9dfd8980-0275-11eb-9958-18e64c90c5cf.png" width="400px"/>

</p>