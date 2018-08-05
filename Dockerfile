# docker build -t e2e-app .
FROM node:10
MAINTAINER Damian Szymczuk

WORKDIR /usr/app

ADD package.json .
RUN npm install

ADD nightwatch.json .
ADD tests tests

ENTRYPOINT ["npm", "run"]
CMD ["test"]