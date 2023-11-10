ARG NODE_VERSION=21.1.0

FROM node:${NODE_VERSION}-alpine
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . . /usr/src/app/

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]