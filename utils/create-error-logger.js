'use strict';

module.exports = function createErrorLogger(logger, message) {
	return err => {
		if (message) logger.error(message, err);
		else logger.error(err);
		return Promise.reject(err);
	};
};
