'use strict';

require('dotenv').config();
const createLogger = require('./logger');
const createServer = require('./server');

createServer({
	logger: createLogger(),
});
