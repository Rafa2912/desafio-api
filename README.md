# 🧪 Testes Automatizados da API - ServeRest

Este projeto contém testes automatizados utilizando **Jest** e **Supertest** para a API pública [https://serverest.dev](https://serverest.dev), simulando operações CRUD no recurso de **usuários**.

---

## ✅ Funcionalidades testadas

Os seguintes endpoints foram cobertos com testes automatizados:

- **GET /usuarios** – Lista todos os usuários
- **GET /usuarios/{id}** – Retorna um usuário específico
- **POST /usuarios** – Cria um novo usuário
- **PUT /usuarios/{id}** – Atualiza dados de um usuário existente
- **DELETE /usuarios/{id}** – Remove um usuário (criado durante o teste)

---

## ⚙️ Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Jest](https://jestjs.io/)
- [Supertest](https://github.com/ladjs/supertest)
- [Allure Reports](https://docs.qameta.io/allure/)

---

## 📁 Estrutura do projeto

├── tests/
│ ├── usuarios/
│ │ ├── getUsuarios.spec.js
│ │ ├── getUsuarioPorId.spec.js
│ │ ├── postUsuarios.spec.js
│ │ ├── putUsuarios.spec.js
│ │ └── deleteUsuarios.spec.js
├── utils/
│ └── tokenManager.js
├── package.json
└── jest.config.js

---

## 🚀 Como executar os testes
```bash
npm test
npm run allure:generate
npm run allure:open
npm run test:report

## 🚀 Como rodar a pipeline - GitHub

Passos para execução:
Acesse o github -> https://github.com/Rafa2912/desafio-api
Faça login com sua conta do GitLab;
Clique no botão "Actions" na parte superior;
Clique no botão "Test and Generate Allure Report" na parte superior á esquerda;
Clique no botão "Run workflow" na parte superior á direta;
Escolha a branch desejada (ex:main)
Clique em "Run workflow" novamente para iniciar a execução.
A pipeline será disparada automaticamente e você poderá acompanhar os estágios de execução em tempo real.


### 1. Clone o projeto

```bash
git clone https://github.com/rafaelrodrigoqa/desafio-api.git
cd desafio-api
npm install

⚠️ Requisitos
Node.js 18 ou superior

NPM 9 ou superior

👤 Autor
Desenvolvido por Rafael Rodrigo
🔗 GitHub: https://github.com/Rafa2912