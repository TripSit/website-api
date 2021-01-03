'use strict';

const express = require('express');
const router = require('./router');
const validate = require('./middleware/validate');
const defaultErrorHandler = require('./middleware/default-error-handler');

module.exports = function createServer(deps) {
	const server = express();

	// Apply middleware
	server.use(express.json());
	server.use(router({ ...deps, validate }));
	server.use(defaultErrorHandler(deps));

	return server;
};
