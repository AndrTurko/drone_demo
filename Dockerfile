
FROM node:latest

RUN mkdir /app

COPY ["package.json", "package-lock.json", "/app/"]
COPY ["app.js", "/app/src"]

WORKDIR /app

RUN npm install --silient

EXPOSE 3000
CMD npm start