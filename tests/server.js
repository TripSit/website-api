'use strict';

const request = require('supertest');
const createServer = require('../server');

module.exports = async function createTestServer() {
	return request(createServer());
};
