'use strict';

const Router = require('express-promise-router');
const contactUs = require('./contact-us');

module.exports = function createRouter(deps) {
	const router = Router();

	router.use('/contact-us', contactUs(deps));

	return router;
};
