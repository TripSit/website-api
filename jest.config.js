'use strict';

module.exports = {
	testEnvironment: 'node',
	testMatch: ['<rootDir>/tests/**/*.spec.js'],
	coveragePathIgnorePatterns: ['/node_modules/'],
	setupFiles: ['jest-date-mock'],
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
