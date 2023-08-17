FROM node:latest

RUN mkdir -p /app

WORKDIR /app

COPY ./package.json /app
RUN npm install

COPY . ./
#COPY ./public /app

RUN npm run build