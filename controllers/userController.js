const db = require('../db');

// Listar usuários
exports.listarUsuarios = (req, res) => {
  db.query('SELECT * FROM usuarios', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

// Adicionar usuário
exports.adicionarUsuario = (req, res) => {
  const { nome, email, idade, telefone } = req.body;
  const query = 'INSERT INTO usuarios (nome, email, idade, telefone) VALUES (?, ?, ?, ?)';
  db.query(query, [nome, email, idade, telefone], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id: result.insertId, nome, email, idade, telefone });
  });
};

// Editar usuário
exports.editarUsuario = (req, res) => {
  const { id } = req.params;
  const { nome, email, idade, telefone } = req.body;
  const query = 'UPDATE usuarios SET nome = ?, email = ?, idade = ?, telefone = ? WHERE id = ?';
  db.query(query, [nome, email, idade, telefone, id], (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Usuário atualizado com sucesso' });
  });
};

// Excluir usuário
exports.excluirUsuario = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM usuarios WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Usuário excluído com sucesso' });
  });
};

//buscar usuario
exports.buscarUsuarios = (req, res) => {
  const termo = req.query.q;

  const query = `
    SELECT * FROM usuarios
    WHERE nome LIKE ? OR email LIKE ? OR telefone LIKE ?
  `;

  const likeTermo = `%${termo}%`;

  db.query(query, [likeTermo, likeTermo, likeTermo], (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};


