# 🎲 Rodando o Back End

## Configuração do Projeto

Instale as dependências do projeto.

```bash
npm install
```

Uma vez que as dependencias foram instaladas, voce pode configurar o projeto criando um novo arquivo .env file contendo as variávesi usadas no desenvolvimento.

```bash
.env.sample -> .env
```

## Execute a aplicação em modo de desenvolvimento

```bash
# Suba as migrations da base de dados usando o Prisma
npx prisma migrate dev

# Execute a aplicação
npm run start:dev

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```

## Estrutura do Projeto

```shell
src
├───modules
│   ├───auth
│   │   ├───controller
│   │   ├───dtos
│   │   ├───entities
│   │   ├───strategies
│   │   └───auth.module.ts
│   ├───hygiene
│   │   ├───controller
│   │   ├───dtos
│   │   ├───entities
│   │   ├───service
│   │   └───hygiene.module.ts
│   ├───parasite-control
│   │   ├───controller
│   │   ├───dtos
│   │   ├───entities
│   │   ├───service
│   │   └───parasite-control.module.ts
│   ├───pets
│   │   ├───controller
│   │   ├───dtos
│   │   ├───entities
│   │   ├───service
│   │   └───pets.module.ts
│   ├───users
│   │   ├───controller
│   │   ├───dtos
│   │   ├───entities
│   │   ├───service
│   │   └───users.module.ts
│   └───vaccines
│       ├───controller
│       ├───dtos
│       ├───entities
│       ├───service
│       └───vaccines.module.ts
├───prisma
│    └───prisma.service.ts
│───app.module.ts
└───main.ts
```
