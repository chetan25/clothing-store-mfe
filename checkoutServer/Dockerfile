FROM node:10

WORKDIR /usr/src/checkoutserver

COPY package.json /usr/src/checkoutserver/package.json
COPY package-lock.json /usr/src/checkoutserver/package-lock.json

RUN npm ci

COPY . .

EXPOSE 5050

CMD ["node", "server.js"]