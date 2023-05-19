# NLW Spacetime: Back-end (Trilha Ignite)

## Aula 1 - Iniciando o projeto

- Node.js (instalação)
- Typescript + TSX
- Fastify(framework)
- ESLint
- Prisma + SQLite

## ESLint

  Usamos as configurações do ESLint da Rocketseat como dependência no modo de desenvolvimento, através do comando: `npm i @rocketseat/eslint-config -D`. Para saber mais acesse o link do [Github da Rocketseat](https://github.com/Rocketseat/eslint-config-rocketseat).

  Rodando o comando `npm run lint`, faz com que o ESLint analise todos os arquivos dentro do projeto e corrija os erros detectados de acordo com as configurações da Rocketseat.

## Curiosidade

  HTTPie é uma ferramenta, semelhante ao Postman e o Insomnia, para testar requisições via terminal.

## Prisma

  Usamos o comando `npx prisma init --datasource-provider SQLite` para indicar o uso do banco de dados SQLite e não o PostgreSQL que é o padrão.

  Usando o comando `npx prisma migrate dev` que serve para ler o arquivo schema.prisma, detectar as alterações e criar as migrations (controle de versionamento do banco de dados da aplicação).

  Com o comando `npx prisma studio`, podemos abrir uma GUI do banco de dados no navegador.

  Para acessar o banco de dados através da API, instalamos o @prisma/client com o comando `npm i @prisma/client`.

## Começando

Para rodar o servidor em modo de desenvolvimento:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Abra [http://localhost:3333](http://localhost:3333) em conjunto com as rotas definidas no arquivo `server.ts` do diretório `src` com seu navegador para ver o resultado.
