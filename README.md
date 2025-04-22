# 📂 Agenda de Contatos Cyberfox

Uma aplicação web simples para cadastro, edição, exclusão e listagem de contatos.

---

## 🗂️ Estrutura do Projeto

```
Agenda/
├── controllers/           # Lógica de controle da aplicação
├── node_modules/          # Dependências do Node.js
├── public/                # Arquivos públicos (HTML, CSS, JS)
├── routes/                # Definição das rotas da API
├── sql/                   # Scripts SQL para o banco de dados
├── db.js                  # Configuração da conexão com o banco de dados
├── lembretes.txt          # Notas e lembretes do desenvolvedor
├── package.json           # Configurações e dependências do projeto
├── package-lock.json      # Controle de versões das dependências
├── server.js              # Arquivo principal do servidor
└── README.md              # Documentação do projeto
```

---

## 🚀 Funcionalidades

- Cadastro de contatos com nome, email, idade e telefone
- Edição e exclusão de contatos existentes
- Listagem de contatos com ordenação (alfabética, recente, antigo)
- Busca de contatos por nome
- Armazenamento da data/hora da última alteração (`alterado`)
- API RESTful para comunicação entre frontend e backend

---

## 🛠️ Tecnologias Utilizadas

- **Frontend:** HTML5, CSS3, JavaScript
- **Backend:** Node.js, Express
- **Banco de Dados:** MySQL

---

## 🔧 Como Rodar o Projeto Localmente

1. **Clone o repositório:**

```bash
git clone https://github.com/RodrigoGuedes04/Agenda.git
cd Agenda
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Configure o banco de dados:**

- Tenha o MySQL instalado e em execução.
- Use os scripts da pasta `sql/` para criar o banco e a tabela.
- Atualize `db.js` com suas credenciais de acesso ao MySQL.

4. **Inicie o servidor:**

```bash
node server.js
```

5. **Acesse a aplicação:**

Abra o navegador e acesse: `http://localhost:3000/html/index.html`

---

## 📌 Endpoints da API

- `GET /api/users` – Lista todos os usuários
- `POST /api/users` – Cadastra um novo usuário
- `PUT /api/users/:id` – Atualiza os dados de um usuário existente
- `DELETE /api/users/:id` – Remove um usuário
- `GET /api/users?search=nome` – Busca usuários pelo nome

---
📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.

Feito por Cyberfox


(https://github.com/RodrigoGuedes04)
