'use strict';

require('dotenv').config();
const createLogger = require('./logger');
const createEmail = require('./email');
const createServer = require('./server');
const createErrorLogger = require('./utils/create-error-logger');

const logger = createLogger();
const httpPort = parseInt(process.env.HTTP_PORT, 10);

async function init() {
	const server = createServer({
		logger,
		email: await createEmail()
			.catch(createErrorLogger(logger, 'Could not create email service')),
	});
	await new Promise(resolve => server.listen(httpPort, resolve));

	async function shutdown() {
		return new Promise(resolve => server.close(resolve));
	}

	process.on('SIGTERM', shutdown);
	process.on('SIGINT', shutdown);

	logger.info(`Express server for website API is listening on port ${httpPort}`);
}

init();
