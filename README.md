# MiniBlog - Projeto React com Firebase

Este é um projeto de MiniBlog desenvolvido para prática de conceitos modernos de desenvolvimento web, utilizando **React** no front-end e **Firebase** no back-end.

---

## Características principais

- Criação, leitura, edição e exclusão de posts.
- Autenticação de usuários com Firebase Authentication.
- Interface responsiva e simples, focada em usabilidade.
- Busca por tags para filtrar posts.
- Dashboard para gerenciamento dos posts do usuário.
- Utiliza Firestore para armazenar dados dinâmicos dos posts.

---

## Tecnologias utilizadas

- React
- Firebase (Authentication, Firestore)
- Tailwind CSS
- JavaScript

---

## Como rodar localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/kauannlima/miniblog.git
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure seu projeto Firebase e obtenha as credenciais do SDK.

4. Crie um arquivo `.env` na raiz do projeto com as variáveis do Firebase (exemplo):

   ```
   REACT_APP_API_KEY=your_api_key
   REACT_APP_AUTH_DOMAIN=your_project.firebaseapp.com
   REACT_APP_PROJECT_ID=your_project_id
   REACT_APP_STORAGE_BUCKET=your_project.appspot.com
   REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_APP_ID=your_app_id
   ```

5. Inicie o projeto:

   ```bash
   npm start
   ```

---

## Deploy

Você pode fazer deploy facilmente em serviços como Vercel, Netlify ou Firebase Hosting.

---

## Link para o site em produção

[Acesse o MiniBlog online](https://miniblog-ivory.vercel.app/)

---

## Licença

Este projeto é licenciado sob a [Licença MIT](LICENSE).

---

Desenvolvido por Kauan Lima 💻
