'use strict';

const request = require('supertest');
const createServer = require('../server');
const createEmail = require('../email');

jest.mock('nodemailer');

module.exports = async function createTestServer() {
	const logger = {
		info: jest.fn(),
		error: jest.fn(),
		warn: jest.fn(),
	};

	return request(createServer({
		logger,
		email: await createEmail(),
	}));
};
