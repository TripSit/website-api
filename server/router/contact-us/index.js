'use strict';

const Router = require('express-promise-router');
const banAppeal = require('./ban-appeal');
const media = require('./media');

module.exports = function contactUs(deps) {
	const router = Router();

	banAppeal(router, deps);
	media(router, deps);

	return router;
};
