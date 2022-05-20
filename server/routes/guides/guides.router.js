const express = require('express');
const {
    httpGetProfile,
    httpAddProfile,
} = require('./guides.controller');

const guidesRouter = express.Router();

guidesRouter.post('/', httpAddProfile);
guidesRouter.get('/:id', httpGetProfile);

module.exports = guidesRouter;