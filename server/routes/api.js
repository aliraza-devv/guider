const express = require('express');

const guidesRouter = require('./guides/guides.router');
const clientsRouter = require('./clients/clients.router');

const api = express.Router();

api.use('/', guidesRouter);
api.use('/profile', guidesRouter);
api.use('/clients', clientsRouter);

module.exports = api;