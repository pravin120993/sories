FROM node:16.10-alpine

WORKDIR /src

COPY package.json .

RUN cd /src && npm install

COPY . .

CMD ["npm", "run", "start"]