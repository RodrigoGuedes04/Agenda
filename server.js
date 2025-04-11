const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');

const app = express();
const PORT = 3000;

// Middleware para JSON
app.use(bodyParser.json());

// Rota da API
app.use('/api/users', userRoutes);
app.use(express.static('public'));

// Servir arquivos HTML/CSS/JS da pasta public
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
