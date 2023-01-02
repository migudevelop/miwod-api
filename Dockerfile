FROM node:16-alpine3.16

RUN mkdir -p /app
COPY . /app
WORKDIR /app
RUN npm install

EXPOSE 3005

CMD ["npm", "run", "start:dev"]