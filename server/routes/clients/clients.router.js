const express = require('express');
const {
    httpGetClients
} = require('./clients.controller');

const clientsRouter = express.Router();

clientsRouter.get('/:id', httpGetClients);

module.exports = clientsRouter;