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

## Aula 2

- Estrutura do banco de dados
- CRUD de memórias
  - Criação
  - Listagem
  - Delete
  - Atualização
- Plugin de CORS

Crio o schema de `Memory` para criar a tabela, uso o comando `npx prisma migrate reset` e depois o `npx prisma migrate dev` e informo o nome `create memories table` para criar a migration.

 O comando `migrate dev` atualiza seu banco de dados usando migrações durante o desenvolvimento e cria o banco de dados se ele não existir.

 O comando `migrate reset` exclui e recria o banco de dados ou executa uma 'reinicialização suave' removendo todos os dados, tabelas, índices e outros artefatos.

A documentação do Prisma descreve o [Prisma CLI](https://www.prisma.io/docs/reference/api-reference/command-reference)

Separamos nosso código e deixamos o CRUD de memórias no arquivo `memoriesRoutes`.

Usamos a biblioteca de validação Zod.

Usamos o Insomnia para testar as requisições, ou o HTTPie (apresentado pelo Diego Fernandes na NLW).

Instalamos o`npm install @fastify/cors` para permitir o uso de CORS (Cross-origin resource sharing) em uma aplicação Fastify.

CORS é um mecanismo de segurança que permite que recursos restritos em uma página Web sejam solicitados de outro domínio. Resumindo, é o compartilhamento de recursos com origens diferentes.

## Aula 3

- Rota de autenticação
- Criação de token JWT
- Rotas autenticadas
- Rota de upload de arquivos
- URL de arquivos estáticos

Fazemos a instalação do dotenv para fazer a leitura das variáveis de ambiente, executamos o comando `npm i dotenv -D`

Instalamos o jwt com `npm i @fastify/jwt` e seguimos a [documentação](https://github.com/fastify/fastify-jwt)

Criamos o arquivo auth.d.ts para declarar o tipo de informações que retornados pelo usuário do Fastify JWT.

Verificamos o usuário nas rotas de memórias.
