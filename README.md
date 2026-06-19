# Controle Escolar

Sistema Full Stack desenvolvido para gerenciamento de turmas e atividades de professores.

---

# Integrantes

- Gabrielly Piffer

---

# Tecnologias Utilizadas

## Front-end

- HTML5
- CSS3
- JavaScript

## Back-end

- Node.js
- Express

## Banco de Dados

- MySQL
- Prisma ORM

---

# Infraestrutura

## IDE Utilizada

- Visual Studio Code (VS Code)

## SGBD e Versão

- MySQL 8.0

## Servidor de Aplicação

- Node.js v22

## Linguagens Utilizadas

- JavaScript
- HTML
- CSS

---

# Funcionalidades

## Login

O professor informa e-mail e senha para acessar o sistema.

## Cadastro de Professor

Permite cadastrar novos professores.

## Cadastro de Turmas

Permite cadastrar turmas vinculadas ao professor logado.

## Listagem de Turmas

Exibe todas as turmas cadastradas pelo professor.

## Exclusão de Turmas

Permite excluir turmas sem atividades cadastradas.

## Cadastro de Atividades

Permite cadastrar atividades para uma turma.

## Listagem de Atividades

Exibe todas as atividades de uma turma.

## Exclusão de Atividades

Permite remover atividades cadastradas.

## Logout

Encerra a sessão do professor e retorna para a tela de login.

---

# Estrutura do Projeto

```

controleDeAtividade/

├── api/

│   ├── prisma/

│   ├── src/

│   │   ├── controllers/

│   │   ├── routes/

│   │   └── data/

│   ├── package.json

│   └── server.js

├── web/

│   ├── login.html

│   ├── professor.html

│   ├── turma.html

│   ├── professor.js

│   ├── turma.js

│   └── style.css

├── docs/

│   ├── banco.sql

│   └── insomnia.yaml

└── README.md

```

---

# Como Executar o Back-end

## 1. Abrir a pasta da API

```
cd api
```

## 2. Instalar dependências

```
npm install
```

## 3. Configurar o arquivo .env

```
DATABASE_URL="mysql://root:senha@localhost:3306/turmas_db"
```

Substitua os dados conforme seu banco.

## 4. Executar as migrations

```
npx prisma migrate dev
```

## 5. Iniciar servidor

```
npm start
```

ou

```
node server.js
```

Servidor disponível em:

```
http://localhost:3000
```

---

# Como Executar o Front-end

## 1. Abrir a pasta web

```
web
```

## 2. Executar com Live Server

Clique com o botão direito em:

```
login.html
```

e selecione:

```
Open with Live Server
```

ou abra diretamente no navegador.

---

# Banco de Dados

Nome do banco:

```
turmas_db
```

Tabelas:

- professor
- turma
- atividade

Relacionamentos:

- Um professor possui várias turmas.
- Uma turma pertence a um professor.
- Uma turma possui várias atividades.
- Uma atividade pertence a uma turma.

---

# Prints das Telas

## Tela de Login

![Tela inicial](./docs/print1.png)

---

## Tela de cadastro de professor

![Tela inicial](./docs/print2.png)

---

## Tela Principal do Professor

![Tela Professor](./docs/print3.png)

---

## Tela cadastrar turma

![Tela Professor](./docs/print5.png)

---

## Tela de Atividades

![Tela Atividades](./docs/print4.png)

---

# Tela cadastrar atividade

![Tela Atividades](./docs/print6.png)

---

# Regras Implementadas

- Login utilizando e-mail e senha.
- Sessão utilizando sessionStorage.
- Cadastro de professor.
- Cadastro de turma.
- Cadastro de atividade.
- Exclusão de atividade.
- Exclusão de turma.
- Impedimento de exclusão de turma com atividades cadastradas.
- Logout do sistema.

---

# Autor

Gabrielly Teixeira Piffer
