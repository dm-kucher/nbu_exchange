FROM node:alpine
WORKDIR /client-app
COPY ./package.json /client-app/
RUN npm install
COPY ./src/ /client-app/
RUN npm run build