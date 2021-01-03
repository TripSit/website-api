FROM node:15.4.0-alpine3.12 as tripsit_website_main

WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm ci --only=production

COPY . .

# HTTP
EXPOSE 3000/tcp
# SMTP
EXPOSE 465/tcp

# Run server
CMD [ "npm", "start" ]
