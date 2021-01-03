'use strict';

const path = require('path');
require('dotenv').config({ path: path.resolve('.env.test') });
const dateMock = require('jest-date-mock');
const createServer = require('./server');
const createEmail = require('./email');

jest.mock('nodemailer');

const logger = {
	info: jest.fn(),
	error: jest.fn(),
	warn: jest.fn(),
};

beforeAll(async done => { // eslint-disable-line
	global.app = createServer({
		logger,
		email: await createEmail(),
	});
	done();
});

afterEach(() => { // eslint-disable-line
	dateMock.clear();
	logger.info.mockReset();
	logger.error.mockReset();
	logger.warn.mockReset();
});

afterAll(done => { // eslint-disable-line
	global.app.close(done);
});
