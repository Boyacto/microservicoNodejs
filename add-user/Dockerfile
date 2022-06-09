FROM node:12.18.1

COPY . .
COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

CMD [ "npx","ts-node", "webapp/application.ts" ]
