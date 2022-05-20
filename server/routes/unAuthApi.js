const express = require('express');

const unAuthGuidesRouter = require('./unAuthGuides/unAuthGuides.router');

const unAuthApi = express.Router();

unAuthApi.use('/', unAuthGuidesRouter);

module.exports = unAuthApi;