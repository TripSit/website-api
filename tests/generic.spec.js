'use strict';

const request = require('supertest');

test('returns correct status code and an empty body', async () => request(app)
	.get('/this/does/not/exist')
	.expect(404));
