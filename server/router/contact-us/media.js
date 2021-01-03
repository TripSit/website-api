'use strict';

const Yup = require('yup');

module.exports = function mediaRoute(router, { email, validate }) {
	router.post(
		'/media',

		validate(Yup.object().shape({
			email: Yup
				.string()
				.email('Must provide a valid email address')
				.required('Requierd'),
			organization: Yup.string().required('Required'),
			question: Yup
				.string()
				.min(8, 'Response is too short')
				.required('Required'),
		}).required()),

		async (req, res) => {
			await email.media(req.body);
			res.sendStatus(201);
		},
	);
};
