FROM node:10-alpine

LABEL maintainer="Alberto Kato"

WORKDIR /app

COPY package*.json ./

RUN npm install -y

RUN npm install -g sequelize

RUN npm install -g sequelize-cli 

RUN npm install -g mysql2

COPY . .

RUN chmod x+ /init_script.sh

EXPOSE 3000

ENTRYPOINT ["/bin/bash", "init_script.sh"]





