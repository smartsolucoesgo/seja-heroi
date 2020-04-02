const express = require('express');

const UserController = require('./controllers/UserController');
const SolicitacaoController = require('./controllers/SolicitacaoController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);

routes.get('/profile', ProfileController.index);

routes.get('/solicitacao', SolicitacaoController.index);
routes.post('/solicitacao', SolicitacaoController.create);
routes.delete('/solicitacao/:id', SolicitacaoController.delete);

module.exports = routes;