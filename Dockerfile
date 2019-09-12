FROM node:10.16-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json ./
RUN npm install

COPY . .

ENV REACT_APP_URLAPIAUTOCOMPLETE='http://localhost:3002'

EXPOSE 8080
CMD ["npm", "start"]