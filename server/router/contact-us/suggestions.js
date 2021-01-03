'use strict';

const Yup = require('yup');

module.exports = function suggestionsRoute(router, { email, validate }) {
	router.post(
		'/suggestions',

		validate(Yup.object().shape({
			email: Yup.string().email('Invalid email'),
			partOfSite: Yup.string(),
			url: Yup.string().url('Must be provided as a URL'),
			suggestion: Yup.string().min(10, 'Must be at least ten characters')
		}).required()),

		async (req, res) => {
			await email.suggestions(req.body);
			res.sendStatus(201);
		},
	);
};
