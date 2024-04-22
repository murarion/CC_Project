FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

ENV MONGODB_URI=mongodb://host.docker.internal:27017/backend

CMD ["node", "index.js"]