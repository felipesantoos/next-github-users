# Next GitHub Users
Primeiro projeto em Next.js.

## Primeiros passos
```bash
yarn create next-app projeto-01 # cria um novo projeto next
cd projeto-01 # entra na pasta do novo projeto
yarn dev # executa o servidor em modo de desenvolvimento.
```
- `yarn build` constrói o app para produção.
- `yarn start` executa o app contruído em modo de produção.
```bash
yarn add @types/react # instala os tipos do react como dependências
yarn add @types/node # instala os tipos do node como dependências
yarn add typescript # instala o typescript como depedência

yarn tsc --init # inicializa o typescript
```
## Estrutura do React
> Client (Browser) ↔ Frontend ↔ Backend ↔ Database.
## Estrutura do Next
> Client (Browser) ↔ Next.js Frontend (↔ Internal Backend ↔ Internal Frontend ↔) ← JSON → Backend ↔ Database.
## Requisições
Vamos fazer requisições à REST API do GitHub.  
> https://api.github.com/users/:username
- Precisamos instalar o `axios` executando o comando `yarn add axios`.
