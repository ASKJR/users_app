FROM node:10-alpine

WORKDIR /app

COPY  package*.json ./

RUN npm install -quiet -y

COPY  . .

EXPOSE 3000

ENTRYPOINT ["npm","start"]

