'use strict';

const Yup = require('yup');

module.exports = function banAppealRoute(router, { validate }) {
	router.post(
		'/ban-appeal',

		validate(Yup.object().shape({
			nick: Yup.string().required('Your IRC nick / username is required'),
			email: Yup.string().email('Not a valid email address, leave blank to omit'),
			understanding: Yup
				.string()
				.min(100, 'Must be at least 100 characters')
				.required('Required'),
			additionalInformation: Yup.string(),
			prevention: Yup.string(),
		}).required()),

		async (req, res) => {
			res.sendStatus(201);
		},
	);
};
