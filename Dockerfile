FROM  node:17

RUN npm install -g typescript

RUN npm install -g ts-node

WORKDIR /api/

COPY package.json .

RUN npm install

COPY . .

RUN tsc

EXPOSE 8080

CMD [ "node", "dist/index.js" ]