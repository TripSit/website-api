'use strict';

const Yup = require('yup');

module.exports = function banAppealRoute(router, { email, validate }) {
	router.post(
		'/ban-appeal',

		validate(Yup.object().shape({
			nick: Yup.string().required('IRC nick / username is required'),
			email: Yup.string().email('Must provide a valid email address'),
			understanding: Yup
				.string()
				.min(100, 'Must be at least 100 characters')
				.required('Required'),
			additionalInformation: Yup.string(),
			prevention: Yup.string(),
		}).required()),

		async (req, res) => {
			await email.banAppeal(req.body);
			res.sendStatus(201);
		},
	);
};
