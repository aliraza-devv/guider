const express = require('express');
const {
    httpGetGuides,
    httpAddClient
} = require('./unAuthGuides.controller');

const unAuthGuidesRouter = express.Router();

unAuthGuidesRouter.post('/addClient/:id', httpAddClient);
unAuthGuidesRouter.get('/:placeName', httpGetGuides);

module.exports = unAuthGuidesRouter;