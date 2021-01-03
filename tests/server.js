'use strict';

const createServer = require('../server');
const createEmail = require('../email');
const createLogger = require('../logger');

module.exports = function createTestServer(deps) {
	return createServer({
		email: createEmail(),
		logger: createLogger(),
		...deps,
	});
};
