'use strict';

const path = require('path');
const fs = require('fs/promises'); // eslint-disable-line
const nodemailer = require('nodemailer');
const Handlebars = require('handlebars');
const mjml2html = require('mjml');

const TEMPLATE_NAMES = ['ban-appeal', 'media', 'suggestions', 'volunteer'];

module.exports = async function createEmail() {
	const transport = nodemailer.createTransport({
		host: process.env.SMTP_HOST,
		port: process.env.SMTP_PORT,
		secure: true,
		pool: true,
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASSWORD,
		},
	});

	return Promise.all(TEMPLATE_NAMES
		.map(templateName => path.join(__dirname, `${templateName}.mjml`))
		.map(templatePath => fs.readFile(templatePath, 'utf-8')
			.then(Handlebars.compile)
			.then(template => viewData => transport.sendMail({
				from: process.env.EMAIL_FROM,
				to: process.env.EMAIL_TO,
				html: mjml2html(template(viewData)),
			}))))
		.then(([banAppeal, media, suggestions, volunteer]) => ({
			banAppeal,
			media,
			suggestions,
			volunteer,
		}));
};
