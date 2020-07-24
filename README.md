# Controle Financeiro Pessoal (Desafio IGTI Bootcamp)

Esse projeto contém o **backend** do projeto final do Bootcamp realizado pela IGTI (um controle de financas pessoais).

O **Backend** foi desenvolvido utilizando NodeJS e uma demo pode ser acessada através do link: [https://lets00-cfp-server.herokuapp.com/](https://lets00-cfp-server.herokuapp.com).

## Requisição ao backend

Para obter os dados do backend, realize uma chamada a rota `transaction`, passando um parâmetro de consulta (query parameter) chamado `period` com o ano e o mês respectivamente (ex: period=2020-07). Ex: [https://lets00-cfp-server.herokuapp.com/transaction?period=2020-07](https://lets00-cfp-server.herokuapp.com/transaction?period=2020-07)

## Executando o projeto

Para executar o projeto em ambiente de desenvolvimento,é necessário possuir um servidor MongoDB configurado (geralmente utilizo um arquivo de orquestração do docker-compose). Após isso, crie um arquivo .env na raiz do projeto e defina as seguintes informações:

```
DB_URL=mongodb+srv://{endereco_do_mongo}:{porta}/{colecao}
PORT=8000
```

Feito isso, execute os comandos abaixo:

```sh
$ npm install
$ node -r dotenv/config --experimental-modules index.js
```

## Frontend

O código font do frontend do projeto pode ser encontrado em: [https://github.com/lets00/igti-cfp-front](https://github.com/lets00/igti-cfp-front).