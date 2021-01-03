'use strict';

require('dotenv').config();
const createLogger = require('./logger');
const createEmail = require('./email');
const createServer = require('./server');

const logger = createLogger();

async function init() {
	const server = createServer({
		logger,
		email: await createEmail(),
	});

	const httpPort = parseInt(process.env.HTTP_PORT, 10);
	server.listen(httpPort, () => {
		logger.info(`Express server for website API is listening on port ${httpPort}`);
	});
}

init();
