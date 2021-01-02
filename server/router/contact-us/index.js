'use strict';

const Router = require('express-promise-router');
const banAppeal = require('./ban-appeal');

module.exports = function contactUs(deps) {
	const router = Router();

	banAppeal(router, deps);

	return router;
};
