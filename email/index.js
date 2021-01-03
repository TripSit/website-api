'use strict';

const path = require('path');
const fs = require('fs/promises'); // eslint-disable-line
const nodemailer = require('nodemailer');
const Handlebars = require('handlebars');
const mjml2html = require('mjml');

async function createTemplate(templateName) {
	const mjml = await fs.readFile(path.join(__dirname, `${templateName}.mjml`), 'utf-8');
	const template = Handlebars.compile(mjml);
	return (...args) => mjml2html(template(...args));
}

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

	async function send(subject, html) {
		return transport.sendMail({
			subject,
			html,
			from: process.env.EMAIL_FROM,
			to: process.env.EMAIL_TO,
		});
	}

	const templates = await Promise.all(['ban-appeal', 'media', 'suggestions', 'volunteer']
		.map(createTemplate))
		.then(([banAppeal, media, suggestions, volunteer]) => ({
			banAppeal,
			media,
			suggestions,
			volunteer,
		}));

	return {
		async banAppeal(nick, templateData) {
			return send(`Ban Appeal: ${nick}`, templates.banAppeal(templateData));
		},

		async media() {
			return send('Media Request', templates.media());
		},

		async suggestions() {
			return send('Suggestion', templates.suggestions());
		},

		async volunteer() {
			return send('Application', templates.volunteer());
		},
	};
};
