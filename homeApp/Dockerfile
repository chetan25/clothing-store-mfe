FROM node:alpine

WORKDIR /homeapp

COPY package.json /homeapp
COPY package-lock.json /homeapp

RUN npm ci

COPY . /homeapp

EXPOSE 4000

CMD ["npm", "start"]