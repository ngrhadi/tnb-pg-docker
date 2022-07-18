FROM node:18.5.0

RUN mkdir -p /usr/tnb-docker
WORKDIR /usr/tnb-docker
# ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.9.0/wait /wait
COPY src ./src
COPY package.json tsconfig.json ./
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.9.0/wait /wait
RUN chmod +x /wait
RUN yarn

EXPOSE 4000
CMD /wait && yarn build && yarn start
