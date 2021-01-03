'use strict';

const createTestServer = require('./server');

describe('post /contact-us/ban-appeal', () => {
	const validRequest = {
		nick: 'JahRastah',
		email: 'jahrastah420@example.com',
		understanding: 'jah rastah smoke all the spliff jah rastah smoke all the spliff jah rastah '
			+ 'smoke all the spliff jah rastah smoke all the spliff jah rastah smoke all the spliff',
	};

	describe('validation', () => {
		it('valid request', async () => createTestServer()
			.post('/contact-us/ban-appeal')
			.set('Accept', 'application/json')
			.send(validRequest)
			.expect('Content-Type', /json/)
			.expect(201));

		it('requires a nick', async () => createTestServer()
			.post('/contact-us/ban-appeal')
			.set('Accept', 'application/json')
			.send({ ...validRequest, nick: undefined })
			.expect('Content-Type', /json/)
			.expect(400, {
				errors: ['IRC nick / username is required'],
			}));
	});
});
