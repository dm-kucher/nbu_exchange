FROM node:alpine

RUN mkdir -p /app

WORKDIR /app

COPY ./package.json /app
COPY ./Dockerfile /app

RUN npm install
COPY ./src /app/src

RUN npm run build