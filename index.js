'use strict';

require('dotenv').config();
const createLogger = require('./logger');
const createEmail = require('./email');
const createServer = require('./server');

createServer({
	logger: createLogger(),
	email: createEmail(),
});
