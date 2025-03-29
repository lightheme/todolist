FROM node:19.5.0-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY build ./build

RUN npm i -g serve

EXPOSE 3000

CMD ["serve", "build"]