'use strict';

const request = require('supertest');
const createTestServer = require('./server');

test('returns correct status code and an empty body', async () => request(createTestServer())
	.get('/this/does/not/exist')
	.expect(404)
	.then(res => {
		expect(res.body).toBe('');
	}));
