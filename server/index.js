'use strict';

const express = require('express');
const router = require('./router');
const validate = require('./middleware/validate');
const defaultErrorHandler = require('./middleware/default-error-handler');

module.exports = function createServer(deps) {
	const { logger } = deps;
	const server = express();

	// Apply middleware
	server.use(express.json());
	server.use(router({ ...deps, validate }));
	server.use(defaultErrorHandler(deps));

	// Begin listening for HTTP requests
	const httpPort = parseInt(process.env.HTTP_PORT, 10);
	server.listen(httpPort, () => {
		logger.info(`TripSit website API listening on port ${httpPort}.`);
	});

	return server;
};
