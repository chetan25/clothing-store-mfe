FROM node:alpine

WORKDIR /usr/src/checkoutapp

COPY package.json /usr/src/checkoutapp/package.json
COPY package-lock.json /usr/src/checkoutapp/package-lock.json

RUN npm ci

COPY . .

EXPOSE 4003

CMD ["npm", "start"]