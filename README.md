# Projeto CRUD Usuário com as tecnologias: NodeJs com Hapi e Typeorm com Mysql

## Comandos para instalar dependencias:
1. Execute `yarn install` no prompt de comando para instalar todas dependencias do arquivo `package.json`

## Criar o container do banco Docker
1. Execute `docker-compose up -d` para criar um container do banco

## O projeto:
  - O projeto tem uma estrutura simples conhecida por desenvolvedores de Node.
  - A comunicação entre camadas acontece da seguinte maneira: `App.ts -> Server <-> Router <-> Controller <-> Service <-> Repository <-> Entity`
  - O projeto aderiu o padrão de arquitetura REST `(GET,POST,PUT, DELETE)`
  - Ferramentas utilizadas para testar a aplicação foi `Insomnia`
  - Todo as requisições devem ser feitas por parâmetros Ex. `http://localhost:3000/user/1` .

## Comandos utilizados para instalar depedências do projeto:
1. Execute `yarn init -y` no prompt de comando
2. Execute `yarn add @hapi/hapi` no prompt de comando
3. Execute `yarn add @types/hapi__hapi` no prompt de comando
4. Execute `yarn add @types/node` no prompt de comando
5. Execute `yarn add ts-node-dev` no prompt de comando
6. Execute `yarn add dotenv --save` no prompt de comando
7. Execute `yarn add mysql2 --save` no prompt de comando
8. Execute `yarn add typeorm --save` no prompt de comando
9. Execute `yarn add reflect-metadata --save` no prompt de comando
10. Execute `yarn add typescript -D` no prompt de comando
11. Execute `yarn tsc --init` no prompt de comando

## Comandos para criar entities e migrations:
1. Execute `yarn typeorm migration:create -n User` no prompt de comando para criar a migration User
2. Execute `yarn typeorm entity:create -n User` no prompt de comando para criar a entity User
3. Execute `yarn typeorm migration:show` no prompt de comando para visualizar se foi criada no banco


