'use strict';

const path = require('path');
require('dotenv').config({ path: path.resolve('.env.test') });
const dateMock = require('jest-date-mock');

afterEach(done => { // eslint-disable-line
	dateMock.clear();
	if (global.mockServer.close) global.mockServer.close(done);
});
