const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/buscar', userController.buscarUsuarios);
router.get('/', userController.listarUsuarios);
router.post('/', userController.adicionarUsuario);
router.put('/:id', userController.editarUsuario);
router.delete('/:id', userController.excluirUsuario);

module.exports = router;
