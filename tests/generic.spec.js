'use strict';

const createTestServer = require('./server');

test('returns correct status code and an empty body', async () => createTestServer()
	.get('/this/does/not/exist')
	.expect(404));
